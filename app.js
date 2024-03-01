var house = false;
var task = document.getElementById("enemyhealth");
var tasks = document.getElementById("tasks");
var x;
var modals = [];
var firematrix;
var esc = false, parts = 0;
var timeout;
var fire;
var ss;
var thirst = 0;
const steps = ['1', '2', '3', "4"]
const Queue = Swal.mixin({
  progressSteps: steps,
  confirmButtonText: 'Next >',
  // optional classes to avoid backdrop blinking between steps
  showClass: { backdrop: 'swal2-noanimation' },
  hideClass: { backdrop: 'swal2-noanimation' },
})
fire = new Image(500, 500);
fire.src = "fire.png";
fire.style.zIndex = "400";
fire.style.top = "500px";
fire.style.left = "1000px";
var shelter;
var night = false;
var socket = io.connect();
var img = new Image();
img.src = "inside.jpg";
img.style.height = "100vh";
img.style.width = "100vw";
img.style.zIndex = "500";
img.style.position = "absolute";
document.getElementById("universe").appendChild(img);
img.hidden = true;
var lake = document.createElement("div");
lake.style.height = "1000px";
lake.style.width = "500px";
lake.style.position = "absolute";
lake.style.transform = "translateX(1000px) translateZ(1000px) perspective(1200px)";
lake.style.backgroundColor = "blue";
lake.style.borderRadius = "50%";
var laketrix;
var food = 0;
var fight = false;
var username;
var users = [];
var winners = 0;
var players = [];
var main;
var link;
var a = 0;
var sheltermatrix;
var playerb = 0;
var playera = 0;
var b = 0;
var c = 0;
var y = 0;
var clicks = 0;
async function lose(){
	health.value--;
	if(clicks <50){
		if(health.value > 0){
	setTimeout(lose, 4000)
		}
		else{
			await Queue.fire({currentProgressStep: 0,text: "You died, better luck next time."});
			
		}
	}
}
async function battle(){
	await Queue.fire({currentProgressStep: 0,text: "Click the hunter to do damage. Quick!"});
	
	document.getElementById("hunter").onclick = async () => {
		clicks++;
		if(clicks === 50){
			await Queue.fire({currentProgressStep: 0,text: "Press 'e' to call in a ride and escape!"})
			
			document.onkeydown = (e)=> {
				if(e.key == "e"){
					e.preventDefault();
					document.getElementById("heli").play();
					setTimeout(async () => {
					await Queue.fire({currentProgressStep: 0,text: "You escaped!"});
						socket.emit("escape", username)
						await Queue.fire({currentProgressStep: 1,text: "credits to Marine hunter (https://skfb.ly/6UtoZ) by ill_drakon is licensed under Creative Commons Attribution-NonCommercial (http://creativecommons.org/licenses/by-nc/4.0/) and Table Fancy Small (https://skfb.ly/oLSwo) by GameDevMoot is licensed under Creative Commons Attribution (http://creativecommons.org/licenses/by/4.0/) for 3d models."})
						
						location.reload();
					}, 7000)
				}
			}
			
			
		}
		
	}
	
		setTimeout(lose, 4000)
}
var intro = document.getElementById("intro");
var range = 200;
var ammo = 20;
let keysPressed = {};
var you;
var matrix2;
var health = document.getElementById("health");
var matrix4;
async function ended(audio) {
	if (audio.ended == true) {
		load();
	}
	else {
		setTimeout(ended, 1000);
	}
}
socket.on("pmove", (data)=> {
	document.getElementById(data.person).style.transform = `matrix3d(${data.matrix})`
})
var ps = 0;
var hunts = 0;
var sol1 = document.getElementById("panther");
var matrix3;
var sold;
var p = 0;
var person;
var roomnumber = 0;
var otherplayer;
async function rotate(){
	document.getElementById("room").style.transform = `scale3d(3 3 3) translateZ(1000px) rotateY(${cy}deg) rotateX(${cx}deg)`;
}
socket.on("roomnotjoined", async () =>{
	await Queue.fire({currentProgressStep: 0,text: "Room not found, please try again..."});
	
	location.reload();
});
async function foodget(){
	food++;
}
var deer = new Image(200, 200);
			deer.src = "deer.png";
			deer.style.zIndex = "2000";
			deer.style.position = "absolute";
