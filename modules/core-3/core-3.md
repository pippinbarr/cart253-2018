### Core 3 / CART 253 / Fall 2018 / Pippin Barr

# Variables (and math!)

---

## In this module

- ...

---

## Numbers are too permanent

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

- Which of these ellipses is the head?
- How do I change the size of the eyes?
- How do I put this avatar somewhere else?

--

__Hardcoded numbers are a huge pain to edit and are mostly meaningless to look at in code__

---

## Numbers can't change

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

- How would I make my avatar move around on the screen?
--

- I'd need to __change the numbers__ representing its location, but I _can't_, because...

--

__Once the program is running, "hardcoded" numbers cannot change__

???

- By "hardcoded" we just mean that you write the _actual number_ directly into your program
- Once you write it like that, it will never change while the program is running

---

## Enter the variable

- A variable is a place to store some information in your program that you want to remember, refer back to, or change

---

## A variable is like an... x

- It's like a box with something in it!
--

- It's like a folder with something in it!
--

- It's like a drawer with something in it!
--

- It's like a sticky with something written on it!
--

-  It's like a... place you use to store some information!

---

## The nature of variables

A variable has three key qualities:

--
- a __name__
--

- a  __type__
--

- and a  __value__

---

## A name

- Variables have names - otherwise what would you call them?
- Names have __meanings__. "Thomas" means "twin" (via Aramaic), "Jeanne" means "Yahweh is merciful" (via Hebrew)
--

- `mouseX` means "the pixel on the x-axis that the mouse is over right now"
--

- `avatarX` probably means "the location of the avatar on the x-axis right now"

---

## A type

- In programming, it matters what _type_ of thing you put inside a variable
- In many programming languages you have to _explicitly say_ what type of thing a variable can hold
- But in JavaScript you don't need to do that
- Nonetheless, there are still specific _types_ in JavaScript
- Like a number or a colour or a string of letters for example
- The type determines what kinds of things you can do with it
- You don't multiply a letter by a number, for instance

???

- Not having to specify what _type_ a variable must take is very convenient and flexible
- But it's also pretty _dangerous_ because it allows us to make mistakes more easily
- Importantly, we have to be careful not to accidentally put the _wrong type of thing_ into a variable, but JavaScript won't tell us!

---

## A value

- A variable has a value in it, the thing that variable is storing
- This value will be of a specific _type_ (like a number or a string of text)
- The variable will keep it safe until we need to __use it or change it__
- Ah, change!

---

## `var meaningOfLife = 42;`

- This is a _variable declaration_ in JavaScript
- This line is saying "I want a _variable_ called _meaningOfLife_, and put the number `42` in it to start with, thanks"
- Let's go through the pieces of this

---

## .hi[`var`] `meaningOfLife = 42;`

- First we write the special word `var`
- Just like `function` means we're going to make a function, `var` means we're going to make a _variable_

---

## `var ` .hi[`meaningOfLife`] ` = 42;`

- Next we have the _name_ of the variable
- Here we have called it `meaningOfLife`
- Just like with functions, the name should _explain_ what the variable is for, what it _means_
- Notice the way the variable name is written
- __No spaces__
- If there are multiple words, the __first word is lowercase__ and the __remaining words start with a capital__ to make it easier to read

???

There are more rules for writing variable names:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter
- Names can also begin with $ and _
- Names are case sensitive (y and Y are different variables)
- Reserved words (JavaScript keywords like `function` and `var`) cannot be used as names

