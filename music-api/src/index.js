const ENDPOINTS = {
  netease: "https://cyapi.top/API/netease.php",
  hot: "https://cyapi.top/API/music_hot.php",
  qqPlaylist: "https://cyapi.top/API/song_list.php",
  meting: "https://api.qijieya.cn/meting/",
  qqSearch: "https://tang.api.s01s.cn/music_open_api.php",
  kuwo: "https://kw-api.cenguigui.cn/",
  joox: "https://apicx.asia/api/joox_music"
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const cors = corsHeaders(request, env);
    if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

    try {
      let response;
      if (url.pathname === "/api/health") response = json({ ok: true, service: "nie-music-api" });
      else if (url.pathname === "/api/session") response = await handleSession(request, env);
      else if (url.pathname === "/api/hot" && request.method === "GET") response = await handleHot(request, env, ctx);
      else if (url.pathname === "/api/search" && request.method === "GET") response = await handleSearch(request, env);
      else if (url.pathname === "/api/resolve" && request.method === "POST") response = await handleResolve(request, env);
      else if (url.pathname === "/api/import" && request.method === "POST") response = await handleImport(request, env);
      else if (url.pathname === "/api/playlists" && request.method === "GET") response = await handleGetPlaylists(request, env);
      else if (url.pathname === "/api/playlists" && request.method === "POST") response = await handleCreatePlaylist(request, env);
      else if (/^\/api\/playlists\/[^/]+$/.test(url.pathname) && request.method === "PUT") response = await handleUpdatePlaylist(request, env, decodeURIComponent(url.pathname.split("/").pop()));
      else if (/^\/api\/playlists\/[^/]+$/.test(url.pathname) && request.method === "DELETE") response = await handleDeletePlaylist(request, env, decodeURIComponent(url.pathname.split("/").pop()));
      else response = json({ error: "Not found" }, 404);
      return withCors(response, cors);
    } catch (error) {
      console.error(error);
      const status = error instanceof HttpError ? error.status : 500;
      return withCors(json({ error: error.message || "Internal server error" }, status), cors);
    }
  }
};

class HttpError extends Error {
  constructor(status, message) { super(message); this.status = status; }
}

async function handleSession(request, env) {
  if (request.method === "POST") {
    const userId = crypto.randomUUID();
    const token = randomToken();
    const tokenHash = await sha256(token);
    await env.DB.prepare("INSERT INTO users (user_id, token_hash) VALUES (?, ?)").bind(userId, tokenHash).run();
    return json({ userId, token });
  }
  if (request.method === "GET") {
    const user = await authenticate(request, env);
    return json({ userId: user.userId, ok: true });
  }
  throw new HttpError(405, "Method not allowed");
}

async function handleHot(request, env, ctx) {
  requireCyKey(env);
  const requestUrl = new URL(request.url);
  const id = requestUrl.searchParams.get("id") || "";
  const cacheKey = new Request(`${requestUrl.origin}/__cache/hot?id=${encodeURIComponent(id)}`);
  const cache = caches.default;
  const cached = await cache.match(cacheKey);
  if (cached) {
    const body = await cached.json();
    return json({ ...body, cached: true });
  }

  const upstream = new URL(ENDPOINTS.hot);
  upstream.searchParams.set("apikey", env.CY_API_KEY);
  if (id) upstream.searchParams.set("id", id);
  const payload = await fetchPayload(upstream);
  const items = extractBestArray(payload);
  let result;
  if (id || items.some(looksLikeTrack)) {
    result = { id: id || "default", title: findText(payload, ["title", "name", "榜单名称"]) || "QQ 音乐热榜", tracks: await normalizeTracks(items, "qq") };
  } else {
    result = { charts: items.map((item, index) => normalizeChart(item, index)).filter(item => item.id || item.title) };
  }
  const response = json(result, 200, { "Cache-Control": "public, max-age=300" });
  ctx.waitUntil(cache.put(cacheKey, response.clone()));
  return response;
}

