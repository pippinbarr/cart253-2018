/***********************************************

Predator

A class that defines how a predator behaves in this
simulation. Mostly that means updating,
displaying, and handling overlaps and eating.

***********************************************/

// Predator(x,y,radius,maxSpeed,fillColor)
//
// The Predator constructor. Sets up the properties of the
// predator with values specifies in the arguments or with
// default values.
function Predator(x,y,radius,maxSpeed,fillColor) {
  // Movement: Position, velocity, maximum speed
  this.x = x;
  this.y = y;
  this.tx = random(1000);
  this.ty = random(1000);
  this.vx = 0;
  this.vy = 0;
  this.maxSpeed = maxSpeed;
  // Appearance: Size and color
  this.radius = radius;
  this.color = fillColor;
  // Life: health and alive flag
  this.health = 100;
  this.alive = true;
}

// overlap(prey)
//
// Checks whether the predator overlaps with the prey passed
// as an argument. Returns true if so, false otherwise.
Predator.prototype.overlap = function (prey) {
  // Calculate distance between this object (the predator) and
  // the prey object passed as a parameter
  var d = dist(this.x,this.y,prey.x,prey.y);
  // Check if the distance is less that the sum of the two
  // radii of the objects - i.e. they overlap
  if (d < this.radius + prey.radius) {
    return true;
  }
  else {
    return false;
  }
}

// eat(prey)
//
// Increases the predator's health, decreases the prey's health,
// sets the prey to be dead if it dies from this "bite".
Predator.prototype.eat = function (prey) {
  // Raise predator's health within constrained range
  this.health = constrain(this.health + 1,0,100);
  // Lower prey's health within constrained range
  prey.health = constrain(prey.health - 10,0,100);
  // Check if the prey has no health left
  if (prey.health === 0) {
    // If so, it's dead
    prey.alive = false;
  }
}

// update()
//
// Update predator position based on velocity, wrap at the canvas edges,
// reduce health (from exertion) and die if it reaches 0.
Predator.prototype.update = function () {
  // Don't update if it's dead
  if (!this.alive) {
    return;
  }

  // Calculate velocity from Perlin noise
  this.vx = map(noise(this.tx),0,1,-this.maxSpeed,this.maxSpeed);
  this.vy = map(noise(this.ty),0,1,-this.maxSpeed,this.maxSpeed);

  this.tx += 0.01;
  this.ty += 0.01;

  // Move
  this.x += this.vx;
  this.y += this.vy;

  // Wrap
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

  // Reduce health and die if needed
  this.health = constrain(this.health - 0.5,0,100);
  if (this.health === 0) {
    this.alive = false;
  }
}

// display()
//
// Displays the predator as a circle with alpha based on health
Predator.prototype.display = function () {
  // Don't display if we're dead
  if (!this.alive) {
    return;
  }

  // Save style settings to avoid trouble
  push();
  noStroke();
  // Set the alpha of the predator's fill color based on health
  this.color.setAlpha(map(this.health,0,100,0,255))
  fill(this.color);
  // Draw the predator as a circle
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
