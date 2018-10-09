/***********************************************

Predator-Prey
Pippin Barr

A (very primitive) simulation of a predator in amongst
a whole lot of prey. The predator is controlled by the
users with the keyboard, the prey move around on their own.
If the predator overlaps a prey it "eats" it, reducing its
health and increasing the health of the predator. The
predator also losing health continuous just through
existing.

***********************************************/

// A variable to store the predator object we will instantiate
var predator;

// The number of prey we begin with
var numPrey = 100;
// An empty array to store the prey objects we will instantiate
var prey = [];

// preload()
//
// Nothing for now.
function preload() {

}

// setup()
//
// Creates the predator and prey objects
function setup() {
  createCanvas(500,500);
  // Instantiate the predator using the constructor
  predator = new Predator(width/2,height/2,25,5,color(255,0,0));
  // Run a loop numPrey times to create each prey
  for (var i = 0; i < numPrey; i++) {
    // Instantiate a new prey object
    var newPrey = new Prey(random(0,width),random(0,height),5,7,color(0,0,255));
    // Put the prey object into the array
    prey.push(newPrey);
  }
}

// draw()
//
// Handles user input, updates and displays the predator and all the prey,
// checks if anyone got eaten
function draw() {
  background(200);

  // Handle the predator's input, movement, and display
  predator.handleInput();
  predator.update();
  predator.display();

  // Loop through all the prey in the array (note the use of .length)
  // and update and display them as well as check for eating.
  for (var i = 0; i < prey.length; i++) {
    // We only bother updating a prey if it's alive
    if (prey[i].alive) {
      // Update and display this prey object
      prey[i].update();
      prey[i].display();
      // Check if the predator overlaps this prey object
      if (predator.overlap(prey[i])) {
        // If it does, make the predator eat the prey
        predator.eat(prey[i]);
      }
    }
  }
}
