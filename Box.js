class Box {

 constructor(x,y,width,height)
 {
//constructor is also a function which is called automatically and contains properties of a class

var options={

  'restitution' :0.5,
 ' friction' :2,
  'density ': 4,
}
 this.body =Bodies.rectangle(x,y,width,height,options);
 this.x=x;
 this.y=y;
 this.width=width;
 this.height=height;

 World.add(world,this.body)
 }


display()
{
var pos=this.body.position;
var angle=this.body.angle

push ();
translate (pos.x,pos.y)
//angleMode(RADIANS)
rotate(angle);
strokeWeight (5);
  stroke ("green")
   fill ("white")
  rectMode(CENTER)
  rect(0,0,this.width,this.height);

  pop ();
}












}