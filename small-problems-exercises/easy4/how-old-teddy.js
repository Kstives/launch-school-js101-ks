/*
PROBLEM:
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: No input
    Output: A random number expo


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1.

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input:
    Output:

D: DATA STRUCTURE

A: ALGORITHM

START

  1.

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function teddyAge() {
  let randomNum = Math.floor(Math.random() * 121);
  if (randomNum >= 20) {
    console.log(`Teddy is ${randomNum}`);
  } else {
    teddyAge();
  }
  
}

teddyAge();

// Alternative solution from Launch School

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let age = randomBetween(20, 120);
console.log(`Teddy is ${age} years old!`);

// further exploration
/*
The randomBetween function used the Math.floor() method. Would it make a
difference if the Math.round() method was used instead?

I don't think so. Math.round() and Math.floor() are both rounding numbers to
a whole number
*/

function randomBetween2(min, max) {
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let age2 = randomBetween2(20, 120);
console.log(`Teddy is ${age2} years old!`);

/*
Also, how can we make the function more robust? What if the user inadvertently
gave the inputs in reverse order (i.e., the value passed to min was greater than
max)?
*/

function randomBetween3(min, max) {
  if (min > max) {
    let newMin = max;
    max = min;
    min = newMin;
  }
  console.log(min);
  console.log(max);
  return Math.round(Math.random() * (max - min + 1)) + min;
}

let age3 = randomBetween3(120, 20);
console.log(`Teddy is ${age3} years old!`);