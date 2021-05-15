var engine, world;

var ball;
var ground, platform;
var gameState;
// function preload(){

// ground=loadImage("ground.png")	
// }

function setup() {
	createCanvas(windowWidth-20, windowHeight-20);
	// createCanvas(800, 800);

	engine = Matter.Engine.create();
	world = engine.world;


	ground = new GROUND(width / 4, height / 2, 500, 20);
	// ground2 = new GROUND(1000, height/2, 10, 100);

	ball = new BALL(200, height / 2 - 100, 30);
	goal = new GOAL(1000, ball.body.position.y, 10)

	Matter.Engine.run(engine);
}


function draw() {

	background(0);

	
console.log(ball.body.position.y)
// console.log(ball.body.position.x);

	//if(keyCode == )

	if (keyWentDown("d")) {
	//	Matter.Body.applyForce(ball, {x:200}, {x : 2 , y :0})
	ball.body.position.x = ball.body.position.x+7;
		console.log("right");
	}
	if (keyWentDown("a") || keyWentDown("LEFT_ARROW")) {
		ball.body.position.x = ball.body.position.x-2;
    }

     if (keyWentDown("s")) {       //38 jump,   37 left arrow ,   39 right
 	ball.body.position.y=ball.body.
	}

	ball.display();
	ground.display();
	goal.display();

	drawSprites();
}

//  song  =>  https://www.youtube.com/watch?v=E6BtLJlC48A