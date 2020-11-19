
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper, ground, bin1, bin2, bin3;

function setup() {
	createCanvas(1200,400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,380,1200,15);
  paper = new Paper(100,360);
  bin1 = new Dustbin(900,363,200,20);
  bin2 = new Dustbin(800,320,20,105);
  bin3 = new Dustbin(1000,320,20,105);
  var render = Render.create
  ({ element: document.body,
     engine: engine,
      options: { width: 1200, height: 700, wireframes: false 
      } 
    });
  Engine.run(engine);
  
  
}


function draw() {
  background(0);
 ground.display();
 paper.display();
 bin1.display();
 bin2.display();
 bin3.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:80,y:-75});
  }
 // paper.body.position.y += 2;
}



