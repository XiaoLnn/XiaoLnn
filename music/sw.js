const CACHE = "nie-music-shell-v3-transport";
const SHELL = [
  "./", "./index.html", "./manifest.webmanifest", "./assets/css/app.css",
  "./assets/js/config.js", "./assets/js/app.js", "./assets/js/api.js",
  "./assets/js/player.js", "./assets/js/store.js", "./assets/js/ui.js", "./assets/icons/icon.svg"
];
self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET" || new URL(request.url).origin !== location.origin) return;
  event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
    const copy = response.clone(); caches.open(CACHE).then(cache => cache.put(request, copy)); return response;
  }).catch(() => caches.match("./index.html"))));
});
