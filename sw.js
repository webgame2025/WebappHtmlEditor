const CACHE_NAME = 'code-editor-cache-v1';
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
