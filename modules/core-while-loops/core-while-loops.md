### Core / CART 253 / Fall 2018 / Pippin Barr

# While loops

---

## In this module

-

---

## Repetition

- We've seen how useful repetition is in __time__ to create a dynamic program using the `draw()` loop
- But repetition can also be useful when we just need to do the 'same kind of thing' over and over in our code

---

## Building the fence...

```javascript
var boardWidth = 20;
var boardHeight = 200;

createCanvas(640,480);
background(100,200,100);
fill(100,80,80);

rect(0,height-boardHeight,boardWidth,boardHeight);
rect(1*boardWidth,height-boardHeight,boardWidth,boardHeight);
rect(2*boardWidth,height-boardHeight,boardWidth,boardHeight);
rect(3*boardWidth,height-boardHeight,boardWidth,boardHeight);
rect(4*boardWidth,height-boardHeight,boardWidth,boardHeight);
rect(5*boardWidth,height-boardHeight,boardWidth,boardHeight);
...
```
--
And then you die of boredom.

???

__Note:__ We use `height-boardHeight` as the y coordinate of each board to make it align with the bottom of the screen. If we drew it at `height` its top-left corner would be at the bottom (and we wouldn't see it), so we subtract `boardHeight` to draw it perfectly aligned.

---

## But I don't want to die of boredom...

- This feels too much like work, and computers are meant to do that!
- Can't we just tell JavaScript how to draw __one__ board, and have it understand how to draw all of them?
- Yes, we can do that
- And it's called a __loop__

---

## `while`ing away the time...

```javascript
while (condition) {
  // Do something, like draw a board!
}
```

- This will execute the code inside the curly brackets __over and over__ while the __condition is true__
- It checks the condition, if it's true it runs the code, then it checks the condition again, if it's true it runs the code, and so on until the condition is __false__, then it's over.
- It's a lot like an `if` statement that runs its code over and over until the condition becomes false

---

## Building that fence...

```javascript
while (theFenceIsNotBuilt) {
  // Add a board
}
```

- This is theoretically what we need, but obviously it won't work
- We need some specific elements...

---

## In the loop

- There are three main things we need to know when we write a loop:

- A ___starting condition___ that defines the way things are before the loop starts. (The fence is not drawn.)
- A ___stopping condition___ that defines when we should stop our loop. (The fence is drawn.)
- One or more ___actions___ that are carried out inside the loop that eventually cause it to stop. (Draw one board.)

---

## Painting the fence with a loop

```javascript
var boardX = 0;
var boardWidth = 20;
var boardHeight = 200;

function setup() {
  createCanvas(640, 480);
  background(100,200,100);
  fill(100,80,80);
}

function draw() {
  while (boardX < width) {
    rect(boardX, height-boardHeight, boardWidth, boardHeight);
    boardX += boardWidth;
  }
}
```

???

- Here we have a loop version of building the fence!
- The start conditions are the variables along with the size of the window
- The stopping condition is when `boardX` is greater than the width (we've filled the window)
- The actions are to draw a board in the current location, and then __move__ the location to the right

---

## The loop

```javascript
while (boardX < width) {
  rect(boardX, height-boardHeight, boardWidth, boardHeight);
  boardX += boardWidth;
}
```

- The loop __ends__ when `boardX` is greater than the width (e.g. we've drawn a fence all the way across the window)
- Notice that we need to __change__ `boardX` in the loop or it would __never end__
- So we need that condition to become __false__ at some point

---

## So what does this do?

```javascript
function setup() {
  createCanvas(640,480);
  noStroke();
  fill(255,0,0,50);
}

function draw() {
  var currentLocation = 0;
  while (currentLocation < mouseX) {
    ellipse(currentLocation,mouseY,30,30);
    currentLocation += 20;
  }
}
```

???

- It draws a series of circles between the left side of the canvas and wherever the mouse is
- Importantly, it draws the squares __all at once each frame__
- You don't see them animate toward the mouse position
- Because the __whole while loop runs each frame__ and only after the instructions are finished do we see the rendered graphics

---

_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  
_This is the song that doesn't end_  
__Yes it goes on and on my friend__  
_Some people started singing it, not knowing what it was_  
_And they'll continue singing it forever, just because..._  

???

- The song that doesn't end from Lamb Chop Play-ALong: https://www.youtube.com/watch?v=HNTxr2NJHa0

---

```javascript
while (true) {
  console.log("♬ This is the song that doesn't end... ♬");
}
```

- This is an infinite loop
- It is evil, because will never end, which is a really long time
- It will crash the program
- And sadly not all infinite loops are as obvious as this one

---

## Is this... okay?

```javascript
function setup() {
  createCanvas(500,500);
}

function draw() {
  var x = 0;
  while (mouseX < 50) {
    rect(x,mouseY,10,10);
    x += 20;
  }
}
```

???

- What happens here?
- It kind of looks like the code from earlier and that it should draw squares between the left of the window and the mouse position
- But there's a trap here, which is that `mouseX` will __never change__ because we don't ever repeat the `draw()` loop
- `mouseX` will always be `0`, and so the `while` condition will always be `true`

---

## Star field

```javascript
var numStars = 1000;

function setup() {
  createCanvas(500,500);
  background(0);

  var starsDrawn = 0;
  while (starsDrawn < numStars) {
    var x = random(0,width);
    var y = random(0,height);
    var starSize = random(1,2);
    stroke(random(100,255));
    rect(x,y,starSize,starSize);
    starsDrawn += 1;
  }
}

function draw() {
}
```

???

- Much easier than drawing each of 1000 stars individually right?
- What happens if you move the while loop (including the starting condition) into the `draw()` loop?


---

## Loops!

- So loops exist to make repetitive actions easier
- We're leveraging one of the great powers of computers: they don't get bored, they don't give up
- This allows us to play with amazing scales of repetition!

---

# Fin.
