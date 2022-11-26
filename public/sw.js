const cache_name = "pwa";

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
            .open(cache_name)
            .then((cache) => cache.addAll(["/"]))
            .then(() => self.skipWaiting())
    );
});
self.addEventListener("activate", async () => {
    const keys = await caches.keys();
    for (let k of keys) {
        if (k !== cache_name) {
            await caches.delete(k);
        }
    }
    await self.clients.claim();
});

self.addEventListener("fetch", async (e) => {
    async function getResponse() {
        if (e.request.method.toUpperCase() != "GET") return await fetch(e.request);
        let url = new URL(e.request.url);
        if (url.host != location.host && url.host != "unpkg.com") return await fetch(e.request);
        try {
            if (navigator.onLine) {
                let cache = await caches.open(cache_name);
                // 默认本地加载
                let r = await caches.match(e.request);
                if (r) {
                    return r;
                } else {
                    let response = await fetch(e.request);
                    if (response.ok) await cache.put(e.request, response.clone());
                    return response;
                }
            } else {
                return await caches.match(e.request);
            }
        } catch (error) {
            let res = await caches.match(e.request);
            if (!res) return caches.match("/");
            return res;
        }
    }
    e.respondWith(getResponse());
});
