let moveFrames = 45; // Number of frames to move one tile
let tileSize = 50;
let cube;

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  cube = {
    position: new p5.Vector(-tileSize/2,-tileSize/2,0),
    angle: new p5.Vector(0,0,0),
    rotate: new p5.Vector(0,0,0),
    pivot: new p5.Vector(0,0,0),
    destination: new p5.Vector(0,0,0),
    size: tileSize,
    rotating: false
  }
}

function draw() {
  camera(0,400,400,0,0,0,0,1,0);
  background(0,0,200);

  handleInput();
  drawGrid();
  drawCube();
}

function handleInput() {
  if (cube.rotating) return;

  if (keyIsDown(RIGHT_ARROW)) {
    cube.rotating = true;
    cube.pivot.set(cube.size/2,0,-cube.size/2);
    cube.rotate.set(0,PI/moveFrames,0);
    cube.destination.set(cube.size,0,0);
  }
  else if (keyIsDown(LEFT_ARROW)) {
    cube.rotating = true;
    cube.pivot.set(-cube.size/2,0,-cube.size/2);
    cube.rotate.set(0,-PI/moveFrames,0);
    cube.destination.set(-cube.size,0,0);
  }
  else if (keyIsDown(UP_ARROW)) {
    cube.rotating = true;
    cube.pivot.set(0,-cube.size/2,-cube.size/2);
    cube.rotate.set(PI/moveFrames,0,0);
    cube.destination.set(0,-cube.size,0);
  }
  else if (keyIsDown(DOWN_ARROW)) {
    cube.rotating = true;
    cube.pivot.set(0,cube.size/2,-cube.size/2);
    cube.rotate.set(-PI/moveFrames,0,0);
    cube.destination.set(0,cube.size,0);
  }
}

function drawGrid() {
  push();
  translate(-10*cube.size/2,-10*cube.size/2,-cube.size/2);
  for (let i = 0; i <= 20*cube.size/2; i += cube.size) {
    line(i,0,i,20*cube.size/2);
  }
  for (let i = 0; i <= 20*cube.size/2; i += cube.size) {
    line(0,i,20*cube.size/2,i);
  }
  pop();
}

function drawCube() {
  push();
  fill(0,0,200);
  stroke(255);

  // Check if we're animating its rotation
  if (cube.rotating) {

    // Increase its angle
    cube.angle.add(cube.rotate);

    // If it has finished its rotation, reset everything and move it
    if (abs(cube.angle.y) >= PI/2 || abs(cube.angle.x) >= PI/2) {
      cube.position.add(cube.destination);
      translate(cube.position);
      cube.angle.set(0,0,0);
      cube.destination.set(0,0,0);
      cube.pivot.set(0,0,0);
      cube.rotate.set(0,0,0);
      cube.rotating = false;
    }
    else {
      // If it hasn't finished its rotation, display the rotation
      translate(cube.position);
      translate(cube.pivot);
      rotateX(cube.angle.x);
      rotateY(cube.angle.y);
      rotateZ(cube.angle.z);
      translate(p5.Vector.mult(cube.pivot,-1));
    }
  }
  else {
    // If it's not rotating, just go to its position
    translate(cube.position);
  }
  // Display the cube
  box(cube.size);
  pop();
}
