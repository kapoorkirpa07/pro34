const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite =  Matter.Composite;
var engine, world;
var grounds;
var rope;
var ball;
var link;
var cutbtn;
var lvlGroup;

var box1,box2,box3,box4,box5,box6;
var box7,box8,box9,box10,box11;
var box12,box13,box14,box15;
var box16,box17,box18;
var box19,box20;
var box21;

function preload(){

}

function setup() {
  createCanvas(900,410);

  engine = Engine.create();
  world = engine.world;

lvlGroup = new Group()

  rope = new Rope(5,{x:100,y:100});
  grounds = new Ground(450,400,900,10);

  var options = {
    density:0.001
  }
  ball = Bodies.circle(200,200,20,options)
  Matter.Composite.add(rope.body,ball)
  link = new Link(rope,ball)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  //level 1
  box1 =  new Box(300,380,40,30);
  box2 =  new Box(340,380,40,30);
  box3 =  new Box(380,380,40,30);
  box4 =  new Box(420,380,40,30);
  box5 =  new Box(460,380,40,30);
  box6 =  new Box(500,380,40,30);
  lvlGroup.add(box1)
  lvlGroup.add(box2)
  lvlGroup.add(box3)
  lvlGroup.add(box4)
  lvlGroup.add(box5)
  lvlGroup.add(box6)
  

  //level 2
  box7 =  new Box(320,350,40,30);
  box8 =  new Box(360,350,40,30);
  box9 =  new Box(400,350,40,30);
  box10 =  new Box(440,350,40,30);
  box11 =  new Box(480,350,40,30);
  lvlGroup.add(box7)
  lvlGroup.add(box8)
  lvlGroup.add(box9)
  lvlGroup.add(box10)
  lvlGroup.add(box11)
 
//level 3
box12 =  new Box(340,320,40,30);
box13 =  new Box(380,320,40,30);
box14 =  new Box(420,320,40,30);
box15 =  new Box(460,320,40,30);
lvlGroup.add(box12)
lvlGroup.add(box13)
lvlGroup.add(box14)
lvlGroup.add(box15)


//level 4
box16 =  new Box(360,290,40,30);
box17 =  new Box(400,290,40,30);
box18 =  new Box(440,290,40,30);
lvlGroup.add(box16)
lvlGroup.add(box17)
lvlGroup.add(box18)



//level 5
box19 =  new Box(380,260,40,30);
box20 =  new Box(420,260,40,30);
lvlGroup.add(box19)
lvlGroup.add(box20)

//level 6

box21 = new Box(400,230,40,30);
lvlGroup.add(box21)


cutbtn = createImg("cut_button.png");
cutbtn.position(80,75);
cutbtn.size(50,50);
cutbtn.mouseClicked(drop);
imageMode(CENTER)
}
function draw(){ 

  background("pink");
  Engine.update(engine);
 // drawSprites();
  ellipse(ball.position.x,ball.position.y,20,20);
  grounds.display();
  rope.show();
force()


  fill("yellow")
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();

  fill("orange")
  box7.display();
  box8.display(); 
  box9.display();
  box10.display(); 
  box11.display(); 

  fill("green")
  box12.display();
  box13.display();
  box14.display();
  box15.display();

  fill("red")
  box16.display();
  box17.display();
  box18.display();

  fill("purple")
  box19.display();
  box20.display();

  fill("brown")
  box21.display();

  if(ball.isTouching(lvlGroup)){
    box21.visible =  false
}
  
}

function drop(){
  rope.break()
  link.detach()
  link =  null
}

function force(){
 
    Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
 }


/*function collision(){
  var Collision = Matter.SAT.collides(ball,box21)
  if(Collision.collided){
    ball21.visible = false
}
}*/