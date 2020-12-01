const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var ball,ground,engine,world;

function setup() {
  createCanvas(800,400);
engine=Engine.create();
world=engine.world;

var ballbounce={
  restitution:1
}

ball=Bodies.circle(200,200,25,ballbounce);
World.add(world,ball);

var ground_op={
  isStatic:true

}

ground=Bodies.rectangle(400,380,800,20,ground_op);
World.add(world,ground);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  rect(ground.position.x,ground.position.y,800,20);

  
}