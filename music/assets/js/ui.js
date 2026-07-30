const fallbackCover = "./assets/icons/icon.svg";

export function setImage(img, url) {
  img.loading = "lazy";
  img.referrerPolicy = "no-referrer";
  img.src = url || fallbackCover;
  img.onerror = () => { img.onerror = null; img.src = fallbackCover; };
}

export function renderTrackList(container, tracks, handlers = {}) {
  container.innerHTML = "";
  if (!tracks?.length) {
    container.innerHTML = `<div class="track-empty">${escapeHtml(handlers.emptyText || "这里还没有歌曲")}</div>`;
    return;
  }
  const fragment = document.createDocumentFragment();
  tracks.forEach((track, index) => {
    const row = document.createElement("article");
    row.className = "track-row";
    row.dataset.uid = track.uid;

    const cover = document.createElement("img");
    cover.className = "track-cover"; cover.alt = ""; setImage(cover, track.cover);
    const main = document.createElement("div");
    main.className = "track-main";
    main.innerHTML = `<strong>${escapeHtml(track.title || "未知歌曲")}</strong><small>${escapeHtml(track.artist || "未知歌手")} · ${escapeHtml(sourceName(track.source))}</small>`;
    const album = document.createElement("div");
    album.className = "track-album"; album.textContent = track.album || "—";
    const actions = document.createElement("div");
    actions.className = "track-actions-row";

    if (handlers.play) actions.append(actionButton("▶", "立即播放", "primary", () => handlers.play(track, index)));
    if (handlers.next) actions.append(actionButton("下一首", "下一首播放", "next", () => handlers.next(track, index)));
    if (handlers.add) actions.append(actionButton("＋", "加入歌单", "", () => handlers.add(track, index)));
    if (handlers.remove) actions.append(actionButton("×", "移除", "", () => handlers.remove(track, index)));

    row.append(cover, main, album, actions);
    fragment.appendChild(row);
  });
  container.appendChild(fragment);
}

export function renderQueue(container, queue, currentIndex, handlers = {}) {
  container.innerHTML = "";
  if (!queue.length) { container.innerHTML = '<div class="track-empty">队列为空</div>'; return; }
  queue.forEach((track, index) => {
    const item = document.createElement("div");
    item.className = `queue-item${index === currentIndex ? " is-current" : ""}`;
    const cover = document.createElement("img"); setImage(cover, track.cover);
    const copy = document.createElement("div");
    copy.innerHTML = `<strong>${escapeHtml(track.title || "未知歌曲")}</strong><small>${escapeHtml(track.artist || "未知歌手")}</small>`;
    const remove = document.createElement("button"); remove.textContent = "×"; remove.title = "移除";
    remove.addEventListener("click", event => { event.stopPropagation(); handlers.remove?.(index); });
    item.addEventListener("click", () => handlers.play?.(index));
    item.append(cover, copy, remove); container.appendChild(item);
  });
}

export function formatTime(seconds) {
  if (!Number.isFinite(seconds)) return "0:00";
  const minutes = Math.floor(seconds / 60);
  return `${minutes}:${String(Math.floor(seconds % 60)).padStart(2, "0")}`;
}

export function sourceName(source) {
  return ({ netease: "网易云", qq: "QQ 音乐", kuwo: "酷我", joox: "JOOX", imported: "导入" })[source] || "音乐";
}

export function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function actionButton(text, title, extraClass, handler) {
  const button = document.createElement("button");
  button.className = `track-action ${extraClass}`.trim();
  button.type = "button"; button.textContent = text; button.title = title;
  button.addEventListener("click", handler);
  return button;
}
