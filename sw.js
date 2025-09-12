self.addEventListener('install', event => {
  console.log('Service Worker установлен');
  // Здесь можно закешировать файлы (по желанию)
});

self.addEventListener('fetch', event => {
  event.respondWith(fetch(event.request));
});
