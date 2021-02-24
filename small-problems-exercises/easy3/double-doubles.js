/*
PROBLEM:
A double number is an even-length number whose left-side digits are exactly the
same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all
double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; return double numbers as-is.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: a number
    Output: returns the number multiplied by 2, unless
    the number is a double number, return double number as-is


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * double number: an even-length number whose left-side digits
    are exactly the same as its right-side digits (ex. 44, 3333, 103103)

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The number must have an even length to be a double number
  2. The left-side digits are the same as the right-hand digits
  to be a double number
  3. If the input number is not a double digit, it gets multiplied by 2 and
  the product is returned

  Clarifying Questions:
    1. Does the number have to be positive?
    I don't think it matters if the number is negative or positive
    (but that is an edge case that should be considered because the -
      might throw off the double number checks)

 MENTAL MODEL:
Create a function that accecpts a number as an assignment, checks to see if it
is a double number. If it is a double number, return it without changing it.
If the number is not a double number, multiply it by 2 and return it
 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 37
    Output: 74

    EXAMPLE TWO
    Input: 44
    Output: 44

    EXAMPLE THREE
    Input: -2020
    Output: -2020

    EXAMPLE FOUR
    Input: -107
    Output: -214

D: DATA STRUCTURE
function, arrays, array methods

A: ALGORITHM

START
  Check for negative sign:
  1. IF the first character of the number is -
  remove the first character, SET negativeNumSign to true
  return number
  2. ELSE return number

  Check for double numbers
  1. Check the length of the characters of the number that was inputted
      a. IF the length is not even, multiply the number by two and return
  2. Split the number characters into two equal lists
  3. Does negative negativeNumSign = true
      a. if yes, add - to the beginning of each list
  3. Does listA equal listB?
      a. IF yes, return the number
      b. ELSE, multiply the number by two and return

END


Verified this works with an example:
  Input: 33
  Output: 33

START

 Check for double numbers
  1. Check the length of the characters of the number that was inputted
      a. IF the length is not even, multiply the number by two and return
      length of '33' === 2: false
  2. Split the number characters into two equal lists
  listA = '3' listB ='3'
  3. Does listA equal listB?
      a. IF yes, return the number
      33
      b. ELSE, multiply the number by two and return

END

 */

// C: CODE WITH INTENT

function removeSign(number) {
  let numArray = String(number).split('');
  if (numArray[0] === '-') {
    numArray.shift();
    return numArray;
  } else {
    return numArray;
  }
}

function isNegative(number) {
  let numArray = String(number).split('');
  return numArray[0] === '-';
}
  
function twice(number) {
  let numString = removeSign(number);
  let numIsNegative = isNegative(number);

  if (numString.length % 2 !== 0) {
    return number * 2;
  }

  let numStringLeft = numString.slice(0, (numString.length / 2));
  let numStringRight = numString.slice(numString.length / 2);

  if (numIsNegative) {
    numStringLeft = '-' + numStringLeft;
    numStringRight = '-' +  numStringRight;
  }

  if (parseInt(numStringLeft, 10) === parseInt(numStringRight, 10)) {
    return number;
  } else {
    return number * 2;
  }
}

console.log(twice(1));           // 2
console.log(twice(37));          // 74
console.log(twice(-37));         // -74
console.log(twice(44));         // 44
console.log(twice(-44));        // -44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676