// JS101 - Small Problems - Easy 1 - Even Numbers

// PROBLEM:
// Log all even numbers from 1 to 99, inclusive, to the console, 
// with each number on a separate line.

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: 1-99
    Output: All even numbers between 1-99 logged to the console,
    each number on a separate line
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * Even number: A number that can be divided by 2 with the remainder of 0
    * Inclusive: Including the endpoints of an interval
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. Numbers must be logged to the console.
    2. The numbers must be all the even numbers between 1-99, inclusively
    3. Each number must be logged on a separate line

    Clarifying Questions:
    1. If inclusive means the endpoints of an interval, does this mean
    that 1 and 99 must also be logged, even if they are not even numbers?
    Yes.

    */
  
  // MENTAL MODEL:
    /*
    Log 1, 99, and all even numbers between 1-99 to the console,
    each number on their own line.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: 1-99
    Output: 
    1
    2
    4
    6
    .
    .
    .
    98
    99
    */

// D: DATA STRUCTURE
  // a loop

// A: ALGORITHM
  /*
  1. Create a variable COUNTER with the value of 1
  2. Log COUNTER to the console
  3. Create a program to iterate through the numbers 1-98
  4. Does COUNTER divided by 2 equal 0?
    a. If yes, log COUNTER to the console 
    and continue to step 5
    b. If no, continue to step 5
  5. Increment COUNTER by 1
  6. Is COUNTER less than 99?
    a. If yes, exit program
    b. If no, go to step 4
  7. Log COUNTER to the console

  Verified this works with an example:
    Input: 1-5
    Output:
    1
    2
    4
    5

    1. Create a variable COUNTER with the value of 1
  2. Log COUNTER to the console
  console:
  1

  3. Create a program to iterate through the numbers 1-4
  4. Does COUNTER divided by 2 equal 0?
    a. If yes, log COUNTER to the console 
    and continue to step 5
    console:
    1
    2
    4
    b. If no, continue to step 5
  5. Increment COUNTER by 1
  COUNTER + 1 = 2
  COUNTER + 1 = 3
  COUNTER + 1 = 4
  6. Is COUNTER less than 5?
    a. If yes, exit program
    b. If no, go to step 4
  7. Log COUNTER to the console
  console:
  1
  2
  4
  5 
  */

// C: CODE WITH INTENT

// WHILE loop

// let counter = 1;
// console.log(counter);

// while (counter < 99) {
//   if (counter % 2 === 0) {
//     console.log(counter);   
//   } 
//   counter += 1;
// }
// console.log(counter);

  
// FOR loop
let counter = 1;
console.log(counter);

for (counter = 2; counter < 99; counter += 2) {
  console.log(counter);
   if (counter === 98) {
    counter += 1;
    console.log(counter);
  }
}

// DO...WHILE loop
// let counter = 1;
// console.log(counter);

// do {
//   if (counter % 2 === 0) {
//     console.log(counter);
//   }
// counter += 1;
// } while (counter < 99)

// console.log(counter);

