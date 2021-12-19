
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;

var ball;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	
	//crear los cuerpos aquí.
	ball = Bodies.circle(400,400,10, ball_options);
	World.add(world,ball);

	var ball_options ={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	   }
	   
	  

	Engine.run(engine);
	}
	
	
function draw() {
  rectMode(CENTER);
  background(100);
  
  drawSprites();
	
}



