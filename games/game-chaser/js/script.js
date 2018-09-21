/******************************************************

Game - Chaser
Pippin Barr

A simple game of cat and mouse.

Physics-based movement, keyboard controls, health/stamina,
sprinting, Perlin noise, screen wrap.

******************************************************/

var gameOver = false;

var playerX;
var playerY;
var playerRadius = 25;
var playerVX = 0;
var playerVY = 0;
var playerMaxSpeed = 2;
var playerHealth;
var playerMaxHealth = 255;
var playerFill = 50;

var preyX;
var preyY;
var preyRadius = 25;
var preyVX;
var preyVY;
var preyMaxSpeed = 4;
var preyTX;
var preyTY;
var preyHealth;
var preyMaxHealth = 100;
var preyFill = 200;

var eatHealth = 10;
var preyEaten = 0;

function setup() {
  createCanvas(500,500);

  noStroke();

  setupPrey();
  setupPlayer();
}

function setupPrey() {
  preyTX = random(0,1000);
  preyTY = random(0,1000);
  preyX = width/5;
  preyY = height/2;
  preyHealth = preyMaxHealth;
}

function setupPlayer() {
  playerX = 4*width/5;
  playerY = height/2;
  playerHealth = playerMaxHealth;
}

function draw() {
  background(100,100,200);

  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
  }
  else {
    textSize(64);
    textAlign(CENTER,CENTER);
    fill(0);
    text("GAME OVER",width/2,height/2);
  }
}

function handleInput() {
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;
  }
  else {
    playerVX = 0;
  }

  // Up and down (separate if-statements so you can move vertically and
  // horizontally at the same time)
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;
  }
  else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;
  }
  else {
    playerVY = 0;
  }
}

function movePlayer() {
  playerX += playerVX;
  playerY += playerVY;

  if (playerX < 0) {
    playerX += width;
  }
  else if (playerX > width) {
    playerX -= width;
  }

  if (playerY < 0) {
    playerY += height;
  }
  else if (playerY > height) {
    playerY -= height;
  }
}

function updateHealth() {
  playerHealth = constrain(playerHealth - 0.5,0,playerMaxHealth);
  if (playerHealth === 0) {
    gameOver = true;
  }
}

function checkEating() {
  var d = dist(playerX,playerY,preyX,preyY);
  if (d < playerRadius + preyRadius) {
    playerHealth = constrain(playerHealth + eatHealth,0,playerMaxHealth);
    preyHealth = constrain(preyHealth - eatHealth,0,preyMaxHealth);

    if (preyHealth === 0) {
      preyX = random(0,width);
      preyY = random(0,height);
      preyHealth = preyMaxHealth;
      preyEaten++;
    }
  }
}

function movePrey() {
  // Set velocity based on perlin noise
  preyVX = map(noise(preyTX),0,1,-preyMaxSpeed,preyMaxSpeed);
  preyVY = map(noise(preyTY),0,1,-preyMaxSpeed,preyMaxSpeed);

  // Update prey position based on velocity
  preyX += preyVX;
  preyY += preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX += width;
  }
  else if (preyX > width) {
    preyX -= width;
  }

  if (preyY < 0) {
    preyY += height;
  }
  else if (preyY > height) {
    preyY -= height;
  }

  // Update the time step for our noise function
  preyTX += 0.01;
  preyTY += 0.01;
}

function drawPrey() {
  fill(preyFill,preyHealth);
  ellipse(preyX,preyY,preyRadius*2);
}

function drawPlayer() {
  fill(playerFill,playerHealth);
  ellipse(playerX,playerY,playerRadius*2);
}
