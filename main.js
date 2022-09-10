
// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");
//Set initial positions for ball and hole images.
ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hold_obj = Img;
		hold_obj.scaleToWidth(50);
		hold_obj.scaleToHeight(50);
		hold_obj.set({
			top:hole_y,
			left:hole_x

		});
		canvas.add(hold_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left_ball=x
		});
		canvas.add(ball_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if((ball_x==hole_x)&&(ball_y==holye_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have Hit the Goal!!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	else{
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
	
	function down()
	{
		if(ball_y <=450)
		{
			ball_y = ball_y + block_image_height;
			console.log("block_image_height = " + block_image_height);
			console.log("When Down arrow key is pressed, X = " + ball_x + " , Y = "+ball_y);
			canvas.remove(ball_obj);
			new_img();
		}
	}

	function up()
	{
		if(ball_y >=0)
	{
		ball_y = ball_y - 10;
		console.log("When up arrow is pressed, x = " + ball_x + "y = " +ball_y);
		canvas.remove(ball_obj);
		new_img();
	}
		
	}

	function left()
	{
		if(ball_x >5)
		{
		ball_x = ball_x - 10;
		console.log("When left arrow is pressed, x = " + ball_x + "y = " +ball_y);
		canvas.remove(ball_obj);
		new_img();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x = ball_x + 10;
			console.log("When right arrow is pressed, x = " + ball_x + "y = " +ball_y);
			canvas.remove(ball_obj);
			new_img();
		}
	}
	
}

