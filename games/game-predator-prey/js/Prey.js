/***********************************************

Prey

A class that defines how a prey behaves in this
simulation. Mostly that means updating and
displaying.

***********************************************/

// Prey(x,y,radius,maxSpeed,fillColor)
//
// The Prey constructor. Sets up the properties of the
// prey with values specifies in the arguments or with
// default values.
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

// update()
//
// Update velocity randomly, update prey position based on velocity,
// wrap at the canvas edges.
Prey.prototype.update = function () {
  // With 5% probability, update the velocity to random values
  // to create unpredictable movement
  if (random() < 0.05) {
    this.vx = random(-this.maxSpeed,this.maxSpeed);
    this.vy = random(-this.maxSpeed,this.maxSpeed);
  }

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
}

// display()
//
// Displays the prey as a circle with alpha based on health
Prey.prototype.display = function () {
  // Don't display if we're dead
  // Technically this is also checked in the script.js draw()
  // but it doesn't hurt
  if (!this.alive) {
    return;
  }

  // Save style settings to avoid trouble
  push();
  noStroke();
  // Set the alpha of the predator's fill color based on health
  this.color.setAlpha(map(this.health,0,100,0,255))
  fill(this.color);
  // Draw the prey as a circle
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