async function handleSearch(request, env) {
  const url = new URL(request.url);
  const source = url.searchParams.get("source") || "netease";
  const q = (url.searchParams.get("q") || "").trim();
  const limit = Math.min(30, Math.max(1, Number(url.searchParams.get("limit")) || 12));
  if (!q) throw new HttpError(400, "缺少搜索关键词");
  const payload = await searchSource(source, q, limit, env);
  const tracks = await normalizeSearchPayload(payload, source, q, limit);
  return json({ source, query: q, tracks });
}

async function searchSource(source, query, limit, env) {
  let url;
  if (source === "netease") {
    requireCyKey(env);
    url = new URL(ENDPOINTS.netease);
    url.searchParams.set("apikey", env.CY_API_KEY);
    url.searchParams.set("msg", query);
    url.searchParams.set("num", String(limit));
    url.searchParams.set("type", "json");
  } else if (source === "qq") {
    url = new URL(ENDPOINTS.qqSearch);
    url.searchParams.set("msg", query);
    url.searchParams.set("type", "json");
  } else if (source === "kuwo") {
    url = new URL(ENDPOINTS.kuwo);
    url.searchParams.set("name", query);
    url.searchParams.set("page", "1");
    url.searchParams.set("limit", String(limit));
  } else if (source === "joox") {
    if (!env.JOOX_TOKEN) throw new HttpError(503, "JOOX_TOKEN 尚未配置");
    url = new URL(ENDPOINTS.joox);
    url.searchParams.set("msg", query);
    url.searchParams.set("token", env.JOOX_TOKEN);
    url.searchParams.set("br", "4");
  } else throw new HttpError(400, "不支持的音乐源");
  return fetchPayload(url);
}

async function handleResolve(request, env) {
  const body = await request.json();
  const input = body?.track;
  if (!input?.title) throw new HttpError(400, "缺少歌曲信息");
  let track = { ...input };
  const source = input.source || "imported";
  try {
    if (source === "netease" || source === "imported") track = { ...track, ...(await resolveNetease(input, env)) };
    else if (source === "qq") track = { ...track, ...(await resolveQQ(input)) };
    else if (source === "kuwo") track = { ...track, ...(await resolveKuwo(input)) };
    else if (source === "joox") track = { ...track, ...(await resolveJoox(input, env)) };
  } catch (error) {
    console.warn("primary resolver failed", source, error.message);
  }
  if (!track.audioUrl && input.originalUrl) track.audioUrl = input.originalUrl;
  if (!track.audioUrl && input.audioUrl) track.audioUrl = input.audioUrl;
  track.resolved = Boolean(track.audioUrl);
  return json({ track });
}

async function resolveNetease(track, env) {
  requireCyKey(env);
  const query = [track.title, track.artist].filter(Boolean).join(" ");
  const url = new URL(ENDPOINTS.netease);
  url.searchParams.set("apikey", env.CY_API_KEY);
  url.searchParams.set("msg", track.keyword || query);
  url.searchParams.set("num", String(Math.max(10, Number(track.displayIndex || track.neteaseIndex || 1))));
  url.searchParams.set("n", String(track.neteaseIndex || track.displayIndex || 1));
  url.searchParams.set("type", "json");
  const payload = await fetchPayload(url);
  const normalized = await normalizeOne(payload, "netease", query, track.displayIndex || 1);
  return preferResolved(track, normalized);
}

async function resolveQQ(track) {
  const url = new URL(ENDPOINTS.qqSearch);
  url.searchParams.set("msg", track.qqSearchKey || track.keyword || [track.title, track.artist].filter(Boolean).join(" "));
  url.searchParams.set("type", "json");
  const mid = track.songMid || track.qqId || track.songid || track.id;
  if (mid) url.searchParams.set("mid", mid);
  const payload = await fetchPayload(url);
  return preferResolved(track, await normalizeOne(payload, "qq", track.title, 1));
}

