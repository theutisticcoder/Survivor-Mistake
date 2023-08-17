var you;
var matrix2;
var matrix4;
var matrix;
var sold;
var p = 0;
var ps = 0;
function time() {
  setTimeout(() => {
    p++;
    console.log(p);
    if (p % 30 === 0 && p % 60 != 0) {
      document.body.style.backgroundImage = "url(stars.png)";
    }
    if (p % 60 === 0) {
      document.body.style.backgroundImage = "url(sky.jpg)";
    }
    time();
  }, 1000);
}
time();
alert(
  "You have been drafted to fight in the Forest War. Use arrow keys to move and space to launch a bullet. Good luck..."
);
function myfunction(tree) {
  tree.src = "explosion.png";
}
setTimeout(() => {
  var trees = document.querySelectorAll("img");
  trees.forEach(myfunction);
  alert("Game Over!");
  window.location.reload();
}, 3600000);
var sol1 = document.getElementsByClassName("soldier");
var matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1[ps]).transform);
function pclick(e) {
  document.getElementById("world").removeChild(e);
  ps++;
  sol1 = document.getElementsByClassName("soldier");
  matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1[ps]).transform);
  localStorage.setItem("x", matrix3.m41);
  localStorage.setItem("z", matrix3.m43);
  localStorage.setItem("ps", ps);

  alert("A soldier is at X: " + matrix3.m41 + " Z: " + -matrix3.m43);
  console.log(ps);
  if (ps === 100) {
    alert("Great job! now press enter call in a lift. Your job is done");
    document.onkeydown = (e) => {
      if (e.key == "Enter") {
        alert("Good Job, the forest is now safe.");
        window.close();
      }
    };
  }
}
sol1 = document.getElementsByClassName("soldier");
matrix3 = new WebKitCSSMatrix(window.getComputedStyle(sol1[ps]).transform);
alert("A soldier is at X: " + matrix3.m41 + " Z: " + -matrix3.m43);

var y = -1200;
var a = -7500;
var b = 0;
document.getElementById("universe").style.transform =
  "translateY(" +
  y +
  "px) translateZ(" +
  a +
  "px) perspective(" +
  a * -2 +
  "px) translateX(" +
  b +
  "px)";
var ry = 0;
document.addEventListener("keydown", function (e) {
  a = parseInt(a);
  b = parseInt(b);
  y = parseInt(y);
  if (e.key == "a") {
    you = document.getElementById("universe");
    matrix4 = new WebKitCSSMatrix(window.getComputedStyle(you).transform);
    alert(
      "You are at X: " + (-matrix4.m41 - 1000) + " Z: " + (7500 + matrix4.m43)
    );
  }
  if (e.key == "r") {
    var sol1 = document.getElementsByClassName("soldier");
    var matrix3 = new WebKitCSSMatrix(
      window.getComputedStyle(sol1[ps]).transform
    );
    alert("A soldier is at X: " + matrix3.m41 + " Z: " + -matrix3.m43);
  }
  if (e.key == "ArrowUp") {
    e.preventDefault();
    a += 50;
    y -= 20;
    localStorage.setItem("y", y);
    localStorage.setItem("a", a);
    a = localStorage.getItem("a");
    y = localStorage.getItem("y");
    document.getElementById("universe").style.transform =
      "translateY(" +
      y +
      "px) rotateY(" +
      ry +
      "deg) translateZ(" +
      a +
      "px) perspective(" +
      a * -2 +
      "px) translateX(" +
      b +
      "px)";
  }
  if (e.key == "ArrowDown") {
    e.preventDefault();
    a -= 50;
    y += 20;
    localStorage.setItem("a", a);
    localStorage.setItem("y", y);
    y = localStorage.getItem("y");
    a = localStorage.getItem("a");
    document.getElementById("universe").style.transform =
      "translateY(" +
      y +
      "px) rotateY(" +
      ry +
      "deg) translateZ(" +
      a +
      "px) perspective(" +
      a * -2 +
      "px) translateX(" +
      b +
      "px)";
  }
  if (e.key == "ArrowRight") {
    e.preventDefault();
    b -= 50;
    localStorage.setItem("b", b);
    b = localStorage.getItem("b");
    document.getElementById("universe").style.transform =
      "translateY(" +
      y +
      "px) rotateY(" +
      ry +
      "deg) translateZ(" +
      a +
      "px) perspective(" +
      a * -2 +
      "px) translateX(" +
      b +
      "px)";
  }
  if (e.key == "ArrowLeft") {
    e.preventDefault();
    b += 50;
    localStorage.setItem("b", b);
    b = localStorage.getItem("b");
    document.getElementById("universe").style.transform =
      "translateY(" +
      y +
      "px) rotateY(" +
      ry +
      "deg) translateZ(" +
      a +
      "px) perspective(" +
      a * -2 +
      "px) translateX(" +
      b +
      "px)";
  }
  if (e.key == " ") {
    var far = 200;
    document.getElementById("bullet").style.transition = "transform 2s";
    document.getElementById("bullet").style.transform =
      "translateZ(" + parseInt(far) + "px)";
    matrix = new WebKitCSSMatrix(
      window.getComputedStyle(document.getElementById("bullet")).transform
    );
    sold = document.getElementsByClassName("soldier");
    matrix4 = new WebKitCSSMatrix(
      window.getComputedStyle(document.getElementById("universe")).transform
    );
    matrix2 = new WebKitCSSMatrix(window.getComputedStyle(sold[ps]).transform);
    alert(
      matrix.m41 +
        " " +
        (matrix2.m41 - (-matrix4.m41 - 1000)) +
        " " +
        matrix.m43 +
        " " +
        (-matrix2.m43 - (-a + matrix4.m43))
    );
    if (
      matrix.m41 === matrix2.m41 - (-matrix4.m41 - 1000) &&
      matrix.m43 === -matrix2.m43 - (-a + matrix4.m43)
    ) {
      alert("Hit!");
      pclick(sold[ps]);
      document.getElementById("bullet").style.transform = "translateZ(0px)";
    } else {
      alert("miss");
      document.getElementById("bullet").style.transform = "translateZ(0px)";
    }
  }
});
var dirt = document.getElementById("boxDiv");
var rows = document.getElementById("mainDiv");
var dirtnew;
for (var i = 0; i < 5000; i += 50) {
  dirtnew = dirt.cloneNode(true);
  dirtnew.style.transform =
    "translateY(" + -i + "px) translateX(" + (i - 500) + "px)";
  dirtnew.style.height = "50px";
  dirtnew.style.width = "50px";
  dirtnew.transformStyle = "preserve-3d";
  rows.appendChild(dirtnew);
}
var newrow;

for (var x = 0; x < 5000; x += 50) {
  newrow = rows.cloneNode(true);
  newrow.style.top = "100px";
  newrow.style.height = "1000px";
  newrow.style.width = "1000px";
  newrow.style.perspective = "800px";
  newrow.style.position = "absolute";
  newrow.style.transform =
    " rotateX(180deg) translateY(800px) perspective(6000px) translateZ(" +
    x +
    "px)";

  document.getElementById("world").appendChild(newrow);
}
var soldier = document.getElementById("panther");
for (var s = 0; s < 100 - ps; s++) {
  soldier = soldier.cloneNode();
  soldier.style.transform =
    "translateY(800px) perspective(6000px) translateX(" +
    50 * Math.floor(Math.random() * 40) +
    "px) translateZ(" +
    -50 * Math.floor(Math.random() * 40) +
    "px)";
  document.getElementById("world").appendChild(soldier);
}
