### Core 2 / CART 253 / Fall 2018 / Pippin Barr

# Time

---

## In this module

- The core elements of interactive programs
- `setup()`
- `draw()`
- Handling events

---

## Dead code

- So far the code we've written just runs once and stops
- Processing carries out our instructions from the top to the bottom and that's that
- But that's not going to lead to especially interesting programming
- And in particular we're not going to be able to make something _interactive_ this way
--

- __So what do we need?__

???

- There are many ways to answer this question
- But something along the lines of
  - Execution over time
  - and Reaction in time

---

## The three parts of interactive code

- Generally speaking there are three key elements involved in interactive applications

1. We _set up_ the initial conditions of the program
2. We _update_ the state of the program over and over to carry out the program's instructions over time
3. We _handle events_ like user and other input

---

## Set up

- Before a program really gets going, we often want to set some starting conditions that will help to define how it runs

In a game, for example, we might need to create the player's avatar, put it in front of the door of the dungeon, load the sound effects of the player's footsteps, configure the physics parameters that will be applied during play, etc.

- These are all things we want to do _once_ at the _start_ of the program

---

## Update

- Once the program is ready, we want it to keep running until it's time to stop
- The way we tend to do this is with an _update loop_, which runs code for making the program work over and over again (once per frame)

In a game, for example, every frame we need to run the physics simulation, animate the avatar, play a footstep sound if the player is moving, check if the player has made contact with the door so we can open it for them, etc.

- These are all things we want to do _every frame_ that the program runs

---

## Handle events

- While a program is running, we want to be able to react to input either from the person using it, or from other sources
- Sometimes we can do this in the _update loop_ and sometimes we have special functions called _event handlers_ which run only when a specific kind of event happens (like a mouse click, say)

In a game, for example, we need to react whenever the player presses the spacebar by making the avatar jump, and we also need to react when the player is within 10 meters of an orc by having the orc run after them, etc.

- These are things we want to do _in reaction to events_

---

## Set up, update, handle events

So, one more time

1. We _set up_ the conditions for our program
2. We _update_ the state of our program every frame
3. We _handle events_ that occur while our program is running

- That's the secret to writing interactive software!
- And Processing has already got specific ways of dealing with these things!

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- This is the p5 `setup()` function
- It's where we write what we want to happen at the _start_ of our program
- So let's look at this piece by piece...

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- First we have the special word .hi[`function`]
- This word tells JavaScript that we're going to be specifying... a function
- At its most basic, __a function is a set of instructions grouped together and given a name__ so that we can "call" that name and have those instructions be run

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- Next we have .hi[`setup`]
- This is the _name_ of the function
- In this case, `setup` is special because it's the name of a function p5 _already_ knows about
- Later we'll learn how to make up our _own_ functions, too
- Notice how nicely the __name of the function explains what the function is for__

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- Next we have empty parentheses, .hi[`()`]
- We know from _calling_ functions like `rect()` that this is where the parameters go
- When we're _writing_ or _specifying_ a function it's where we say __what parameters this function will expect when it is called__
- `setup()` has no parameters, but we still _need_ these empty parentheses here to _tell JavaScript there are no parameters_

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- Next we _matching curly brackets_ with some code inside them, .hi[`{ ... }`]
- Now that we've given the name and parameters of our function, these opening and closing curly brackets mean "__in here is what this function does__"
- So in this case the curly brackets mean "inside here is _how to set up the program_, do this stuff _once at the start_"

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- _Inside_ the curly brackets we have three lines of example code that would run when this program starts
- In this case it sets the size of the window, and sets colours for fill and stroke

---

## `setup()`

```javascript
function setup() {
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}
```

- And that's it
- That's how we specify the `setup()` function for p5 in JavaScript
- When we write our own functions later, we'll use exactly the same syntax
--

- Sad fact: you _will_ forget to match your curly brackets
--

- Sad fact: you _will_ forget to put code _inside_ your curly brackets when you should
--

- It is a learning process

---

## `draw()`

- We haven't used it yet, but underneath the `setup()` function in our template project is a function called `draw()`

```javascript
function draw() {
  rect(0,0,100,100);
}
```

- This is another function that p5 _already knows about_
- It's where we write what we want to happen _every frame_ of our program
- As you can see, it's _syntactically identical_ to the `setup()` function except for its name
- In this case the program will draw a rectangle every frame! Exciting!

---

## `setup()` and `draw()`

```javascript
function setup() {  
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}

function draw() {
  rect(0,0,100,100);
}
```

- So here is an actual p5 JavaScript program that runs over time
- What will happen?
--

- Kind of a downer - it's a bit like _nothing_ happens!
--

- But it's not that _nothing_ is happening, it's that nothing is _changing_!

---

## `setup()` and `draw()`

```javascript
function setup() {  
  createCanvas(640,480);
  fill(255,0,0);
  stroke(0,255,0);
}

function draw() {
  rect(0,0,100,100);
}
```

- Based on our knowledge, what could we change to make the fact our program is running visible?

???

- Using transparency is a nice option based on what we know!

---

## Ch-ch-changes!

```javascript
function setup() {  
  createCanvas(640,480);
  fill(255,0,0,2);
  stroke(0,255,0);
}

function draw() {
  rect(0,0,100,100);
}
```

???

- Now we can see what the `draw()` function is doing
- Every frame it draws a rectangle on the screen
- Each rectangle is filled with a very transparent red
- Over time, all these transparent rectangles build up
- So the screen gets redder!

---

## Handling events

- We now have `setup()` for getting our program ready to run
- And we have `draw()` that runs every frame so that our program works over time
- What was that other thing?
--

- Oh yeah, we need to _handle events_ so that our program doesn't just ignore us the whole time
--

- We'll come to this more seriously in a later module, but for now there's one kind of event we can easily use

---

## `mouseX` and `mouseY`

- One nice way to react to the user is to know where their mouse is in our window
- And p5 gives an easy way to get that location
- The x coordinate of the user's mouse is called `mouseX`
- The y coordinate of the user's mouse is called `mouseY`
- These two things are called _variables_ and we'll talk about them in detail soon
- The main thing to know right now is we can use them _instead of numbers_

---

# `mouseX` and `mouseY`

```javascript
function setup() {
  createCanvas(640,640);
  fill(255,0,0);
  stroke(100,0,0);
  background(255,255,255);
}

function draw() {
  rect(mouseX,mouseY,25,25);
}
```

--

- Holy crap it's a drawing program!

???

- What if we didn't want this to draw, but instead just move a rectangle around?

---



```javascript
function setup() {
  createCanvas(640,640);
  fill(255,0,0);
  stroke(100,0,0);
}

function draw() {
  background(255,255,255);
  rect(mouseX,mouseY,25,25);
}
```

- Holy crap it's like the start of a game with the mouse as an avatar!

---

## Food for thought

- We've gone from writing programs that run their code once and then completely stop...
- ... to writing programs that _exist over time_
- We now have to practice thinking about the code in our program not as something _static_, but as something _dynamic_
- This introduces so many possibilities!
- And so many problems!
- We have to look at a page full of code and _see time_, we have to learn to _feel time_ in relation to our lines of code
- It's fun!

---

# Fin.
