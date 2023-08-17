const socket = io.connect();
var username;
var users = socket.sockets.clients();
var player;
var players = [];
socket.on("userconnected", () => {
  users = socket.sockets.clients();
});
socket.on("getCount", (usernumber) => {
  alert(usernumber);
});
if (
  location.href ===
  "https://invisible-war-multiplayer.the-paperpaper.repl.co/game.html"
) {
  for (var i = 0; i < users.length; i++) {
    player = document.getElementById("soldier").cloneNode();
    player.id = users[i];
    document.getElementById("username").value = users[i];
    player.src = "soldier.png";
    player.style.height = "300px";
    player.style.width = "50px";
    player.style.transformOrigin = "-2500px 0px -7500px";
    player.style.position = "absolute";
    document.getElementById("world").appendChild(player);
    players.push(player);
  }
  socket.on("keypress", () => {
    document.getElementById("soldier").style.transform =
      "translateZ(" +
      a +
      "px) perspective(" +
      a * -1.3 +
      "px) translateX(" +
      b +
      "px) ";
    document.getElementById("username").style.transform =
      "translateY(" +
      y +
      "px)  translateZ(" +
      a +
      "px) perspective(" +
      a * -1.3 +
      "px) translateX(" +
      b +
      "px) rotateX(2deg)";
  });
}
