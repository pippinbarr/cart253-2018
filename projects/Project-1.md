# Project 1 - Build a Better Chaser

__Grade__: 10% of final grade (see grading guidelines at bottom)  
__Deadline__: 11:59PM on the day of class on week of 8 October 2018.

## Brief

Modify the Chaser game to make it a better and more interesting and meaningful game.

## Learning objectives

- Creating a meaningful visual and audio aesthetic
- Changing gameplay to increase challenge and/or meaning
- Understanding how code and experience are connected

![](images/project-1.png)

## Challenges

As always, begin by downloading the start code ([project1.zip](project1.zip)). Add it to your repository and commit it as "P1: Started project 1". Unlike in an exercise you should practice committing each time you do a unit of work that makes sense to you as a step to getting your whole project done. (e.g. there should be __more than just four commits__!)

1. Modify the way the prey moves to use Perlin noise and the `noise()` function instead of the `random()` function it uses now. (You'll need to get rid of the conditional that chooses when the prey changes direction, it should only use `noise()`).
2. Add the ability to "sprint" for the player when they hold down the shift key (using `keyDown()` in the `handleInput()` function for this is probably a good idea). Make them lose health __faster__ when they are sprinting. Don't forget to reset to the player's normal speed when they stop sprinting.
3. Add variables and conditionals as needed to make the game more interesting to play by varying the player and prey's size, speed, visibility, and/or anything else you can think of during play (maybe the prey get harder to see as the player gets more successful, maybe the player gets bigger the more it eats, etc.) - try to have a __reason__ why each thing happens.
4. Tune the values of the game's variables to make the gameplay more interesting to play (is the prey too slow? Should it move more erratically? Should the player be faster? Slower? Etc.)
5. Change the visuals of the game and add sounds so that the game is no longer abstract but conveys an idea through both its gameplay and through its aesthetics (maybe it could be about politics, or relationships, or cooking, or playing chess, or anything else!). The new visuals and sounds should __match__ the gameplay you created in step two

- Make sure you use functions to better organise your code!
- Don't limit yourself to the above five challenges, if you've got the time, make the game even better!
- Remember the Style Guide and make sure you code looks nice!

## Starter Code (Chaser)

[project1.zip](project1.zip)


## Submission

You will submit this project as a __comment__ on an __Issue__ on the course repository here:

https://github.com/pippinbarr/cart253-2018/issues

(Click on the Issue with the name of the project and your section letter and follow the instructions.


## Grading

Grading for projects will consider the following categories:

- __Implementation__ (40%)- the code runs, meets the challenges set, includes any further changes, has no errors, etc.
- __Structure__ (30%) - the code is well organised, makes good use of variables, functions, object-oriented programming, has comments indicating new code, etc.
- __Style__ (30%) - the code is well-commented, well-formatted and indented, uses good names for variables, functions, classes, etc., and has a good number of commits with well-written commit messages (commits include the prefix "P2:")

Each category for the project and will be graded as follows:

- __Excellent__ (A-range) - Meets requirements perfectly
- __Good__ (B-range) - Meets requirements with some minor issues
- __Adequate__ (C-range) - Meets requirements but with clear issues
- __Poor__ (D-range) - Barely meets requirements
- __Non-submission / Unacceptable__ (F / 0%)
