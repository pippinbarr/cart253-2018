### Graphics 2 / CART 253 / Fall 2018 / Pippin Barr

# Displaying images

---

## In this module

- Why images?
- `loadImage()`
- `image()`
- `.width` and `.height`
- `imageMode()`

---

## Why images?

- Drawing things made out of primitive geometry yields nice, clean shapes
- But it's incredibly time consuming to write all the commands
- If you want to display a complex image, it would take a long time to make it out of shapes
- Not to mention if you want, say, a photo
--

- __Sometimes when you want an image, you should just use an image.__

???

- Note that using primitive shapes _can_ be really interesting especially as we learn more programming skills
- We can use things like loops and conditionals to create _generative art_ out of primitive shapes
- We can use code to create _fractals_ out of primitive points
- And of course there are some graphical styles where we might _want_ to use primitive shapes (as a kind of minimalism, for example)

---

## `loadImage()`

- To display an image we need to load it and store it in a variable
- It is mercifully simple:

```
var exampleImage = loadImage('assets/images/exampleImage.png');
```
--

- Now the variable `exampleImage` has our image stored inside it
- Note that in this example our image file is stored in the `assets/images` folder to keep everything nicely organised
- Note that when we specify where the image is we're using a _relative path_ that gives the folders _relative to the project folder_

---

## `image(img, x, y)`

```
var exampleImage = loadImage('assets/images/exampleImage.png');
image(exampleImage, 0, 0);
```

- The `image()` function allows us to display an image stored in a variable
- The first parameter is the _variable_ the image is stored in
- The second two parameters are the (x,y) coordinates we want the image to display at
- By default the image will display with its _top left corner_ at that (x,y) coordinate

---

## `image(img, x, y, w, h)`

```
var exampleImage = loadImage('assets/images/exampleImage.png');
image(exampleImage, 0, 0, 50, 50);
```

- We can add two more parameters to the `image()` function to specify the _width_ and _height_ we want to display the image at
- Note that depending on the values we use, we can _stretch_ the image out of its original aspect ratio

---

## `.width` and `.height`

- If we want to know what the _original_ width and height of the a loaded image are, we can use `.width` and `.height` to "ask" the image itself

```
var exampleImage = loadImage('assets/images/exampleImage.png');
console.log("The width of the image is " + exampleImage.width);
console.log("The height of the image is " + exampleImage.height);
```

---

## Proportional scaling with `.width` and `.height`

- With access to the original width and height of an image, we can scale it and maintain its proportions

```
var exampleImage = loadImage('assets/images/exampleImage.png');
image(exampleImage, 0, 0, exampleImage.width/2, exampleImage.height/2);
```

- Now the image is displayed at half its original size

---

## imageMode(CENTER)

```
var exampleImage = loadImage('assets/images/exampleImage.png');
imageMode(CENTER);
image(exampleImage, 0, 0);
```

- As with `rect()` and `rectMode()` we can use `imageMode(CENTER)` to specify we want the (x,y) coordinates in `image()` to refer to the `CENTER` of our image when positioning it
- The default, which is the top left corner, is `imageMode(CORNER)`

---

## imageMode(CORNERS)

- As with `rect()` there is also `imageMode(CORNERS)`

```
var exampleImage = loadImage('assets/images/exampleImage.png');
imageMode(CORNERS);
image(exampleImage, 0, 0, 10, 50);
```

- Here the image will be drawn so that its top left corner is at the first (x,y) coordinate, which are (0,0) in this case...
- ... and with its bottom right corner at the second (x,y) coordinates, which are (10,50) in this case

---

# Fin.
