const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var dustbinImage,dustbinObject,groundObject,paperObj;


function preload(){
dustbinImage=loadImage("dustbingreen.png")	
  }

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;
	dustbinObject=new dustbin(800,325,15,220);
	paperObj=new paper(150,320,70);
	groundObject=new ground(600,392.5,1200,15);
}
function draw() {
	background("red");

	Engine.update(engine);
	dustbinObject.display();
	paperObj.display();
	groundObject.display();

  }
  function keyPressed()
  {
	if(keyCode === UP_ARROW)
	{
	  Body.applyForce(paperObj.body,paperObj.body.position,{x:920,y:-920});
	}
  }
