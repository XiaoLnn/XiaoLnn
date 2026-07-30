import { store } from "./store.js";

const config = window.NIE_MUSIC_CONFIG || {};
const baseUrl = String(config.WORKER_BASE_URL || "").replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message, status = 0, data = null) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export class ApiClient {
  constructor() {
    this.baseUrl = baseUrl;
    this.session = store.getSession();
  }

  get enabled() { return Boolean(this.baseUrl); }

  async request(path, options = {}) {
    if (!this.enabled) throw new ApiError("尚未配置 Cloudflare Worker 地址");
    const headers = new Headers(options.headers || {});
    if (options.body && !headers.has("Content-Type")) headers.set("Content-Type", "application/json");
    if (this.session?.userId && this.session?.token) {
      headers.set("X-User-Id", this.session.userId);
      headers.set("Authorization", `Bearer ${this.session.token}`);
    }
    const response = await fetch(`${this.baseUrl}${path}`, { ...options, headers });
    const contentType = response.headers.get("content-type") || "";
    const data = contentType.includes("application/json") ? await response.json() : await response.text();
    if (!response.ok) throw new ApiError(data?.error || data?.message || `请求失败 (${response.status})`, response.status, data);
    return data;
  }

  async ensureSession() {
    if (!this.enabled) return { local: true };
    if (this.session?.userId && this.session?.token) {
      try {
        await this.request("/api/session", { method: "GET" });
        return this.session;
      } catch (error) {
        if (error.status !== 401) throw error;
      }
    }
    const data = await this.request("/api/session", { method: "POST" });
    this.session = { userId: data.userId, token: data.token };
    store.setSession(this.session);
    return this.session;
  }

  async getHotCharts() {
    return this.request("/api/hot", { cache: "no-store" });
  }

  async getHotChart(id) {
    return this.request(`/api/hot?id=${encodeURIComponent(id)}`, { cache: "no-store" });
  }

  async search(query, sources, limit = config.DEFAULT_SEARCH_LIMIT || 12) {
    const tasks = sources.map(source => this.request(`/api/search?source=${encodeURIComponent(source)}&q=${encodeURIComponent(query)}&limit=${limit}`));
    const settled = await Promise.allSettled(tasks);
    const tracks = [];
    const errors = [];
    settled.forEach((result, index) => {
      if (result.status === "fulfilled") tracks.push(...(result.value.tracks || []));
      else errors.push(`${sources[index]}: ${result.reason.message}`);
    });
    return { tracks: interleaveBySource(tracks), errors };
  }

  async resolveTrack(track) {
    return this.request("/api/resolve", { method: "POST", body: JSON.stringify({ track }) });
  }

  async getPlaylists() {
    if (!this.enabled) return { playlists: store.getPlaylists(), local: true };
    return this.request("/api/playlists");
  }

  async createPlaylist(name, tracks = [], source = "manual", sourceUrl = "") {
    if (!this.enabled) {
      const playlists = store.getPlaylists();
      const playlist = { id: crypto.randomUUID(), name, tracks, source, sourceUrl, updatedAt: new Date().toISOString() };
      playlists.unshift(playlist); store.setPlaylists(playlists); return { playlist, local: true };
    }
    return this.request("/api/playlists", { method: "POST", body: JSON.stringify({ name, tracks, source, sourceUrl }) });
  }

  async updatePlaylist(id, patch) {
    if (!this.enabled) {
      const playlists = store.getPlaylists();
      const index = playlists.findIndex(item => item.id === id);
      if (index < 0) throw new ApiError("歌单不存在", 404);
      playlists[index] = { ...playlists[index], ...patch, updatedAt: new Date().toISOString() };
      store.setPlaylists(playlists); return { playlist: playlists[index], local: true };
    }
    return this.request(`/api/playlists/${encodeURIComponent(id)}`, { method: "PUT", body: JSON.stringify(patch) });
  }

  async deletePlaylist(id) {
    if (!this.enabled) {
      store.setPlaylists(store.getPlaylists().filter(item => item.id !== id));
      return { ok: true, local: true };
    }
    return this.request(`/api/playlists/${encodeURIComponent(id)}`, { method: "DELETE" });
  }

  async importPlaylist(url, name = "") {
    if (!this.enabled) throw new ApiError("导入分享链接需要先部署并配置 Cloudflare Worker");
    return this.request("/api/import", { method: "POST", body: JSON.stringify({ url, name }) });
  }
}

function interleaveBySource(tracks) {
  const groups = new Map();
  tracks.forEach(track => {
    const key = track.source || "other";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(track);
  });
  const result = [];
  let hasItems = true;
  while (hasItems) {
    hasItems = false;
    for (const list of groups.values()) {
      if (list.length) { result.push(list.shift()); hasItems = true; }
    }
  }
  return result;
}
