self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('zaposleni-cache').then(cache => {
      return cache.addAll([
        'index.html',
        'calendar.html',
        'manager.html',
        'manifest.json',
        'icon-192.png',
        'icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
