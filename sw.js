const cacheName = 'cache-v1';
const resourcesToPreCache =  [
  '/',
  'index.html',
  'css/main.css',
  'img/download-1.jpg',
  'img/download.jpg',
  'img/SUN_M.jpeg',
];
self.addEventListener('install', event => {
  console.log('Service worker install event');
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(resourcesToPreCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(cachedResponse => cachedResponse || fetch(event.request)));
});