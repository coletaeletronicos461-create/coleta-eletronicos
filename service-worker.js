self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("coleta-cache").then(cache => {
      return cache.addAll([
        "./",
        "./index.html"
      ]);
    })
  );
});
