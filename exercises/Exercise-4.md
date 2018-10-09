# Exercise 4 - Pong Plus

__Grade__: 2.5% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 15 October 2018.

## Brief

Modify the Pong game to improve it

## Learning objectives

- Adding a function
- Understanding JavaScript Objects
- Using `map()` and `constrain()`
- Practice marking your changes to code with comments

![](images/exercise-4.png)

## NEW: Commenting your changes clearly

For this exercise and all future exercises you must add a comment above and below any new code you add or code you change in your program to indicate it is something to be graded. Simply add the comment `///////// NEW /////////` above the code and `///////// END NEW /////////` below. This is to help us with grading. You will lose your commenting grade if you don't do it. So for example:

```javascript
fill(255,0,0);
rect(x,y,w,h);
```

would become

```javascript
///////// NEW /////////

// Set alpha based on health
var healthAlpha = map(health,0,100,0,255);
fill(255,0,0,healthAlpha);
// Set size based on health
w = h * health;

///////// END NEW /////////

rect(x,y,w,h);
```

## Challenges

As always, begin by downloading the start code ([exercise4.zip](exercise4.zip)). Add it to your repository and commit it as "__Ex4: Started exercise 4__". Then complete and commit each challenge below separately with a descriptive commit messages (__including the exercise prefix "Ex4:"__). Remember to comment your work.

1. Improve the game by tracking the score (add a property to each paddle to store its score in, and add an `if` statement in `handleBallOffScreen()` that checks which side of the screen it went off and updates the appropriate paddle's score)
1. Improve the game by displaying the score on the screen, but without using text (e.g. change the colour of the paddle based on its score, or its size, or its maxSpeed, or anything else). Add a function to handle this.
1. Improve the game by making the ball launch toward the paddle that won the most recent point with a random y velocity (e.g. if it went off the left side of the screen it should launch toward the righthand side with a random y vleocity). Make sure you keep your random y velocity within a range that makes the game still interesting to play (e.g. not too high and not too low)). Add a `reset()` function to handle this.
1. Improve the game by making it visually and sonically interesting in some way (e.g. you could make it a metaphor by using images and sounds to convey an idea, or you could keep it abstract but use more interesting shapes, perhaps allow things to leave a trail, perhaps fill the paddles and balls with randomly generated "static", or something else)

Optional challenges: Add a win condition that ends the game. Allow the paddles to move on the x axis. Make the ball move on y with a sine wave or perlin noise. Use the relative position the ball hits a paddle to influence its resulting y velocity (e.g. hitting the ball off the edge might give it a sharper angle). Allow paddles to also shoot a "bullet" at each other which destroys whatever it touches.


## Starter Code

[exercise4.zip](exercise4.zip)


## Submission

You will submit this exercise as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2018/issues

(Click on the Issue with the name of the exercise and your section letter and follow the instructions.)


## Grading

Grading for exercises will consider the following categories equally:

- __Runs__ and __implements the challenges required__
- Has __suitable commenting for all added/changed code and functions__
- Includes a minimum of one initial commit of the template code, and at least __one commit message per challenge addressed__, all commits must have a __descriptive message__ prefixed with "Ex4: "
- Uses __good naming__ for added variables, functions, and object properties
- Is __well structured__, with new code added in sensible places in sensible orders, uses functions and objects where appropriate to keep code organised

Each element is equally weighted in your the grade for the exercise and will be graded as follows:

- __Excellent__ (A / 100%) - Meets requirements perfectly
- __Good__ (B / 75%) - Meets requirements with some minor issues
- __Adequate__ (C / 50%) - Meets requirements but with clear issues
- __Poor__ (D / 25%) - Barely meets requirements
- __Non-submission / Unacceptable__ (F / 0%)
