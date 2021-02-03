/*
PROBLEM:
Using the multiply() function from the "Multiplying Two Numbers" problem, write a function that computes the square of its argument (the square is the result of multiplying a number by itself).

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A number argument of a function call
    Output: The square of that number


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * square: The result of multiplying a number by itself
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Modify the function multiply from a previous lesson
  2. The function computes the square root of the argument and returns it


  Clarifying Questions:
    1.


 MENTAL MODEL:


 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 5
    Output: 25

    EXAMPLE TWO
    Input: 0
    Output: 0

    EXAMPLE THREE
    Input: -6
    Output: 36

D: DATA STRUCTURE
Function, multiplication operator

A: ALGORITHM
START

  1. SET function as square to RETRIEVE one argument num
  2. Multiply that number by itself
  3. Return the results

END

  Verified this works with an example:
    Input: 4
    Output: 16

  1. SET function as square to RETRIEVE one argument num (4)
  2. Multiply that number by itself 
  4 * 4 = 16
  3. Return the results
  16


 */

// C: CODE WITH INTENT
// function square(num) {
//   if (typeof num === 'number') {
//     return num * num;
//   } else {
//     return "Please input a number to be squared.";
//   }
// }

// console.log(square(5) === 25); // logs true
// console.log(square(-8) === 64); // logs true

// arrow function

let square2 = (num) => num * num;

console.log(square2(5)); // 25
console.log(square2(-8)); // 64

// launch school solution:
function multiply(num1, num2) {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 * num2
  } else {
    return "Please input two numbers to be multiplied.";
  }
}

function square3(number) {
  return multiply(number, number);
}

// FURTHER EXPLORATION
/*
What if we wanted generalize this function to a "power to the n" type function: cubed, to the 4th power, to the 5th, etc. How would we go about doing so while still using the multiply() function?
*/

function findFourthPower(number) {
  return multiply(multiply(number, number), multiply(number, number)); // fourth power
}

console.log(findFourthPower(4)); // logs 256