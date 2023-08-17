this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open("v1")
      .then((cache) =>
        cache.addAll([
          "Grass4.png",
          "app.js",
          "Grass5.png",
          "resume.html",
          "boing.mp3",
          "Grass6.png",
          "resume.js",
          "Boom.mp3",
          "ground.jpeg",
          "script.js",
          "bush.png",
          "Gun.png",
          "service-worker.js",
          "Cactus.png",
          "index.html",
          "shot.mp3",
          "cross.jpeg",
          "index.js",
          "silhouette.png",
          "cross.png",
          "localstorage.txt",
          "sky.jpg",
          "Dirt.jpg",
          "main.sh",
          "socket.io.js",
          "Dirt.png",
          "manifest.json",
          "soldier.png",
          "explosion.png",
          "stars.png",
          "forest.jpeg",
          "over.html",
          "style.css",
          "getfiles.sh",
          "package.json",
          "tree.jpeg",
          "Grass1.png",
          "package-lock.json",
          "tree.jpg",
          "Grass2.png",
          "panther.png",
          "tree.png",
          "Grass3.png",
          "replit.nix",
          "Tree.png",
        ])
      )
  );
});
self.addEventListener("activate", (event) => {
  console.log("Service worker activate event!");
});

self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request)
        .then((response) => {
          console.log("Response from network is:", response);

          return response;
        })
        .catch((error) => {
          console.error("Fetching failed:", error);

          throw error;
        });
    })
  );
});
