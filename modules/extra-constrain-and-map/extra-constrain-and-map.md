### Extra / CART 253 / Fall 2018 / Pippin Barr

# `constrain()` and `map()`

---

## In this module

- `constrain()`
- `map()`

---

## Constraining values

- A lot of programming involves numbers that __change over time__ while our program runs
- For example the position of an object on screen, or its velocity
- Sometimes those numbers can get out of control and, most obviously, reach values we don't want them to have
- So it can be helpful to make sure they stay within a specific range
- And that is what `constrain()` is for

---

## `constrain()`

- The `constrain()` function takes there __parameters__
  - The __value__ to be constrained
  - And the __two ends of the range to constrain it within__
- It __returns__ the constrained version of the value

---

## Basic examples

- `constrain(100,0,50)` returns `50`
  - because `100` is __above the upper bound__ of the range
  - and so the return value is the highest number __within__ the range
- `constrain(-1000,100,150)` returns `100`
  - because `-1000` is __below the lower bound__ of the range
  - and so the return value is the lowest number __within__ the range
- `constrain(50,0,200)` returns `50`
  - because `50` is __within the range__

---

## `constrain()` with variables

- Normally we will want to be constraining variables so that they stay inside ranges that make sense for that variable
- Constraining a position to be within the canvas:

```javascript
x = constrain(x,0,width);
y = constrain(y,0,height);
```

- Constraining a velocity to a set maximum:

```javascript
vx = constrain(vx,-maxSpeed,maxSpeed);
vy = constrain(vy,-maxSpeed,maxSpeed);
```

---

## In context

- Generally speaking the process is that we update some variable, then constrain it to make sure it doesn't end up with a too-extreme value, such as:

```javascript
vx += ax;
vy += ay;

vx = constrain(vx,-maxSpeed,maxSpeed);
vy = constrain(vy,-maxSpeed,maxSpeed);

x += vx;
y += vy;

x = constrain(x,0,width);
y = constrain(y,0,height);
```

???

- Even more pithy might be:

```javascript
vx = constrain(vx + ax,-maxSpeed,maxSpeed);
vy = constrain(vy + ay,-maxSpeed,maxSpeed);

x = constrain(x + vx,0,width);
y = constrain(y + vy,0,height);
```

---

## Numbers and ranges

- In programming we're constantly working with numbers
- Very often, numbers exist within specific, meaningful __ranges__
- An x position might be between `0` and `width`
- A velocity might be between `-maxSpeed` and `maxSpeed`
- A color value might be between `0` and `255`

---

## Moving between ranges

- It can be fun and interesting to use a variable from one range to influence the behaviour of something that uses a different range
- Like using the x position of the mouse (between `0` and `width`) to set the colour of the background (between `0` and `255`)
- We could do the math for this ourselves, but we don't need to because `map()` does it for us

---

## `map()`

- `map()` takes five parameters
  - The __value__ to convert from one range to another
  - The __bounds__ of the range the value is originally __from__
  - The __bounds__ of the range to convert the value __to__
- `map()` returns the value __converted to the new range__
---

## Basic examples

- `map(0,0,100,0,255)` returns `0`
  - Because both ranges start at `0` and the value is `0`
- `map(100,0,100,0,255)` returns `255`
  - Because the first range ends at `100` and the value is at the upper bound of that range
  - `map()` converts it to the upper bound of the new range, which is `255`
- `map(50,0,100,0,255)` returns `127.5`
  - Because the value is in the middle of the starting range
  - And `127.5` is in the middle of the new range
- `map(80,0,100,0,255)` returns `159.375`
  - Because the value is 80% along the starting range
  - And `159.375` is 80% along the finishing range

???

- In fact we can write the map function ourselves:

```javascript
function map(value,startLow,startHigh,endLow,endHigh) {
  var fractionOfStart = (value - startLow) / (startHigh - startLow);
  var result = endLow + fractionOfStart * (endHigh - endLow);
  return result;
}
```

---

## In context

- Set the variable to a greyscale value based on where the mouse is on the x axis of the canvas

```javascript
var fillGrey = map(mouseX,0,width,0,255)
```

- Set the size of an ellipse relative to its distance from the centre of the canvas:

```javascript
var d = dist(mouseX,mouseY,width/2,height/2);
var radius = map(d,0,width,10,100);
ellipse(mouseX,mouseY,radius);
```

- But really it comes down to seeing opportunities to use `map()` and remembering it exists

???

- Yes, technically the mapping of distance to radius isn't precise because it uses `width` as the maximum distance when the real maximum distance the mouse could be is the diagonal from the centre of the canvas to a corner
- Which is:

```javascript
var d = dist(mouseX,mouseY,width/2,height/2);
var maxDistance = sqrt(width**2 + height**2);
var radius = map(d,0,maxDistance,10,100);
ellipse(mouseX,mouseY,radius);
```

- Where `**` is used as an exponential operator
- And `sqrt()` returns the square root
- i.e. Pythagoras

---

## No order required

- It's more natural to think of giving the ranges to `constrain()` and `map()` with a low value and then a high value
- But in fact neither function requires that, so you can also specify ranges as high and then low
- This doesn't make any difference with `constrain()`
- But it __does__ make a difference with `map()` because it changes the way the ranges are converted
- `map(10,0,100,0,200)` is `20`
- But `map(10,0,100,200,0)` is `180` (because `10` is `0.1` of the first range, and `0.1` along the second range goes from `200` toward `0` which gives us `180`)

---

# Fin.
