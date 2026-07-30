import { ApiClient } from "./api.js";
import { MusicPlayer } from "./player.js";
import { store } from "./store.js";
import { renderTrackList, renderQueue, setImage, formatTime, escapeHtml } from "./ui.js";

const api = new ApiClient();
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const dom = {
  audio: $("#audio"), toast: $("#toast"), syncStatus: $("#sync-status"), profileId: $("#profile-id"),
  routeTitle: $("#route-title"), routeEyebrow: $("#route-eyebrow"), chartList: $("#chart-list"), hotMeta: $("#hot-meta"),
  chartDetail: $("#chart-detail-section"), chartDetailTitle: $("#chart-detail-title"), chartTracks: $("#chart-tracks"),
  searchInput: $("#search-input"), searchButton: $("#search-button"), searchMeta: $("#search-meta"), searchResults: $("#search-results"),
  playlistGrid: $("#playlist-grid"), playlistDetail: $("#playlist-detail"), playlistDetailTitle: $("#playlist-detail-title"), playlistTracks: $("#playlist-tracks"),
  queuePanel: $("#queue-panel"), queueList: $("#queue-list"),
  playerCover: $("#player-cover"), playerTitle: $("#player-title"), playerArtist: $("#player-artist"),
  playButton: $("#play-button"), progress: $("#progress"), currentTime: $("#current-time"), duration: $("#duration"), volume: $("#volume"),
  favoriteCurrent: $("#favorite-current"), importModal: $("#import-modal"), importForm: $("#import-form"), importUrl: $("#import-url"), importName: $("#import-name"), importSubmit: $("#import-submit"),
  playlistModal: $("#playlist-modal"), playlistForm: $("#playlist-form"), playlistName: $("#playlist-name"), playlistModalTitle: $("#playlist-modal-title"),
  sheet: $("#now-playing-sheet"), sheetCover: $("#sheet-cover"), sheetTitle: $("#sheet-title"), sheetArtist: $("#sheet-artist"), lyrics: $("#lyrics-view")
};

const player = new MusicPlayer(dom.audio, api);
let playlists = [];
let searchTracks = [];
let currentChartTracks = [];
let activePlaylistId = null;
let playlistModalMode = "create";
let toastTimer = null;
let favorites = store.getFavorites();

boot().catch(error => {
  console.error(error);
  toast(error.message || "初始化失败");
});

