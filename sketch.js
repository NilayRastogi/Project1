const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world;



function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  engine=Engine.create();
  world=engine.world
  var options={isStatic:true}

object=Bodies.rectangle(200,380,400,20,options);
  World.add(world,object);
  console.log(object);
var ball_options={restitution:1}
ball= Bodies.circle(200,100,20,ball_options);
  World.add(world,ball)

}

function draw() {
  background("blue");
  Engine.update(engine);
 rectMode(CENTER)
  
 rect(object.position.x,object.position.y,400,20) ;
 ellipseMode(RADIUS);
 ellipse(ball.position.x,ball.position.y,20,20);
 
  drawSprites();
}