/* eslint-disable max-len */
/*
PROBLEM:
In the previous two exercises, you developed functions that convert simple
numeric strings to signed integers. In this exercise and the next, you're going
to reverse those functions.

Write a function that converts a non-negative integer value (e.g., 0, 1, 2, 3,
and so on) to the string representation of that integer.

You may not use any of the standard conversion functions available in JavaScript,
such as String(), Number.prototype.toString, or an expression such as '' +
number. Your function should do this the old-fashioned way and construct the
string by analyzing and manipulating the number.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: 345
    Output: "345"


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Convert a non-negative stringed number to a numeral value

  Clarifying Questions:
    1.


 MENTAL MODEL:


 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: "4321"
    Output: 4321

    EXAMPLE TWO
    Input: "0"
    Output: 0

    EXAMPLE THREE
    Input: "5000"
    Output: 5000

D: DATA STRUCTURE
 
A: ALGORITHM

START
  1. Break number as each number's face value and put as an element in a list
  2. Compare each number value in the list against the object of stringed numbers.
    a. IF the current number = stringed number, add stringed number to outputStringArray
  3. Join stringArray elements together and RETURN

END

 */

// C: CODE WITH INTENT

let stringObj = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9'
};

function returnNumberArray(number) {
  let outputNumberList = [];
  let remainder;
 
  if (number === 0) {
    outputNumberList = [0];
  }
  
  while (number > 0) {
    remainder = number % 10;
    outputNumberList.push(remainder);
    number -= remainder;
    number /= 10;
  }

  return outputNumberList.reverse();
}

function integerToString(number) {
  let stringArray = [];
  let numberArray = returnNumberArray(number);

  numberArray.map(num => stringArray.push(stringObj[num]));
  return stringArray.join('');
}

console.log(integerToString(4321));       // "4321"
console.log(integerToString(0));          // "0"
console.log(integerToString(5000));       // "5000"
console.log(integerToString(1234567890)); // "1234567890"