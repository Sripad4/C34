const Bodies=Matter.Bodies;
const Engine=Matter.Engine;
const World =Matter.World;
const Constraint=Matter.Constraint;

var engine, world

function setup(){
    createCanvas(3000,1000)
    engine=Engine.create();
    world=engine.world

    ground = new Ground(500,900,2000,10)

    ball = new Ball(100,400,60,60)

    rope = new Rope(ball.body,{x:500,y:50})

    box1=new Box(700,60,70,70);
    box2=new Box(600,60,70,70);
    box3=new Box(500,60,70,70);
    box4=new Box(700,60,70,70);
    box5=new Box(600,60,70,70);
    box6=new Box(500,60,70,70);

    box7=new Box(700,60,70,70);
    box8=new Box(600,60,70,70);
    box9=new Box(500,60,70,70);
    box10=new Box(700,60,70,70);
    box11=new Box(600,60,70,70);
    box12=new Box(500,60,70,70);


}

function draw(){
    background("white")
    Engine.update(engine)

    ground.display()
    ball.display()
    rope.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()

   
}
function mouseDragged(){
    
     Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    
}

