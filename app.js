
var x;
var socket = io.connect();
var fight = false;
var username;
var users = [];
var winners = 0;
var players = [];
var main;
var link;
var a = 0;
var playerb = 0;
var playera = 0;
var b = 0;
var c = 0;
var y = 0;
var intro = document.getElementById("intro");
var range = 200;
var ammo = 20;
let keysPressed = {};
var you;
var matrix2;
var health = document.getElementById("health");
var matrix4;
function ended(audio) {
	if (audio.ended == true) {
		load();
	}
	else {
		setTimeout(ended, 1000);
	}
}
var ps = 0;
var sol1 = document.getElementById("panther");
var matrix3;
var sold;
var p = 0;
var person;
var roomnumber = 0;
var otherplayer;
function choose() {
	person = prompt("Choose an username!");
	socket.emit("username", person);
}
document.getElementById("dialog").hidden = false;
document.getElementById("universe").hidden = true;
document.getElementById("text").hidden = true;
document.body.style.background = "black";
document.getElementById("option").innerHTML = "Do You Want To Create A Room?";

document.getElementById("ok").onclick = () => {

	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	intro.play();
	document.getElementById("heli").play();
	intro.onended = load;

	var room = prompt("Choose a private room name.");
	var password = prompt("Choose a password.");
	socket.emit("roomname", room);
	socket.emit("password", password);
};
document.getElementById("neither").onclick = () => {
	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	intro.play();
	document.getElementById("heli").play();
	intro.onended = load;
	const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	link = "";
	for (var i = 0; i < 40; i++) {
		link += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	socket.emit("self", link);
	console.log(link);
};
document.getElementById("no").onclick = () => {
	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	intro.play();
	document.getElementById("heli").play();
	intro.onended = load;
	var roomname = prompt("Enter the room name.");
	socket.emit("room", roomname);
	var pass = prompt("Enter the room's password.");
	socket.emit("pass", pass);
}
socket.on("usernotadded", () => {
	person = prompt(
		"Choose a new username. Your old one was either taken, inappropriate, or blank!"
	);
	socket.emit("username", person);
});
socket.on("roomclosed", (data) => {
	if (
		typeof users[0 + data.number] != "undefined" &&
		typeof users[1 + data.number] != "undefined" &&
		typeof users[2 + data.number] != "undefined"
	) {
		alert(
			"Game room closed. Players are " +
			users[0 + data.number] +
			", " +
			users[1 + data.number] +
			", " +
			users[2 + data.number]
		);
		roomnumber = data.room;
		var play = 0;
		users.forEach((player) => {
			player = document.getElementById("score").cloneNode(true);
			player.id = users[play + data.number];
			player.value = users[play + data.number] + ": 0";
			console.log(users[play + data.number]);
			player.classList.add("score");
			player.style.marginBottom = "100px";
			document.body.insertBefore(player, document.getElementById("universe"));
			play++;
		});
	}
});

socket.on("useradded", (u) => {
	users = u;
});
socket.on("left", (leaving) => {
	alert(leaving + " left.");
});
socket.on("joined", (per) => {
	alert(per + " joined.");
});
socket.on("leave", (u) => {
	users = u;
});
socket.on("gameover", (killed) => {
	alert(killed + " died.");
});
var t;
var day = document.createElement("h1");
var daynumber = 1;
var wood;
var wood1;
var wood2;
var wood3;
var wood4;
var wood5;
function load() {
	document.getElementById("heli").pause();
	document.getElementById("boom").play();
	day.innerHTML = "Day " + daynumber;
	document.body.style.background = "black";
	day.style.color = "white";
	day.style.position = "absolute";
	day.style.top = "50%";
	day.style.left = "50%";
	document.body.appendChild(day);
	setTimeout(()=>{
	for(let i = 0; i < 5; i++){
		wood = document.createElement("div");
		wood.id = i;
		wood.style.position = "absolute";
		wood.style.transformStyle = "preserve-3d";
		wood.style.transform = "translate3d(" + (50 * Math.floor(Math.random() * 10)) + "px, 0px, " + (50 * Math.floor(Math.random()) * 10) + "px)";
		document.getElementById("universe").appendChild(wood);
	}
		day.hidden = true;
		
		document.addEventListener("keydown", function(e) {
			
		matrix4 = new WebKitCSSMatrix(
			window.getComputedStyle(document.getElementById("universe")).transform
		);
		sol1 = document.getElementById("panther");
		document.getElementById("coordinates").innerHTML = `You are at X: ${-matrix4.m41} Z: ${-matrix4.m43}`;
		socket.emit("move", matrix4);
		a = parseInt(a);
		b = parseInt(b);
		y = parseInt(y);
		var worldclone;
			wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
	wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
	wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
	wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
	wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform);
		if (e.key == "ArrowUp") {
			e.preventDefault();
			a += 50;
			playera += 50;
			document.getElementById("universe").style.transform =
				"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" +(a + 5000) +"px)";
		}
		if (e.key == "ArrowDown") {
			e.preventDefault();
			a -= 50;
			playera -= 50;
			document.getElementById("universe").style.transform =
				"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" +(a + 5000) +"px)";
		}
		if (e.key == "ArrowRight") {
			e.preventDefault();
			playerb += 50;
			b -= 50;
			document.getElementById("universe").style.transform =
				"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" +(a + 5000) +"px)";
		}
		if (e.key == "ArrowLeft") {
			e.preventDefault();
			b += 50;
			playerb -= 50;
			document.getElementById("universe").style.transform =
				"translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" +(a + 5000) +"px)";
		}
			if(e.key == " "){
				if(-matrix4.m41 === wood1.m41 && matrix4.m43 === wood1.m43){
					alert("Scraps found!");
					document.getElementById("universe").removeChild(document.getElementById("0"));
				}
				if(-matrix4.m41 === wood2.m41 && matrix4.m43 === wood2.m43){
					alert("Scraps found!");
					document.getElementById("universe").removeChild(document.getElementById("1"));
				}
				if(-matrix4.m41 === wood3.m41 && matrix4.m43 === wood3.m43){
					alert("Scraps found!");
					document.getElementById("universe").removeChild(document.getElementById("2"));
				}
				if(-matrix4.m41 === wood4.m41 && matrix4.m43 === wood4.m43){
					alert("Scraps found!");
					document.getElementById("universe").removeChild(document.getElementById("3"));
				}
				if(-matrix4.m41 === wood5.m41 && matrix4.m43 === wood5.m43){
					alert("Scraps found!");
					document.getElementById("universe").removeChild(document.getElementById("4"));
				}

			}
	});
	document.getElementById("universe").hidden = false;
	document.getElementById("text").hidden = false;
	var dirt = document.getElementById("boxDiv");
	var rows = document.getElementById("mainDiv");
	var dirtnew;
	for (var i = 0; i < 7000; i += 50) {
		dirtnew = dirt.cloneNode(true);
		dirtnew.style.transform =
			"translateY(" + -i + "px) translateX(" + (i - 2500) + "px)";
		dirtnew.style.height = "50px";
		dirtnew.style.width = "50px";
		dirtnew.style.transformStyle = "preserve-3d";
		rows.appendChild(dirtnew);
	}
	var newrow;
	var z = 0;
	while (z < 140) {
		z++;
		newrow = rows.cloneNode(true);
		newrow.style.top = "100px";
		newrow.style.height = "1000px";
		newrow.style.width = "1000px";
		newrow.style.transformStyle = "preserve-3d";
		newrow.style.perspective = "800px";
		newrow.style.position = "absolute";
		newrow.style.transform =
			"rotateX(180deg) translateY(1600px) perspective(6000px) translateZ(" +
			(z * 50 + 1000) +
			"px)";

		document.getElementById("world").appendChild(newrow);
	}
	
	for(let i = 0; i < document.getElementsByClassName("tree").length; i++){
		t = Math.floor(Math.random() * 3);
		if(t === 2){
		document.getElementsByClassName("tree")[i].hidden = false;
		}
	}
},5000);
	

}
