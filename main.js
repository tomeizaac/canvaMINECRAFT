
var canvas = new fabric.Canvas('myCanvas');

playerX = 10;
playerY = 10;

blockImageWidth = 60;
blockImageHeight = 60;

var playerObject = "";
var blockImageObject = "";

function playerUpdate() {
	fabric.Image.fromURL("player.png", function (Img) {
		playerObject = Img;
		playerObject.scaleToWidth(150);
		playerObject.scaleToHeight(140);
		playerObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(playerObject);
	});
}

function newImage(getImage) {
	fabric.Image.fromURL(getImage, function (Img) {
		blockImageObject = Img;
		blockImageObject.scaleToWidth(blockImageWidth);
		blockImageObject.scaleToHeight(blockImageHeight);
		blockImageObject.set({
			top: playerY,
			left: playerX
		});
		canvas.add(blockImageObject);
	});
}


window.addEventListener("keydown", myKeyDown);
function myKeyDown(e) {
	keyPressed = e.keyCode;
	if (e.shiftKey == true && keyPressed == '80') {
		blockImageHeight= blockImageHeight + 10
		blockImageWidth= blockImageWidth + 10
		document.getElementById("currentHeight").innerHTML= blockImageHeight
		document.getElementById("currentWidth").innerHTML= blockImageWidth
	}
	if (e.shiftKey && keyPressed == '77') {
		blockImageHeight= blockImageHeight - 10
		blockImageWidth= blockImageWidth - 10
		document.getElementById("currentHeight").innerHTML= blockImageHeight
		document.getElementById("currentWidth").innerHTML= blockImageWidth
	}

	if (keyPressed == '38') {
		up();
	}
	if (keyPressed == '40') {
		down();
	}
	if (keyPressed == '37') {
		left();
	}
	if (keyPressed == '39') {
		right();
	}
	if (keyPressed == '87') {
		newImage('wall.jpg');
	}
	if (keyPressed == '71') {
		newImage('ground.png');
	}
	if (keyPressed == '76') {
		newImage('light_green.png');
	}
	if (keyPressed == '84') {
		newImage('trunk.jpg');
	}
	if (keyPressed == '82') {
		newImage('telhado_real.jpg');
	}
	if (keyPressed == '89') {
		newImage('yellow_wall.png');
	}
	if (keyPressed == '68') {
		newImage('dark_green.png');
	}
	if (keyPressed == '85') {
		newImage('unique.png');
	}
	if (keyPressed == '67') {
		newImage('cloud.jpg');
	}
	if (keyPressed == '65') {
		newImage('quadrado-branco.jpg');
	}
	if (keyPressed == '83') {
		newImage('ceu.jpg');
	}

}
function up() {
	if(playerY > 0){
		playerY= playerY - blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate() 
	}
}

function down() {
	if(playerY< 500){
		playerY= playerY+ blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate()
	}
}

function left() {
	if(playerX >0);
	playerX= playerX - blockImageHeight;
	canvas.remove(playerObject);
	playerUpdate()
}

function right() {
	if(playerX< 850);
	playerX= playerX+ blockImageHeight;
	canvas.remove(playerObject);
	playerUpdate()
}
