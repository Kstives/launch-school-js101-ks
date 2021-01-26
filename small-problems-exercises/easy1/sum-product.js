// PROBLEM:
/*
Write a program that asks the user to enter an integer greater than 0, 
then asks whether the user wants to determine the sum or the product of all
numbers between 1 and the entered integer, inclusive.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: An integer greater than 0, "sum" or "product"
    Output: The sum or product of all of the numbers between 1 
    and the entered integer
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * Integer: A whole number; a number that is not a fraction
    * Sum: The total amount resulting from addition of two or more numbers
    * Product: The total amount resulting from the multiplication of two or more numbers
    * Inclusive: Including the endpoints of an interval.
    * Factoral: The product of an integer and all the integers below
    * Summation: The addition of a sequence of any kind of numbers
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. The user must enter a number greater than zero
    2. The user must enter either "sum" or "product"
    3. Based on the user's input of rule 2, the sum or product
    of all the numbers from 1 to the user's input of rule 1
    4. One number will be returned from the computation


    Clarifying Questions:
    1. Is the way of how the results of the computation should be returned given?
    No, I could either use a return statement or log it to the console
    2. Is the number that the user gives to be a part of the sum or product?
    Yes, inclusive means that 1 and the entered integer are included in the sum 
    or product
    3. Does the order of the computations of the interval of numbers?
    No, in adding or multiplying numbers, order of computation doesn't matter.

    */
  
  // MENTAL MODEL:
    /*
    Using the input from the user, compute the sum or product of a range of numbers between and including 1 and a number given by the user. Return a single number of the sum or product of those numbers in a return statement or logged to the console.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: 0
    Output: "Please enter a number greater than zero"
    */
  // EXAMPLE TWO
    /*
    Input: 1, product
    Output: 1
    */
  // EXAMPLE THREE
    /*
    Input: 50, sum
    Output: 1275
    */ 
  
  // EXAMPLE FOUR
    /*
    Input: 12, product
    Output: 479,001,600
    */ 

// D: DATA STRUCTURE
  // loops, array, and reduce method

// A: ALGORITHM
  /*
  1. Ask for the user to input a number greater than 0
  2. Is the input number greater than zero? 
    a. If yes, store the number in a variable called MAX_COMPUTED_NUM and
    continue to step 3
    b. If no, log to the console "Please enter a number greater than zero"
    and repeat step 1
  3. Create something to store numbers called NUM_SET
  4. Create a variable called COUNTER, set it's value to 1
  5. Iterate the amount of times of the number stored in MAX_COMPUTED_NUM,
  6. On each iteration, add the current value of COUNTER to NUM_SET, add 1 to COUNTER, and stop adding the value of COUNTER after it adds the value of MAX_COMPUTED_NUM to NUM_SET.
  7. Ask for the user to input for the "sum" or "product" of all the numbers in NUM_SET
  8. Did the user input "sum"?
    a. If yes, add all of the numbers from NUM_SET together and log the sum to the console
    b. If no, multiply all of the numbers from NUM_SET together and log the product to the console

  Verified this works with an example:
    Input: 5, sum
    Output: 15

  1. Ask for the user to input a number greater than 0
  User: 5
  2. Is the input number greater than zero? 
    a. If yes, store 5 in a variable called MAX_COMPUTED_NUM and
    continue to step 3
    b. If no, log to the console "Please enter a number greater than zero"
    and repeat step 1
  3. Create something to store numbers called NUM_SET
  4. Create a variable called COUNTER, set it's value to 1
  5. Iterate the amount of times of the number stored in MAX_COMPUTED_NUM (5),
  6. On each iteration, add the current value of COUNTER to NUM_SET, add 1 to COUNTER, and stop adding the value of COUNTER after it adds the value of MAX_COMPUTED_NUM to NUM_SET.
  1
  2
  3
  4
  5
  7. Ask for the user to input for the "sum" or "product" of all the numbers in NUM_SET
  User: sum
  8. Did the user input "sum"?
    a. If yes, add all of the numbers from NUM_SET together and log the sum
    1 + 2 + 3 + 4 + 5
    console:
    15
    b. If no, multiply all of the numbers from NUM_SET together and log the product

  */

// C: CODE WITH INTENT
// GLOBAL SCOPE PROGAM W/ VALIDATION

//  let rlSync = require("readline-sync");
//  let maxComputedNum = Number(rlSync.question("Enter a integer greater than 0:\n"));

// // maxComputedNum validation:
// if (maxComputedNum <= 0) {
//   maxComputedNum = Number(rlSync.question("That number is less than or equal to 0. Please enter a number greater than 0:\n"));
// }

// let numSet = [];

// // creation of number interval
// for (let counter = 1; counter <= maxComputedNum; counter += 1) {
//   numSet.push(counter);
// }

// let sumOrProduct = rlSync.question(`Do you want the sum or product of 1 through ${maxComputedNum}? (Enter "sum" or "product"):\n`);

// // sum of number interval, else product of number interval
// if (sumOrProduct === 'sum') {
//   let sumOfValues = numSet.reduce((accumulator, currentValue) => accumulator + currentValue);
//   console.log(sumOfValues);
// } else {
//   let productOfValues = numSet.reduce((accumulator, currentValue) => accumulator * currentValue);
//   console.log(productOfValues);
// }

// WITH FUNCTION & NO VALIDATION
function computeSumOrProduct(maxComputedNum, sumOrProduct) {
 
  let numSet = [];
 
 // creation of number interval
 for (let counter = 1; counter <= maxComputedNum; counter += 1) {
   numSet.push(counter);
 }

 // sum of number interval, else product of number interval
 if (sumOrProduct === 's') {
   let sumOfValues = numSet.reduce((accumulator, currentValue) => accumulator + currentValue);
   console.log(`The sum of the integers between 1 and ${maxComputedNum} is ${sumOfValues}.`);
 } else {
   let productOfValues = numSet.reduce((accumulator, currentValue) => accumulator * currentValue);
   console.log(`The product of the integers between 1 and ${maxComputedNum} is ${productOfValues}.`);
 }
}

// user input for max number of interval and sum or product of number interval
let rlSync = require("readline-sync");
computeSumOrProduct(Number(rlSync.question("Enter a integer greater than 0:\n")),
rlSync.question('Enter "s" to compute the sum, or "p" to compute the product.\n'));