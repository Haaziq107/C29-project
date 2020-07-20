var block,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground(400,380,800,10);

  block9 = new Block(330,235,70,70 );
  block8 = new Block(350,235,70 ,70 );
  block7 = new Block(380,235,70 ,70 );
  block6 = new Block(400,235,70 ,70 );
  block5 = new Block(430 ,235,70 ,70 );
  //level three
  block4 = new Block(380,200,70 ,70 );
  block3 = new Block(400,200,70 ,70 );
  block2 = new Block(420,200,70 ,70 );
   //top
  block1 = new Block(390,165,70,70);

}

function draw() {
  background(255,255,255); 
  Engine.update(engine); 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  drawSprites();
  ground.display();
}