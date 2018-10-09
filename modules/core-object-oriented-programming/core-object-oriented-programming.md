### Core / CART 253 / Fall 2018 / Pippin Barr

# Object-Oriented Programming

---

## Today

- Today is about the dominant approach to organising code in software engineering
- It's called Object Oriented Programming (OOP)
- It's pretty great

---

## JavaScript Objects

- We've already seen the basic idea of an "object" in the form of JavaScript Objects
- So far we've used them as a way to store a bunch of properties together:

```javascript
var circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25
}
```

- So we have circle __object__ which has properties to store its position, velocity, speed, and radius

---

## JavaScript Objects and Functions

- ... JavaScript Objects can also have __functions__ in their properties!

```javascript
var circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  sayHello: function () {
    console.log("Hello, world!");
  },
  sayGoodbye: function () {
    console.log("Goodbye, (cruel) world!");
  }
}
```

???

- Somewhat behind the scenes, it turns out that you can store __functions__ inside __variables__ because JavaScript allows for that

---

## Calling an object's function

- Once again, we use dot notation to call those functions:

```javascript
circle.sayHello();
circle.sayGoodbye();
```

---

## Using an object's properties in its functions

- Because we might want an object's __functions__ to use that object's __properties__, we need a way to refer to them inside those functions

```javascript
var circle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  maxSpeed: 1,
  radius: 25,
  move: function () {
    this.x += this.vx;
    this.y += this.vy;
  },
  display: function () {
    ellipse(this.x,this.y,this.radius * 2);
  }
}
```

- We use a magical word called `this` inside a JavaScript object's functions to refer to __the object itself__

---

## Using the functions inside an object

- So if we have the circle variable with the object from the last slide then we can __call__ its functions using dot notation as well!

```javascript
var circle = { ... };

function setup() {
  createCanvas(500,500);
  circle.vx = circle.maxSpeed;
  circle.vy = -circle.maxSpeed;
  circle.x = width/2;
  circle.y = height/2;
}

function draw() {
  circle.move();
  circle.display();
}
```

- How nice and organised that is!

---

## OOP

- So let's look at this idea of object oriented programming
- It involves a little more new notation and syntax
- But conceptually it's something that actually makes a lot of sense
- And it solves a lot of problems in terms of keeping related data and functionality together!
- Specifically, it's a lot like the above examples of JavaScript objects with properties and functions, but just a little bit better!

---

## Welcome to the real (virtual) world!

- Object Oriented Programming (OOP) was a major revolution in software engineering
- In a way it helped us move away from thinking about programs like computers (procedural programming) and toward thinking of programs in more "human" terms as little worlds of interacting objects
- It allows us to think about our programs with a more helpful metaphor than just the flow of control from one function to the next

???

- Note that OOP is still not a particularly __natural__ way of interacting with a computer
- But it does at least allow us to think in terms of __systems__ of objects and agents, which is something

---

## Objection!

- So what are the "objects" in OOP?
- Well in our world, objects are distinct physical entities in the world (a person, a projector, a window, ...)
- Those objects have particular __properties__ (a person has an age, a height, a weight, ...)
- And they have particular __functions__ (a projector can be turned on, project an image, play a sound, ...)
--

