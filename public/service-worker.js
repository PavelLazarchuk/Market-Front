const CACHE = 'market';
const URL = ['index.html', 'offline.html'];

this.addEventListener('install', e => {
	e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(URL)));
});

this.addEventListener('fetch', e => {
	e.respondWith(
		caches.match(e.request).then(() => {
			return fetch(e.request).catch(() => caches.match('offline.html'));
		}),
	);
});

this.addEventListener('activate', e => {
	const newCache = [CACHE];
	e.waitUntil(
		caches.keys().then(cacheNames =>
			Promise.all(
				// eslint-disable-next-line array-callback-return
				cacheNames.map(cacheName => {
					if (!newCache.includes(cacheName)) {
						return caches.delete(cacheName);
					}
				}),
			),
		),
	);
});
