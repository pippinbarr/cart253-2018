### Core / CART 253 / Fall 2018 / Pippin Barr

# JavaScript Objects

---

## In this module

- JavaScript objects with data
- JavaScript objects with functions

---

## Complicated data

- A lot of the time the kinds of data we want to track in our programs are __related to each other__
- For example, when we have some object that moves around on the screen it has
  - An x position
  - A y position
  - An x velocity
  - A y velocity
  - ... and so on
- But so far we're have to have all of these parts in separate variables

---

```javascript
var x;
var y;
var vx;
var vy;
var radius = 25;
var maxSpeed = 1;

function setup() {
  createCanvas(500,500);
  fill(255,0,0);
  noStroke();
  x = width/2;
  y = height/2;
  vx = speed;
  vy = -speed;
}

function draw() {
  background(255);
  x += vx;
  y += vy;
  ellipse(x,y,radius*2);
}
```

---

## Related data belongs together

- Rather than track each piece of important data about our red circle in a separate variable it would be nice to keep them all together
- And we can with JavaScript Objects!
- A JavaScript Object is kind of variable that has a set of __properties__, each of which is just like another variable
- So we could have a circle variable that would contain __all the properties of our circle__ (like position, velocity, radius, and speed)

---

## A JavaScript Object

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
}
```

- This is a JavaScript Object version of our circle
- It's __just another type of value__ that goes into a variable
- But it's a special type of value that allows us to collect information together and store it

---

## A JavaScript Object

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
}
```

- We can see that we start with a standard variable declaration: .hi[`var circle`]

---

## A JavaScript Object

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
}
```

- And we use the same assignment operator as always: .hi[`=`]

---

## A JavaScript Object

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
};
```

- But now instead of a number, string or truth value, we have __a set of information inside curly brackets__: .hi[`{ ... }`]
- Each piece of information is called a __property__, so `x` is a property, `y` is a property, etc.
- Each property is like a variable that lives inside the object

---

## A JavaScript Object

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
};
```

- Each property is declared __inside the object__ according to the same basic syntax
- First we have the __name__ (e.g. `x`)
- Next we have a __colon__ (__not__ the assignment operator!)
- Then we have the __value__ inside this property (you have to set one)
- And if there is __more than one property__ then you separate them with __commas__

---

## Accessing properties

- When we want to __use__ the information inside a JavaScript object which is inside a variable we use __dot notation__
- That is, we write the __name of the variable__, then a __period__, then the __name of the property__

```javascript
var circle = {
  x: 0,
  y: 0,
  maxSpeed: 1,
  vx: 0,
  vy: 0,
  radius: 25
};

console.log("Circle is at position "  + circle.x + "," + circle.y);
circle.vx = circle.maxSpeed;
circle.x += circle.vx;
ellipse(circle.x, circle.y, circle.radius * 2);
```

---

## Objects within Objects

- Properties can have __any__ kind of data type in them: numbers, strings, truth values
- And __even another JavaScript Object!__
- Sometimes this makes sense because you have data that needs to be organised at more than one level...

---

## A better JavaScript Object

- To use properties inside a nested JavaScript object, we just continue to use __dot notation__...

```javascript
var circle = {
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    vx: 0,
    vy: 0
  }
  maxSpeed: 1,
  radius: 25
};

circle.velocity.x = circle.maxSpeed;
circle.x += circle.velocity.x;
ellipse(circle.x, circle.y, circle.radius * 2);
```

???

- This is getting close to some of the basics of how game engines represent physical objects
- All the data is carefully organised to that it's sensibly named and so that the structure of the data helps us to write cleaner, better code

---

## There's one more weird thing

- We'll deal with this much more next week, but just so we know...
- ... JavaScript Objects can also have __functions__ in their properties

```javascript
var circle = {
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    vx: 0,
    vy: 0
  }
  maxSpeed: 1,
  radius: 25,
  sayHello: function () {
    console.log("Hello, world!");
  },
  sayGoodbye: function () {
    console.log("Goodbye, world!");
  }
}
```

---

## Using an object's properties in its functions

```javascript
var circle = {
  position: {
    x: 0,
    y: 0
  },
  velocity: {
    vx: 0,
    vy: 0
  }
  maxSpeed: 1,
  radius: 25,
  move: function () {
    this.position.x += this.velocity.x;
  },
  display: function () {
    ellipse(this.position.x,this.position.y,this.radius * 2);
  }
}
```

- We use a magical word called `this` inside a JavaScript object's functions to refer to __the object itself__

---

## Using the functions inside an object

- If we have the circle variable with the object from the last slide then we can __call__ its functions using dot notation as well!

```javascript
var circle = { ... };

function setup() {
  createCanvas(500,500);
  circle.velocity.x = circle.maxSpeed;
  circle.position.y = height/2;
}

function draw() {
  circle.move();
  circle.display();
}
```

- How nice that looks!

---

## JavaScript Objects!

- JavaScript Objects are excellent because they allow us to keep a bunch of related data together in one place instead of in separate variables
- They allow us to think of a variable as containing a complex entity in our code (like a moving circle) instead of "just" a number or a string or a truth value
- And this allows us to build much richer ideas about what we're representing in our code
- They are also the Gateway Drug to Object-Oriented Programming, which we will talk about next week!

---

# Fin.
