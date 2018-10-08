### Core / CART 253 / Fall 2018 / Pippin Barr

# Arrays

---

## In this module

- The final piece of totally new syntax!
- Numbered boxes with stuff in them

???

- The final piece of syntax! Amazing!
- After this there are no new special characters or anything to learn
- Also the last really fundamental concept in programming for us
- Also incredibly useful

---

## One ball, two balls, three balls, one hundred balls?

- Our Pong code lets us easily make new Ball objects by creating new ones in variables, and then updating and displaying them
- But if we wanted one hundred of them, it's going to get annoying...

```javascript
ball1 = new Ball(10,10,2,2,10,2);
ball2 = new Ball(20,10,2,2,10,2);
ball3 = new Ball(30,10,2,2,10,2);
bouncer4 = new Ball(40,10,2,2,10,2);
...
bouncer99 = new Ball(990,10,2,2,10,2);
bouncer100 = new Ball(1000,10,2,2,10,2);
```

---

## Worserer and worserer...

```javascript
void draw() {
  ball1.update();
  ball2.update();
  ball3.update();
  ...
  ball99.update();
  ball100.update();

  ball1.display();
  ball2.display();
  ball3.display();
  ...
  ball99.display();
  ball100.display();
}
```

---

## We know (part of) the solution to this!

- What kind of thing can we use if we need to __repeat__ the same action over and over again in a program?
--

- A loop!
--

- So we want to be able to do something like...

```javascript
for (var i = 0; i < 100; i++) {
  ball number i = new Ball(10*i,10,2,2,10,2);
}
```
--

- Buuuuut, that doesn't work. Because we can't just say `ball number i` like this

---

## We need something new...

- What we need is a way to keep track of a a whole __set__ of similar things, instead of just one thing per one variable
- Ideally we could have a variable that would store __all__ of our Balls in it for example
- And we could just refer to __which one we want__ when we're dealing with them
- And ideally we could use a __loop__ to go through all the elements in the set

---

## Arrays!

- Unsurprisingly, given today's topic, __arrays__ are the solution to this problem
- An array is basically __set of numbered boxes__ that you can store values in
- So a variable with an array in it can store __multiple values__
- This is obviously mostly useful when all the values are __related to each other__

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- This is some of our new syntax
- It creates an __empty array__
- In this case we'll store number in this array (hence the name)
- (But note that like with variables, JavaScript doesn't check what __type__ of thing you put in an array)
- Let's break it down...

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- First we have .hi[`var`]
- Because we store arrays in __variables__ like any other value

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- Next we have .hi[`arrayOfNumbers`]
- This is the variable name, just like any variable name
- This is the variable that will __contain__ the array we're declaring

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- Now we have .hi[`=`]
- We're going to __assign__ our variable with an array

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- Then we get .hi[`[]`]
- These empty square brackets are an __empty array__
- (That's why they're empty.)

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- Finally we have .hi[`;`]

---

## An array of numbers

```javascript
var arrayOfNumbers = [];
```

- So this line creates a new empty array, and puts that array into the variable called `arrayOfNumbers`

---

## An array of actual numbers, though...

- We can also create a new array with numbers __already in it__ like this:

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
```

- That is, we __list__ the numbers the array should have in it inside the square brackets, separated by commas. We can imagine something like this;

![](images/newFilledArray.png)

- Notice how the __order__ of numbers we started the array with __matters__

---

## How do I get at them numbers?

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
```

- It's great that we now have all these (prime) numbers stored in an array, but how can we do anything with them?
--

- Fortunately, the boxes in the array (called __elements__) are __numbered__ (from __zero__!)
- Those numbers are called __indexes__

![](images/numberedArray.png)

---

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];
```

![](images/numberedArray.png)

- So if I wanted to get to the __value__ `7` I would look at __index__...
--
 `4`
--

- And if I wanted to get to the __value__ `23` I would look at __index__...
--
 `9`
--

- And if I looked at the element at __index__ `5` I would see the __value__...
--
 `11`
--

- And if I looked at the element at __index__ `7` I would see the __value__...
--
 `17`

---

## In code now...

- We can refer to an element in an array using those square brackets again
- So if I want to refer to the __value__ at __index__ `5` I would write

```javascript
arrayOfNumbers[5]
```

- Which is which one?

![](images/numberedArray.png)

---

## In code now...

- We can refer to element in an array using those square brackets again
- So if I want to refer to the __value__ at __index__ `5` I would write

```javascript
arrayOfIntegers[5]
```

- Which is which one? Right.

![](images/numberedArrayHighlight5.png)

---

## Individual array elements are like variables

- We can use these references to array elements like any other variable
- So `arrayOfNumbers[5]` is just an number and we can use it like any number
- Which means we can use it in conditionals, or as an argument, or anything else...
- And we can also store an number in it, which might be the results of a calculation...

---

## Array elements are like variables

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

console.log(arrayOfNumbers[5]);
```

Gives us `11`

---

## Array elements are like variables

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

if (arrayOfNumbers[2] < arrayOfNumbers[3]) {
  println("Element at index 2 is less than element at index 3");
}
else {
  println("Element at index 2 is greater than element at index 3");
}
```

- So we will see...
--
 `Element at index 2 is less that element at index 3`

---

## Array elements are like variables

```javascript
var arrayOfNumbers = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23];

arrayOfNumbers[2] = arrayOfNumbers[2] * arrayOfNumbers[4];

