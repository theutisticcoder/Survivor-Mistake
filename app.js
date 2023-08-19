var house = false;
var task = document.getElementById("enemyhealth");
var x;
var shelter;
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
	for(var i = 0; i < 5; i++){
		wood = document.createElement("div");
		wood.setAttribute("id", i);
		wood.style.position = "absolute";
		wood.style.transformStyle = "preserve-3d";
		wood.style.transform = "translate3d(" + (50 * Math.floor(Math.random() * 10)) + "px, 0px, " + (50 * Math.floor(Math.random() * 10)) + "px) perspective(600px)";
		document.body.appendChild(wood);
	}
		day.hidden = true;
		

			wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
			wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
			wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
			wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
			wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform);		document.addEventListener("keydown", function(e) {
			
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
			if(document.getElementById("0") != null){
			wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
			}
			if(document.getElementById("1") != null){
			wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
			}
			if(document.getElementById("2") != null){
			wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
			}
			if(document.getElementById("3") != null){
			wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
			}	
			if(document.getElementById("4") != null){
			wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform);
			}				
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
					task.value--;
					if(task.value === 0){
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if(-matrix4.m41 === wood2.m41 && matrix4.m43 === wood2.m43){
					alert("Scraps found!");
					task.value--;
					if(task.value === 0){
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if(-matrix4.m41 === wood3.m41 && matrix4.m43 === wood3.m43){
					alert("Scraps found!");
					task.value--;
					if(task.value === 0){
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if(-matrix4.m41 === wood4.m41 && matrix4.m43 === wood4.m43){
					alert("Scraps found!");
					task.value--;
					if(task.value === 0){
						task.value = 5;
						alert("Huh, maybe I should press x to build my house.");
						house = true;
					}
				}
				if(-matrix4.m41 === wood5.m41 && matrix4.m43 === wood5.m43){
					alert("Scraps found!");
					task.value--;
					if(task.value === 0){
						task.value = 5;
						alert("Huh, maybe I should press x to build my house where I am.");
						house = true;
					}
				}

			}
				
					if(e.key == "x" && house == true){
						alert("House built!");
						house = false;
						shelter = document.createElement("img");
						shelter.style.position = "absolute";
						shelter.style.zIndex = "8";
						shelter.src =  "data:image/jpeg;base64,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"
						shelter.style.transform = "translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" +(a + 5000) +"px)";
						document.getElementById("universe").appendChild(shelter);
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
