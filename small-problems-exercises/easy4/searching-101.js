/*
PROBLEM:
Write a program that solicits six numbers from the user, then logs a message
that describes whether or not hte sixth number appears amongst the first five
numbers.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: six numbers from the user
    Output: "The number x appears in x, x, x, x, x, x."

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

  1. Get 6 numbers from user and put in a list called userNums
  2. Check and see if the last number put into the list matches
  any of the first five numbers
    a. IF yes, PRINT "The number [last number] appears in [list of numbers in
    userNums]"
    b. ELSE, PRINT "The number [last number] does not appear in [list of numbers
    in userNums]"

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

// let rlSync = require("readline-sync");
// let userNums = [];

// console.log("Enter the 1st number: ");
// userNums.push(rlSync.prompt());

// console.log("Enter the 2nd number: ");
// userNums.push(rlSync.prompt());

// console.log("Enter the 3rd number: ");
// userNums.push(rlSync.prompt());

// console.log("Enter the 4th number: ");
// userNums.push(rlSync.prompt());


// console.log("Enter the 5th number: ");
// userNums.push(rlSync.prompt());

// console.log("Enter the last number: ");
// userNums.push(rlSync.prompt());

// let firstFive = userNums.slice(0, 5).join(", ");
// let lastNumber = userNums[userNums.length - 1];

// if (firstFive.includes(lastNumber)) {
//   console.log(`The number ${lastNumber} appears in ${firstFive}`);
// } else {
//   console.log(`The number ${lastNumber} does not appear in ${firstFive}`);
// }

// alternative code

let rlSync = require("readline-sync");
let userNums = [];

let positions = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
let counter = 0;
while (counter < positions.length) {
  console.log(`Enter the ${positions[counter]} number:`);
  userNums.push(Number(rlSync.prompt()));
  counter += 1;
}

let firstFive = userNums.slice(0, 5).join(", ");
let lastNumber = userNums[userNums.length - 1];

if (firstFive.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in ${firstFive}`);
} else {
  console.log(`The number ${lastNumber} does not appear in ${firstFive}`);
}

/*
 What if the problem was looking for a number that satisfies some condition
 (e.g., a number greater than 25), instead of a specific number?
 Would the current solution work? Why or why not? Think about this first before
 scrolling down.
*/

/*
I think another method would have to be used, such as using a loop
and a conditional expression or using the map method
*/

function isIncluded(arr, val) {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] > val) {
      return true;
    }
  }

  return false;
}

// some() method

let over25 = (number) => number > 25;

if (userNums.some(over25)) {
  console.log(`There is a number in ${userNums.join(', ')} that is over 25.`);
} else {
  console.log(`There is not a number in ${userNums.join(', ')} that is over 25.`);
}