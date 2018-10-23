var ship1;

var shipImage;
var bulletImage;

var state = "TITLE";


function preload() {
  shipImage = loadImage("assets/images/face.png");
  bulletImage = loadImage("assets/images/heart.png");
}

function setup() {
  createCanvas(500,500);
  ship1 = new Ship(width/4,height/2,0,0.1,5,0.1,65,68,87,83,CONTROL,shipImage,bulletImage,0.5);
  ship2 = new Ship(3*width/4,height/2,PI,0.1,5,0.1,LEFT_ARROW,RIGHT_ARROW,UP_ARROW,DOWN_ARROW,SHIFT,shipImage,bulletImage,0.5);
}

function draw() {
  background(0);

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

function displayTitle() {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  stroke(255);
  text("SPACELOVE!",width/2,height/2);
  textSize(16);
  text("Press SPACE to play\nUse WASD+CONTROL and ARROWS+SHIFT",width/2,3*height/4);
  pop();

  if (keyIsPressed && key === ' ') {
    state = "GAME";
  }
}

function displayGame() {
  ship1.handleInput();
  ship2.handleInput();

  ship1.move();
  ship2.move();

  ship1.updateBullets(ship2);
  ship2.updateBullets(ship1);

  ship1.display();
  ship2.display();

  if (!ship1.alive || !ship2.alive) {
    state = "GAME OVER";
  }
}

function displayGameOver() {
  push();
  textAlign(CENTER,CENTER);
  textSize(32);
  fill(255);
  stroke(255);
  text("LOVE IS OVER AND YOU DEAD",width/2,height/2);
  pop();
}
