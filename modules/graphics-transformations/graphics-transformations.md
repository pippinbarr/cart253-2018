### Graphics / CART 253 / Fall 2018 / Pippin Barr

# Drawing shapes

---

## In this module

- Radians
- Oscillators
- Transformations

---

## Remember angles?

- You know, like 90º and 180º and so on?
- Those are angles in __degrees__

---

## Meet radians...

- Radians are a different way of measuring an angle
- They represent the ratio of the arc made by the angle to its radius

- All of p5's functions that deal with angles use __radians__, ___not___ degrees

---

## Meet `radians()`

- Fortunately, if you prefer to think in degrees, you can
- Because p5 can convert for you

```javascript
var rightAngleInRadians = radians(90);

var rightAngleInDegrees = degrees(rightAngleInRadians);
```

---

## Better keep it oscillated

- A great feature of trigonometric functions is __oscillation__
- Functions like __sine__ and __cosine__ oscillate between `-1` and `1` as the angle you give them changes

```javascript
var angle = 0;
var x = 0;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  var y = height/2 + (sin(angle) * height/2);
  ellipse(x,y,10,10);
  x++;
  angle += 0.05;
}
```

---

## Oscillating size...

- The numbers that come out of `sin()` as you increase the angle are just more numbers (between `-1` and `1` this time)
- You can apply these numbers to something else...

```javascript
var angle = 0;
var radius = 100;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  var growth = sin(angle) * (radius/2);
  ellipse(width/2,height/2,radius*2 + growth);
  angle += 0.05;
}
```

---

## Oscillating color...

- The numbers that come out of `sin()` as you increase the angle are just more numbers (between `-1` and `1` this time)
- You can apply these numbers to something else...

```javascript
var angle = 0;
var radius = 200;

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
}

function draw() {
  var fillColor = color(map(sin(angle),-1,1,0,255),map(cos(angle),-1,1,0,255,0),0);
  fill(fillColor);
  ellipse(width/2,height/2,radius*2);
  angle += 0.05;
}
```

---

## Oscillating text size...

- The numbers that come out of `sin()` as you increase the angle are just more numbers (between `-1` and `1` this time)
- You can apply these numbers to something else...

```javascript
var angle = 0;
var string = "Trick or treat?";

function setup() {
  createCanvas(600,600);
  background(0);
  fill(255);
  stroke(0);
  textAlign(CENTER,CENTER);
}

function draw() {
  textSize(map(sin(angle),-1,1,12,64));
  text(string,width/2,height/2);
  angle += 0.05;
}
```

---

## Origin story

- Remember the origin?
- That's where `0,0` is in the window
- Which is where?
--
 Yeah, the __top left__ of the window

--
- But it doesn't have to be there!
--

- And it could be useful to put it somewhere else, depending on what you're doing
- It might be helpful to have it in the centre of the window, for instance, if you're drawing symmetric things

---

## Move it

Compare

```javascript
function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  rect(0,0,100,100);
}
```

with

```javascript
function setup() {
  createCanvas(500,500);
  rectMode(CENTER);
  translate(width/2,height/2);
  rect(0,0,100,100);
}
```
--

So `translate(x,y)` __moves__ the origin to the location specified.

---

## Move it, move it

- Actually `translate(x,y)` is cumulative, compare:

```javascript
function draw() {
  translate(40,40); // Origin now at 40,40
  rect(0,0,10,10);
}
```

```javascript
function draw() {
  translate(40,40); // Origin now at 40,40
  translate(40,40); // Origin now at 80,80
  rect(0,0,10,10);
}
```

(Note: `translate()` gets reset at the start of `draw()` each time)


---

## You spin me right round...

- Being able to control where the origin is useful for __rotation__
- Using a function called `rotate()`

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  rotate(radians(45));
  rectMode(CENTER);
  rect(width/2,height/2,100,100);
}
```
--

- Wait what? We probably thought this would rotate the rectangle around __its own centre__
- But... no.
- In p5 things rotate __around the origin__

---

## You spin me right round the origin

- We need to remember that `rotate()` will rotate around the __origin__
- So if we want to rotate our rectangle around its centre we need to...
--

- `translate()` the origin to the centre of the rectangle and __then__ rotate it
--

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  translate(width/2,height/2);
  rotate(radians(45));
  rectMode(CENTER);
  rect(width/2,height/2,100,100);
}
```
--
- Wait, what?

---

## You spin me right round the origin and the origin is at `0,0`

