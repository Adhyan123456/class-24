class Ground{

    constructor(x,y,width,height){

var option={

isStatic:true,



}

this.body =Bodies.rectangle(x,y,width,height,option);
this.x=x;
 this.y=y;
 this.width=width;
 this.height=height;

World.add(world,this.body)
    }



    display(){
        var pos=this.body.position;
         strokeWeight (5);
        stroke ("green");
        fill ("brown")
       rectMode(CENTER)
       rect(pos.x,pos.y,this.width,this.height);







    }






















    }

