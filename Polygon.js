class Polygon{
    constructor(x,y,r){
var options={
    isStatic:false,
    resitution: 0.3,
    friction:0.5,
    density:1.2
}
this.polygonImage = loadImage("polygon.png")
//this.polygon.scale = 0.5;
this.x =x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
    }

    display(){
    //image(this.polygon,200,20);
  
        push()
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        //strokeWeight(3);
      // image(this.polygonImage,polygon.position.x,polygon.position.y, 40,40)
      image(this.polygonImage,0,0,this.r,this.r);
      
      // ellipse(0,0,this.r,this.r);
        pop();
    }
}