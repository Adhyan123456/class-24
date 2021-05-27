class Log {

    constructor(x,y,height,angle)
    {
   //constructor is also a function which is called automatically and contains properties of a class
   
   var options={
   
     'restitution' :0.8,
    ' friction': 1.0,
     'density ': 1.0,
   }
    this.body =Bodies.rectangle(x,y,20,height,options);
    this.x=x;
    this.y=y;
    this.width=20;
    this.height=height;
    Matter.Body.setAngle(this.body,angle)
    World.add(world,this.body)
    }
   
   
   display()
   {
   var pos=this.body.position;
   var angle=this.body.angle
   
   push ();
   translate (pos.x,pos.y)
//    angleMode(RADIANS).
rectMode(CENTER)
   rotate(angle);
   strokeWeight (5);
     stroke ("red")
      fill ("brown")
     rectMode(CENTER)
     rect(0,0,this.width,this.height);
   
     pop ();

     //console.log("this is display function of log class")
   }
   
   
   
   
   
   
   
   
   
   
   
   
   }