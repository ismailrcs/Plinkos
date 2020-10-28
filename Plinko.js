class Plinkos {

constructor(x,y){

var options = {

 isStatic : true


}

this.body = Bodies.circle(x,y,5,options);

this.x =x;
this.y =y;

World.add(world,this.body);



}

display(){


  ellipseMode(RADIUS);  

fill("white");

 var  pos = this.body.position;

 ellipse(pos.x , pos.y , 5);



}

}