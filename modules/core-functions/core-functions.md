### Core / CART 253 / Fall 2018 / Pippin Barr

# Functions

---

## In this module

- Program complexity and abstraction
- Functions

---

## Programs get big

- As soon as we want to do something even slightly impressive our programs start to get pretty complicated
- We have to write a lot of code to achieve what we want
- We need some way to deal with this level of complexity

---

## Yay! Abstraction!

- Consider `rect(0,0,100,100);`
- We understand this as "draw a rectangle with its top left corner at 0,0 and a width and height of 100"
- But of course there's a __lot__ going on behind the scenes to transform that one line of code into an actual rectangle on our canvas...

---

## `rect(0,0,100,100);`

- We call `rect(0,0,100,100);`
- In the p5 library it does some checking of the parameters...
- ... checks the drawing modes...
- ... calls another function called `rect()`...
- ... which starts to use the browser's "Drawing Context" setup...
- ... which is uses to draw individual parts of the rectangle...
- ... and on and on!
--

- Thank god we don't need to know all that and can just say "draw a rectangle"

---

## We're on a need-to-know basis

- In programming we only want to know as much as we __need__ to know to get our work done
- Computation is all about __hiding__ the details when they're irrelevant
- This ability to ignore those details frees us up to do more, better, and more creative work
- Now, of course, we know more than we used to - we know about the code level

---

## It would be nice to hide things from ourselves!

- Given how helpful it is to have all the details of `rect()` hidden...
- ... it would be nice if we could use this trick of hiding stuff ourselves
- We already do this with variables in some sense, hiding changing numbers inside names
- But we could think more clearly about our code if we could tidy it up based on what it does

---

## doThatThingYouDo();

- It will not surprise you to learn that we __can__ hide things from ourselves
- Just like we use the `rect()` function to draw a rectangle without know how it works...
- ... we can define our __own__ functions to organise our code

---

## So you want to draw an avatar

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

---

## So you want to draw two avatars...

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var avatarX = width/4;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);

  var avatar2X = 3*width/4;
  var avatar2Y = height/2;
  var avatar2Size = 100;
  fill(255);
  ellipse(avatar2X,avatar2Y,avatar2Size,avatar2Size);
  fill(0);
  ellipse(avatar2X - avatar2Size/4,avatar2Y,avatar2Size/8,avatar2Size/8);
  ellipse(avatar2X + avatar2Size/4,avatar2Y,avatar2Size/8,avatar2Size/8);
  ellipse (avatar2X,avatar2Y + avatar2Size/4,avatar2Size/4,avatar2Size/4);
}
```

---

## Well, that worked, but...

- As soon as we wanted to basically do the same thing twice our code started looking pretty stupid
- We're so obviously doing __almost__ the same thing twice, shouldn't there just be a way to call `drawAvatar()`?
- Well yes there is, ___obviously___.

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}
```

---

## Okay, fine.

- Apparently our `drawAvatar()` doesn't exist as a function in Processing
--

- __Yet!__
--

- We're going to have to define it ourselves so we can use it

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- Here is a function definition for our avatar

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- It comes __after__ our `draw()` function

???

- This is a stylistic choice - you __can__ put the function __above__ where it is called, but people tend not to do that

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- First we write .hi[`function`]. That makes sense, since we're defining a function!

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- Next we have the __name__ of the function, .hi[`drawAvatar`]

???

- Note how this is a __good name__ for the function because it describes clearly __what it does__

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- Next is .hi[`()`] - empty parentheses. This function needs no extra information.

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- Then we have .hi[`{ ... }`], curly brackets that contain what this function __does__

---

## Defining a function

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
}

function drawAvatar() {
  var avatarX = width/2;
  var avatarY = height/2;
  var avatarSize = 100;
  fill(255);
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  fill(0);
  ellipse(avatarX - avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse(avatarX + avatarSize/4,avatarY,avatarSize/8,avatarSize/8);
  ellipse (avatarX,avatarY + avatarSize/4,avatarSize/4,avatarSize/4);
}
```

- Inside, we have the 9 lines of code that execute the function! (Could be more! Could be less!)

---

## It works!

- We have now __abstracted__ the idea of "draw an avatar" into our function
- Notice how our `draw()` now looks __far more clear than before__
- It literally says what it is going to do: draw an avatar
- This idea of moving blocks of related code into functions to make your programs clearer is a huge win

---

## Flow...

- The program starts with `setup()` and runs the code there
- Then it jumps to `draw()` and starts running that code
- It gets to `drawAvatar()`, our function, and jumps to __that__ function
- It runs the code inside `drawAvatar()` then jumps __back__ to where it was in `draw()`
- Then it hits the end of `draw()` and jumps back to the top of `draw()` for the next frame
- And on it goes...

---

## All neat and tidy!

```javascript
function setup() {
  createCanvas(640,480);
  setupAvatar();
  setupWorld();
}

function draw() {
  updatePhysics();
  handleInput();
  drawWorld();
  drawAvatar();
  checkWinState();
}

// Actual definitions of those functions would be down here...
```

- We can imagine programs where everything is in functions!
- `draw()` becomes a nice story of what happens in the program

---

## All neat and tidy!

```javascript
function setup() {
  createCanvas(640,480);
  setupAvatar();
  setupWorld();
}

function draw() {
  updatePhysics();
  handleInput();
  drawWorld();
  drawAvatar();
  checkWinState();
}

// Actual definitions of those functions would be down here...
```

- We know where to look for specific kinds of problems now
- And we can comment out functions to check for issues

???

- The avatar isn't drawing properly? You should probably check `drawAvatar()`!
- Want to see the avatar without the world? Comment out `drawWorld()`!

---

## Modularity!

One big reason why functions are so great, is because:

Functions are ___modular___. We can tidy our code into separate, self-contained blocks that make sense as a unit. Our code becomes more organised, more readable, easier to fix.

---

## Food for thought

- With functions it's like we suddenly have this team of different workers who we can ask to do specific things for us
- The weird thing is that these workers are all also... __us__.

???

- Because we write those functions, right? Get it? Deep.


---

# Fin.
