const CACHE_NAME = 'mrg-transport-v1';
const urlsToCache = [
    '/MNG-Transport-QR/',
    '/MNG-Transport-QR/index.html',
    '/MNG-Transport-QR/manifest.json',
    '/MNG-Transport-QR/icons/icon-192x192.png',
    '/MNG-Transport-QR/icons/icon-512x512.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});
