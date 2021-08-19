
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var ball
var ground
var target1
var target2
var target3
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	ground = new Ground (400,600,800,20)
    target1 = new Target (550,580,200,20);
	target2 = new Target (450,540,20,100);
	target3 = new Target (640,540,20,100);
	ball = new Ball (90,560,20,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  ball.display();
  target1.display();
  target2.display();
  target3.display();
  drawSprites();
 


  fill("white")
  text(mouseX+","+mouseY,mouseX,mouseY)
}


function keyPressed() {
  if (keyCode === UP_ARROW) {

      Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y:-20})
  }
}
