/*
PROBLEM:
Write a function that takes an array of integers as input, multiplies all of the
integers together, divides the result by the number of entries in the array, and
returns the result as a string with the value rounded to three decimal places.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Array of integers
    Output: String


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Integer - whole number

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Pass an array of integers as an argument
  2. Multiply the integers together
  3. Divide the result by the length of the array
  4. Round the value by 3 decimal places
  5. Return result of computations as as a string

  Clarifying Questions:
    1. What if the integers are negative or a mixture of
    positive and negative?
    - The scope of the problem does not address it, but the computations
    on the integers should be the same


 MENTAL MODEL:
  Take all of the elements of an array and multiply them together, take
  the product of that and divide it by the number of elements in the array.
  Round the quotient to three decimal places and return the result as a string.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [3, 5]
    Output: "7.500"

    EXAMPLE TWO
    Input: [2, 5, 7, 11, 13, 17]
    Output: "28361.667"

D: DATA STRUCTURE
  array, array methods, string methods

A: ALGORITHM

START

  1. SET output string as stringResult
  2. multiply all of the elements of the input array together
  3. divide the product of step 2 by the number of elements in the array
  4. round the result of step 3 to three decimal places
  5. Convert result of step 4 to string and SET as value to stringResult
  6. Print stringResult

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

/*
START

  1. SET output string as stringResult
  2. multiply all of the elements of the input array together
  3. divide the product of step 2 by the number of elements in the array
  4. round the result of step 3 to three decimal places
  5. Convert result of step 4 to string and SET as value to stringResult
  6. Print stringResult

END
*/

function multiplicativeAverage(array) {
  let multiplyArray = array.reduce((accumulator, currentValue) =>
    accumulator * currentValue);
  let divideArray = multiplyArray / array.length;
  let stringResult = String(Math.round(divideArray * 1000) / 1000);

  // add zeros
  if (stringResult[stringResult.length - 4 ] !== '.') {
    stringResult += '00';
  }

  return stringResult;
}

console.log(multiplicativeAverage([3, 5]));                   // "7.500"
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"

// Launch School solution
function multiplicativeAverage2(numbers) {
  let product = 1;

  for (let idx = 0; idx < numbers.length; idx += 1) {
    product *= numbers[idx];
  }

  return (product / numbers.length).toFixed(3);
}

multiplicativeAverage2([3, 5]);                   // "7.500"
multiplicativeAverage2([2, 5, 7, 11, 13, 17]);    // "28361.667"