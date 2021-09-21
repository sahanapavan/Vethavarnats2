class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        
        this.Slingshot2 = Constraint.create(options);
        this.pointB = pointB;
        
        World.add(world, this.Slingshot2);
    }
    
    attach(body)
{
    this.Slingshot2.bodyA=body;

}

    fly(){
        this.Slingshot2.bodyA = null;
    }

    display(){
        if(this.Slingshot2.bodyA){
        
            var pointA = this.Slingshot2.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke("turquoise");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
           // line(pointA.x, pointA.y, pointB.x, pointB.y);
           
        }
    
}
}