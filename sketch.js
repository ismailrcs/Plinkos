const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];

var plinkos = [];

var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  createSprite(400, 200,1,1);

  engine = Engine.create();
    world = engine.world;


 grnd = new Ground(240,700,460,10);


 for( var k = 0 ; k <= width ; k = k+80 ){


  divisions.push( new Divisions(k , height - divisionHeight/2 ,10 ,divisionHeight) )


 }

 console.log(divisions);

 for(var j =40 ; j <= width ; j = j+50){


plinkos.push(new Plinkos(j,75));


 }


 for( var o =15 ; o <= width-10 ; o = o+50){


  plinkos.push( new Plinkos(o,175));
  

 }



  if(frameCount%60===0){

 particles.push( new Particles (random(width/2 -10 , width/2 +10), 10, 10));

    
  }




}

function draw() {
  background("black");  
  
  Engine.update(engine);
  
 grnd.display(); 

 for( var i =0 ; i <particles.length ; i++){


  particles[i].display;



 }
 

 for( var m =0 ; m < divisions.length ; m++){


  divisions[m].display;



 }

 for( var n =0 ; n <plinkos.length ; n++){


  plinkos[n].display;



 } 




  drawSprites();
}