- Objects in programming are the same except __we__ can define them
- And which properties and functions we choose to include in our implementation depend on what we're doing
- (And yes, the __JavaScript Objects__ we saw earlier are pretty much like this already, we're going to talk about a more systematic way of creating them.)

---

## Other people's objects

- Objects are also amazing because __other people__ can define them __for__ us to save us work
- For example when we use `new Audio()` we're creating an object that represents an audio file in our code, which we can then `.play()` and `.pause()` and set the `.loop` property of...
- In fact, this is how __libraries__ in programming very often work: they create some special __object__ which you then use to access the powers of the library

---

## "OOP Brave New World!"

- So we can start to think about programs as __worlds__ full of little __objects__ that have __properties__ and __functions__ and that can __interact__ with each other
- This is a big part of the solution to writing complicated code that interacts with itself and creates complex, interesting results
- To actually implement this kind of programming we need some new notation/syntax
- Which we might as well learn now!

???

- Quote: Miranda in William Shakespeare's __The Tempest__. Sort of.

---

Imagine a world...

--

A little white square that lives in inky blackness...

--

It moves through the world, bouncing off its top and bottom...

--

It encounters strange elongated creatures that seek to collide with it...

--

It bounces off them, asking itself... "why?"

--

Yes, that's right, it's a Pong ball.

---

## Designing with objects

- Thinking in objects can be a helpful way to design our programs
- It allows to ask what __things__ there are in the program
- And then to design __objects__ that will represent those things
- And then to create the code for those __objects__ to bring them to life

???

- Note that the objects don't have to represent visible, "solid" elements in our program, some of these things might be invisible.
- Often we create objects whose entire job is to manage all the other objects, for example

---


## A ball

- So if we start with this idea of a ball that bounces off walls and want to make it with OOP we need to ask what its __properties__ and __functions__ are... so... well?
--

- In terms of properties it will need a __position__, a __velocity__, a __size__, and perhaps a __color__
- In terms of functions it will need to __move__ (including bouncing) and it will need to __display__ itself
--

- Note: we actually call the __functions__ of an object its __methods__, so we'll try to use that term from now on
- (It's not the end of the world if we forget, but just be aware it's sort of the "more correct" term here.)

---

## Let there be Ball!

```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = uuhhhhhhhhhhhh....
}
```
--

- We want to make a Ball that knows how to do all that stuff in our program
- So we can just tell it "move!" and "display yourself!" and it will do it
- This would be a new __type__ of value (or data), and we'd store it in a variable...
- Earlier we would have used an explicit JavaScript object, but now we'll do something different.

---

## Let there be Ball!

```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}
```

- This is what it looks like when we make an __object__ in JavaScript (and many other languages)
- Importantly we use the special word .hi[`new`] to say we want to make a __new object__
- And we use a special function with the name of the __type__ of object, .hi[`Ball()`] to create it
- That function is called the __constructor__ (it __makes__ a Ball in this case)
- Note it is traditional for the constructor to start with a __capital letter__ (`Ball()` not `ball()`)

???

- Note how the first letter of the constructor method is capitalised? This is standard.)

---

## Let there be Ball!

```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  Hey ball...
  Move yourself...
  and then display yourself...
}
```

- Now that we have made a Ball, we want to __use__ it in our program
- But how do we talk to it?
- In our imagination it __knows__ how to move and display itself, but how do we ask it to do those things?

---

## Let there be Ball!

```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  ball.update();
  ball.display();
}
```

- As we saw earlier, we call the methods of an object using __do notation__
- So we write the name of the variable with the Ball in it (`ball`)
- Then a `.` (a dot)
- Then the function call (`update()` and `display()`)

???

- This is called __dot notation__ and is common to most forms of object-oriented programming
- We've already seen is a few times now

---

## Let there be Ball!

```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  ball.update();
  ball.display();
}
```

- Okay so we're done right?
- We created a variable called `ball`
- We put a new `Ball` object into the variable `ball`
- And we called `ball`'s methods in our `draw()` loop

---

## Ball? What Ball?

- Oh yeah, our program doesn't know what a `Ball` is
- It knows about numbers, strings, booleans, images...
- But it doesn't know about `Ball`
- We need to tell JavaScript what a `Ball` is and how it works
- We need to __define the class__ called `Ball`

---

```javascript
function Ball() {
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
  this.size = 10;
  this.speed = 5;
}

Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

- This is what a __class__ definition looks like in JavaScript
- It's a __function__ that knows how to create a Ball with properties
- And then a set of __methods__ that can tell the Ball to do things

---

## Properties

- We can see there are __properties__ like `speed`, `size`, `position` and `velocity`

---

## Methods

- We can see there are __methods__ like `update` and `display` and `reset`

---

## `this`

- We can see a special word called `this` being used to set properties
- `this` refers to the __current instance__
- When we __use__ this class, `this` refers to the current object

---

## Where to put it?

- This code will mean our earlier code relying on `new Ball()` will work now
- Because we've defined `Ball()`, the function that creates our Ball objects
- We can either put this class definition at the __bottom__ of our scripts
--

- Or we can put it in a __new file__ with the name of the class - in this case `Ball.js`
- If we do that we need to also go into `index.html` and add a script tag that includes `Ball.js` as well, so that our script can "see" it
- Generally speaking we should use a new file for clarity

---

## Adding the class in a new file

- Create a file in the `js/` folder called `Ball.js` (note the capital)
- Put the Ball class code into that file and save it

```
project/
index.html
assets/
css/
js/
libraries/
Ball.js
script.js
```

- Add the `<script>` tag referencing the `Ball.js` into `index.html` __before__ `script.js`

```html
<!-- My script(s) -->
<script src="js/Ball.js"></script>
<script src="js/script.js"></script>
```

---

## See notes (`P` in slide view) for the three files right now

???

`index.html`
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0>

  <!-- CSS stylesheet(s) -->
  <link rel="stylesheet" type="text/css" href="css/style.css" />

  <!-- Library script(s) -->
  <script src="js/libraries/p5.min.js"></script>

  <!-- My script(s) -->
  <script src="js/Ball.js"></script>
  <script src="js/script.js"></script>
</head>

<body>
  <!-- HTML would go here if needed. -->
</body>

</html>
```

