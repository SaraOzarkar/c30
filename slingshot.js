class Slingshot{


    constructor(a,b){
var options={
    bodyA:a,
    bodyB:b,
    length:10,
    stiffness:0.3
}
this.rope= Constraint.create(options)
World.add(world,this.rope)
    }
    display(){
        strokeWeight(2)
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
            this.rope.bodyB.position.x,this.rope.bodyB.position.yhttps://saraozarkar.github.io/class30/)
    }
}