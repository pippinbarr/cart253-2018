### Graphics / CART 253 / Fall 2018 / Pippin Barr

# Displaying text

---

## In this module

- Why text?
- Displaying and formatting text
- Loading and using fonts

---

## Why text?

- They say a thousand words is worth a picture...
- Also being able to display text means we can display __language__
- Which is a pretty important way to convey information in a program
--

- __Sometimes when you want to say something, you should just write it on screen.__

---

## `text()`

- Most fundamentally, to display text on screen we use the `text()` command

```javascript
text("Hello, World!", width/2, height/2);
```
--

- `text()` takes __three parameters__:
  - The __string__ of text to display
  - The __x coordinate__ to display it at
  - The __y coordinate__ to display it at

---

## `textSize()`

- We probably want to be able to control how big the text we're displaying is
- And for this we use `textSize()`

```javascript
textSize(64);
text("Hello, World!", width/2, height/2);
```
--

- `textSize()` takes __one argument__, the size of the text to display
- The number you use here reflects the __height in pixels__ of the text

---

## `textAlign()`

- By default, text is displays with its __bottom left corner__ at the position we specify
- But we probably want to be able to change this, and we can

```javascript
textAlign(LEFT);
textAlign(CENTER);
textAlign(RIGHT);
```
--

- As you can see, the parameter is the __name of the horizontal alignment__ we want
- It can be `LEFT`, `CENTER`, or `RIGHT` (the default is `LEFT`)

---

## `textAlign()`

- We can also choose to __vertically align__ text by adding a second parameter to `textAlign`

```javascript
textAlign(LEFT,TOP);
textAlign(LEFT,CENTER);
textAlign(LEFT,BOTTOM);
```
--

- Again, we have special names for the vertical alignment, `TOP`, `CENTER`, and `BOTTOM`

---

## Quiz...

- So how would we align some text exactly in the centre of the canvas?
--

```javascript
textAlign(CENTER,CENTER);
text("Stuck in the middle with you.", width/2, height/2);
```
--

- And how would we align some text against the bottom right of the canvas?
--

```javascript
textAlign(RIGHT, BOTTOM);
text("Stuck in the bottom-right with you.", width, height);
```

---

## `textLeading()`

- We can control line height with `textLeading()`
- We use it to specify how many pixels there should be between lines of text

```javascript
textSize(24);
textLeading(24);
textAlign(LEFT,CENTER);
text("1\n2\n\3", width/2, height/2);
```
--

- Naturally it's related to the setting we use in `textSize()`
- So if we wanted 1.5 line-heights we'd use...
--
 `textLeading(32)`
--

- Or perhaps more conveniently `textLeading(24 * 1.5)`

---

## `textFont()`

- By default `text()` will use a sans-serif font
- But we can use other fonts using `textFont()`
- The easiest way is just to use the name of a websafe font

```javascript
textFont("Courier");
textSize(32);
text("Hello, Courier!", 0, height/2);
```

???

- The default font looks like it's Helvetica, at least on my computer
- You can find lists of websafe fonts by searching on Google
- e.g. https://www.w3schools.com/cssref/css_websafe_fonts.asp

---

## `loadFont()`

- We can also load fonts from font files in our project
- The formats accepted are `.ttf` and `.otf`

```javascript
var myFont;

function preload() {
  myFont = loadFont("assets/fonts/myCoolFont.ttf");
}
```

- As with images, when we're loading something from a file, it's best to do so inside the `preload()` function so it is loaded before our program runs

---

## `textFont()` with a loaded font

- Once we've loaded our font, we can use the variable we saved it in with `textFont()`

```javascript
textFont(myFont);
textSize(32);
text("Hello, My Cool Font!", 0, height/2);
```

---

## Text!

- So now we can display text
- We can control how it gets positioned
- And we can control what it looks like!

---

# Fin.