`js/Ball.js`
```javascript
function Ball() {
  this.size = 10;
  this.speed = 5;
  this.x = 0;
  this.y = 0;
  this.vx = 0;
  this.vy = 0;
}

Ball.prototype.update = function () {
  // Move the ball here
}

Ball.prototype.display = function () {
  // Display the ball here
}

Ball.prototype.reset = function () {
  // Reset the ball here
}
```

`js/script.js`
```javascript
var ball;

function setup() {
  createCanvas(640,480);
  ball = new Ball();
}

function draw() {
  ball.update();
  ball.display();
}
```

---

## Run it!

- If we run our code with `Ball()` added in...
--

- Nothing happens.
- Because...
--

- Because the Ball we defined doesn't do anything and has no representation on the screen.
- We need to improve the class definition so we get more interesting Balls.

---

- Perhaps the ball should be 10x10 pixels and have a speed of 10 pixels per frame...

```javascript
this.size = 10;
this.speed = 10;
```

---

- Perhaps the ball should start in the centre of the screen...

```javascript
this.x = width/2;
this.y = height/2;
```

---

- Perhaps it can start moving down and to the right...

```javascript
this.vx = this.speed;
this.vy = this.speed;
```

---

- Every frame we call the `update()` method
- So the ball should move, check for bouncing vertically, and going off-screen horizontally for now...

```javascript
Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0 || this.x > width) {
    this.reset();
  }

  if (this.y < 0 || this.y > height) {
    this.vy = -this.vy;
  }
}
```

---

- And every frame we'll call the `display()` method too
- So that should display the ball in its current location

```javascript
Ball.prototype.display = function () {
  fill(255);
  rect(this.x,this.y,this.size,this.size);
}
```

---

- Resetting the ball should move it back to the centre
- And set its velocity again

```javascript
Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
```

---

## All together now...

- So if we put all that together...

__Code is in the notes__ (`P` in slide view)

???

`Ball.js`:

```javascript
function Ball() {
  this.size = 10;
  this.speed = 10;
  this.x = width/2;
  this.y = height/2;
  this.vx = this.speed;
  this.vy = this.speed;
}

Ball.prototype.update = function () {
  this.x += this.vx;
  this.y += this.vy;

  if (this.x < 0 || this.x > width) {
    this.reset();
  }

  if (this.y < 0 || this.y > height) {
    this.vy = -this.vy;
  }
}

Ball.prototype.display = function () {
  fill(255);
  rect(this.x,this.y,this.size,this.size);
}

Ball.prototype.reset = function () {
  this.x = width/2;
  this.y = height/2;
}
```

---

## Multiball action!

We should be able to have __multiple instances__ of Ball now!

```javascript
var ball1;
var ball2;

function setup() {
  createCanvas(640,480);
  ball1 = new Ball();
  ball2 = new Ball();
}

function draw() {
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();
}
```
--

__DANG IT!__
--

What went wrong?
--

Yeah. Both balls have the same `x`, `y`, `vx`, and `vy`.
--

How do we fix it?
--

Yeah. Arguments in the `Ball()` function (the __constructor__) that tell the ball where to start

---

## Building a better constructor

- It would make more sense to be able to pass some parameters to our `Ball()` constructor so we can say, for example, where we want our new ball to start and how fast it should be moving, and how big it is, etc...
- We can add arguments to our constructor (and our methods) in the same way know already

```javascript
function Ball(x,y,vx,vy,size,speed) {
  this.size = size;
  this.speed = speed;
  this.x = x;
  this.y = y;
  this.vx = vx;
  this.vy = vy;
}
```

---

## And so...

Now we can make our two `Ball` objects and give them __different parameters__

```javascript
var ball1;
var ball2;

function setup() {
  createCanvas(640,480);
  ball1 = new Ball(width/3,height/2,5,5,10,5);
  ball2 = new Ball(2*width/3,height/2,-5,-5,20,5);
}

function draw() {
  background(0);
  ball1.update();
  ball2.update();
  ball1.display();
  ball2.display();
}
```

__They both act like bouncing balls! OOP!__

---

## Objects and Classes

- Let's go over these ideas again now we know what they look like...
- A `class` is the __abstract definition__ of what something (like a ball) can do, including properties and method
- So the class `Ball` defines the __idea__ of a ball
- We define classes in JavaScript by creating a __function__ with the name of the class
- An `object` is a specific __instance__ of a class that exists in your running program
- So the variable `ball1` contains an __object__ that actually exists and does things in your program (like bounce around), so does `ball2`

---

## Multiple classes and objects