async function boot() {
  bindNavigation();
  bindControls();
  bindModals();
  player.setVolume(store.getVolume());
  dom.volume.value = String(store.getVolume());
  bindPlayerEvents();
  renderQueue(dom.queueList, player.queue, player.index, queueHandlers());
  updatePlayerUi(player.current);

  if (api.enabled) {
    try {
      const session = await api.ensureSession();
      dom.syncStatus.textContent = "云端同步已连接";
      dom.profileId.textContent = `访客 ${session.userId.slice(0, 6)}`;
    } catch (error) {
      dom.syncStatus.textContent = "云端连接失败";
      toast(error.message);
    }
  } else {
    dom.syncStatus.textContent = "本地模式 · 待配置 Worker";
    dom.profileId.textContent = "本地访客";
  }

  await Promise.allSettled([loadPlaylists(), loadHotCharts()]);
  if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

function bindNavigation() {
  $$('[data-route]').forEach(button => button.addEventListener("click", () => navigate(button.dataset.route)));
  $$('[data-route-jump]').forEach(button => button.addEventListener("click", () => navigate(button.dataset.routeJump)));
}

function navigate(route) {
  const titles = {
    home: ["DISCOVER", "今天听点什么"],
    search: ["SEARCH", "搜索全平台音乐"],
    library: ["YOUR LIBRARY", "你的云端歌单"]
  };
  $$(".view").forEach(view => view.classList.toggle("is-active", view.dataset.view === route));
  $$('[data-route]').forEach(button => button.classList.toggle("is-active", button.dataset.route === route));
  dom.routeEyebrow.textContent = titles[route]?.[0] || "NIE MUSIC";
  dom.routeTitle.textContent = titles[route]?.[1] || "Nie Music";
  if (route === "search") setTimeout(() => dom.searchInput.focus({ preventScroll: true }), 80);
  location.hash = route;
}

function bindControls() {
  dom.searchButton.addEventListener("click", runSearch);
  dom.searchInput.addEventListener("keydown", event => { if (event.key === "Enter") runSearch(); });
  $("#refresh-hot").addEventListener("click", loadHotCharts);
  $("#close-chart-detail").addEventListener("click", () => dom.chartDetail.classList.add("hidden"));
  $("#previous-button").addEventListener("click", () => player.previous());
  $("#next-button").addEventListener("click", () => player.next());
  dom.playButton.addEventListener("click", () => player.toggle().catch(error => toast(error.message)));
  dom.progress.addEventListener("input", () => player.seek(Number(dom.progress.value) / 1000));
  dom.volume.addEventListener("input", () => player.setVolume(dom.volume.value));
  $("#clear-queue").addEventListener("click", () => player.clear());
  [$("#tablet-queue-toggle"), $("#dock-queue-toggle"), $("#mobile-queue")].forEach(button => button?.addEventListener("click", openQueue));
  $("#queue-close").addEventListener("click", closeQueue);
  $("#open-now-playing").addEventListener("click", () => dom.sheet.classList.remove("hidden"));
  $("#sheet-close").addEventListener("click", () => dom.sheet.classList.add("hidden"));
  dom.favoriteCurrent.addEventListener("click", toggleFavoriteCurrent);
  $("#profile-chip").addEventListener("click", copySyncId);
  $("#new-playlist").addEventListener("click", () => openPlaylistModal("create"));
  $("#rename-playlist").addEventListener("click", () => openPlaylistModal("rename"));
  $("#delete-playlist").addEventListener("click", deleteActivePlaylist);
}

function bindModals() {
  [$("#open-import"), $("#open-import-2")].forEach(button => button.addEventListener("click", () => openModal(dom.importModal)));
  $$('[data-close-modal]').forEach(button => button.addEventListener("click", () => closeModal(dom.importModal)));
  $$('[data-close-playlist-modal]').forEach(button => button.addEventListener("click", () => closeModal(dom.playlistModal)));
  [dom.importModal, dom.playlistModal].forEach(modal => modal.addEventListener("click", event => { if (event.target === modal) closeModal(modal); }));
  dom.importForm.addEventListener("submit", importPlaylist);
  dom.playlistForm.addEventListener("submit", savePlaylistModal);
}

function bindPlayerEvents() {
  player.addEventListener("state", () => {
    const isPlaying = !dom.audio.paused;
    dom.playButton.classList.toggle("is-playing", isPlaying);
    dom.playButton.setAttribute("aria-label", isPlaying ? "暂停" : "播放");
    dom.playButton.title = isPlaying ? "暂停" : "播放";
  });
  player.addEventListener("track", event => updatePlayerUi(event.detail.track));
  player.addEventListener("queue", () => renderQueue(dom.queueList, player.queue, player.index, queueHandlers()));
  player.addEventListener("time", event => {
    const { currentTime = 0, duration = 0, lyric = "" } = event.detail;
    dom.currentTime.textContent = formatTime(currentTime);
    dom.duration.textContent = formatTime(duration);
    dom.progress.value = duration ? String(Math.round(currentTime / duration * 1000)) : "0";
    if (lyric) dom.lyrics.textContent = lyric;
  });
  player.addEventListener("error", event => toast(event.detail.message));
}

async function loadHotCharts() {
  dom.hotMeta.textContent = "正在刷新…";
  dom.chartList.innerHTML = '<div class="track-empty">正在加载 QQ 音乐热榜…</div>';
  if (!api.enabled) {
    renderSetupChart();
    dom.hotMeta.textContent = "配置 Worker 后显示实时榜单";
    return;
  }
  try {
    const data = await api.getHotCharts();
    const charts = data.charts || [];
    const tracks = data.tracks || [];
    if (charts.length) renderCharts(charts);
    else if (tracks.length) {
      renderCharts([{ id: data.id || "default", title: data.title || "QQ 音乐热榜", description: `${tracks.length} 首热门歌曲`, tracks }]);
    } else renderSetupChart("接口暂未返回榜单");
    dom.hotMeta.textContent = data.cached ? "来自边缘缓存" : `更新于 ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
  } catch (error) {
    renderSetupChart(error.message);
    dom.hotMeta.textContent = "热榜加载失败";
  }
}

function renderCharts(charts) {
  dom.chartList.innerHTML = "";
  charts.slice(0, 12).forEach((chart, index) => {
    const card = document.createElement("article");
    card.className = "chart-card";
    card.innerHTML = `<button class="text-button">查看歌曲</button><div class="chart-rank">${String(index + 1).padStart(2, "0")}</div><h3>${escapeHtml(chart.title || chart.name || `热榜 ${index + 1}`)}</h3><p>${escapeHtml(chart.description || chart.update || "QQ 音乐热门趋势")}</p>`;
    card.addEventListener("click", () => openChart(chart));
    dom.chartList.appendChild(card);
  });
}

function renderSetupChart(message = "请先编辑 assets/js/config.js，填写 Worker 地址") {
  dom.chartList.innerHTML = "";
  const card = document.createElement("article"); card.className = "chart-card";
  card.innerHTML = `<div class="chart-rank">N</div><h3>等待连接音乐服务</h3><p>${escapeHtml(message)}</p>`;
  dom.chartList.appendChild(card);
}

async function openChart(chart) {
  dom.chartDetail.classList.remove("hidden");
  dom.chartDetailTitle.textContent = chart.title || chart.name || "QQ 音乐热榜";
  dom.chartTracks.innerHTML = '<div class="track-empty">正在加载榜单歌曲…</div>';
  try {
    const tracks = chart.tracks?.length ? chart.tracks : (await api.getHotChart(chart.id)).tracks || [];
    currentChartTracks = tracks;
    renderTrackList(dom.chartTracks, tracks, trackHandlers(() => currentChartTracks));
    dom.chartDetail.scrollIntoView({ behavior: "smooth", block: "start" });
  } catch (error) {
    renderTrackList(dom.chartTracks, [], { emptyText: error.message });
  }
}

async function runSearch() {
  const query = dom.searchInput.value.trim();
  if (!query) { toast("请输入歌曲或歌手"); return; }
  if (!api.enabled) { toast("请先配置 Cloudflare Worker 地址"); return; }
  const sources = $$("#source-filter input:checked").map(input => input.value);
  if (!sources.length) { toast("至少选择一个音乐源"); return; }
  dom.searchButton.disabled = true;
  dom.searchButton.textContent = "搜索中";
  dom.searchMeta.textContent = "正在聚合多个音乐源…";
  dom.searchResults.innerHTML = '<div class="track-empty">搜索中，不会自动播放</div>';
  try {
    const result = await api.search(query, sources);
    searchTracks = result.tracks;
    renderTrackList(dom.searchResults, searchTracks, trackHandlers(() => searchTracks));
    dom.searchMeta.textContent = `找到 ${searchTracks.length} 首${result.errors.length ? ` · ${result.errors.length} 个源失败` : ""}`;
  } catch (error) {
    renderTrackList(dom.searchResults, [], { emptyText: error.message });
    dom.searchMeta.textContent = "搜索失败";
  } finally {
    dom.searchButton.disabled = false;
    dom.searchButton.textContent = "搜索";
  }
}

function trackHandlers(contextProvider) {
  return {
    play: (track) => player.playNow(track, contextProvider()).catch(error => toast(error.message)),
    next: (track) => { player.addNext(track); toast(`已将《${track.title}》加入下一首`); },
    add: addTrackToPlaylist
  };
}

async function loadPlaylists() {
  try {
    const data = await api.getPlaylists();
    playlists = data.playlists || [];
    store.setPlaylists(playlists);
    renderPlaylists();
  } catch (error) {
    playlists = store.getPlaylists();
    renderPlaylists();
    toast(`云端歌单读取失败，已使用本地缓存：${error.message}`);
  }
}

function renderPlaylists() {
  dom.playlistGrid.innerHTML = "";
  if (!playlists.length) {
    dom.playlistGrid.innerHTML = '<div class="track-empty">还没有歌单。可以新建，也可以粘贴网易云或 QQ 音乐分享链接导入。</div>';
    dom.playlistDetail.classList.add("hidden");
    return;
  }
  playlists.forEach(playlist => {
    const card = document.createElement("article"); card.className = "playlist-card";
    const images = (playlist.tracks || []).map(item => item.cover).filter(Boolean).slice(0, 4);
    const covers = images.length ? images.map(url => `<img loading="lazy" referrerpolicy="no-referrer" src="${escapeHtml(url)}" alt="">`).join("") : '<span class="placeholder">♫</span>';
    card.innerHTML = `<div class="playlist-cover-grid">${covers}</div><h3>${escapeHtml(playlist.name)}</h3><p>${playlist.tracks?.length || 0} 首 · ${escapeHtml(playlist.source || "manual")}</p>`;
    card.addEventListener("click", () => openPlaylist(playlist.id));
    dom.playlistGrid.appendChild(card);
  });
  if (activePlaylistId && playlists.some(item => item.id === activePlaylistId)) openPlaylist(activePlaylistId, false);
}

function openPlaylist(id, scroll = true) {
  const playlist = playlists.find(item => item.id === id);
  if (!playlist) return;
  activePlaylistId = id;
  dom.playlistDetail.classList.remove("hidden");
  dom.playlistDetailTitle.textContent = playlist.name;
  renderTrackList(dom.playlistTracks, playlist.tracks || [], {
    ...trackHandlers(() => playlist.tracks || []),
    remove: track => removeTrackFromPlaylist(playlist, track)
  });
  if (scroll) dom.playlistDetail.scrollIntoView({ behavior: "smooth", block: "start" });
}

async function addTrackToPlaylist(track) {
  if (!playlists.length) {
    const name = prompt("还没有歌单，请输入新歌单名称：", "我的歌单");
    if (!name?.trim()) return;
    const data = await api.createPlaylist(name.trim(), [track]);
    playlists.unshift(data.playlist); store.setPlaylists(playlists); renderPlaylists();
    toast("已创建歌单并加入歌曲"); return;
  }
  const choices = playlists.map((item, index) => `${index + 1}. ${item.name}`).join("\n");
  const answer = prompt(`输入要加入的歌单序号：\n${choices}`, "1");
  const index = Number(answer) - 1;
  const playlist = playlists[index];
  if (!playlist) return;
  if ((playlist.tracks || []).some(item => item.uid === track.uid)) { toast("该歌曲已在歌单中"); return; }
  const tracks = [...(playlist.tracks || []), track];
  const data = await api.updatePlaylist(playlist.id, { tracks });
  Object.assign(playlist, data.playlist); store.setPlaylists(playlists); renderPlaylists();
  toast(`已加入「${playlist.name}」`);
}

async function removeTrackFromPlaylist(playlist, track) {
  const tracks = (playlist.tracks || []).filter(item => item.uid !== track.uid);
  const data = await api.updatePlaylist(playlist.id, { tracks });
  Object.assign(playlist, data.playlist); store.setPlaylists(playlists); renderPlaylists(); openPlaylist(playlist.id, false);
  toast("已从歌单移除");
}

function openPlaylistModal(mode) {
  playlistModalMode = mode;
  const playlist = playlists.find(item => item.id === activePlaylistId);
  dom.playlistModalTitle.textContent = mode === "rename" ? "重命名歌单" : "新建歌单";
  dom.playlistName.value = mode === "rename" ? playlist?.name || "" : "";
  openModal(dom.playlistModal);
  setTimeout(() => dom.playlistName.focus(), 30);
}

async function savePlaylistModal(event) {
  event.preventDefault();
  const name = dom.playlistName.value.trim();
  if (!name) return;
  try {
    if (playlistModalMode === "rename") {
      const playlist = playlists.find(item => item.id === activePlaylistId);
      if (!playlist) return;
      const data = await api.updatePlaylist(playlist.id, { name });
      Object.assign(playlist, data.playlist);
    } else {
      const data = await api.createPlaylist(name);
      playlists.unshift(data.playlist);
      activePlaylistId = data.playlist.id;
    }
    store.setPlaylists(playlists); renderPlaylists(); closeModal(dom.playlistModal); toast("歌单已保存");
  } catch (error) { toast(error.message); }
}

async function deleteActivePlaylist() {
  const playlist = playlists.find(item => item.id === activePlaylistId);
  if (!playlist || !confirm(`确定删除「${playlist.name}」吗？`)) return;
  try {
    await api.deletePlaylist(playlist.id);
    playlists = playlists.filter(item => item.id !== playlist.id);
    activePlaylistId = null; store.setPlaylists(playlists); renderPlaylists(); toast("歌单已删除");
  } catch (error) { toast(error.message); }
}

async function importPlaylist(event) {
  event.preventDefault();
  const url = dom.importUrl.value.trim();
  if (!url) return;
  dom.importSubmit.disabled = true; dom.importSubmit.textContent = "正在解析";
  try {
    const data = await api.importPlaylist(url, dom.importName.value.trim());
    playlists.unshift(data.playlist); store.setPlaylists(playlists); renderPlaylists();
    closeModal(dom.importModal); dom.importForm.reset(); navigate("library"); openPlaylist(data.playlist.id);
    toast(`已导入 ${data.playlist.tracks?.length || 0} 首歌曲`);
  } catch (error) { toast(error.message); }
  finally { dom.importSubmit.disabled = false; dom.importSubmit.textContent = "开始导入"; }
}

function updatePlayerUi(track) {
  const active = track || { title: "选择一首歌曲", artist: "从热榜或搜索开始", cover: "./assets/icons/icon.svg" };
  dom.playerTitle.textContent = active.title;
  dom.playerArtist.textContent = active.artist;
  dom.sheetTitle.textContent = active.title;
  dom.sheetArtist.textContent = active.artist;
  setImage(dom.playerCover, active.cover);
  setImage(dom.sheetCover, active.cover);
  dom.lyrics.textContent = active.lrc || "歌词将在播放后显示";
  updateFavoriteButton();
}

function toggleFavoriteCurrent() {
  const track = player.current;
  if (!track) return;
  const index = favorites.findIndex(item => item.uid === track.uid);
  if (index >= 0) favorites.splice(index, 1); else favorites.push(track);
  store.setFavorites(favorites); updateFavoriteButton();
  toast(index >= 0 ? "已取消收藏" : "已收藏");
}

function updateFavoriteButton() {
  dom.favoriteCurrent.textContent = player.current && favorites.some(item => item.uid === player.current.uid) ? "♥" : "♡";
}

function queueHandlers() {
  return { play: index => player.playAt(index), remove: index => player.remove(index) };
}

function openQueue() { dom.queuePanel.classList.add("is-open"); }
function closeQueue() { dom.queuePanel.classList.remove("is-open"); }
function openModal(modal) { modal.classList.remove("hidden"); }
function closeModal(modal) { modal.classList.add("hidden"); }

async function copySyncId() {
  const session = api.session;
  if (!session?.userId) { toast("当前为本地模式"); return; }
  try { await navigator.clipboard.writeText(session.userId); toast("已复制匿名用户 ID"); }
  catch { toast(`匿名用户 ID：${session.userId}`); }
}

function toast(message) {
  clearTimeout(toastTimer);
  dom.toast.textContent = message;
  dom.toast.classList.add("is-visible");
  toastTimer = setTimeout(() => dom.toast.classList.remove("is-visible"), 2800);
}

if (location.hash && ["#home", "#search", "#library"].includes(location.hash)) navigate(location.hash.slice(1));
