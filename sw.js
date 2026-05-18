const CACHE = 'nethistory-v2';
const ASSETS = [
  '/netflix-history/',
  '/netflix-history/index.html',
  '/netflix-history/manifest.json',
  '/netflix-history/icons/icon-192.png',
  '/netflix-history/icons/icon-512.png',
  'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // TMDB API → network only (pas de cache)
  if (url.hostname.includes('themoviedb.org') || url.hostname.includes('image.tmdb.org')) {
    return;
  }

  // Fonts Google → cache first
  if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return res;
      }))
    );
    return;
  }

  // App shell → cache first, fallback network
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