(From: https://www.w3schools.com/js/js_variables.asp)

---

## `var meaningOfLife ` .hi[`=`] ` 42;`

- Next we have the _assignment operator_
- This is because we are putting a _value_ in our variable
- It means "I am about to tell you what to put inside this variable"
- Notice that `=` does _not_ mean "check for equality", it means "assign the following value to this variable"!

---

## `var meaningOfLife = ` .hi[`42`]`;`

- Next we have the _value_ of the variable, `42`
- Importantly, `42` is the `meaningOfLife`, so the variable name makes sense
- Note that because JavaScript _doesn't check types_ you could put _any_ type of thing in this variable:

```javascript
var meaningOfLife = 42;
var meaningOfLife = "Be excellent to each other.";
var meaningOfLife = 42.0000001;
var meaningOfLife = true;
```

- These are all fine as far as JavaScript is concerned

---

## `var meaningOfLife = 42`.hi[`;`]

- Just like any line of code that is an _instruction_, we end with a semicolon to say we're done
- If you're a polite kind of person, you could think of it as saying "thanks" perhaps...

???

- Yes, the terrible truth is that many line of code in JavaScript _don't actually need a semicolon_!
- In particular, a simple instruction like a function call or a variable declaration is fine without a semicolon
- But let's pretend we should _always use them_ and avoid trouble.

---

## Types

- JavaScript allows us to specify a range of different types
- These are the different kinds of _data_ that we can use in our program
- For example:

```JavaScript
var thisIsANumber = 4;
var thisIsAlsoANumber = 4.3;
var thisIsABooleanTruthValue = true;
var thisIsAlsoABooleanTruthValue = false;
var thisIsAString = "Hello, World!";
```

- Notice how the different types of values are written in different ways
- A _number_ is made of digits and can have a decimal point
- A _string_ is a set of characters inside quote marks
- A _boolean_ is either `true` or `false`

???

- __There are more types of variable/data in JavaScript__
- But we won't worry about them just yet, we'll get there!

---

## Declaring a variable without a value

- We can declare a variable we want to use in our program _without_ giving it a value right away

```javascript
var meaningOfLife;
```

- Later on, when we work out the meaning of life, we can use the _assignment operator_ in the same way to put the value in

```javascript
meaningOfLife = 42;
```

- Notice that when we put the value in we don't need `var` anymore, because JavaScript knows we have already created the `meaningOfLife` variable earlier

---

## Using variables...

- The thing about variable is that you can use them __as if they are the value inside them__
- So you can use a variable with number in it anywhere you might use a hardcoded number, a variable with a string in it anywhere you would have put a string, and so on!

```javascript
var meaningOfLife = 42;
rect(meaningOfLife,meaningOfLife,50,50);
```

???

- Note how variable names are important?
- Processing doesn't care that you're positioning a rectangle with its top-left corner at coordinates (`meaningOfLife`,`meaningOfLife`)
- But anyone reading your code would find it rather confusing!

---

## Arithmetic!

- You can do arithmetic on numbers in Processing, and also on variables with numbers in them
- It uses _operators_ you probably already know from calculators and so on

```javascript
var meaningOfLife = 21 + 21; // addition
stroke(meaningOfLife - 2); // subtraction
fill(meaningOfLife * 5,0,0); // multiplication
rect(meaningOfLife/2,0,50,50); // division
```

- There are some other operators too, which you can look up in the reference
- What will the above code actually do?

???

- Here is a handy JavaScript operator reference
https://www.w3schools.com/jsref/jsref_operators.asp

---

## More arithmetic!

- You can use parentheses to prioritise parts of your arithmetic, just like in math class...

So:

```javascript
var meaningOfLife = (42 + 42) / 2;
```

is not the same as

```javascript
var meaningOfLife = 42 + 42 / 2;
```

---

## Space, man

- Pay attention to spaces. A lot of the time they're not strictly necessary, but they make things a lot easier to read.
- These are equivalent:

```javascript
var meaningOfLife=(42+42)/2;
```

```javascript
var meaningOfLife = (42 + 42) / 2;
```

- But the second one is easier to read, right?

???

- Remember that you _cannot_ remove the space between `var` and `meaningOfLife` here because your program will break
- This is because if you do that, JavaScript can no longer tell where the special word `var` ends and the _variable name_ begins

---

## Variable names, again

- Remember that there are _rules_ for naming variables
- They _must_ be unique and should not already be in use by p5 (e.g. not `mouseX`)
- In this class they _must_ be meaningful so that they don't confuse you and others
- In this class they _must_ use "camel case" where you start with a lowercase letter and then use capital letters to indicate word breaks

???

- Note that you _can_ call a variable `mouseX` and it will just break the p5 version

---

## Example variable names

YES:

```javascript
var age = 30;
var dayOfTheWeek = "Friday";
var pi = 3.14159;
var theLetterE = "E";
var theNumber1 = 1;
```

NO:

```
var foo = 30;
var WhatDayIsIt? = "Friday";
var 314159 = 3.14159;
var var = 1;
var the_letter_a = 'A';
```

???

- Why not?
- `foo` is a meaningless name for a variable
- `WhatDayIsIt?` has a question-mark at the end
- `314159` starts with a number
- `var` is reserved by JavaScript
- `the_letter_a` doesn't use camelCase
- That last "NO" is technically a different _style_ of writing variables
- If you have a really impressive reason for wanting to us a different style, ask if it's okay
- Otherwise, just stick with camelCase...

---

## Built-in variables

- We met `mouseX` and `mouseY` last week - they are _built-in variables_ that store the current coordinates of the mouse
- p5 has other helpful variables like this, including:

- `width` and `height`: the width and height of the window
- `frameCount`: the number of frames the code has run for
- `mouseIsPressed`: true if the mouse button is currently pressed down, false otherwise
- `key` and `keyCode`: the most recently pressed key (as a character) and its ASCII keyCode

???

- There are many more of these in the p5 reference
- Look for things listed in the reference _without_ parentheses after them (things that aren't _functions_)

---

## Pop-quiz, hotshots!

```
var 127LevelGrey = 127;
var what??? = "What did you say???";
var theLetterC = "c"
variable myLuckyNumber = 4.7;
number theNumberPi = 3.14159;
var mouseX = 21;
var myName = "Pippin";
var thetruemeaningoflife = 1;
var exampleFloat = 22.2.2;
var foo = `1`;
```

???

- What is wrong with these?

---

## Variables FTW!

Variables give us a lot of power in programming.

__Memory__. We can _remember_ values over time.

__Sense__. We can _label_ values with their meaning instead of hard-coding them.

__Change__. We can _change_ the values in variables to make things happen while the program is running.

---

## Variables save the day

Remember this guy?

```javascript
createCanvas(500,500);
ellipse(250,250,300,300);
ellipse(200,200,50,50);
ellipse(200,200,20,20);
ellipse(300,200,50,50);
ellipse(300,200,20,20);
ellipse(250,300,100,100);
```

Now we can rewrite him with variables to get our benefits of memory, sense, and change...

---

## Shocked face with variables!

```javascript
var avatarX = 250;
var avatarY = 250;
var avatarSize = 300;
var avatarEyeSize = 50;
var avatarPupilSize = 20;
var avatarEyeXOffset = 50;
var avatarEyeYOffset = 50;
var avatarMouthYOffset = 50;
var avatarMouthSize = 100;

function setup() {
  createCanvas(500,500);
}

function draw() {
  ellipse(avatarX,avatarY,avatarSize,avatarSize);
  ellipse(avatarX-avatarEyeXOffset,avatarY-avatarEyeYOffset,avatarEyeSize,avatarEyeSize);
  ellipse(avatarX-avatarEyeXOffset,avatarY-avatarEyeYOffset,avatarPupilSize,avatarPupilSize);
  ellipse(avatarX+avatarEyeXOffset,avatarY-avatarEyeYOffset,avatarEyeSize,avatarEyeSize);
  ellipse(avatarX+avatarEyeXOffset,avatarY-avatarEyeYOffset,avatarPupilSize,avatarPupilSize);
  ellipse(avatarX,avatarY+avatarMouthYOffset,avatarMouthSize,avatarMouthSize);
}
```

---

## Variables save the day

Notice how we can

- Understand the code significantly better __just because of the names__
- Easily adjust the way the avatar appears by changing the variables at the top

--

_What if we added something to the `draw()` function that changed one of the variables?_

--

`avatarX = avatarX + 1;`

???

- One option would be to add `avatarX = avatarX + 1;`
- Which can be written as `avatarX += 1;`
- Which can also be written as `avatarX++;` (add one to `avatarX`)
- But there are others of course!
- __Why does it leave a trail?__

---

## This is a pretty big deal

- We have created _life itself_!
- Well, we have created movement at the very least...
- Effectively we have the start of _code-based animation_

???

- Consider my not very good game [You Say Jump I Say How High](http://www.pippinbarr.com/2012/01/24/you-say-jump-i-say-how-high/)
- It uses this idea of changing variables for physics to make gameplay
- Or consider another of my games, [Get X Avoid Y](http://www.pippinbarr.com/2014/06/24/get-x-afunction-y/)
- It basically uses variables to store different pictures so that the game looks different even with the same code

---

## Let's get `random()`

- Let's talk about my favourite function in all of programming: `random()`
- Most programming languages have a version of this and it does what you might expect...
--

- Yeah, it __gives you a random number__.
--

- In p5 it works like this:

```javascript
var randomNumber = random(n);
```

- This will put a random number between 0 and `n` (not including `n`) into our `randomNumber` variable
- `random(10)` gives us a random number between `0` and `10`

---

## Let's get more `random()`

- You can also specify a _range_ for your random number like this

```javascript
var red = random(0,255);
var green = random(0,255);
var blue = random(0,255);
background(red,green,blue);
```

- Which will do what?

???

- This gives us a random background colour each time we run the program
- You can even cut out the middle-person like this

```javascript
background(random(0,255),random(0,255),random(0,255));
```

- But that's significantly harder to read, I think you'll agree

---

## Ah, `random()`!

- Random numbers are a source of endless joy.
- What would this do in the `draw()` loop of our avatar code from earlier?

```javascript
avatarX = random(0,width);
avatarY = random(0,height);
```

---

## Follow that mouse!

- What if we wanted to make the face follow our mouse around?

--

- That's right, we'd use `mouseX` and `mouseY`

```javascript
avatarX = mouseX;
avatarY = mouseY;
```

---


## Follow that mouse! Slower!

- What if we wanted to make a shape move toward the mouse cursor over time instead of instantly?
--

- We'd need to know _where_ the shape is (and where it _starts_)
- We'd need to know _where_ the mouse is
- Each draw loop we'd need to work out how to change the shape location based on the mouse location
- One way would be to add a fraction of the distance between the shape's x and y and the mouse's x and y...

???

```javascript
// Variables to track the location of our circle
var x;
var y;

// setup()
//
// Sets up the canvas and initalises x and y
function setup() {
  createCanvas(640,640);
  // Start with x and y in the centre of the canvas
  x = width/2;
  y = height/2;
}

// draw()
//
// Updates the location of our circle, increasing it
// by a fraction of its distance from the mouse,
// so it chases the mouse
function draw() {
  // Calculate the x and y distance between the circle and the mouse
  var distX = mouseX - x;
  var distY = mouseY - y;
  // Add a fraction (a tenth) of that distance on to the circle's location
  x += distX/10;
  y += distY/10;
  // Draw the circle
  ellipse(x,y,10,10);
}
```

- Another way would be to use the amazing `lerp()` (linear interpolation) and `dist()` (distance) functions - look them up in the reference!
- Mildly confusing, but amazing:

```javascript
// Variables to track the location of our circle
var x;
var y;

// setup()
//
// Sets up the canvas and initalises x and y
function setup() {
  createCanvas(640,640);
  // Start with x and y in the centre of the canvas
  x = width/2;
  y = height/2;
}

// draw()
//
// Updates the location of our circle using linear
// interpolation based on the distance between the
// circle and the mouse.

function draw() {
  // Calculate the distance between the circle and the mouse
  var d = dist(x,y,mouseX,mouseY);
  // Use linear interpolation to update the location of the circle
  // based on the distance. When the distance is big, 1/d will be
  // very small, so the circle will move a small fraction of the remaining distance.
  // When the distance is small, 1/d will approach 1 and the circle will move
  // a large fraction of the remaining distance
  x = lerp(x,mouseX,1/d);
  y = lerp(y,mouseY,1/d);
  // Draw the ellipse
  ellipse(x,y,10,10);
}
```

---

## Fin.
