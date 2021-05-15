class GROUND {

    constructor(x, y, w, h) {
        var options = { isStatic: true };
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        //this.image = loadImage("ground.png");
        Matter.World.add(world, this.body);
    }

    display() {
        // imageMode(CENTER);
        // image(this.image , this.body.position.x , this.body.position.y,this.width,this.height);
        rectMode(CENTER);
        rect(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}