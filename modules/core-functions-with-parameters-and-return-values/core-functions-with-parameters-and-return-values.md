### Core / CART 253 / Fall 2018 / Pippin Barr

# Functions with parameters and return values

---

## In this module

- ...

---

## Okay, but I still want those two avatars...

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  drawAvatar();
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

---

## Oh, right.

- We can call `drawAvatar()` twice, and it works
- But it draws the avatar in the __same place__ both times

---

## Information

- Lots of functions only make sense if you can give them __information__
- We don't get a rectangle if we just call `rect();` because it doesn't make sense
- We call `rect(0,0,100,100);` and specify __where__ the rectangle should be and what __dimensions__ it should have
- We want something like that for `drawAvatar()`

---

## Defining functions with arguments

```javascript
function drawAvatar(x, y, size) {
  fill(255);
  ellipse(x,y,size,size);
  fill(0);
  ellipse(x - size/4,y,size/8,size/8);
  ellipse(x + size/4,y,size/8,size/8);
  ellipse (x,y + size/4,size/4,size/4);
}
```

- Here is `drawAvatar()` again, this time with __arguments__

---

## Defining functions with arguments

```javascript
function drawAvatar(x, y, size) {
  fill(255);
  ellipse(x,y,size,size);
  fill(0);
  ellipse(x - size/4,y,size/8,size/8);
  ellipse(x + size/4,y,size/8,size/8);
  ellipse (x,y + size/4,size/4,size/4);
}
```

- It's exactly the same, but now we have something __inside the parentheses__
- And the code in the function has changed a bit too

---

## Defining functions with arguments

```javascript
function drawAvatar(x, y, size) {
  fill(255);
  ellipse(x,y,size,size);
  fill(0);
  ellipse(x - size/4,y,size/8,size/8);
  ellipse(x + size/4,y,size/8,size/8);
  ellipse (x,y + size/4,size/4,size/4);
}
```

- Inside the parentheses we have a __comma-separated list of the parameters this function takes__
- These are called the __arguments__ when we're defining a function
- We can see that this function expects some parameters called `x`, `y`, and `size`
- Because they're well-named, they're pretty self-explanatory, right?
- They refer to the position and size of the avatar to be drawn

???

