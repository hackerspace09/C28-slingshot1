class Slingshot{
    constructor(aBody,bPoint){
        var options = {
            bodyA: aBody,
            pointB: bPoint,
            stiffness: 0.04,
            length: 10   
           }
        this.sling = Constraint.create(options);
        World.add(world,this.sling);
    }

    fly(){
        this.sling.bodyA = null
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
       
    }
}

