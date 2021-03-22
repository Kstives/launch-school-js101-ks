/*
PROBLEM:
Write a function that takes two arrays as arguments, and returns an array
containing the union of the values from the two. There should be no duplication
of values in the returned array, even if there are duplicates in the original
arrays. You may assume that both arguments will always be arrays.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Two arrays
    Output: One array containing the values of each array, with no dublicates


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The input is two separate arrays
  2. The output is a new array
  3. The output array contains the values of both input arrays
  4. The output array does not have any duplicate values
  5. There is no specification on what the values are (so they could be strings,
    numbers, other arrays, ect.)
  6. The assumption is that the input arguements are always arrays

  Clarifying Questions:
    1. What if both input arrays are empty?
    - an empty array gets returned
    2. What if only one input array is empty?
    - An array is returned with the values of the non-empty array,
    disregarding the empty array
    3. Should the method for combining the input arrays be broad enough to
    handle different types of elements?
    - initially, no. But to take in account all test cases, maybe yes.


 MENTAL MODEL:
    Create a function that accepts two arguments of arrays, filters out
    duplicate values from each array, unites the values into a new array, and
    returns that array

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [1, 3, 5], [3, 6, 9]
    Output: [1, 3, 5, 6, 9]

    EXAMPLE TWO
    Input: [4, 'cat', 4], [6, 9, 1]
    Output: [4, 'cat', 6, 9, 1]

    EXAMPLE THREE
    Input: ['Cat', 'cat', 2], [2]
    Output: ['Cat', 'cat', 2]

    EXAMPLE FOUR
    Input: [false, 'ball', 3], []
    Output: [false, 'ball', 3]

    EXAMPLE FIVE
    Input: [], []
    Output: []

D: DATA STRUCTURE
arrays, array methods
A: ALGORITHM

START

  1. Combine the two input arrays and SET as combinedArray
  2. SET empty output array as outputArray
  3. Compare values from combinedArray with values put in outputArray
    a. IF value from combinedArray matches value in outputArray,
    continue to next comparison
    b. ELSE add value from combinedArray to outputArray
  4. PRINT outputArray

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function union(array1, array2) {
  let combinedArray = array1.concat(array2);
  let outputArray = [];
  for (let index = 0; index < combinedArray.length; index += 1) {
    let currentValue = combinedArray[index];
    if (outputArray.includes(currentValue)) {
      continue;
    } else {
      outputArray.push(currentValue);
    }
  }
  
  return outputArray;
}

console.log(union([1, 3, 5], [3, 6, 9]));        // [1, 3, 5, 6, 9]
console.log(union([4, 'cat', 4], [6, 9, 1]));    // [4, 'cat', 6, 9, 1]
console.log(union(['Cat', 'cat', 2], [2]));      // ['Cat', 'cat', 2]
console.log(union([false, 'ball', 3], []));      // [false, 'ball', 3]
console.log(union([], []));                      // []