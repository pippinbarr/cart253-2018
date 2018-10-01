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

// Basic definition of a ball object with its key properties of
// position, size, velocity, and speed
var ball = {
  x: 0,
  y: 0,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5
}

// PADDLES

// How far in from the walls the paddles should be drawn on x
var paddleInset = 50;

// LEFT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5
}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
var rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5
}

// A variable to hold the beep sound we will play on bouncing
var beepSFX;

// preload()
//
// Loads the beep audio for the sound of bouncing
function preload() {
  beepSFX = new Audio("assets/sounds/beep.wav");
}

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
  leftPaddle.x = paddleInset;
  leftPaddle.y = height/2;

  // Initialise the right paddle
  rightPaddle.x = width - paddleInset;
  rightPaddle.y = height/2;

  // Initialise the ball
  ball.x = width/2;
  ball.y = height/2;
  ball.vx = ball.speed;
  ball.vy = ball.speed;
}

// draw()
//
// Calls the appropriate functions to run the game
function draw() {
  // Fill the background
  background(bgColor);

  handleInput();
  updatePositions();
  checkCollisions();
  displayPaddlesAndBall();
}

// handleInput()
//
// Checks the mouse and keyboard input to set the velocities of the
// left and right paddles respectively.
function handleInput() {
  // MOVING THE PADDLES

  // Move the left paddle based on the location of the mouse
  // If the mouse is above the left paddle...
  if (mouseY < leftPaddle.y - leftPaddle.h/2) {
    // Move up
    leftPaddle.vy = -leftPaddle.speed;
  }
  // Otherwise if the mouse is below the paddle
  else if (mouseY > leftPaddle.y + leftPaddle.h/2) {
    // Move down
    leftPaddle.vy = leftPaddle.speed;
  }
  else {
    // Otherwise stop moving
    leftPaddle.vy = 0;
  }

  // Move the right paddle based on the keyboard arrows
  // If the up arrow is being pressed
  if (keyIsDown(UP_ARROW)) {
    // Move up
    rightPaddle.vy = -rightPaddle.speed;
  }
  // Otherwise if the down arrow is being pressed
  else if (keyIsDown(DOWN_ARROW)) {
    // Move down
    rightPaddle.vy = rightPaddle.speed;
  }
  else {
    // Otherwise stop moving
    rightPaddle.vy = 0;
  }
}

// updatePositions()
//
// Sets the positions of the paddles and ball based on their velocities
function updatePositions() {
  // Update the paddles' positions based on their velocity
  leftPaddle.y += leftPaddle.vy;
  rightPaddle.y += rightPaddle.vy;

  // MOVING THE BALL

  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}

// checkCollisions()
//
// Checks for collisions between:
// - ball and top and bottom wall
// - ball out of bounds
// - ball and paddles
function checkCollisions() {
  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of each of the
  // paddles and the ball to make our conditionals easier to read

  var ballTop = ball.y - ball.size/2;
  var ballBottom = ball.y + ball.size/2;
  var ballLeft = ball.x - ball.size/2;
  var ballRight = ball.x + ball.size/2;

  var leftPaddleTop = leftPaddle.y - leftPaddle.h/2;
  var leftPaddleBottom = leftPaddle.y + leftPaddle.h/2;
  var leftPaddleLeft = leftPaddle.x - leftPaddle.w/2;
  var leftPaddleRight = leftPaddle.x + leftPaddle.w/2;

  var rightPaddleTop = rightPaddle.y - rightPaddle.h/2;
  var rightPaddleBottom = rightPaddle.y + rightPaddle.h/2;
  var rightPaddleLeft = rightPaddle.x - rightPaddle.w/2;
  var rightPaddleRight = rightPaddle.x + rightPaddle.w/2;


  // CHECKING FOR WALL COLLISIONS

  // Check for ball colliding with top and bottom
  if (ballTop < 0 || ballBottom > height) {
    // If it touched the top or bottom, reverse its vy
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    beepSFX.currentTime = 0;
    beepSFX.play();
  }

  // CHECKING FOR OUT OF BOUNDS

  // Check for ball going off the sides
  if (ballRight < 0 || ballLeft > width) {
    // If it went off either side, reset it to the centre
    ball.x = width/2;
    ball.y = height/2;
    // This is where we would count points etc!
  }

  // CHECKING FOR PADDLE COLLISIONS

  // Check for ball hitting the left paddle

  // First check it is in the vertical range of the paddle
  if (ballBottom > leftPaddleTop && ballTop < leftPaddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < leftPaddleRight && ballRight > leftPaddleLeft) {
      // Then the ball is touching the paddle so reverse its vx
      ball.vx = -ball.vx;
      // And for aesthetics let's make the ball be perfectly aligned with the paddle
      ball.x = leftPaddle.x + leftPaddle.w/2 + ball.size/2;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
    }
  }

  // Check for ball hitting the right paddle

  // First check it is in the vertical range of the paddle
  if (ballBottom > rightPaddleTop && ballTop < rightPaddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballRight > rightPaddleLeft && ballLeft < rightPaddleRight) {
      // Then the ball is touching the paddle so reverse its vx
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      beepSFX.currentTime = 0;
      beepSFX.play();
      // And for aesthetics let's make the ball be perfectly aligned with the paddle
      ball.x = rightPaddle.x - rightPaddle.w/2 - ball.size/2;
    }
  }
}

// displayPaddlesAndBall()
//
// Draws the paddles and ball on screen as rectangles as defined
// by their properties
function displayPaddlesAndBall() {
  // Draw the paddles
  rect(leftPaddle.x,leftPaddle.y,leftPaddle.w,leftPaddle.h);
  rect(rightPaddle.x,rightPaddle.y,rightPaddle.w,rightPaddle.h);

  // Draw the ball
  rect(ball.x,ball.y,ball.size,ball.size);
}
