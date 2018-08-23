### Debugging 2 / CART 253 / Fall 2018 / Pippin Barr

# Variables

---

## Variables are the lifeblood of code

- That might be an exaggeration
- But it's certainly true that __knowing what is in your variables while your program runs is vitally important__
- A big source of bugs in code comes when variables end up with the wrong data in them and the program acts weird (or simply doesn't work)
- But variables are usually __invisible__ when your code runs
- So it's often helpful to make them visible

---

## `console.log()` and variables

- Last week we saw `console.log()` as a way to print to the JavaScript console
- We can also use it to print out the values of variables

```javascript
var meaningOfLife = 42;
console.log(meaningOfLife);
```
--

- Pop quiz: what would happen if we _didn't_ give a value to `meaningOfLife` and then tried to `console.log()` it?

???

- Let's try out the Pop quiz...

```javascript
function setup() {
  var meaningOfLife;
  console.log(meaningOfLife);
}
```

- So `meaningOfLife` is `undefined`
- Aside from being very appropriate, this is another _type_ of thing that can be inside a variable
- It means that the variable is... not defined yet!

---

## Making console output more readable

- Printing out the values of variables in our program is __so helpful__
- (It's probably my primary form of debugging!)
- But if you just print the value, it can be hard to remember which variable you were printing
- So it can be good to add a message like this

```javascript
var meaningOfLife = 42;
console.log("meaningOfLife is " + meaningOfLife);
```
--

- Yes, we just __added__ a string of text and a number
- JavaScript will helpfully assume we mean we want to add the number to the end of the string of text. Which we do!

---

## "When in doubt, `console.log()` it out"

- Seriously, printing messages with `console.log()` is the single most useful way to debug your code (especially while it's relatively simple)
- It lets you know __if things are happening__
- It lets you know __when things are happening__
- It lets you know __what value variables have__
- And that gets you a long, long way

---

## Advanced debugging: Watching variables

- Chrome comes with a serious set of debugging tools that can be used to check variables as well
- In particular you can _watch_ variables to maintain a live updating view of their values
- We won't go into it right now
- But if you're really curious you can begin your journey with the Google documentation here:

https://developers.google.com/web/tools/chrome-devtools/javascript/reference#watch

---

# Fin
