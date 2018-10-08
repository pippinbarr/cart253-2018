var predator;

var numPrey = 100;
var prey = [];

function preload() {

}

function setup() {
  createCanvas(500,500);
  predator = new Predator(width/2,height/2,25,5,color(255,0,0));
  for (var i = 0; i < numPrey; i++) {
    prey.push(new Prey(random(0,width),random(0,height),5,7,color(0,0,255)));
  }
}

function draw() {
  background(200);

  predator.handleInput();
  predator.update();
  predator.display();

  for (var i = 0; i < prey.length; i++) {
    if (prey[i].alive) {
      prey[i].update();
      prey[i].display();
      if (predator.overlap(prey[i])) {
        predator.eat(prey[i]);
      }
    }
  }
}

function Predator(x,y,radius,maxSpeed,fillColor) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.radius = radius;
  this.color = fillColor;
  this.maxSpeed = maxSpeed;
  this.health = 100;
  this.alive = true;
}

Predator.prototype.handleInput = function () {
  if (!this.alive) {
    return;
  }

  if (keyIsDown(LEFT_ARROW)) {
    this.vx = -this.maxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    this.vx = this.maxSpeed;
  }
  else {
    this.vx = 0;
  }

  if (keyIsDown(UP_ARROW)) {
    this.vy = -this.maxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    this.vy = this.maxSpeed;
  }
  else {
    this.vy = 0;
  }
}

Predator.prototype.overlap = function (prey) {
  if (dist(this.x,this.y,prey.x,prey.y) < this.radius + prey.radius) {
    return true;
  }
  else {
    return false;
  }
}

Predator.prototype.eat = function (prey) {
  this.health = constrain(this.health + 1,0,100);
  prey.health -= 1;
  if (prey.health <= 0) {
    prey.alive = false;
  }
}


Predator.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }

  this.health -= 0.5;
  if (this.health <= 0) {
    this.alive = false;
  }
}

Predator.prototype.display = function () {
  if (!this.alive) {
    return;
  }

  push();
  noStroke();
  this.color.setAlpha(map(this.health,0,100,0,255))
  fill(this.color);
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}



function Prey(x,y,radius,maxSpeed,fillColor) {
  this.x = x;
  this.y = y;
  this.maxSpeed = maxSpeed;
  this.vx = random(-this.maxSpeed,this.maxSpeed);
  this.vy = random(-this.maxSpeed,this.maxSpeed);
  this.radius = radius;
  this.color = fillColor;
  this.health = 100;
  this.alive = true;
}

Prey.prototype.update = function () {
  if (random() < 0.05) {
    this.vx = random(-this.maxSpeed,this.maxSpeed);
    this.vy = random(-this.maxSpeed,this.maxSpeed);
  }

  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0) {
    this.x += width;
  }
  else if (this.x > width) {
    this.x -= width;
  }
  if (this.y < 0) {
    this.y += height;
  }
  else if (this.y > height) {
    this.y -= height;
  }
}

Prey.prototype.display = function () {
  push();
  noStroke();
  this.color.setAlpha(map(this.health,0,100,0,255))
  fill(this.color);
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