deer.hidden = true;
			document.body.appendChild(deer);
async function hunt() {
		if(daynumber < 3){
		await Queue.fire({currentProgressStep: 0,text: "Click to get the deer in time."});
			deer.hidden = false;
			deer.addEventListener("click", foodget);
		
		setTimeout(async () => {
			deer.removeEventListener("click", foodget);
			await Queue.fire({currentProgressStep: 0,text: "You have " + food + " food. Every day, ten food will be used."});
			deer.hidden = true;
		}, 5000);
	}
		else{
			if(Math.floor(Math.random() * 5) === 2){
						await Queue.fire({currentProgressStep: 0,text: "Edible mushroom found! Each one will count as 4 food."});
				
						food += 4;
					}
		}
	}
async function choose() {
	
	ss = new SpeechSynthesisUtterance("Hello "+ username +". Welcome to Survivor. We will pick you up in a month. OH NO WHAT IS THAT!!!!!!");
}
document.getElementById("dialog").hidden = false;
document.getElementById("universe").hidden = true;
document.getElementById("text").hidden = true;
document.body.style.background = "black";
document.getElementById("option").innerHTML = "Do You Want To Create A Room?";

document.getElementById("ok").onclick = async () => {

	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	var {value: room} = await Queue.fire({currentProgressStep: 0,input: "text", text:"Choose a private room name."});
	if(room){
	var {value: password} = await Queue.fire({currentProgressStep: 1,input: "text", text:"Choose a password."});
	}
	var {value: username} = await Queue.fire({currentProgressStep: 2,input: "text", text:"Choose an username!"});
	socket.emit("username", username);
	socket.emit("roomname", room);
	socket.emit("password", password);
		document.getElementById("heli").play();
	document.getElementById("heli").onended = async () => {
		load();
	}
};

