const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
var bob;

function setup() {
 var canvas= createCanvas(800,800);
 engine = Engine.create();
 world = engine.world;
 log=Bodies.rectangle(400,200,100,40);
 World.add(world,this.log);
 bob = new Bob(400,200,1);
  //creating the slingShot by defining the two bodies to be attached
    pendulum = new Pendulum(bob.body,{x:400,y:200});

  
  
}


function draw(){
background(255);
Engine.update(engine);
fill("brown");
rectMode(CENTER);
rect(400,200,100,40);
bob.display();
pendulum.display();

  drawSprites();
}

function mouseDragged(){
  
  Matter.Body.setPosition(bob.body,{x:mouseX,y:mouseY});
}
 

  