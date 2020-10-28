const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles = [];

var plinkos = [];

var divisions = [];

var divisionHeight = 300;

var score = 0;

var particle;

var count = 0;



var gameState = "PLAY";

function setup() {
  createCanvas(485,700);
  createSprite(400, 200,1,1);

  engine = Engine.create();
    world = engine.world;


 grnd = new Ground(240,620,470,10);

 for( var k = 0 ; k <= width ; k = k+80 ){


  divisions.push( new Divisions(k , height - divisionHeight + 70 ,10 ,divisionHeight) )


 }

 for(var j =40 ; j <= width ; j = j+50){


plinkos.push(new Plinkos(j,75));


 }


 for( var o =15 ; o <= width-10 ; o = o+50){


  plinkos.push( new Plinkos(o,125));
  

 }


  for(var l =15 ; l <= width ; l = l+50){


  plinkos.push(new Plinkos(l,175));
  
  
   }

   for(var q =40 ; q <= width ; q = q+50){


    plinkos.push(new Plinkos(q,225));
    
    
     }

}

function draw() {
  background("black");  
  
  Engine.update(engine);

  if(count >= 5 ){

    gameState == "END";
  
   }
  
 grnd.display(); 

  fill("white");

    textSize(16);
  
  text("Score : " + score ,30,30);

 
  if( mousePressed()  )
  { 
    
    particles.display();
  
  }


 
 

 for( var m =0 ; m < divisions.length ; m++){


  divisions[m].display();



 }

 for( var n =0 ; n <plinkos.length ; n++){


  plinkos[n].display();



 } 


  fill("white");

 textSize(20);

 text("500",28,400);

 text("100",108,400);

 text("250",188,400);

 text("50",268,400);

 text("150",348,400);

 text("500",428,400);

 if(gameState == "END"){

  fill("white");
  textSize(28);

  text(" GAME OVER ", 100 ,450 )

 }


 

  drawSprites();
}

  function mousePressed(){

    if(gameState !== "END" ){

      count++;

      particle = new Particles(mouseX , 10 , 10 , 10);


    }

  }
