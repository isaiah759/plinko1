const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;

 ground= new Ground(200,height,100,10); 

}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();

  drawSprites();
}