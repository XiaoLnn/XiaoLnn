const QQ_PLAYLIST_ENDPOINT = 'https://cyapi.top/API/song_list.php';
const QQ_OFFICIAL_PLAYLIST_ENDPOINT = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg';
const ALLOWED_SITE_ORIGINS = new Set([
  'https://xiaolnne.shop',
  'https://www.xiaolnne.shop',
]);

function json(data, status = 200, extraHeaders = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': status === 200 ? 'public, max-age=300' : 'no-store',
      'x-content-type-options': 'nosniff',
      ...extraHeaders,
    },
  });
}

function corsHeaders(request) {
  const origin = request.headers.get('origin') || '';
  const isAllowed = ALLOWED_SITE_ORIGINS.has(origin)
    || /^https:\/\/[a-z0-9-]+\.xiaolnn\.pages\.dev$/i.test(origin)
    || /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/i.test(origin);
  return {
    vary: 'Origin',
    ...(isAllowed ? {
      'access-control-allow-origin': origin,
      'access-control-allow-methods': 'GET, OPTIONS',
      'access-control-allow-headers': 'Accept, Content-Type',
      'access-control-max-age': '86400',
    } : {}),
  };
}

function validQQPlaylistUrl(value) {
  if (!value || value.length > 2048) return null;
  try {
    // Some copied Markdown-formatted share links contain stray ** before &id.
    const url = new URL(value.replace(/\*{2,}/g, ''));
    const hostname = url.hostname.toLowerCase();
    if (url.protocol !== 'https:' || !(hostname === 'qq.com' || hostname.endsWith('.qq.com'))) return null;
    return url.toString();
  } catch {
    return null;
  }
}

function qqPlaylistId(value) {
  const url = new URL(value);
  return url.searchParams.get('id')
    || url.searchParams.get('disstid')
    || url.pathname.match(/\/playlist\/(\d+)/i)?.[1]
    || '';
}

async function fetchQQOfficialPlaylist(playlistUrl) {
  const id = qqPlaylistId(playlistUrl);
  if (!/^\d+$/.test(id)) return null;

  const url = new URL(QQ_OFFICIAL_PLAYLIST_ENDPOINT);
  url.searchParams.set('type', '1');
  url.searchParams.set('json', '1');
  url.searchParams.set('utf8', '1');
  url.searchParams.set('onlysong', '0');
  url.searchParams.set('disstid', id);
  url.searchParams.set('format', 'json');

  const response = await fetch(url, {
    headers: {
      accept: 'application/json',
      referer: 'https://y.qq.com/',
      'user-agent': 'Mozilla/5.0',
    },
  });
  if (!response.ok) return null;

  const payload = await response.json();
  const playlist = payload?.cdlist?.[0];
  if (!playlist || !Array.isArray(playlist.songlist)) return null;

  const songs = playlist.songlist.map((song) => ({
    mid: song.songmid || song.strMediaMid || '',
    name: song.songname || song.songorig || '',
    singer: Array.isArray(song.singer) ? song.singer.map((item) => item?.name).filter(Boolean).join(' / ') : '',
    album: song.albumname || '',
    cover: song.albummid ? `https://y.gtimg.cn/music/photo_new/T002R300x300M000${song.albummid}.jpg` : '',
  })).filter((song) => song.mid);

  return songs.length ? {
    name: playlist.dissname || `QQ 歌单 ${id}`,
    id,
    song_list: songs,
    source: 'qq-official-fallback',
  } : null;
}

export async function onRequest(context) {
  const cors = corsHeaders(context.request);
  const respond = (data, status = 200, headers = {}) => json(data, status, { ...cors, ...headers });
  if (context.request.method === 'OPTIONS') {
    return cors['access-control-allow-origin']
      ? new Response(null, { status: 204, headers: cors })
      : respond({ error: 'origin_not_allowed' }, 403);
  }
  if (context.request.method !== 'GET') return respond({ error: 'method_not_allowed' }, 405, { allow: 'GET, OPTIONS' });
  const requestUrl = new URL(context.request.url);
  const playlistUrl = validQQPlaylistUrl(requestUrl.searchParams.get('url'));
  if (!playlistUrl) return respond({ error: 'invalid_qq_playlist_url' }, 400);

  const apiKey = context.env.QQ_MUSIC_API_KEY;
  if (!apiKey) return respond({ error: 'qq_music_api_key_not_configured' }, 503);

  const upstreamUrl = new URL(QQ_PLAYLIST_ENDPOINT);
  upstreamUrl.searchParams.set('apikey', apiKey);
  upstreamUrl.searchParams.set('url', playlistUrl);

  try {
    const upstream = await fetch(upstreamUrl, {
      headers: { accept: 'application/json' },
      cf: { cacheEverything: true, cacheTtl: 300 },
    });
    if (!upstream.ok) {
      const fallback = await fetchQQOfficialPlaylist(playlistUrl);
      return fallback
        ? respond(fallback)
        : respond({ error: 'qq_playlist_upstream_error', status: upstream.status }, 502);
    }
    try {
      return respond(await upstream.json());
    } catch {
      const fallback = await fetchQQOfficialPlaylist(playlistUrl);
      return fallback ? respond(fallback) : respond({ error: 'qq_playlist_invalid_response' }, 502);
    }
  } catch (error) {
    console.error('QQ playlist proxy failed', error);
    try {
      const fallback = await fetchQQOfficialPlaylist(playlistUrl);
      return fallback ? respond(fallback) : respond({ error: 'qq_playlist_proxy_failed' }, 502);
    } catch (fallbackError) {
      console.error('QQ official playlist fallback failed', fallbackError);
      return respond({ error: 'qq_playlist_proxy_failed' }, 502);
    }
  }
}
