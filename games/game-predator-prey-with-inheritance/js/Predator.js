/***********************************************

Predator

A class that defines how a predator behaves in this
simulation. That means extending the basic
Entity class with input handling (so the user can control
the movement of the predator), and a function for eating
so the predator can eat prey.

***********************************************/

// Predator(x,y,radius,maxSpeed,fillColor)
//
// The Predator constructor. Sets up the properties of the
// predator with values specifies in the arguments or with
// default values.

// A Predator is a kind of Entity so we first set up its
// prototype to be the same as an Entity's
Predator.prototype = Object.create(Entity.prototype);
// Then we need to set the constructor of its prototype
// to point at the correct constructor function, which is Predator()
Predator.prototype.constructor = Predator;

// Predator(x,y,radius,maxSpeed,fillColor)
//
// The Predator constructor. Just calls the Entity constructor
// with all the parameters passed along.
function Predator(x,y,radius,maxSpeed,fillColor) {
  Entity.call(this,x,y,radius,maxSpeed,fillColor);
}

// handleInput()
//
// Checks which arrow keys are pressed and updates
// the predator's velocity accordingly.
Predator.prototype.handleInput = function () {
  if (!this.alive) {
    return;
  }

  // Standard code for updating movement based on keys.

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
