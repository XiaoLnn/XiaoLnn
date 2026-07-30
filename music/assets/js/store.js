const KEYS = {
  session: "nie-music-session-v2",
  queue: "nie-music-queue-v2",
  favorites: "nie-music-favorites-v2",
  playlists: "nie-music-playlists-cache-v2",
  volume: "nie-music-volume-v2"
};

function read(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function write(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch {}
}

export const store = {
  getSession: () => read(KEYS.session, null),
  setSession: value => write(KEYS.session, value),
  getQueue: () => read(KEYS.queue, { items: [], index: -1 }),
  setQueue: value => write(KEYS.queue, value),
  getFavorites: () => read(KEYS.favorites, []),
  setFavorites: value => write(KEYS.favorites, value),
  getPlaylists: () => read(KEYS.playlists, []),
  setPlaylists: value => write(KEYS.playlists, value),
  getVolume: () => Number(localStorage.getItem(KEYS.volume) ?? 0.8),
  setVolume: value => { try { localStorage.setItem(KEYS.volume, String(value)); } catch {} }
};
