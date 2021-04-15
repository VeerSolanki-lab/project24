
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const body = Matter.Body;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
log1 = new Box(980,350,250,20);
ground = new Ground(600,380,1200,30);
log2 = new Box(865,300,20,100);
log3 = new Box(1095,300,20,100);
paper = new Paper(100,60,10);
Engine.run(engine);
}


function draw() {
	rectMode(CENTER)
    background(0);
    Engine.update(engine);
   log1.display();
   ground.display();
   log2.display();
   log3.display();
   paper.display();
   
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		
		Matter.Body.applyForce(paper.body, paper.body.position, {x:20,y:-20})
	}
}

