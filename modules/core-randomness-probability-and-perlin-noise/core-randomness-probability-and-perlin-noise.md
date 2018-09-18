### Core / CART 253 / Fall 2018 / Pippin Barr

# Randomness, probability, and Perlin noise

---

## In this module

- `random()` reminder
- Random movement
- `noise()`
- Noise-based movement

---

## `random()` reminder

- We've already met the `random()` function
- `random()` gives us a random number between `0` and `1`
- `random(n)` gives us a random number between `0` and `n`
- `random(n,m)` gives us a random number between `n` and `m`

---

## Random movement

- We've mostly used random to directly set the position of things
- Or to create flashing, changing colours
- But of course `random()` can apply in any situation when we want to vary numbers in our code in a surprising way
- Such as for motion...

---

## Random movement

```javascript
var x;
var y;
var vx;
var vy;
var speedChange = 1;
var maxSpeed = 4;
var radius = 40;

function setup() {
  createCanvas(500,500);
  fill(255,0,0);
  x = width/2;
  y = height/2;
  vx = 0;
  vy = 0;
}

function draw() {
  vx += random(-speedChange,speedChange);
  vy += random(-speedChange,speedChange);

  x += vx;
  y += vy;

  ellipse(x,y,radius * 2);
}
```

---

## Probability

- The `random()` function has a very interesting mathematical property, which is that it follows a __uniform distribution__
--

- That is, any given number you get from `random()` is __equally as likely as any other__
--

- This fact allows us to use `random()` to enact __probabilities__ in our code
- If every number is as likely as any other...
  - ... then the likelihood a `random()` number will be less than `0.1` is...
--
 10%!
--

  - ... and the likelihood a `random()` number will be less than `0.5` is...
--
 50%!

--
  - ... and so on.
- In other words, we can use `if` statements with `random()` numbers to generate __probabilistic outcomes__!

---

## Loot drop!

```javascript
var currentText = "";

function setup() {
  createCanvas(500,500);
  textAlign(CENTER,TOP);
}

function draw() {
  text(currentText,width/2,0);
}

function mousePressed() {
  var r = random();
  if (r < 0.01) {
    currentText += "You found the Sword of Rareness!\n"
  }
  else if (r < 0.1) {
    currentText += "You found a Pretty Unusual Helmet of Some Kind!\n";
  }
  else if (r < 0.4) {
    currentText += "You found a Mediocre Gemstone!\n"
  }
  else {
    currentText += "You found a Nothing!\n"
  }
}
```

???

- So you can see we're checking what __range__ `r` is in to determine __how likely that outcome was__ and thus to give an appropriate response in our program
- Note that the probability of the rare Helmet of Some Kind is not 10%, it's 9.9% because the `0.01` we check first eliminates that amount of the distribution from the future calculations
- Similarly, the probability of the Mediocre Gemstone is 30% (0.4 - 0.1 === 0.3 === 30%) and not 40% for the same reason

---

## Perlin noise

- `random()` is fantastic for delivering __completely unexpected numbers__ that follow a uniform distribution
- But sometimes we want random numbers that are nonetheless following some kind of an organic pattern, random numbers that are related to one another across time
- And for this kind of effect we have Perlin noise via the `noise()` function
- Perlin noise is a large subject in itself (you can find a link in the notes to more information), but for now we'll just focus on what it does

???

- For more on Perlin noise try:
  - [p5 Reference](https://p5js.org/reference/#/p5/noise)
  - [Wikipedia](https://en.wikipedia.org/wiki/Perlin_noise)
  - [Adrian's Soapbox](http://flafla2.github.io/2014/08/09/perlinnoise.html_
  - [Khan Academy](https://www.khanacademy.org/computing/computer-programming/programming-natural-simulations/programming-noise/a/perlin-noise)
  - Googling just like I did

---

## `noise(tx)`

-



---

# Fin.
