### Physics / CART 253 / Fall 2018 / Pippin Barr

# Wraps and overlaps

---

## In this module

- Detecting going off-screen
- Wrapping
- Detecting overlapping

---


## Things move

```javascript
var x;
var y;
var vx;
var vy;
var radius = 25;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  x = x + vx;
  y = y + vy;

  ellipse(x,y,radius * 2);
}
```

---

## And they go off the screen...

- Going off the screen is potentially an important __event__ in a program
- If the avatar goes off the screen in a game, it might mean we should load a new area
- If an enemy goes off the screen in a game, it might mean we missed our opportunity to destroy it, or that we successfully avoided it
- So it would be good to detect this situation
--

- __How would we detect when something has gone off screen?__

---

## Detecting going off-screen

```javascript
var x;
var y;
var vx;
var vy;
var radius = 25;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  x = x + vx;
  y = y + vy;

  if (x < 0 || x > width || y < 0 || y > width) {
    console.log("Off-screen!");
  }

  ellipse(x,y,radius * 2);
}
```

---

## Accounting for size

```javascript
var x;
var y;
var vx;
var vy;
var radius = 25;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  x = x + vx;
  y = y + vy;

  if (x - radius < 0 || x + radius > width || y - radius < 0 || y + radius > width) {
    console.log("Off-screen!");
  }

  ellipse(x,y,radius * 2);
}
```

???

- If we want to check if the __whole circle__ is off the screen, we have to account for its size, not just its center point
- This is easy with a circle as we can just use its radius
- With rectangles it means we adjust by the rectangle's width and height
- With irregular shapes we usually adjust by its __bounding box__ (the imaginary rectangle that would surround the whole shape)

---

## Wrapping

```javascript
if (x - radius < 0) {
  x += width;
}
else if (x + radius > width) {
  x -= width;
}

if (y - radius < 0) {
  y += height;
}
else if (y + radius > width) {
  y -= height;
}
```

???

- You would put this code inside `draw()` __after__ updating the position with velocity and __before__ drawing the ellipse

---

## Things overlap

```javascript
var x;
var vx;
var x2;
var vx2;
var y;
var radius = 25;
var speed = 2;

function setup() {
  createCanvas(500,500);
  x = width/4;
  x2 = 3*width/4;
  y = height/2;
  vx = speed;
  vx2 = -speed;
}

function draw() {
  x = x + vx;
  x2 = x2 + vx2;

  ellipse(x,y,radius * 2);
  ellipse(x2,y,radius * 2);
}
```

???

- Note that both shapes are __sharing__ the use of the `y` variable to determine their y position
- This is helpful in this case because we want them to run into each other and so they should be vertically aligned if they're moving horizontally

---

## Things overlap

- That is, visually we see shapes and images pass over/through each other
- And that is also something that could be significant in a game or other interactive situation
- If one shape is controlled by the player it might mean they "collected" the other shape
- If we're trying to make generative art, then the shapes might react to each other in some way
- So we want to be able to __know__ when shapes/elements overlap
--

- __How do we detect if two circles overlap?__

---

```javascript
var d = dist(x,y,x2,y);

if (d < radius * 2) {
  console.log("Overlap!");
}
```

- A nice simple piece of mathematics being performed for us by the `dist()` function
- `dist(x,y,x2,y2)` takes four parameters
- The x and y of one point
- The x and y of a second point
- It gives us back the __distance in pixels__ between those two points
- What mathematical formula do you think it uses?
--

- Pythagoras! Specifically, the Pythagoreum Theorem

???

- The __Pythagorean Theorem__ is that great piece of geometry that tells us that for a right angled triangle the square of the hypotenuse is equal to the sum of the squares of the other two sides
- In the case of `dist()` the "hypotenuse" is the length of the hypotenuse connecting the two points, and we know the lengths of the two other sides thanks to the coordinates of those two points, so we can calculate that length

---

## Do something with it

```javascript
var d = dist(x,y,x2,y);

if (d < radius * 2) {
  fill(255,0,0);
  stroke(0,255,0);
}
```

- Naturally we can do whatever we want with the knowledge that the two circles have overlapped
- Changing color, as here, is just a way of visualising it
- (See the slide notes for an example of making the circle disappear when they touch)

???

- What would you do to make both circles stop existing the moment they touch, for example?
- There are different approaches
- You could move their x coordinates far off screen and set their velocities to 0
- You could add a __boolean__ variable (one that stores `true` and `false`) to the code:

```javascript
var x;
var vx;
var x2;
var vx2;
var y;
var radius = 25;
var speed = 2;
var drawCircles = true;

function setup() {
  createCanvas(500,500);
  x = width/4;
  x2 = 3*width/4;
  y = height/2;
  vx = speed;
  vx2 = -speed;
}

function draw() {
  x = x + vx;
  x2 = x2 + vx2;

  var d = dist(x,y,x2,y);

  if (d < radius * 2) {
    drawCircles = false;
  }

  if (drawCircles) {
    ellipse(x,y,radius * 2);
    ellipse(x2,y,radius * 2);
  }
}
```

---

# Fin.
