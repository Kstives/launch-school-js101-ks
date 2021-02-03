/*
PROBLEM:

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Two arguments
    Output: The product of those two arguments


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * 
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The two arguments must be two numbers to be multiplied together
  2. The program multiplies the two numbers
  3. The product of the multiplication is returned

  Clarifying Questions:
    1.


 MENTAL MODEL:
  Take in two numbers and multiply them and return the product

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 4, 5
    Output: 20

    EXAMPLE TWO
    Input: 20, 10
    Output: 200

    EXAMPLE THREE
    Input: 4, 0
    Output: 0

    EXAMPLE FOUR
    Input: -4, 5
    Output: -20


D: DATA STRUCTURE
function, math operator

A: ALGORITHM

  1. GET two arguements
  2. Verify that they are numbers
  3. Are the arguements numbers?
    a. IF yes, multiply the numbers
    b. ELSE PRINT "Please input two numbers"
  4. PRINT the product of the numbers

  Verified this works with an example:
    Input:
    Output:

  1. GET two arguements (4, 5)
  2. Verify that they are numbers
  3. Are the arguements numbers?
    a. IF yes, multiply the numbers 
    4 * 5
    b. ELSE PRINT "Please input two numbers"
  4. PRINT the product of the numbers
  20


 */

// C: CODE WITH INTENT
/*
  1. GET two arguements
  2. Verify that they are numbers
  3. Are the arguements numbers?
    a. IF yes, multiply the numbers
    b. ELSE PRINT "Please input two numbers"
  4. PRINT the product of the numbers
  */

function multiply(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2
  } else {
    return "Please input two numbers to be multiplied.";
  }
}

console.log(multiply(5, 3) === 15); // logs true
console.log(multiply(4, 5)); // 20
console.log(multiply('3', 4)); // Please input two numbers to be multiplied.

// arrow function

let multiply2 = (num1, num2) => num1 * num2;

console.log(multiply2(4, 4)); // logs 16