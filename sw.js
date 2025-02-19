const CACHE_NAME = 'ar-presentation-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/assets/markers/targets.mind',
  '/assets/3d/archivos gltf/',
  '/img/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
}); 