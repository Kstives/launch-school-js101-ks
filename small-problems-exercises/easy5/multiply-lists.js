/*
PROBLEM:
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of
numbers from the arguments that have the same index. You may assume that the
arguments contain the same number of elements.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: two arrays of numbers
    Output: one array of numbers


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * product - the result of multiplying two or more numbers together

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Two arrays of numbers are taken in as the function's arguments
  2. The number in each element of array1 is multiplied by the number in
  the element with the same index position in array2
  3. The arrays passed as arguments are of the same length
  4. A new array with the products of the array's calculations is returned

  Clarifying Questions:
    1.

 MENTAL MODEL: Create a function that receives two arrays of numbers as
 arguments. Based on the same index position fo each array, multiply each
 element of array1 with array2 and return the products as numbers in a new array

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [2, 4, 6], [2, 4, 6]
    Output: [4, 16, 36]

D: DATA STRUCTURE
array, loop,
A: ALGORITHM

START

  1. Iterate through array1 & array2
  2. WHILE array1 element index equals array2 element index
    a. return element * element

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function multiplyList(array1, array2) {
  let productList = [];
  for (let index = 0; index < array1.length; index += 1) {
    productList.push(array1[index] * array2[index]);
  }
  return productList;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77])