- When we `translate()` the origin, we need to remember that `0,0` is now in a new location, so

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  translate(width/2,height/2);
  rotate(radians(45));
  rectMode(CENTER);
  rect(0,0,100,100);
}
```

---

## One more time with feeling...

```javascript
var angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  rotate(angle);
  rectMode(CENTER);
  rect(0,0,100,100);
  angle += 0.01;
}
```

---

## Scaling

- Along with `rotate()` we get `scale()`
- `scale()` does what you might expect: it scales things by the amount you tell it to
- `scale(2)` scales things up by 2 times
- `scale(0.5)` scales things down to half their size
--

- But it scales things __around the origin__
- So, same rules apply

---

## Scaling as we go

```javascript
var theScale = 1;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(0);
  translate(width/2,height/2);
  scale(theScale);
  rectMode(CENTER);
  rect(0,0,100,100);
  theScale += 0.01;
}
```

---

## Didn't I hear something about a 3rd dimension?

- p5 can do things in 3D as well as in 2D
- For now, know that you need to tell p5 to use 3D specifically in the `createCanvas()` function:

```javascript
createCanvas(640,480,WEBGL);
```

- __Important__: When you're using `WEBGL` the __origin is in the centre of the canvas by default__

---

## What can I do?

- You can use `translate()`, `rotate()`, and `scale()` in all three dimensions...

```javascript
translate(x,y,z);
rotateX(angle);
rotateY(angle);
rotateZ(angle);
scale(xScale,yScale,zScale);
```

- Note that rotation has __three separate functions__, one for each axis
- Whereas translation and scaling just take up to __three parameters__, one for each axis

---

## What can I draw?

- There are 3D primitives like boxes...

```javascript
box(100,100,100); // Draw a box with sides of size 100 at the origin
```

- And spheres...

```javascript
sphere(100); // Draw a sphere with a radius of 100 at the origin
```

- And cylinders and cones and tori, oh my!
- Again, most of the time you'll want to __translate__ the origin, apply rotation and scale, then draw your thing...
- Refer to the reference for details on these

---

## Whoa, I know 3D...

```javascript
var angle = 0;
var scaleFactor = 1;

function setup() {
  createCanvas(640,480,WEBGL);
}

function draw() {
  background(0);
  translate(width/2,height/2,0); // Translating in THREE DIMENSIONS!
  rotateX(radians(45));
  rotateY(angle);
  scale(scaleFactor);
  box(50,50,50);
  angle += 0.01;
  scaleFactor += 0.01;
}
```

---

## How about...

```javascript
var angle1 = 0.0;
var angle2 = 0.0;

function setup() {
  createCanvas(500,500,WEBGL);
}

function draw() {
  background(0);
  rotateY(angle1);
  box(60);
  translate(50,50);
  rotateX(angle2);
  box(30);
  angle1 += 0.01;
  angle2 -= 0.01;
}
```
--

- Cool, but what if I wanted those two boxes to rotate __separately__!

---

## Cumulative effects again

- Notice how that first `rotateY()` is being applied to the __second__ box as well
- It's cool because it's like the second box orbits the first (planet simulator here we come!)
- But you might want to be able to do rotations etc. completely separately

---

## Return of the `push()` and `pop()`

- Just as we can keep __styles__ from affecting the rest of the program by keeping them inside a `push()` and a `pop()`...
- It turns out we can do the same for __transformations__
- So if we surround a set of transformations and the drawing instruction they apply to with `push()` and `pop()` the transformations will __only__ apply to that drawing instruction...

---

## Separate rotations

```javascript
var angle1 = 0.0;
var angle2 = 0.0;

function setup() {
  createCanvas(500,500,WEBGL);
}

function draw() {
  background(0);
  push();
  translate(250,250);
  rotateY(angle1);
  box(60);
  pop();
  push();
  translate(50,50);
  rotateX(angle2);
  box(30);
  pop();
  angle1 += 0.01;
  angle2 -= 0.01;
}
```

---

## Problem solved

- So, if you want to keep effects separate...
- Put them in between a `push()` and a `pop()`
- And all will be well!
- (Note that any transformations applied __before__ your `push()` will still be active, unless they were inside a `push()`/`pop()` pair)

---

## Nested pushing and popping...

- Here's an amazing example from the book __Learning Processing__ that mesmerises me
- On a good day I even understand it
- (See notes.)

???

```javascript
// Global angle for rotation
var angle = 0;

function setup() {
  createCanvas(500,500);
}

function draw() {
  background(100);
  stroke(255);
  // Translate to center of window
  translate(width/2, height/2);
  // Loop from 0 to 360 degrees (2*PI radians)
  for (var i = 0; i < TWO_PI; i += 0.2) {
    // Push, rotate and draw a line!
    push();
    rotate(angle + i);
    line(0, 0, width/4, 0);
    // From 0 to 360 degrees (2*PI radians)
    for (var j = 0; j < TWO_PI; j += 0.5) {
      // Push, translate, rotate!
      push();
      translate(width/4, 0);
      rotate(-angle - j);
      line(0, 0, 50, 0);
      // Done with the inside loop, pop!
      pop();
    }
    // Done with the outside loop, pop!
    pop();
  }
  endShape();
  // Increment angle
  angle += 0.01;
}
```

---

# Fin.