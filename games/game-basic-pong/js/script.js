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

// Ball

// Position and size
var ballX;
var ballY;
var ballSize = 20;

// Velocity and speed
var ballVX;
var ballVY;
var ballSpeed = 5;

// Left paddle

// Position and size
var leftPaddleX;
var leftPaddleY;
var leftPaddleWidth = 20;
var leftPaddleHeight = 70;

// Velocity and speed
var leftPaddleVY;
var leftPaddleSpeed = 5;

// Right paddle

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
  createCanvas(640,480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

  leftPaddleX = 50;
  leftPaddleY = height/2;
  leftPaddleVY = 0;

  rightPaddleX = width - 50;
  rightPaddleY = height/2;
  rightPaddleVY = 0;

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

  // Move the left paddle based on the location of the mouse
  if (mouseY < leftPaddleY - leftPaddleHeight/2) {
    leftPaddleVY = -leftPaddleSpeed;
  }
  else if (mouseY > leftPaddleY + leftPaddleHeight/2) {
    leftPaddleVY = leftPaddleSpeed;
  }
  else {
    leftPaddleVY = 0;
  }

  // Move the right paddle based on the keyboard arrows
  if (keyIsDown(UP_ARROW)) {
    rightPaddleVY = -rightPaddleSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    rightPaddleVY = rightPaddleSpeed;
  }
  else {
    rightPaddleVY = 0;
  }

  // Update the paddles' positions based on their velocity and draw them
  leftPaddleY += leftPaddleVY;
  rect(leftPaddleX,leftPaddleY,leftPaddleWidth,leftPaddleHeight);

  rightPaddleY += rightPaddleVY;
  rect(rightPaddleX,rightPaddleY,rightPaddleWidth,rightPaddleHeight);

  // Update the ball's position based on velocity and draw it
  ballX += ballVX;
  ballY += ballVY;
  rect(ballX,ballY,ballSize,ballSize);

  // Check for ball colliding with top and bottom
  if (ballY < 0 || ballY > height) {
    // If it touched the top or bottom, reverse its vy
    ballVY = -ballVY;
  }

  // Check for ball going off the sides
  if (ballX < 0 || ballX > width) {
    // If it went off either side, reset it to the centre
    ballX = width/2;
    ballY = height/2;
    // This is where we would count points etc!
  }

  // Check for ball hitting the left paddle

  // First check it is in the vertical range of the paddle
  if (ballY > leftPaddleY - leftPaddleHeight/2 && ballY < leftPaddleY + leftPaddleHeight/2) {
    // Then check if it is touching the paddle horizontally
    if (ballX < leftPaddleX + leftPaddleWidth/2 && ballX > leftPaddleX - leftPaddleWidth/2) {
      // Then the ball is touch the paddle so rever its vx
      ballVX = -ballVX;
    }
  }

  // Check for ball hitting the right paddle

  // First check it is in the vertical range of the paddle
  if (ballY > rightPaddleY - rightPaddleHeight/2 && ballY < rightPaddleY + rightPaddleHeight/2) {
    // Then check if it is touching the paddle horizontally
    if (ballX < rightPaddleX + rightPaddleWidth/2 && ballX > rightPaddleX - rightPaddleWidth/2) {
      // Then the ball is touch the paddle so rever its vx
      ballVX = -ballVX;
    }
  }

}
