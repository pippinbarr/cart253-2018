/***********************************************

Predator-Prey
Pippin Barr

A (very primitive) simulation of a predator we can feed
prey by adding them to the world. The predator and prey are controlled by
Perlin noise.

If the predator overlaps a prey it "eats" it, reducing its
health and increasing the health of the predator. The
predator is also losing health continuous just through
existing.

***********************************************/

// An array to store the predato object we will instantiate
var predators;

// An empty array to store the prey objects we will instantiate for feeding
var prey = [];

// The number of prey we'll add to the simulation per click
var numPreyPerClick = 5;

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
}

// draw()
//
// Handles user input, updates and displays the predator and all the prey,
// checks if anyone got eaten
function draw() {
  background(200);

  // Handle the predator's movement and display
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

// mousePressed()
//
// We add a number of prey to the simulation near the mouse click location
function mousePressed() {
  // Use a for loop to add numPreyPerClick's worth of prey
  for (var i = 0; i < numPreyPerClick; i++) {
    // Choose a starting position randomly offset from the click location
    var x = mouseX + random(-10,10);
    var y = mouseY + random(-10,10);
    // Create the prey object
    var newPrey = new Prey(x,y,5,2,color(0,0,255));
    // Add the prey object to the prey array
    prey.push(newPrey);
  }
}
