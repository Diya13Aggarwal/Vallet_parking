//Create a reference for canvas 
canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
//Give specific height and width to the car image
greencar_width=100;
greencar_height=100;
greencar_x=5;
greencar_y=225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    greencar_imgtag=new Image();
    greencar_imgtag.onload=uploadgreencar;
    greencar_imgtag.src=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgtag,greencar_x,greencar_y,greencar_width,greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function left() {
    if(greencar_x >= 0) {
        greencar_x=greencar_x-10;
        console.log("when left arrow is pressed x axis="+greencar_x+", y axis="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function right() {
    if(greencar_x <= 700) {
        greencar_x=greencar_x+10;
        console.log("when right arrow is pressed x axis="+greencar_x+", y axis="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function up() {
    if(greencar_y >= 0) {
        greencar_y=greencar_y-10;
        console.log("when up arrow is pressed x axis="+greencar_x+", y axis="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}

function down() {
    if(greencar_y <= 500) {
        greencar_y=greencar_y+10;
        console.log("when down arrow is pressed x axis="+greencar_x+", y axis="+greencar_y);
        uploadBackground();
        uploadgreencar();
    }
}