document.getElementById("neither").onclick = async () => {
	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	choose();
	
	document.getElementById("heli").play();
	document.getElementById("heli").onended = async () => {
		const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
	link = "";
	for (var i = 0; i < 40; i++) {
		link += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	socket.emit("self", link);
	console.log(link);
		load();
	}

	
};
document.getElementById("no").onclick = async () => {
	document.getElementById("dialog").hidden = true;
	document.body.style.background = "url(sky.jpg)";
	var {value:roomname} = await Queue.fire({currentProgressStep: 0,input: "text", text:"Enter the room name."});
	if(roomname){
	var {value: pass} = await Queue.fire({currentProgressStep: 1,input: "text", text:"Enter the room's password."});
	}
	var {value: username} = await Queue.fire({currentProgressStep: 2,input: "text", text:"Choose an username!"});
	socket.emit("username", username);
	
	socket.emit("room", roomname);
	socket.emit("pass", pass);

	document.getElementById("heli").play();
	document.getElementById("heli").onended = async () => {
		load();
	}
	
}
socket.on("usernotadded", async () => {
	const {value: person} = await Queue.fire({currentProgressStep: 3,input: "text", text:
		"Choose a new username. Your old one was either taken, inappropriate, or blank!"
			   });
	socket.emit("username", person);
});
socket.on("roomclosed", async (data) => {
	if (
		typeof users[0 + data.number] != "undefined" &&
		typeof users[1 + data.number] != "undefined" &&
		typeof users[2 + data.number] != "undefined"
	) {
		
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
socket.on("left", async (leaving) => {
	await Queue.fire({currentProgressStep: 0,text:leaving + " left."});

});
socket.on("joinedroom", async (per) => {
	await Queue.fire({currentProgressStep: 0,text:per + " joined."});
	const player = document.getElementById("player").cloneNode(true);
	player.id = per;
	Array.from(player.children)[0].innerHTML = per;
	player.style.zIndex = "20";
	player.style.height = "10000px";
	player.style.width = "6000px";
	player.style.position = "absolute";
	player.style.transformStyle = "preserve-3d";
	player.hidden = false;
	document.getElementById("universe").appendChild(player);
});
socket.on("leave", (u) => {
	users = u;
});
socket.on("gameover", async (killed) => {
	await Queue.fire({currentProgressStep: 0,text: killed + " died."});
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
var model = document.getElementById("model");
async function time(){
clearTimeout(timeout)
	if(night == false){
		document.getElementById("night").style.opacity = "60%";
			await Queue.fire({currentProgressStep: 0,text: "It is night time. Go run around riskingly, or sleep safely in your shelter"});
		night = true;
	}
	else if(night == true){
		
		document.getElementById("night").style.opacity = "0%";
		universe.hidden = true;
	 day.hidden = false;
		 day.style.top = "100px";
													 day.style.left = "100px";
								 day.style.position = "relative";
												 food -= 10;
												 if(food < 0){
													 await Queue.fire({currentProgressStep: 0,text: "You do not have enough food. Game Over."});
												
														 location.reload();
													 
												 }
												 daynumber++;
												 if(daynumber === 2){
													 day.innerHTML = "Day " + daynumber + ". Look around the area for wood. 6 wood will help you make a fire to cook your meat.";
													 task.max = 6;
													 task.value = 6;
													 tasks.innerHTML = "Make Fire";
												 }
		 if(daynumber === 3){
													 day.innerHTML = "Day " + daynumber + ". Look around the area for other food. The deer are getting skeptical.";
													 task.max = 6;
													 task.value = 6;
													 tasks.innerHTML = "Forage";
												 }
		if(daynumber === 4) {
			document.getElementById("universe").appendChild(lake);
			laketrix = new WebKitCSSMatrix(window.getComputedStyle(lake).transform);
		}
		if(daynumber >= 4){
			day.innerHTML = "Day " + daynumber + ". Keep your stats in check. Now, water is a factor. Find the lake at (0, 0), then press D to drink.";
		}
		if(daynumber > 4){
			thirst += 10;
			if(thirst >=30){
				 await Queue.fire({currentProgressStep: 0,text: "You did not drink enough. Game Over."});
				
													location.reload
			}
		}
		await Queue.fire({currentProgressStep: 0,text: "Wake up sleepyhead! You must go live today!"});
		
		
		night = false;
												 setTimeout(async () => {
													
													 day.hidden = true;
													 universe.hidden = false;
												 }, 5000)
		if(daynumber >= 6){
			day.innerHTML = "Day " + daynumber + ". look for an abandoned building near (2000, 700).";
			
			model.style.scale = "3 3 3";
			model.style.height = "500px";
			model.style.width = "500px"
			task.max = 1;
			model.style.scale = "3 3 3";
			model.style.position = "absolute";
			model.style.transform = "translate3d(-2000px, 0px, 700px)";
			task.max = 1;
													 task.value = 1;
													 tasks.innerHTML = "Find Building";
		}
	}
		timeout = setTimeout(time, 90000);

}
			var room = document.getElementById("room");
			room.style.transformStyle = "preserve=3d";
			room.style.position = "absolute";


async function move(){
	document.getElementById("universe").style.transform = "translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + ( a +5000) + "px)";
}
async function load() {
	document.getElementById("universe").style.position = "absolute";
	document.getElementById("universe").style.zIndex = "1";
	timeout = setTimeout(time, 90000);
	document.getElementById("heli").pause();
	document.getElementById("boom").play();
	day.innerHTML = "Day " + daynumber + ". Use arrow keys to move and  space to search for resources.";
	document.body.style.background = "black";
	day.style.color = "white";
	day.style.position = "absolute";
	day.style.zIndex = "140";
	day.style.width = "50vw";
	day.style.top = "50%";
	day.style.left = "50%";
	document.body.appendChild(day);
	setTimeout(async () => {
		for (var i = 0; i < 5; i++) {
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
		wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform); 
		document.onkeydown = async (e) =>{
		if(document.activeElement != document.getElementById("message")){
			

			a = parseInt(a);
			b = parseInt(b);
			y = parseInt(y);
			var worldclone;
			if (document.getElementById("0") != null) {
				wood1 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("0")).transform);
			}
			if (document.getElementById("1") != null) {
				wood2 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("1")).transform);
			}
			if (document.getElementById("2") != null) {
				wood3 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("2")).transform);
			}
			if (document.getElementById("3") != null) {
				wood4 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("3")).transform);
			}
			if (document.getElementById("4") != null) {
				wood5 = new WebKitCSSMatrix(window.getComputedStyle(document.getElementById("4")).transform);
			}
			if (e.key == "ArrowUp") {
				e.preventDefault();
				a += 50;
			}
			if (e.key == "ArrowDown") {
				e.preventDefault();
				a -= 50;
			}
			if (e.key == "ArrowRight") {
				e.preventDefault();
				b -= 50;
			}
			if (e.key == "ArrowLeft") {
				e.preventDefault();
				b += 50;
			}
			if(e.key == "x" && task.value === 0 && daynumber >= 2){
				fire.style.position = "absolute";
				fire.style.transform = "translate3d(" + b + "px, " + y + "px,"+ a +"px) perspective(" + 5000 + "px)";
				document.getElementById("universe").appendChild(fire);
				firematrix = new WebKitCSSMatrix(getComputedStyle(fire).transform);
				await Queue.fire({currentProgressStep: 0,text: "The fire will burn for half the day. Press x whenever you have enough wood and need to cook your food."});
				
				task.value = 5;
				task.max = 5;
				setTimeout(async () => {
					fire.remove();
				}, 60000);
			socket.emit("fire", firematrix);
			}
			if(e.key == "x" && fire.style.position ==="absolute" && daynumber >= 2){
				if(firematrix.m41 === matrix4.m41 && firematrix.m43 === matrix4.m43 ){
				await Queue.fire({currentProgressStep: 0,text: "Food cooked. It will now fill you twice as much."});
					
				food = food * 2;
				}
			}
			if (e.key == " ") {
				
				if (-matrix4.m41 === wood1.m41 && matrix4.m43 === wood1.m43) {
					await Queue.fire({currentProgressStep: 0,text: "Wood found!"});
					
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						await Queue.fire({currentProgressStep: 0,text: "Huh, maybe I should press x to build my house."});
						
						house = true;
					}
				}
				if (-matrix4.m41 === wood2.m41 && matrix4.m43 === wood2.m43) {
					await Queue.fire({currentProgressStep: 0,text: "Wood found!"});
					
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						await Queue.fire({currentProgressStep: 0,text: "Huh, maybe I should press x to build my house."});
						
						house = true;
					}
				}
				if (-matrix4.m41 === wood3.m41 && matrix4.m43 === wood3.m43) {
					await Queue.fire({currentProgressStep: 0,text: "Wood found!"});
					
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						await Queue.fire({currentProgressStep: 0,text: "Huh, maybe I should press x to build my house."});
						
						house = true;
					}
				}
				if (-matrix4.m41 === wood4.m41 && matrix4.m43 === wood4.m43) {
					await Queue.fire({currentProgressStep: 0,text: "Wood found!"});
					
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						await Queue.fire({currentProgressStep: 0,text: "Huh, maybe I should press x to build my house."});
						
						house = true;
					}
				}
				if (-matrix4.m41 === wood5.m41 && matrix4.m43 === wood5.m43) {
					await Queue.fire({currentProgressStep: 0,text: "Wood found!"});
					
					task.value--;
					if (task.value === 0 && daynumber < 2) {
						task.value = 5;
						await Queue.fire({currentProgressStep: 0,text: "Huh, maybe I should press x to build my house where I am."});
						
						house = true;
					}
				}

			}
				
			if (e.key == "x" && house == true) {
				await Queue.fire({currentProgressStep: 0,text: "House built!"});
				house = false;
				shelter = document.createElement("img");
				shelter.style.position = "absolute";
				shelter.style.zIndex = "8";
				shelter.src = "shack.png";
				shelter.style.left = "200px";
				shelter.style.top = "200px";
				shelter.style.transform = "translate3d(" + b + "px, " + y + "px, " + a + "px) perspective(" + 5000 + "px)";
				document.getElementById("universe").appendChild(shelter);
				sheltermatrix = new WebKitCSSMatrix(window.getComputedStyle(shelter).transform);
				await Queue.fire({currentProgressStep: 1,text: "Hint: If you ENTER your house, you have double your health."});
				tasks.innerHTML = "Find food";
				await Queue.fire({currentProgressStep: 2,text: "Go bring some food back home. Go hunting for food in a space by pressing 'h'."});
				
				socket.emit("house", sheltermatrix);
			}
			if(e.key == "h"){
				hunt();
			}


			if(e.key == "Enter" && daynumber > 5 && -matrix4.m41 === 2000 && matrix4.m43 === 700){
				await Queue.fire({currentProgressStep: 0,text: "House Entered! Find the clues to discover what happened."});
				
				var popup = window.open("room.html");
				popup.window.addEventListener('load', async () => {
  					popup.window.addEventListener('unload', async () => {
						await Queue.fire({currentProgressStep: 0,text: "find the hunter and get him to avenge the remaining deer"});
						
						document.getElementById("hunter").style.display = "block";
						battle();
    					});
				});
				
			}
			
			if (sheltermatrix) {

				if (e.key == "Enter" && matrix4.m41 === sheltermatrix.m41 && sheltermatrix.m43 === matrix4.m43 && document.activeElement != document.getElementById("message")) {
					if (img.hidden == true) {
						img.hidden = false;
						health.max = 10;
						health.value = 10;
						if(night == true){
							time();
						}
					}
					else if (img.hidden == false) {
						img.hidden = true;
						health.max = 5;
						health.value = 5;
					}

				}

			}
			if(e.key == "d" && daynumber > 3 && a === 0 && b === 0){
				await Queue.fire({currentProgressStep: 0,text: "Your thirst went down by 5."});
				
				thirst -= 5;
			}
			move();
			matrix4 = new WebKitCSSMatrix(
				window.getComputedStyle(document.getElementById("universe")).transform
			);
			sol1 = document.getElementById("panther");
			socket.emit("move", matrix4);
			document.getElementById("coordinates").innerHTML = `You are at X: ${-matrix4.m41} Z: ${matrix4.m43}`;
		}
		};
		document.getElementById("universe").hidden = false;
		document.getElementById("text").hidden = false;
		var dirt = document.getElementById("boxDiv");
		var rows = document.getElementById("mainDiv");
		var dirtnew;
		for (var i = 0; i < 3000; i += 50) {
			dirtnew = dirt.cloneNode(true);
			dirtnew.style.transform =
				"translateY(" + -i + "px) translateX(" + (i - 1000) + "px)";
			dirtnew.style.height = "50px";
			dirtnew.style.width = "50px";
			dirtnew.style.transformStyle = "preserve-3d";
			rows.appendChild(dirtnew);
		}
		var newrow;
		var z = 0;
		while (z < 60) {
			z++;
			newrow = rows.cloneNode(true);
			newrow.style.top = "100px";
			newrow.style.height = "1000px";
			newrow.style.width = "1000px";
			newrow.style.transformStyle = "preserve-3d";
			newrow.style.perspective = "800px";
			newrow.style.position = "absolute";
			newrow.style.transform =
				"rotateX(180deg) translateY(1000px) perspective(3000px) translateZ(" +
				(z * 50 + 1000) +
				"px)";

			document.getElementById("world").appendChild(newrow);
		}

		for (let i = 0; i < document.getElementsByClassName("tree").length; i++) {
			t = Math.floor(Math.random() * 3);
			if (t === 2) {
				document.getElementsByClassName("tree")[i].hidden = false;
			}
		}
	}, 5000);


}
var message, p2, p, newmessage;