if (arrayOfNumbers[2] < arrayOfNumbers[3]) {
  println("Element at index 2 is less than element at index 3");
}
else {
  println("Element at index 2 is greater than element at index 3");
}
```

- So we will see...
--
`Element at index 2 is greater than element at index 3`

???

- Because `arrayOfNumbers[2]` starts `3` and `arrayOfNumbers[4]` is `7`
- So `arrayOfNumbers[2] * arrayOfNumbers[4]` is `21`
- Which is put back into `arrayOfNumbers[2]`
- Which is therefore greater than the value in `arrayOfNumbers[3]`, which is `5`

---

## Another way of setting the values of an array

- So we could also set up the same `arrayOfNumbers` like this

```javascript
var arrayOfNumbers = [];

arrayOfNumbers[0] = 1;
arrayOfNumbers[1] = 2;
arrayOfNumbers[2] = 3;
arrayOfNumbers[3] = 5;
arrayOfNumbers[4] = 7;
arrayOfNumbers[5] = 11;
arrayOfNumbers[6] = 13;
arrayOfNumbers[7] = 17;
arrayOfNumbers[8] = 19;
arrayOfNumbers[9] = 23;
```

- Maybe a bit less convenient in this case

---

## Arrays can store any kind of value in them!

```javascript
var arrayOfFloats = [3.14159, 1.222222, 1.01];

var songLyrics = ["This", "is", "the", "song", "that", "doesn't", "end"];

var backgroundColors = [color(255,0,0), color(0,255,0), color(0,0,255)];

var images = [loadImage("image1.png"),loadImage("image2.png"),loadImage("image3.png")];
```

---

## Arrays can store objects in them!

```javascript
Ball balls = [
  new Ball(10,10,2,2,10,2),
  new Ball(20,10,2,2,10,2),
  new Ball(30,10,2,2,10,2)
];
```

---

## `push()` and arrays

- Another way to add something into an array in JavaScript is with `push()`
- We use it like this:

```javascript
Ball balls = [];
balls.push(new Ball(10,10,2,2,10,2));
balls.push(new Ball(20,10,2,2,10,2));
balls.push(new Ball(30,10,2,2,10,2));
```

- This starts with an empty array and then adds new balls into it one by one
- Each new ball is added to the __end__ of the array

---

## 100 Balls!

```javascript
var balls = [];

balls.push(new Ball(10,10,2,2,10,2));
balls.push(new Ball(20,20,2,2,10,2));
balls.push(new Ball(30,30,2,2,10,2));
balls.push(new Ball(40,30,2,2,10,2));
balls.push(new Ball(50,30,2,2,10,2));
...
balls.push(new Ball(990,30,2,2,10,2));
balls.push(new Ball(1000,30,2,2,10,2));
```
--

- Oh no! This still sucks in the same way! What can we do?
--

- Oh yeah! The loop idea we had earlier!

---

## 100 Balls with a `for` loop!

```javascript
var balls = [];

for (var i = 0; i < 100; i++) {
  balls.push(new Ball(10*i,10,2,2,10,2));
}
```

- OMG that's good. Right?

---

## 100 Balls bouncing

- We can use this `for`-loop through an array trick everywhere
- `.length` gives us the length/size of the array (100 in this case)

```javascript
void draw() {
  for (var i = 0; i < balls.length; i++) {
    balls[i].update();
    balls[i].display();
  }
}
```

- Tell me you're not impressed. I dare you.
- This is a __totally classic__ loop with an array
- You will do this so many times in your life
- And you will think of me

---

## Multiball action?!

- Let's edit the Pong code to have 100 balls!??!?!?!

???

- We'd need to update all the methods called in our `draw()` loop to use the `for` loop through the array of `balls`

```javascript
function draw() {
  background(0);

  leftPaddle.handleInput();
  rightPaddle.handleInput();
  leftPaddle.update();
  rightPaddle.update();

  for (var i = 0; i < balls.length; i++) {
    balls[i].handleCollision(leftPaddle);
    balls[i].handleCollision(rightPaddle);
    balls[i].update();
    balls[i].display();
  }

  leftPaddle.display();
  rightPaddle.display();
}
```

---

## Cycling through an array

- One nice trick to know with an array is being able to cycle through it
- And then wrap back around when you hit the end
- For example...

---

## The Song that Doesn't End (Array Mix)

```javascript
var lyrics = [
  "This is the song that doesn't end",
  "Yes it goes on and on my friend",
  "Some people started singing it,\nnot knowing what it was",
  "And they'll continue singing it forever,\njust because:"
];
var lyricIndex = 0;

function setup() {
  createCanvas(640,480);
  textSize(24);
  textAlign(CENTER,CENTER);
  fill(255);
  frameRate(1);
}

function draw() {
  background(0);
  text(lyrics[lyricIndex],width/2,height/2);
  lyricIndex++;
  if (lyricIndex >= lyrics.length) {
    lyricIndex = 0;
  }
}
```

---

## The Song that Doesn't End (Advanced Modulo Mix)

```javascript
var lyrics = [
  "This is the song that doesn't end",
  "Yes it goes on and on my friend",
  "Some people started singing it,\nnot knowing what it was",
  "And they'll continue singing it forever,\njust because:"
];
var lyricIndex = 0;

function setup() {
  createCanvas(640,480);
  textSize(24);
  textAlign(CENTER,CENTER);
  fill(255);
  frameRate(1);
}

function draw() {
  background(0);
  text(lyrics[lyricIndex],width/2,height/2);
  lyricIndex = (lyricIndex + 1) % lyrics.length;
}
```

???

- Module, or `%`, returns the remainder after division
- `10 % 1 === 0` because there is no remainder when you divide `10` by `1`
- `10 % 3 === 1` because `3` divides into `10` three times with `1` left over
- `10 % 7 === 3` because `7` divides into `10` once with `3` left over
- `7 % 10 === 7` because `10` divides into `7` zero times with `7` left over

---

# Fin.