async function resolveKuwo(track) {
  const id = track.songid || track.id;
  if (!id) throw new Error("缺少酷我歌曲 ID");
  const url = new URL(ENDPOINTS.kuwo);
  url.searchParams.set("id", id);
  url.searchParams.set("type", "song");
  url.searchParams.set("level", "zp");
  url.searchParams.set("format", "json");
  return preferResolved(track, await normalizeOne(await fetchPayload(url), "kuwo", track.title, 1));
}

async function resolveJoox(track, env) {
  if (!env.JOOX_TOKEN) throw new Error("JOOX_TOKEN 尚未配置");
  const url = new URL(ENDPOINTS.joox);
  url.searchParams.set("msg", track.keyword || track.title);
  url.searchParams.set("n", String(track.jooxIndex || track.displayIndex || 1));
  url.searchParams.set("token", env.JOOX_TOKEN);
  url.searchParams.set("br", "4");
  return preferResolved(track, await normalizeOne(await fetchPayload(url), "joox", track.title, 1));
}

async function handleGetPlaylists(request, env) {
  const { userId } = await authenticate(request, env);
  return json({ playlists: await readPlaylists(env, userId) });
}

async function handleCreatePlaylist(request, env) {
  const { userId } = await authenticate(request, env);
  const body = await request.json();
  const name = cleanName(body.name || "新建歌单");
  const playlist = await saveNewPlaylist(env, userId, { name, tracks: sanitizeTracks(body.tracks), source: body.source || "manual", sourceUrl: body.sourceUrl || "" });
  return json({ playlist }, 201);
}

async function handleUpdatePlaylist(request, env, id) {
  const { userId } = await authenticate(request, env);
  const current = await getPlaylist(env, userId, id);
  if (!current) throw new HttpError(404, "歌单不存在");
  const body = await request.json();
  const name = body.name !== undefined ? cleanName(body.name) : current.name;
  await env.DB.prepare("UPDATE playlists SET name = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?").bind(name, id, userId).run();
  if (Array.isArray(body.tracks)) await replaceTracks(env, userId, id, sanitizeTracks(body.tracks));
  return json({ playlist: await getPlaylist(env, userId, id) });
}

async function handleDeletePlaylist(request, env, id) {
  const { userId } = await authenticate(request, env);
  const result = await env.DB.prepare("DELETE FROM playlists WHERE id = ? AND user_id = ?").bind(id, userId).run();
  if (!result.meta.changes) throw new HttpError(404, "歌单不存在");
  return json({ ok: true });
}