- Note that other languages (like Java, C#, C++, and more) require that you specifies what __type__ of parameter the function takes - whether it's a number, a string, a truth value, etc.
- But because JavaScript doesn't explicitly keep track of types in variables, it doesn't keep track here either - it's up to us to get it right

---

## Defining functions with arguments

```javascript
function drawAvatar(x, y, size) {
  fill(255);
  ellipse(x,y,size,size);
  fill(0);
  ellipse(x - size/4,y,size/8,size/8);
  ellipse(x + size/4,y,size/8,size/8);
  ellipse (x,y + size/4,size/4,size/4);
}
```

- After the parameters are defined inside the parentheses, we have the usual curly brackets containing the code of the function
- There we can see that we are __using the arguments just like variables__
- When the function is __called__ with actual values for the parameters, those arguments will contain those values
- But when we're __defining__ the function, we don't know ahead of time what those parameters could be, so we use them like variables

---

## Calling a function with arguments

```javascript
function draw() {
  drawAvatar();
}
```

- If we try to call our function like this now, what will happen?
--

- Yep. Doesn't work.
- Unfortunately it doesn't __crash__ our program, it just doesn't do what we want
- That's because in JavaScript if we don't include a parameter in a function call, it will just get set to `undefined`
- And when we try to use `undefined` as a number in, for example `rect()` it will use it like it's a `0`
- So it's drawing an avatar at (0,0) of size 0. Huh.

--

__So we need to put parameters into our function call__

---

## Calling a function with arguments

```javascript
function draw() {
  drawAvatar(width/2,height/2,100);
}
```

- Voilà! Now we can draw an avatar!

---

## Calling a function with arguments

```javascript
function draw() {
  drawAvatar(width/4,height/2,100);
  drawAvatar(3*width/4,height/2,200);
}
```

- Even better! We can draw __two__ avatars in different places using the parameters!
- Notice, too, how we don't need to be able to __see__ the `drawAvatar()` function definition itself
- So long as we __know how it works__
- This is a strong case for __good documentation__ like sensible comments that explain your functions!

---

## Calling a function with arguments

```javascript
function draw() {
  for (var i = 0; i < 100; i++) {
    var x = random(0,width);
    var y = random(0,height);
    var size = random(10,100);
    drawAvatar(x,y,size);
  }
}
```

- This works in all kinds of different situations
- We can call functions in loops, in conditionals, from inside other functions, and so on

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- Sometimes we want functions that __calculate__ something
- What will this do?

???

- Not what we want!
- Even though we __seem__ to be changing `temperature` to its fahrenheit equivalent, when we print it out on the canvas, it hasn't changed...

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- The `temperature` we declared inside `draw()` is __not the same__ as the `temperature` in `convertFahrenheitToCelcius()`!
- In fact the function __does__ does convert a variable called `temperature` to fahrenheit, just __not the one we wanted__

???

- That is, it's converting the __argument__ `temperature` that only exists in the function definition, not outside it

---

## Functions with __results__

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- That's because when we call `convertFahrenheitToCelcius(temperature)` we are passing through the __value inside__ `temperature`
- Not the variable itself, just the number `23` in this case

---

## Many happy returns...

- But if we can send things into a function (as parameters), surely we can get things out?
- Yes. We. Can.
- This is most often helpful if we have a function that __calculates__ something
- Or sometimes a function that can __check__ something for us and report back

---

## `convertFahrenheitToCelcius()` sucks right now

```javascript
function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
}
```

- It __does__ convert the value passed into fahrenheit
- And it __does__ store the result in a variable (the parameter variable)
- But it doesn't __give it back__ after it is calculated
- Pointless!

---

## `convertFahrenheitToCelcius()` sucks less...

```javascript
function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
  return temperature;
}
```

- In order to give something back we need to `return` it inside the function
- We do this by writing `return` and then the thing we want to return, like the resulting argument `temperature`
- The thing we `return` should be the __type__ of value appropriate to the function (since this one calculates a number, we should make sure we're returning a number)

---

## Damn it `convertFahrenheitToCelcius()`!!!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperature,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
  return temperature;
}
```


- This still doesn't work. Why?
--

- It's because we don't actually __use__ the value `convertFahrenheitToCelcius` is giving back
- We don't "receive" it

---

## `convertFahrenheitToCelcius()` you beautiful function you!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  var temperatureInFahrenheit = convertFahrenheitToCelcius(temperature);
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + temperatureInFahrenheit,width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
  return temperature;
}
```

- We need to __receive__ the value calculated by `convertFahrenheitToCelcius`
- We can put it into an appropriately named variable, for instance!

---

## `convertFahrenheitToCelcius()` you beautiful function you!

```javascript
function setup() {
  createCanvas(640,480);
}

function draw() {
  var temperature = 23;
  textAlign(CENTER,CENTER);
  textSize(24);
  text("Today's temperature is " + convertFahrenheitToCelcius(temperature),width/2,height/2);
}

function convertFahrenheitToCelcius(temperature) {
  temperature = (temperature - 32) / 1.8;
  return temperature;
}
```

- Or we can use it directly wherever we want to use the __value it calculates__
- Essentially we can imagine that function call is __replaced with the value it returns__

---

## Modularity and reuse!

There are two main reasons why functions are so great, and they have special names!

Functions are ___modular___. We can tidy our code into separate, self-contained blocks that make sense as a unit. Our code becomes more organised, more readable, easier to fix.

Functions are ___reusable___. We can use a function over and over again without writing out all the code in it. This makes our programming more efficient and less lengthy. It's like free code!

---

## Food for thought

- With functions it's like we suddenly have this team of different workers who we can ask to do specific things for us whenever we want
- Sometimes we give them some information so they can do their job (parameters / arguments)
- Sometimes they come back and give us some information that they worked out (return values)

The weird thing is that these workers are all also... __us__.

???

- Because we write those functions, right? Get it? Deep.


---

# Fin.
