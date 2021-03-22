/*
PROBLEM:
Given an unordered array and the information that exactly one value in the array
occurs twice (every other value occurs exactly once), determine which value
occurs twice. Write a function that will find and return the duplicate value
that is in the array.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: An array of values, only two being the same
    Output: The value that appears in the input array twice


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * duplicate - Exactly like something else

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The function takes in array as its argument
  2. The array's values are unordered
  3. There is only one value that is a duplicate of another value in the array
  4. The function returns the duplicate value

  Clarifying Questions:
    1. Is there a specific type of value in the input array?
    - There is no specifications

 MENTAL MODEL:
 Create a function that takes in an array that has an undefined number of values
 that are arrange randomly and contains one duplicate value of another value.
 Find the duplicate value and return it.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
         38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
         14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
         78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
         89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
         41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
         55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
         85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
         40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
          7, 34, 57, 74, 45, 11, 88, 67,  5, 58]
    Output: 73

    EXAMPLE TWO
      Input: [1, 5, 3, 1]
      Output: 1

    EXAMPLE THREE
    Input: ['hello', 'my', 'name', 'is', 'James', 'James']
    Output: 'James'

    EXAMPLE FOUR
      Input: [1, 2, 3, 4, 5, 6]
      Output: "There is no duplicates"
       

D: DATA STRUCTURE
Array methods
A: ALGORITHM

START
    
  1. SET variable as duplicate with value of the first element
  in the input array
  2. iterate over all the elements in the input array
      a. IF the current element is equal to the value of duplicate
        i. SET current value to duplicate

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
    
  1. SET variable as duplicate with value of the first element
  in the input array
  2. iterate over all the elements in the input array
      a. IF the current element is equal to the value of duplicate
        i. SET current value to duplicate

END
*/

function findDup(array) {
  let sortedArray = array.slice().sort();
  console.log(array);
  let duplicate;
  for (let iterator = 0; iterator < sortedArray.length; iterator += 1) {
    let comparedValue = sortedArray[iterator];
    let nextValue = sortedArray[iterator + 1];
    if (comparedValue === nextValue) {
      duplicate = comparedValue;
    }
  }
  
  return duplicate;

}

console.log(findDup([1, 5, 3, 1])); // 1
console.log(findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58])); // 73