- Generally speaking when we're making a little world we probably want more than __one__ kind of thing
- Pong, for example, has __two__ kinds of things: one ball (usually) and two paddles (usually)
- Our current Ball has some of the behaviour of a Pong ball already (what is it missing?)
- How would we add a Paddle class as well?
- Maybe it could have the option of being controller by the mouse or the arrow keys?
- Let's do it?

???

- The Ball right now is missing the ability to bounce off paddles (in no small part because they don't exist yet!)
- To add a Paddle we'll need to define a new class

---

## Paddles

- To get our game of Object-Oriented Pong working, we'll need a class that defines paddles
- So, again, we need to think about what that kind of class would need...
--

- Paddles have positions, velocities, and dimensions... (properties)
- Paddles can be controlled by the player (method)
- Paddles can bounce Balls in the opposite direction if they collide (method)

---

```javascript
function Paddle(x,y,w,h,speed) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
}

Paddle.prototype.handleInput = function() {
}

Paddle.prototype.update = function() {
}

Paddle.prototype.display = function() {
}
```

- And we'll add a `handleBounce()` method to our Ball a bit later
- For now, let's get the controls working...

---

```javascript
function Paddle(x,y,w,h,speed,downKey,upKey) {
  this.x = x;
  this.y = y;
  this.vx = 0;
  this.vy = 0;
  this.w = w;
  this.h = h;
  this.speed = speed;
  this.downKey = downKey;
  this.upKey = upKey;
}
```

- Since we'll make more than one Paddle, we should assign its control keys in the constructor
- We'll need to decide whether this should be a key code or a character...
- For this one we'll use a key code

---

```javascript
Paddle.prototype.handleInput = function() {
  if (keyIsDown(this.upKey)) {
    this.vy = -this.speed;
  }
  else if (keyIsDown(this.downKey)) {
    this.vy = this.speed;
  }
  else {
    this.vy = 0;
  }
}
```

- We can handle input in the way we've seen before
- By using `keyDown()` to check whether this paddle's control keys are being pressed
- And changing its velocity if so

---

```javascript
Paddle.prototype.update = function() {
  this.y += this.vy;
  this.y = constrain(this.y,0,height-this.h);
}
```

- We should have an `update` method for our paddle that moves it according to velocity
- And while we're here we can constrain the paddle so it doesn't go off the screen...

---

```javascript
Paddle.prototype.display = function() {
  fill(255);
  rect(this.x,this.y,this.w,this.h);
}
```

- And of course we should display the paddle on screen
- Just a rectangle will do nicely for now

---

- Now we can add a a paddle to the main code...

```javascript
var ball1;
var ball2;
var leftPaddle;
var rightPaddle;

function setup() {
  createCanvas(640,480);
  ball = new Ball(width/3,height/2,5,5,10,5);
  ball2 = new Ball(2*width/3,height/2,-5,-5,20,5);
  leftPaddle = new Paddle(0,height/2,10,60,10,DOWN_ARROW,UP_ARROW);
}

function draw() {
  background(0);

  leftPaddle.handleInput();

  ball.update();
  ball2.update();
  leftPaddle.update();

  ball.display();
  ball2.display();
  leftPaddle.display();
}
```

---

## Bouncing

- And "finally" we should be able to check for collisions between a Ball and a Paddle
- It's debatable whether the method to handle this should be in the Ball class or the Paddle class
- But let's put it in the Ball class this time (I imagine it as being the Ball deciding how to bounce when it hits something)

---

In `Ball.js`:
```javascript
Ball.prototype.handleCollision = function(paddle) {
  if (this.x + this.size > paddle.x && this.x < paddle.x + paddle.w) {
    if (this.y + this.size > paddle.y && this.y < paddle.y + paddle.h) {
      this.x -= this.vx;
      this.vx = -this.vx;
    }
  }
}
```

???

- Note that the line `this.x -= this.vx` is used to move the ball back a timestep so it's no longer intersecting with the paddle - this will help it not become embedded in the paddle!

---

## All together!!!

__See game code for "Basic OO Pong"__

---

## One last time

- A __class__ is a definition of how some kind of object behaves
- A class defines this behaviour via __properties__ (which are like variables specifically for that thing) and __methods__ (which are like functions specifically for that thing)
- An __object__ is a specific __instance__ of a class that is created when your program runs, it is a "real thing" in the program with proper values in its properties and which can meaningfully have its methods called to make something happen
- `Paddle` is a __class__ (the idea of a how a paddle words), but `leftPaddle` and `rightPaddle` are __objects__ or __instances__ of the `Paddle` class - they actually exist when the program runs
- The __objects__ we create with a __class__ are in fact __JavaScript__ objects, it's "just" a special and incredibly organised way of creating them

---

# Fin
