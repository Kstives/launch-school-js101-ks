/*
PROBLEM:
Write a function that takes one argument, an array of integers, and returns the
average of all the integers in the array, rounded down to the integer component
of the average. The array will never be empty, and the numbers will always be
positive integers.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: An array of integers
    Output: A number representing the average of all the integers,
    rounded down the nearest whole number.


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Average - The sum of the numbers divded by the total number of values
  in the set.

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. An argument of an array of numbers is taken in
  2. The integers will always be positive
  3. The array will never be empty
  4. One number is returned from the function

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [1, 2, 3, 4, 5]
    Output: 3

D: DATA STRUCTURE
loop, array methods, number methods
A: ALGORITHM

START

  1. Iterate through the argument array, adding each element to the previous
  computation (ex. 1 + 1 + 1)
  2. Divide the result of step 1 by the number of elements in the argument array
  3. Round the quotient down to the nearest whole number and return

END

*/
// C: CODE WITH INTENT

function average(array) {
  let result = 0;
  for (let counter = 0; counter < array.length; counter += 1) {
    result += array[counter];
  }
  return Math.floor(result / array.length);
}

console.log(average([1, 5, 87, 45, 8, 8]));       // 25
console.log(average([9, 47, 23, 95, 16, 52]));    // 40

// FURTHER EXPLORATION

// forEach method
console.log('forEach method');
function average2(array) {
  let result = 0;
  array.forEach(num => {
    result += num;
  });
  return Math.floor(result / array.length);
}

console.log(average2([1, 5, 87, 45, 8, 8]));       // 25
console.log(average2([9, 47, 23, 95, 16, 52]));    // 40

// reduce method
console.log('reduce method');
function average3(array) {
  let result = array.reduce((acc, currentValue) => acc + currentValue);
  return Math.floor(result / array.length);
}

console.log(average3([1, 5, 87, 45, 8, 8]));       // 25
console.log(average3([9, 47, 23, 95, 16, 52]));    // 40