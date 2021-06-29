/* eslint-disable max-len */
/*
PROBLEM:
Write a function that takes an array of numbers and returns the
sum of the sums of each leading subsequence in that array.
Examine the examples to see what we mean. You may assume that the
array always contains at least one number.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: array of numbers
    Output: a number representing the sum of the addition of all subsequent
    number segments


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * sum of sums of eaching leading subsequence:
  (3) + (3 + 5) + (3 + 5 + 2) --> 21

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The function takes in an array of numbers (the array contains at least
    one number)
  2. A single number is returned, representing the sum of the sums of number
  segments
  3.

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input:
    Output:

D: DATA STRUCTURE

A: ALGORITHM

START

  1. SET input array as listOfNums
  2. SET outputArray
  3. Convert listOfNums to a string and SET as stringOfNums
  4. Create a slice of stringOfNums starting with the fist character, push to
  outputArray, adding another character in each iteration
  5. Iterate through outputArray, converting each character in each element to
  an number. adding each element's numbers together
  6. Add each sum of outputArray's elements to each other
  and SET to theFinalSum

END


Verified this works with an example:
  Input: [3, 5, 2]
  Output: 21

START

  1. SET input array as listOfNums
  listOfNums = [3, 5, 2]
  2. SET outputArray
  outputArray = []
  3. Convert listOfNums to a string and SET as stringOfNums
  stringOfNums = 352
  4. Create a slice of stringOfNums starting with the fist character, push to
  outputArray, adding another character in each iteration
  [3, 35, 352]
  5. Iterate through outputArray, converting each character in each element to
  an number. adding each element's numbers together
  [3, 8, 10]
  6. Add each sum of outputArray's elements to each other
  and SET to theFinalSum
  21

END
 */

// C: CODE WITH INTENT
/*
START

  1. SET input array as listOfNums
  2. SET outputArray
  3. Convert listOfNums to a string then array and SET as arrayOfNums
  4. Create a slice of arrayOfNums starting with the first character, push to
  outputArray, adding another character in each iteration
  5. Iterate through outputArray, converting each character in each element to
  an number. adding each element's numbers together
  6. Add each sum of outputArray's elements to each other
  and SET to theFinalSum

END
*/


function sumOfSums(inputArray) {
  let listOfNums = inputArray;
  let outputArray = [];
  let arrayOfNums = String(listOfNums).split(',');
  
  // iterate through arrayOfNums and accumulatively add the current number to the previous number
  for (let index = 1; index <= arrayOfNums.length; index += 1) {
    outputArray.push(arrayOfNums.slice(0, index));
  }
  
  // iterate through each inner array, converting elements to numbers and adding them, return the sums
  outputArray = outputArray.map(num => num.reduce((accumulator, currentNum) => accumulator + Number(currentNum), 0));
  
  // add and return all of numbers of the array
  return outputArray.reduce((accumulator, currentNum) => currentNum + accumulator, 0);

}

console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35