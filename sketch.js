const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,iron,rubber,stone;


function setup(){
    var canvas = createCanvas(1000,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height-20,1200,20);
    hammer = new Hammer(10,100);

    iron = new Iron(100,10,100,10);
    rubber = new Rubber(900,10,50,50);
    stone = new Stone(550,10,100,100);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();    
    rubber.display();
    stone.display();
}
