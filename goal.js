class GOAL {

    constructor(x, y, w) {
        var options = { isStatic: true };
        this.body = Matter.Bodies.rectangle(x, y, w, w, options);
        this.width = w;
        // this.body.shapeColor="yellow";
        Matter.World.add(world, this.body);
    }

    display() {
        push()
        rectMode(CENTER);
        fill("yellow")
        rect(this.body.position.x, this.body.position.y, this.width, this.width);
        pop()
    }
}