const CACHE_NAME = 'app-keuangan-v1';
const assets = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Menyimpan file ke memori HP saat pertama kali dibuka
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Mengambil file dari memori saat tidak ada internet
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
