class BALL {
  constructor(x, y, r) {
    var options = { friction : 1};
    this.body = Matter.Bodies.circle(x, y, r, options);
    this.radius = r * 2;
    // this.image = loadImage("ball_Img.png");
    this.image = loadImage("ball.png");
    Matter.World.add(world, this.body);
  }

  display() {
    // var angle = this.body.angle;
    // push();
    // translate(this.body.position.x, this.body.position.y);
    // rotate(angle);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, this.radius, this.radius);
    // pop();
  }
}
