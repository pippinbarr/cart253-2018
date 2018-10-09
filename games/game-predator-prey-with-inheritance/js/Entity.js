/***********************************************

Entity

A class that defines how a moving entity behaves in this
simulation. Mostly that means updating position,
displaying, and checking overlaps.

***********************************************/

// Entity(x,y,radius,maxSpeed,fillColor)
//
// The Entity constructor. Sets up the properties of the
// entity with values specifies in the arguments or with
// default values.
function Entity(x,y,radius,maxSpeed,fillColor) {
  // Movement: Position, velocity, maximum speed
  this.x = x;
  this.y = y;
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

// overlap(other)
//
// Checks whether the entity overlaps with the other entity passed
// as an argument. Returns true if so, false otherwise.
Entity.prototype.overlap = function (other) {
  // Calculate distance between this entity and
  // the other entity passed as a parameter
  var d = dist(this.x,this.y,other.x,other.y);
  // Check if the distance is less that the sum of the two
  // radii of the entities - i.e. they overlap
  if (d < this.radius + other.radius) {
    return true;
  }
  else {
    return false;
  }
}

// update()
//
// Update entity position based on velocity, wrap at the canvas edges,
// reduce health (from exertion) and die if it reaches 0.
Entity.prototype.update = function () {
  // Don't update if it's dead
  if (!this.alive) {
    return;
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

  // Reduce health and die if needed
  this.health = constrain(this.health - 0.1,0,100);
  if (this.health === 0) {
    this.alive = false;
  }
}

// display()
//
// Displays the entity as a circle with alpha based on health
Entity.prototype.display = function () {
  // Don't display if we're dead
  if (!this.alive) {
    return;
  }

  // Save style settings to avoid trouble
  push();
  noStroke();
  // Set the alpha of the entity's fill color based on health
  this.color.setAlpha(map(this.health,0,100,0,255))
  fill(this.color);
  // Draw the entity as a circle
  ellipse(this.x,this.y,this.radius * 2);
  pop();
}
