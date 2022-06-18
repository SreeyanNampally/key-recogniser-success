canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg()
{

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
		keyPressed = e.keyCode;
		var s1 = "hello";
		var s2 = keyPressed;
		var s3 = s1.concat(s2);
		console.log(s3);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			alphabetkey();
			document.getElementById("d1").innerHTML="You pressed an Alphabet key";
			console.log("alphabet key");
		}
		else if((keyPressed >=48 && keyPressed<=57)){
			numberkey();
			document.getElementById("d1").innerHTML="You pressed a Number key";
			console.log("number key");
		}
		else if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
			document.getElementById("d1").innerHTML="You pressed an arrow key";
			console.log("arrow key");
		}
		else if((keyPressed ==17||keyPressed==18||keyPressed==27))
		{
			specialkey();
			document.getElementById("d1").innerHTML="You pressed a Special key";
			console.log("Special key");
		}
			else{
				otherkey();
				document.getElementById("d1").innerHTML="You pressed a symbol or an other key";
				console.log("symbol or other key")
			}
}

function alphabetkey()
{
	console.log("enter console log method");
	img_image="Alpkey.png";
	add();

}
function numberkey()
{
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	img_image="arrkey.png";
	add();
}
function specialkey()
{
	img_image="spkey.png";
	add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
	
