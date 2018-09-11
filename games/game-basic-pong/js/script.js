// Basic Pong
// by Pippin Barr
//
// A primitive implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Arrow keys control the right hand paddle, mouse controls
// the left hand paddle.

// Game colors
var bgColor = 0;
var fgColor = 255;

// BALL

// Position and size
var ballX;
var ballY;
var ballSize = 20;

// Velocity and speed
var ballVX;
var ballVY;
var ballSpeed = 5;

// LEFT PADDLE

// Position and size
var leftPaddleX;
var leftPaddleY;
var leftPaddleWidth = 20;
var leftPaddleHeight = 70;

// Velocity and speed
var leftPaddleVY;
var leftPaddleSpeed = 5;

// RIGHT PADDLE

// Position and size

var rightPaddleX;
var rightPaddleY;
var rightPaddleWidth = 20;
var rightPaddleHeight = 70;

// Velocity and speed

var rightPaddleVY;
var rightPaddleSpeed = 5;


// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes
  createCanvas(640,480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

  // Initialise the left paddle
  leftPaddleX = 50;
  leftPaddleY = height/2;
  leftPaddleVY = 0;

  // Initialise the right paddle
  rightPaddleX = width - 50;
  rightPaddleY = height/2;
  rightPaddleVY = 0;

  // Initialise the ball
  ballX = width/2;
  ballY = height/2;
  ballVX = ballSpeed;
  ballVY = ballSpeed;
}

// draw()
//
// Handles the logic for controlling the paddles' velocity,
// updating the paddles and ball based on their velocity,
// drawing the paddles and ball, and checking for collisions
// and the ball going off the screen
function draw() {
  // Fill the background
  background(bgColor);

  // MOVING THE PADDLES

  // Move the left paddle based on the location of the mouse
  // If the mouse is above the left paddle...
  if (mouseY < leftPaddleY - leftPaddleHeight/2) {
    // Move up
    leftPaddleVY = -leftPaddleSpeed;
  }
  // Otherwise if the mouse is below the paddle
  else if (mouseY > leftPaddleY + leftPaddleHeight/2) {
    // Move down
    leftPaddleVY = leftPaddleSpeed;
  }
  else {
    // Otherwise stop moving
    leftPaddleVY = 0;
  }

  // Move the right paddle based on the keyboard arrows
  // If the up arrow is being pressed
  if (keyIsDown(UP_ARROW)) {
    // Move up
    rightPaddleVY = -rightPaddleSpeed;
  }
  // Otherwise if the down arrow is being pressed
  else if (keyIsDown(DOWN_ARROW)) {
    // Move down
    rightPaddleVY = rightPaddleSpeed;
  }
  else {
    // Otherwise stop moving
    rightPaddleVY = 0;
  }

  // Update the paddles' positions based on their velocity
  leftPaddleY += leftPaddleVY;
  rightPaddleY += rightPaddleVY;

  // MOVING THE BALL

  // Update the ball's position based on velocity
  ballX += ballVX;
  ballY += ballVY;

  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of each of the
  // paddles and the ball to make our conditionals easier to read

  var ballTop = ballY - ballSize/2;
  var ballBottom = ballY + ballSize/2;
  var ballLeft = ballX - ballSize/2;
  var ballRight = ballX + ballSize/2;

  var leftPaddleTop = leftPaddleY - leftPaddleHeight/2;
  var leftPaddleBottom = leftPaddleY + leftPaddleHeight/2;
  var leftPaddleLeft = leftPaddleX - leftPaddleWidth/2;
  var leftPaddleRight = leftPaddleX + leftPaddleWidth/2;

  var rightPaddleTop = rightPaddleY - rightPaddleHeight/2;
  var rightPaddleBottom = rightPaddleY + rightPaddleHeight/2;
  var rightPaddleLeft = rightPaddleX - rightPaddleWidth/2;
  var rightPaddleRight = rightPaddleX + rightPaddleWidth/2;


  // CHECKING FOR WALL COLLISIONS

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    ballVY = -ballVY;
  }

  // CHECKING FOR OUT OF BOUNDS

  // Check for ball going off the sides
  if (ballRight < 0 || ballLeft > width) {
    // If it went off either side, reset it to the centre
    ballX = width/2;
    ballY = height/2;
    // This is where we would count points etc!
  }

  // CHECKING FOR PADDLE COLLISIONS

  // Check for ball hitting the left paddle

  // First check it is in the vertical range of the paddle
  if (ballBottom > leftPaddleTop && ballTop < leftPaddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < leftPaddleRight && ballRight > leftPaddleLeft) {
      // Then the ball is touching the paddle so reverse its vx
      ballVX = -ballVX;
      // And for aesthetics let's make the ball be perfectly aligned with the paddle
      ballX = leftPaddleX + leftPaddleWidth/2 + ballSize/2;
    }
  }

  // Check for ball hitting the right paddle

  // First check it is in the vertical range of the paddle
  if (ballBottom > rightPaddleTop && ballTop < rightPaddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballRight > rightPaddleLeft && ballLeft < rightPaddleRight) {
      // Then the ball is touching the paddle so reverse its vx
      ballVX = -ballVX;
      // And for aesthetics let's make the ball be perfectly aligned with the paddle
      ballX = rightPaddleX - rightPaddleWidth/2 - ballSize/2;
    }
  }

  // DRAWING THE PADDLES AND BALL

  // Draw the paddles
  rect(leftPaddleX,leftPaddleY,leftPaddleWidth,leftPaddleHeight);
  rect(rightPaddleX,rightPaddleY,rightPaddleWidth,rightPaddleHeight);

  // Draw the ball
  rect(ballX,ballY,ballSize,ballSize);


}
