### Core / CART 253 / Fall 2018 / Pippin Barr

# Variables (and math!)

---

## In this module

- ...

---

## Where to declare variables?

- __Where__ we declare our variables matters
- For now we will focus on __two__ places we can use:
  - At the __top of the script__ outside all the functions
  - Or __inside__ functions

---

```javascript
var x;
var y;
var circleSize = 50;

function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  var circleColor = random(255);
  fill(circleColor);
}

function draw() {
  x = x + 1;
  ellipse(x,y,circleSize,circleSize);
}
```

---

## At the top

- In the previous script we see there are three variables declared at the __top of the script__, which are `x`, `y`, and `circleSize`
- This is a standard place to put variables you're going to use __everywhere__ in your program
- Variables declared __outside any function__ are called __global variables__ because they can be used inside any function
- We needed to do this in part because __both__ `setup()` and `draw()` use `x` and `y`
- But we also put `circleSize` up there because it's something about the circle we want to remember and be able to change
- Note how much easier it is to change the circle's size when it's declared at the top!

---

## Inside a function

- In the script we see that `circleColor` is declared __inside `setup()`__
- Variables declared inside a function __can only be used inside that function__
- If we try to use `circleColor` inside `draw()`, for example, it won't exist!
- When you declare a variable inside a function you should imagine it popping out of existence when the program reaches the bottom of that function
- So after `setup()` finishes, `circleColor` is gone forever

---

## Declaring variables without `var`

- Very unfortunately, JavaScript lets us declare variables __without__ using `var`

```javascript
function setup() {
  createCanvas(500,500);
  x = width/2;
  y = height/2;
  circleColor = random(255);
  fill(circleColor);
}

function draw() {
  x = x + 1;
  ellipse(x,y,50,50);
}
```

- That's because if you don't use `var` to create a new variable, JavaScript creates it as a __global variable__ (like the ones declared at the top of the script)
- __Please avoid this__, it can lead to a lot of confusion

---

# Fin.