async function handleImport(request, env) {
  const { userId } = await authenticate(request, env);
  const body = await request.json();
  const sharedUrl = String(body.url || "").trim();
  if (!/^https?:\/\//i.test(sharedUrl)) throw new HttpError(400, "请输入有效的歌单分享链接");
  const platform = detectPlatform(sharedUrl);
  let payload;
  if (platform === "qq") {
    requireCyKey(env);
    const url = new URL(ENDPOINTS.qqPlaylist);
    url.searchParams.set("apikey", env.CY_API_KEY);
    url.searchParams.set("url", sharedUrl);
    payload = await fetchPayload(url, 25000);
  } else if (platform === "netease") {
    const id = extractNeteasePlaylistId(sharedUrl);
    if (!id) throw new HttpError(400, "未能从网易云链接中提取歌单 ID");
    const url = new URL(env.METING_ENDPOINT || ENDPOINTS.meting);
    url.searchParams.set("server", "netease");
    url.searchParams.set("type", "playlist");
    url.searchParams.set("id", id);
    payload = await fetchPayload(url, 25000);
  } else throw new HttpError(400, "目前只支持网易云和 QQ 音乐歌单链接");

  const tracks = await normalizeImportedTracks(payload, platform);
  if (!tracks.length) throw new HttpError(502, "接口没有返回可导入的歌曲");
  const upstreamName = findText(payload, ["playlist_name", "playlistName", "name", "title", "歌单名称"]);
  const name = cleanName(body.name || upstreamName || `${platform === "qq" ? "QQ 音乐" : "网易云"}导入歌单`);
  const playlist = await saveNewPlaylist(env, userId, { name, tracks, source: platform, sourceUrl: sharedUrl });
  return json({ playlist }, 201);
}

async function authenticate(request, env) {
  const userId = request.headers.get("X-User-Id") || "";
  const auth = request.headers.get("Authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  if (!userId || !token) throw new HttpError(401, "缺少用户凭证");
  const row = await env.DB.prepare("SELECT token_hash FROM users WHERE user_id = ?").bind(userId).first();
  if (!row || row.token_hash !== await sha256(token)) throw new HttpError(401, "用户凭证无效");
  return { userId };
}

async function readPlaylists(env, userId) {
  const list = await env.DB.prepare("SELECT id, name, source, source_url, created_at, updated_at FROM playlists WHERE user_id = ? ORDER BY updated_at DESC").bind(userId).all();
  const playlists = [];
  for (const row of list.results || []) playlists.push(await hydratePlaylist(env, userId, row));
  return playlists;
}

async function getPlaylist(env, userId, id) {
  const row = await env.DB.prepare("SELECT id, name, source, source_url, created_at, updated_at FROM playlists WHERE id = ? AND user_id = ?").bind(id, userId).first();
  return row ? hydratePlaylist(env, userId, row) : null;
}

async function hydratePlaylist(env, userId, row) {
  const tracks = await env.DB.prepare("SELECT track_uid, source, title, artist, album, cover, audio_url, original_url, lrc, metadata_json FROM playlist_tracks WHERE playlist_id = ? AND user_id = ? ORDER BY position").bind(row.id, userId).all();
  return {
    id: row.id, name: row.name, source: row.source, sourceUrl: row.source_url,
    createdAt: row.created_at, updatedAt: row.updated_at,
    tracks: (tracks.results || []).map(track => ({
      ...safeJson(track.metadata_json), uid: track.track_uid, source: track.source, title: track.title,
      artist: track.artist, album: track.album, cover: track.cover, audioUrl: track.audio_url,
      originalUrl: track.original_url, lrc: track.lrc
    }))
  };
}

async function saveNewPlaylist(env, userId, input) {
  const id = crypto.randomUUID();
  await env.DB.prepare("INSERT INTO playlists (id, user_id, name, source, source_url) VALUES (?, ?, ?, ?, ?)")
    .bind(id, userId, input.name, input.source || "manual", input.sourceUrl || "").run();
  await replaceTracks(env, userId, id, input.tracks || []);
  return getPlaylist(env, userId, id);
}

async function replaceTracks(env, userId, playlistId, tracks) {
  const statements = [env.DB.prepare("DELETE FROM playlist_tracks WHERE playlist_id = ? AND user_id = ?").bind(playlistId, userId)];
  tracks.slice(0, 1000).forEach((track, position) => {
    statements.push(env.DB.prepare(`INSERT OR IGNORE INTO playlist_tracks
      (playlist_id,user_id,position,track_uid,source,title,artist,album,cover,audio_url,original_url,lrc,metadata_json)
      VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)`).bind(
        playlistId, userId, position, track.uid, track.source || "imported", track.title || "未知歌曲",
        track.artist || "", track.album || "", track.cover || "", track.audioUrl || "",
        track.originalUrl || "", track.lrc || "", JSON.stringify(stripTrackCore(track))
      ));
  });
  for (let index = 0; index < statements.length; index += 75) {
    await env.DB.batch(statements.slice(index, index + 75));
  }
  await env.DB.prepare("UPDATE playlists SET updated_at = CURRENT_TIMESTAMP WHERE id = ? AND user_id = ?").bind(playlistId, userId).run();
}

async function normalizeSearchPayload(payload, source, query, limit) {
  let items = extractBestArray(payload);
  if (!items.length && typeof payload === "string") items = parseTextList(payload);
  const tracks = [];
  for (let index = 0; index < Math.min(items.length, limit); index++) {
    const track = await normalizeTrack(items[index], source, query, index + 1);
    if (track.title) tracks.push(track);
  }
  return tracks;
}

async function normalizeImportedTracks(payload, platform) {
  const items = extractBestArray(payload);
  const tracks = [];
  for (let index = 0; index < items.length; index++) {
    const track = await normalizeTrack(items[index], platform, "", index + 1);
    if (track.title) {
      track.originalUrl = track.audioUrl || track.originalUrl || "";
      track.resolved = false;
      tracks.push(track);
    }
  }
  return dedupe(tracks);
}

async function normalizeTracks(items, source) {
  const tracks = [];
  for (let index = 0; index < items.length; index++) {
    const track = await normalizeTrack(items[index], source, "", index + 1);
    if (track.title) tracks.push(track);
  }
  return dedupe(tracks);
}

async function normalizeOne(payload, source, query, index) {
  const items = extractBestArray(payload);
  const target = items[0] ?? payload;
  return normalizeTrack(target, source, query, index);
}

async function normalizeTrack(item, source, query, index) {
  if (typeof item === "string") {
    const parsed = parseTextList(item)[0] || { title: item };
    item = parsed;
  }
  const object = flattenObject(item || {});
  const title = firstValue(object, ["title", "name", "song", "song_name", "songname", "song_title", "歌曲名称", "歌曲", "歌名"]);
  const artist = normalizeArtist(firstValue(object, ["artist", "artists", "author", "singer", "singers", "song_singer", "歌手", "歌手名称"]));
  const album = textValue(firstValue(object, ["album", "album_name", "albumname", "album_title", "专辑", "专辑名称"]));
  const id = textValue(firstValue(object, ["id", "songid", "songId", "song_mid", "songmid", "mid", "rid", "歌曲ID"]));
  const albumMid = textValue(firstValue(object, ["album_mid", "albummid", "albumMid"]));
  const cover = mediaValue(firstValue(object, ["cover", "pic", "picurl", "picUrl", "pic_url", "image", "img", "album_pic", "singer_pic", "封面", "歌曲封面"])) || (source === "qq" && albumMid ? `https://y.qq.com/music/photo_new/T002R800x800M000${albumMid}.jpg` : "");
  const audioUrl = mediaValue(firstValue(object, ["audioUrl", "url", "music_url", "play_url", "playurl", "src", "link", "播放链接", "音乐链接", "播放地址", "歌曲链接"]), true);
  const lrc = textValue(firstValue(object, ["lrc", "lyric", "lyrics", "歌词", "歌词内容"]));
  const stable = id || `${title}-${artist}-${index}`;
  return {
    uid: `${source}-${await shortHash(stable)}`, source, id, songid: id, songMid: textValue(firstValue(object, ["song_mid", "songmid", "mid"])) || id,
    albumMid, keyword: query, displayIndex: index, neteaseIndex: index, qqSearchKey: query, jooxIndex: index,
    title: textValue(title) || `歌曲 ${index}`, artist, album, cover, audioUrl, originalUrl: audioUrl, lrc,
    qualityLabel: textValue(firstValue(object, ["quality", "level", "br", "音质"])), resolved: Boolean(audioUrl)
  };
}

function normalizeChart(item, index) {
  const object = flattenObject(item || {});
  return {
    id: textValue(firstValue(object, ["id", "topid", "top_id", "榜单ID", "榜单id", "type"])) || String(index + 1),
    title: textValue(firstValue(object, ["title", "name", "topTitle", "榜单名称", "榜单"])) || `QQ 音乐热榜 ${index + 1}`,
    description: textValue(firstValue(object, ["description", "desc", "update", "更新时间", "简介"])) || "查看当前热门歌曲"
  };
}

function extractBestArray(payload) {
  if (Array.isArray(payload)) return payload;
  if (!payload || typeof payload !== "object") return [];
  const keys = ["data", "result", "list", "songs", "songlist", "song_list", "playlist", "tracks", "toplist", "topList", "排行榜"];
  for (const key of keys) {
    const value = payload[key];
    if (Array.isArray(value)) return value;
    if (value && typeof value === "object") {
      const nested = extractBestArray(value);
      if (nested.length) return nested;
    }
  }
  for (const value of Object.values(payload)) {
    if (Array.isArray(value) && value.length) return value;
  }
  return [];
}

function flattenObject(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value || {};
  const result = { ...value };
  for (const key of ["data", "result", "song", "music", "info"]) {
    if (value[key] && typeof value[key] === "object" && !Array.isArray(value[key])) Object.assign(result, value[key]);
  }
  const playLinks = value["播放链接"];
  if (playLinks && typeof playLinks === "object") Object.assign(result, playLinks);
  return result;
}

function parseTextList(text) {
  return String(text).split(/\r?\n/).map(line => line.trim()).filter(Boolean).map((line, index) => {
    const clean = line.replace(/^\s*(?:\[?\d+\]?|\d+[.、)])\s*/, "");
    const parts = clean.split(/\s*(?:-|—|–|\|)\s*/).filter(Boolean);
    return { title: parts[0] || clean, artist: parts.slice(1).join(" / "), index: index + 1 };
  });
}

function looksLikeTrack(item) {
  const object = flattenObject(item || {});
  return Boolean(firstValue(object, ["song", "song_name", "songname", "song_title", "artist", "singer", "歌手", "歌曲名称"]));
}

function preferResolved(original, resolved) {
  return {
    ...resolved,
    uid: original.uid || resolved.uid,
    source: original.source || resolved.source,
    title: resolved.title || original.title,
    artist: resolved.artist || original.artist,
    album: resolved.album || original.album,
    cover: resolved.cover || original.cover,
    audioUrl: resolved.audioUrl || original.audioUrl || original.originalUrl,
    originalUrl: original.originalUrl || resolved.originalUrl,
    lrc: resolved.lrc || original.lrc,
    resolved: Boolean(resolved.audioUrl || original.audioUrl || original.originalUrl)
  };
}

function sanitizeTracks(tracks) {
  return dedupe((Array.isArray(tracks) ? tracks : []).map((track, index) => ({
    ...track,
    uid: String(track.uid || `${track.source || "imported"}-${index}-${track.title || "track"}`).slice(0, 240),
    title: String(track.title || "未知歌曲").slice(0, 300), artist: String(track.artist || "").slice(0, 300),
    album: String(track.album || "").slice(0, 300), cover: safeUrl(track.cover), audioUrl: safeUrl(track.audioUrl),
    originalUrl: safeUrl(track.originalUrl || track.audioUrl), lrc: String(track.lrc || "").slice(0, 100000)
  })));
}

function stripTrackCore(track) {
  const clone = { ...track };
  ["uid", "source", "title", "artist", "album", "cover", "audioUrl", "originalUrl", "lrc"].forEach(key => delete clone[key]);
  return clone;
}

function dedupe(tracks) {
  const seen = new Set();
  return tracks.filter(track => track.uid && !seen.has(track.uid) && seen.add(track.uid));
}

function detectPlatform(url) {
  const host = new URL(url).hostname.toLowerCase();
  if (host.includes("163.com") || host.includes("music.163")) return "netease";
  if (host.includes("qq.com") || host.includes("y.qq")) return "qq";
  return "";
}

function extractNeteasePlaylistId(url) {
  const decoded = decodeURIComponent(url);
  return decoded.match(/[?&#]id=(\d+)/)?.[1] || decoded.match(/playlist\/(\d+)/)?.[1] || "";
}

async function fetchPayload(url, timeoutMs = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { headers: { "User-Agent": "Nie-Music-Worker/2.0", Accept: "application/json,text/plain,*/*" }, signal: controller.signal, redirect: "follow" });
    if (!response.ok) throw new HttpError(502, `上游接口返回 ${response.status}`);
    const text = await response.text();
    try { return JSON.parse(text); } catch { return text; }
  } catch (error) {
    if (error.name === "AbortError") throw new HttpError(504, "上游接口响应超时");
    throw error;
  } finally { clearTimeout(timer); }
}

function requireCyKey(env) { if (!env.CY_API_KEY) throw new HttpError(503, "CY_API_KEY 尚未配置"); }
function cleanName(value) { const name = String(value || "").trim().slice(0, 80); if (!name) throw new HttpError(400, "歌单名称不能为空"); return name; }
function safeUrl(value) { const url = String(value || "").trim(); return /^https?:\/\//i.test(url) ? url.slice(0, 3000) : ""; }
function mediaValue(value, audio = false) {
  if (value && typeof value === "object") {
    const values = Object.values(value).filter(item => typeof item === "string");
    value = audio ? values.find(item => /\.(mp3|flac|m4a|aac|ogg)(\?|$)/i.test(item)) || values[0] : values[0];
  }
  return safeUrl(value);
}
function textValue(value) {
  if (Array.isArray(value)) return value.map(textValue).filter(Boolean).join(" / ");
  if (value && typeof value === "object") return textValue(value.name || value.title || value.singer || "");
  return String(value ?? "").trim();
}
function normalizeArtist(value) {
  if (Array.isArray(value)) return value.map(item => textValue(item)).filter(Boolean).join(" / ");
  if (value && typeof value === "object") return normalizeArtist(value.name || value.singer || Object.values(value));
  return textValue(value).replace(/\s*[、,]\s*/g, " / ");
}
function firstValue(object, keys) {
  for (const key of keys) if (object?.[key] !== undefined && object[key] !== null && object[key] !== "") return object[key];
  return "";
}
function findText(payload, keys) {
  if (!payload || typeof payload !== "object") return "";
  const direct = firstValue(payload, keys); if (direct) return textValue(direct);
  for (const value of Object.values(payload)) if (value && typeof value === "object" && !Array.isArray(value)) { const found = findText(value, keys); if (found) return found; }
  return "";
}
function safeJson(value) { try { return JSON.parse(value || "{}"); } catch { return {}; } }
function randomToken() { const bytes = crypto.getRandomValues(new Uint8Array(32)); return btoa(String.fromCharCode(...bytes)).replace(/[+/=]/g, char => ({ "+": "-", "/": "_", "=": "" })[char]); }
async function sha256(value) { const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)); return [...new Uint8Array(hash)].map(byte => byte.toString(16).padStart(2, "0")).join(""); }
async function shortHash(value) { return (await sha256(String(value))).slice(0, 20); }

function corsHeaders(request, env) {
  const origin = request.headers.get("Origin") || "";
  const allowed = String(env.ALLOWED_ORIGINS || "*").split(",").map(item => item.trim()).filter(Boolean);
  const allowOrigin = allowed.includes("*") ? "*" : (allowed.includes(origin) ? origin : allowed[0] || "null");
  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization,X-User-Id",
    "Access-Control-Max-Age": "86400",
    "Vary": "Origin"
  };
}
function withCors(response, headers) { const output = new Response(response.body, response); Object.entries(headers).forEach(([key, value]) => output.headers.set(key, value)); return output; }
function json(data, status = 200, headers = {}) { return new Response(JSON.stringify(data), { status, headers: { "Content-Type": "application/json; charset=utf-8", ...headers } }); }
