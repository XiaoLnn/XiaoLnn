import { store } from "./store.js";

export class MusicPlayer extends EventTarget {
  constructor(audio, api) {
    super();
    this.audio = audio;
    this.api = api;
    const cached = store.getQueue();
    this.queue = Array.isArray(cached.items) ? cached.items : [];
    this.index = Number.isInteger(cached.index) ? cached.index : -1;
    this.current = this.queue[this.index] || null;
    this.lyrics = [];
    this.bindAudio();
  }

  bindAudio() {
    this.audio.addEventListener("play", () => this.emit("state"));
    this.audio.addEventListener("pause", () => this.emit("state"));
    this.audio.addEventListener("timeupdate", () => {
      this.emit("time", { currentTime: this.audio.currentTime || 0, duration: this.audio.duration || 0, lyric: this.currentLyric(this.audio.currentTime || 0) });
    });
    this.audio.addEventListener("durationchange", () => this.emit("time", { currentTime: this.audio.currentTime || 0, duration: this.audio.duration || 0 }));
    this.audio.addEventListener("ended", () => this.next());
    this.audio.addEventListener("error", () => this.emit("error", { message: "音频加载失败，正在尝试下一首" }));
  }

  persist() { store.setQueue({ items: this.queue, index: this.index }); }
  emit(type, detail = {}) { this.dispatchEvent(new CustomEvent(type, { detail })); }

  async playNow(track, context = []) {
    const cleanContext = dedupeTracks(context.length ? context : [track]);
    const targetIndex = cleanContext.findIndex(item => item.uid === track.uid);
    this.queue = cleanContext;
    this.index = targetIndex >= 0 ? targetIndex : 0;
    this.persist();
    this.emit("queue");
    await this.loadCurrent(true);
  }

  async playAt(index) {
    if (index < 0 || index >= this.queue.length) return;
    this.index = index;
    this.persist();
    await this.loadCurrent(true);
  }

  addNext(track) {
    const existing = this.queue.findIndex(item => item.uid === track.uid);
    if (existing >= 0) this.queue.splice(existing, 1);
    const insertAt = this.index >= 0 ? this.index + 1 : this.queue.length;
    this.queue.splice(insertAt, 0, track);
    if (this.index < 0) this.index = 0;
    this.persist();
    this.emit("queue");
  }

  addToEnd(track) {
    if (!this.queue.some(item => item.uid === track.uid)) this.queue.push(track);
    if (this.index < 0 && this.queue.length) this.index = 0;
    this.persist(); this.emit("queue");
  }

  remove(index) {
    if (index < 0 || index >= this.queue.length) return;
    const removedCurrent = index === this.index;
    this.queue.splice(index, 1);
    if (!this.queue.length) {
      this.index = -1; this.current = null; this.audio.pause(); this.audio.removeAttribute("src");
    } else if (index < this.index) this.index -= 1;
    else if (removedCurrent) this.index = Math.min(this.index, this.queue.length - 1);
    this.persist(); this.emit("queue"); this.emit("track", { track: this.current });
  }

  clear() {
    this.queue = []; this.index = -1; this.current = null;
    this.audio.pause(); this.audio.removeAttribute("src"); this.persist();
    this.emit("queue"); this.emit("track", { track: null });
  }

  async next() {
    if (!this.queue.length) return;
    this.index = (this.index + 1) % this.queue.length;
    this.persist(); await this.loadCurrent(true);
  }

  async previous() {
    if (!this.queue.length) return;
    if (this.audio.currentTime > 4) { this.audio.currentTime = 0; return; }
    this.index = (this.index - 1 + this.queue.length) % this.queue.length;
    this.persist(); await this.loadCurrent(true);
  }

  async toggle() {
    if (!this.audio.src && this.queue.length) await this.loadCurrent(true);
    else if (this.audio.paused) await this.audio.play();
    else this.audio.pause();
  }

  async loadCurrent(autoplay) {
    const original = this.queue[this.index];
    if (!original) return;
    this.current = original;
    this.emit("track", { track: original, loading: true });
    try {
      let resolved = original;
      if (!original.resolved || !original.audioUrl) {
        const response = await this.api.resolveTrack(original);
        resolved = { ...original, ...(response.track || {}) };
        this.queue[this.index] = resolved;
      }
      this.current = resolved;
      this.lyrics = parseLrc(resolved.lrc || "");
      this.audio.src = resolved.audioUrl || resolved.originalUrl || "";
      this.persist(); this.emit("track", { track: resolved, loading: false }); this.emit("queue");
      if (!this.audio.src) throw new Error("没有可用播放地址");
      if (autoplay) await this.audio.play();
    } catch (error) {
      if (original.originalUrl && this.audio.src !== original.originalUrl) {
        this.audio.src = original.originalUrl;
        try { if (autoplay) await this.audio.play(); return; } catch {}
      }
      this.emit("error", { message: error.message || "播放失败" });
    }
  }

  seek(ratio) {
    const duration = this.audio.duration || 0;
    if (duration) this.audio.currentTime = Math.max(0, Math.min(duration, duration * ratio));
  }

  setVolume(value) {
    this.audio.volume = Math.max(0, Math.min(1, Number(value)));
    store.setVolume(this.audio.volume);
  }

  currentLyric(time) {
    let active = "";
    for (const line of this.lyrics) {
      if (line.time > time) break;
      active = line.text;
    }
    return active;
  }
}

function dedupeTracks(items) {
  const seen = new Set();
  return items.filter(item => item?.uid && !seen.has(item.uid) && seen.add(item.uid));
}

function parseLrc(text) {
  const lines = [];
  String(text).split(/\r?\n/).forEach(raw => {
    const matches = [...raw.matchAll(/\[(\d{1,2}):(\d{1,2}(?:\.\d+)?)\]/g)];
    const value = raw.replace(/\[[^\]]+\]/g, "").trim();
    matches.forEach(match => lines.push({ time: Number(match[1]) * 60 + Number(match[2]), text: value }));
  });
  return lines.sort((a, b) => a.time - b.time);
}
