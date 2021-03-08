class chain {

    constructor(BodyA, BodyB) {
       
        var op = {
        
            bodyA : BodyA, 
            bodyB : BodyB,
            stiffness : 1,
            length : 50

        }

        this.body = Matter.Constraint.create(op);
        World.add(world, this.body)
       
        this.BodyA = BodyA
        this.BodyB = BodyB

    }

display() {

    line(this.BodyA.position.x,this.BodyA.position.y, this.BodyB.position.x, this.BodyB.position.y)


}

}