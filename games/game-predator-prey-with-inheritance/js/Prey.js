/***********************************************

Prey

A class that defines how a prey behaves in this
simulation. Mostly that just means extending the basic
Entity class with extra updating information to move
randomly.

***********************************************/

// A Prey is a kind of Entity so we first set up its
// prototype to be the same as an Entity's
Prey.prototype = Object.create(Entity.prototype);
// Then we need to set the constructor of its prototype
// to point at the correct constructor function, which is Prey()
Prey.prototype.constructor = Prey;

// Prey(x,y,radius,maxSpeed,fillColor)
//
// The Prey constructor. Just calls the Entity constructor
// with all the parameters passed along.
function Prey(x,y,radius,maxSpeed,fillColor) {
  // We call the Entity constructor by using .call() on the Entity
  // class (actually the constructor function).
  // The first parameters is "this" so that it sets up the current
  // Prey object.
  Entity.call(this,x,y,radius,maxSpeed,fillColor);
}

// update()
//
// Extends the Entity update function by setting velocity to random
// values at random intervals
Prey.prototype.update = function () {
  // With 5% probability, update the velocity to random values
  // to create unpredictable movement
  if (random() < 0.05) {
    this.vx = random(-this.maxSpeed,this.maxSpeed);
    this.vy = random(-this.maxSpeed,this.maxSpeed);
  }

  // Call the Entity's update function using .call()
  // Again we specify "this" as the parameter to make sure update
  // using _this_ object's properties and functions.
  Entity.prototype.update.call(this);
}
