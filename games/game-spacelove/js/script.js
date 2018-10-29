/************************************************************************

  Spacelove!
  by Pippin Barr

  A game of two spaceships that love each other very much. Each one loses
  health over time and can only increase its health by being "shot" by the
  other. Thus they have to "pay attention" to each other all the time to
  "keep their relationship alive". This is easy if they only focus on each
  other, but if they want to fly around and do other things, it becomes
  much harder. Deep.

  Left ship controls: WASD + control
  Right ship controls: ARROWS + shift

************************************************************************/

// The two ships
var ship1;
var ship2;

// Images to display for the ships
var shipImage;
var bulletImage;

// Tracking the current state of the program (title screen to begin)
var state = "TITLE";

// preload()
//
// Loads the images of the ships and bullets
function preload() {
  shipImage = loadImage("assets/images/face.png");
  bulletImage = loadImage("assets/images/heart.png");
}

// setup()
//
// Create the canvas, create the ships
function setup() {
  createCanvas(500,500);
  ship1 = new Ship(width/4,height/2,0,0.1,5,0.1,65,68,87,83,CONTROL,shipImage,bulletImage,0.1);
  ship2 = new Ship(3*width/4,height/2,PI,0.1,5,0.1,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,SHIFT,shipImage,bulletImage,0.1);
}

// draw()
//
// Set the background and then based on the current state
// display the appropriate information on screen (the title, the game, the game over)
function draw() {
  background(0);

  // A switch statement is like an if statement
  // This one checks the value of the variable "state"
  // and then lists the cases of the different things it could be
  // "TITLE", "GAME", and "GAME OVER", along with what to do in
  // each case
  // Note the "break;" after each case - this is important to stop
  // the the next case executing as well.
  switch (state) {
    case "TITLE":
    displayTitle();
    break;

    case "GAME":
    displayGame();
    break;

    case "GAME OVER":
    displayGameOver();
    break;
  }
}

// displayTitle()
//
// Displays the title and controls on the screen
function displayTitle() {
  // Set up all the styling elements
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  stroke(255);
  // Display the text
  text("SPACELOVE!",width/2,height/2);
  // Font size goes down
  textSize(16);
  // Display the instructions
  text("Press SPACE to play\nUse WASD+CONTROL and ARROWS+SHIFT",width/2,3*height/4);
  pop();

  // Check whether the spacebar was pressed to start the game...
  if (keyIsPressed && key === ' ') {
    // ... if it was, change the state to "GAME" so the switch statement in draw()
    // will display the game instead
    state = "GAME";
  }
}

// displayGame()
//
// Handles input, moves the ships, updates the bullets, displays everything,
// and checks if the game is over.
function displayGame() {
  ship1.handleInput();
  ship2.handleInput();

  ship1.update();
  ship2.update();

  ship1.updateBullets(ship2);
  ship2.updateBullets(ship1);

  ship1.display();
  ship2.display();

  // If either ship is NOT alive anymore the game is over
  // so set state variable to "GAME OVER" to make the switch statement
  // called displayGameOver()
  if (!ship1.alive || !ship2.alive) {
    state = "GAME OVER";
  }
}

// displayGameOver()
//
// Displays game over text
function displayGameOver() {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  stroke(255);
  text("LOVE IS OVER AND YOU DEAD",width/2,height/2);
  pop();
}
