/*
PROBLEM:
Write a function that takes an array as an argument, and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Array
    Output: An array with two elements that are arrays with the original
    array's values split equally in each array


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The input is one array
  2. The output is a new array
  3. The output array contains two elements, two subarrays
  4. Subarray1 has the first half of the input array's value
  5. Subarray2 has the second half of the input array's values
  6. If the input array has an odd number of elements, the middle
  element gets placed in subarray1
  7. If the input array is empty, return an empty array with two empty
  subarrays
  8. If there is only one element in the input array, return an array with
  the number in the first subarray and an second empty subarray

  Clarifying Questions:
    1.

 MENTAL MODEL:
  Create a function that takes an array and returns an new array with two
  elements that are subarrays. In the first element, the first half of
  the input array's values are placed, in the second element, the second
  half of the values are placed. If the input array has an odd number of
  elements, the middle element gets placed in the first output array's subarray
  element.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [1, 2, 3, 4]
    Output: [[1, 2], [3, 4]]

    EXAMPLE TWO
    Input: [1, 5, 2, 4, 3]
    Output: [[1, 5, 2], [4, 3]]

    EXAMPLE THREE
    Input: [5]
    Output: [[5], []]

    EXAMPLE FOUR
    Input: []
    Output: [[], []]

D: DATA STRUCTURE
Array, array methods, math operators
A: ALGORITHM

START

  1. SET empty array with two empty array elements to outputArray
2. Determine the length of the input array
  a. IF the input array's number of elements is odd
    i. Round up the result of dividing the length of the input array by 2,
    SET to subLength
  b. ELSE
      i. Divide the length of the input array by 2, SET to subLength
3. Using the value of subLength, take the first portion of the
      input array and place in outputArray element 0
4. Using the value of subLength, take the second portion of the
      input array and place in outputArray element 1
5. Return outputArray

END

*/

// C: CODE WITH INTENT

function halvsies(inputArray) {
  let outputArray = [];
  let inputLength = inputArray.length;
  let subLength = Math.ceil(inputLength / 2);
  
  outputArray[0] = inputArray.slice(0, subLength);
  outputArray[1] = inputArray.slice(subLength);
  
  return outputArray;

}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]