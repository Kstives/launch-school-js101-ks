/*
Isn't it Odd? 
Write a function that takes one integer argument, which may be positive, negative, or zero. This method returns true if the number's absolute value is odd. You may assume that the argument is a valid integer value.
*/

// Examples:
  //console.log(isOdd(2)); // => false
  // console.log(isOdd(5)); // => true
  // console.log(isOdd(-17)); // => true
  // console.log(isOdd(-8)); // => false
  // console.log(isOdd(0)); // => false
  // console.log(isOdd(7)); // => true

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM

  // Determine the expected Input and Output
  /*
  Input: One integer (either postive, negative, or zero)
  Outputs:true if the number's absolute value is odd
          false if the number's absolute value is even
  */
   
  
  // Make the requirements explicit
  /*
  Terms:
  *absolute value: the distance of a number from zero, regardless of sign.
  In practice, "absolute value" means to remove any negative sign in front of
  a number and to think of that number as positive (or zero)
  *integer: A whole number, a number that is not a fraction
  *odd number: when divided by 2, leaves a remainder of 1
  *even number: when divided by 2, there is no remainder
  */ 


  // Identify rules (implicit requirements)
  /*
  1. This problem must be completed using a function
  2. The function always takes one integer as an argument
  3. The integer can be positive, negative, or zero
  4. A boolean value must be returned from the function
  5. The argument passed to the function will always be a valid integer value
  6. If the number is odd, return true
  7. If the number is even, return false
  8. The check for odd or even must disregard the integer's sign (+ or -)
  and the integer's place value (the value of 0, 100, -100 or any other number is irrelevant to the check)

  Clarifying Questions:
  1. What if a second argument is given? 
  The function should only have one parameter to receive the first argument given,
  the other argument will be ignored
  2. Will the normal check for an odd number (divided by 2, remainder of 1) work for negative and postive numbers and zero?
  No, you have to adjust for negative numbers. Negative odd number divided by 2 will give the remainder of -1.
  */


  // Mental model of problem
    /*
    Using a function with one parameter, return true if the arguement passed to the function is odd, regardless of sign or value, and return false if it is even.
    */

// E: EXAMPLES/TEST CASES
  /*
  Input: Function(-1)
  Output: true

  Input: Function(2)
  Output: false

  Input: Function(0)
  Output: false

  Input: Function(-2)
  Output: false

  Input: Function(101)
  Output: true
  */

// D: DATA STRUCTURE
  // JS function with one parameter

// A: ALGORITHM
  /*
  Mental model: Using a function with one parameter, 
  return true if the arguement passed to the function is odd, 
  regardless of sign or value, and return false if it is even.

  1. Create a function named isOdd with one parameter
  2. Check to see if the argument passed to the function is 
  a positive odd number (number divided by 2 equals 1) 
  or negative odd number (number divided by 2 equals -1)
    a. if yes, return true
    b. if no, return false
  */

// ALGORITHM TESTED WITH TEST CASES
  /*
  Input: 1
  Output: true

  1. Create a function named isOdd with one parameter
  2. Check to see if the argument 1 passed to the function is 
  a positive odd number (1 divided by 2 equals 1) 
  or negative odd number (1 divided by 2 equals -1)
    a. if yes, return true
    b. if no, return false
  Returns: true

  Input: 0
  Output: false

  1. Create a function named isOdd with one parameter
  2. Check to see if the argument 0 passed to the function is 
  a positive odd number (0 divided by 2 equals 1) 
  or negative odd number (0 divided by 2 equals -1)
    a. if yes, return true
    b. if no, return false
  Returns: false

  Input: 2
  Output: false

  1. Create a function named isOdd with one parameter
  2. Check to see if the argument 2 passed to the function is 
  a positive odd number (2 divided by 2 equals 1) 
  or negative odd number (2 divided by 2 equals -1)
    a. if yes, return true
    b. if no, return false
  Returns: false

  Input: -1
  Output: true

    1. Create a function named isOdd with one parameter
  2. Check to see if the argument -1 passed to the function is 
  a positive odd number (-1 divided by 2 equals 1) 
  or negative odd number (-1 divided by 2 equals -1)
    a. if yes, return true
    b. if no, return false
  */

// C: CODE WITH INTENT

// Function with if/else statement

// function isOdd(number) {
//   if (number % 2 === 1 || number % 2 === -1) {
//     return true;
//   } else {
//     return false;
//   }

// }

// Function with ternary statement
// function isOdd(number) {
//  return (number % 2 === 1 || number % 2 === -1) ? true : false;
// }

// Arrow function with ternary statement
let isOdd = number => (number % 2 === 1 || number % 2 === -1) ? true : false;

// Launch School solution:
function isOdd2(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true
