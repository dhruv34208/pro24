class Computerarcher{
    constructor(x,y,width,height,archerangle){
var options {
isStatic:false
}
this.body=bodies.rectangle(x,y,width,height,options)
this.x=x
this.y=y
this.width=width
this.height=height

this.image=loadImage("./assets/computerArcher.png)


World.add(world,this.body)
    }
display(){
   var pos=this.body.position;
   var angle=this.body.angle ;
   Push()
   translate(pos.x,pos.y)
   rotate(angle)
   ImageMode(CENTER)
image(this.image,0,0,this.width,this.height)
Pop()
Matter.Body.setAngle(this.body,-PI/2)
Shoot(archerangle){
    var velocity=Matter.Body.fromAngle(archerangle)
    velocity.mult(20);
    Matter.Body.setStatic(this.body,false)
    Matter.Body>setVelocity(this.body{x:velocity.x;y:velocity.y})

}
if(keyCode==="up"&&computerarcher.body.angle<1.77){
    angleValue=0.1;
  }else{
    angleValue=-0.1;
  }
  if(keyCode==="down"&&computerarcher.body.angle<1.47){
    angleValue=-0.1;
  }else{
    angleValue=0.1;
  }
}



}