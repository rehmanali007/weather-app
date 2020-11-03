const CACHE_NANE = 'version-1'
const urlsToCache = ['index.html', 'offline.html']


this.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NANE).then((cache) => {
            console.log('Cache opened!')
            return cache.addAll(urlsToCache)
        }).catch(error => {
            console.log(error)
        })
    )
})


this.addEventListener('fetch', (event) => {
    event.respondWith(caches.match(event.request)
        .then(() => {
            return fetch(event.request)
                .catch(() =>
                    caches.match('offline.html')
                )
        }))
})


self.addEventListener('activate', (event) => {
    const whilteList = []
    whilteList.push(CACHE_NANE)

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map(cacheName => {
                if (!whilteList.includes(cacheName)) {
                    return caches.delete(cacheName)
                }
            })
        ))
    )
})
