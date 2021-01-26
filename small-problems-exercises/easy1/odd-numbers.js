// JS101 Small Problems - Easy1 - Odd Numbers

// Log all odd numbers from 1 to 99, inclusive, to the console, 
// with each number on a separate line.

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // IDENTIFY EXPECTED INPUT AND OUTPUT
    /*
    Input: All numbers from 1-99
    Output: All odd numbers from 1-99 in the console, on separate lines
    */
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms in problem domain:
    *Odd Number: Any number when divided by 2 results in the remainder of 1
    *Inclusive: Including the endpoints of an interval
    (In this problem domain, it means that 1 and 99 are also logged to the console)
    */
  // IDENTIFY THE RULES
    /*
    1. Only odd numbers are logged
    2. All numbers: 1, [odd numbers in between], and 99 must be logged
    3. Each number has to be logged on a separate line
    4. The numbers must be logged in the console
    */
  // CLARIFYING QUESTIONS:
    /*
    1. Are there any requirements for specific data strutures or values?
    No, only that a specific range of odd numbers are logged to the console.
    */
  // MENTAL MODEL:
    /*
    Log all of the odd numbers from 1 to 99 in the console, each number on their own line in the console.
    */

// E: EXAMPLES/TEST CASES
  /*
  Input: numbers 1-99
  Output:
  1
  3
  5
  7
  .
  .
  .
  99
  */

// D: DATA STRUCTURE
  /*
  1. We must use the JS built-in method console.log
  2. A loop of the numbers 1-100 will log the numbers to the console
  each on their own line
  */

// A: ALGORITHM
  /*
  1. Create a variable COUNTER with the value of 1
  2. Create a program to iterate between incrementing the value of 
  COUNTER and logging to the console
  3. Set an interation limit of 100
  4. Does the value of COUNTER divided by 2 equal 1?
      a. If yes, log the value of COUNTER to the console
      and continue to step 5
      b. If no, continue to step 5
  5. Increment COUNTER by 1
  6. Has the value of COUNTER reached 100?
      a. If no, repeat steps 4 & 5
      b. If yes, exit program
  */

// C: CODE WITH INTENT

// WHILE LOOP

// let counter = 1;

// while (counter < 100) {
//   if (counter % 2 === 1) {
//     console.log(counter);
//     counter += 1;
//   } else {
//     counter += 1;
//   }
// }

// FOR LOOP

for (let counter = 1; counter <= 99; counter += 1) {
  if (counter % 2 !== 0) {
    console.log(counter);
  } 
}

// launch school solution:

// for (let number = 1; number < 100; number += 2) {
//   console.log(number);
// }

// FURTHER EXPLORATION
/* Repeat this exercise with a technique different from the one that you used,
and different from the one provided. Also consider adding a way for the user to
specify the limits of the odd numbers logged to the console.
*/

// A way for the other user to specify the limits of
// the odd numbers logged to the console with readline-sync

// let rlSync = require('readline-sync');
// let setLowLimit = rlSync.question('What number do you want to start with?\n');
// let setHighLimit = rlSync.question('What number do you want to end with?\n');
// let counter = Number(setLowLimit);
// let limit = Number(setHighLimit);

// for (counter; counter <= limit; counter += 1) {
//   if (counter % 2  !== 0) {
//     console.log(counter);
//   }
// }

// with arguements passed to a function

// function oddNumRange (lowNum, highNum) {
//   for (let counter = lowNum; counter <= highNum; counter += 1) {
//     if (counter % 2 !== 0) {
//       console.log(counter);
//     }
//   }
// }

// oddNumRange(1, 99);
// oddNumRange(5, 10);
// oddNumRange(0, 30);