document.getElementById("message").onkeydown = async (e) => {
	if (e.key == "Enter") {
		message = document.getElementById("message").value;
		document.getElementById("message").value = "";
		p = document.createElement("p");
		newmessage = message;
		p.style.overflowWrap = "anywhere";
		p.innerHTML = "You: " + message;
		p.style.color = "blue";
		p.style.position = "relative";
		p.style.zIndex = "101";
		p.style.width = "5vw";
		p.style.left = "75%";
		socket.emit("message", { message: newmessage, user: username });
		document.getElementById("messages").appendChild(p);
	}
};
socket.on('newmessage', async (messagenew) => {
	p = document.createElement("p");
	newmessage = messagenew.user + ": " + messagenew.message;
	p.innerHTML = newmessage;
	p.style.width = "5vw";
	p.style.color = "red";
	p.style.left = "25%";
	p.style.overflowWrap = "anywhere";
	p.style.position = "relative";
	p.style.zIndex = "101";
	document.getElementById("messages").appendChild(p);
	        const notification = new Notification(newmessage);

});

socket.on("firemade",async (player)=>{
	await Queue.fire({currentProgressStep: 0,text: "Someone made a fire. It is at X: " + -player.m41 + ", Z: " + -player.m43});
	fire.style.position = "absolute";
				fire.style.transform = "translate3d(" + player.m41 + "px, " + player.m42 + "px, " + player.m43 + "px) perspective(" + (player.m43 + 5000) + "px)";
				document.getElementById("universe").appendChild(fire);
				firematrix = new WebKitCSSMatrix(getComputedStyle(fire).transform);
				await Queue.fire({currentProgressStep: 1,text: "The fire will burn for half the day. Press x whenever you have enough wood and need to cook your food."});
	
				task.value = 5;
				task.max = 5;
				setTimeout(async () => {
					fire.remove();
				}, 60000);
})
var cx, cy;


socket.on("housemade", async(player)=>{
	await Queue.fire({currentProgressStep: 0,text: "Someone made a house. It is at X: " + -player.m41 + ", Z: " + -player.m43});
	
	house = false;
				shelter = document.createElement("img");
				shelter.style.position = "absolute";
				shelter.style.zIndex = "8";
				shelter.src = "shack.png";
				shelter.style.left = "200px";
				shelter.style.top = "200px";
				shelter.style.transform = "translate3d(" + player.m41 + "px, " + player.m42 + "px, " + player.m43 + "px) perspective(" + (player.m43 + 5000) + "px)";
				document.getElementById("universe").appendChild(shelter);
				sheltermatrix = new WebKitCSSMatrix(window.getComputedStyle(shelter).transform);
				await Queue.fire({currentProgressStep: 1,text: "Hint: If you ENTER your house, you have double your health."});
				tasks.innerHTML = "Find food";
				await Queue.fire({currentProgressStep: 2,text: "Go bring some food back home. Go hunting for food in a space by pressing 'h'."});
	
})
 async function notifyMe() {
  if (!("Notification" in window)) {
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
	  notifyMe();
socket.on("escaped", async (p)=> {
	await Queue.fire({currentProgressStep: 0,text: p + " escaped!"})
	
})
