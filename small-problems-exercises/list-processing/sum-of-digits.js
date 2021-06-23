/*
PROBLEM:
Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using for, while, or do...while loops - instead, use a series of method calls to perform the sum.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Positive integer
    Output: sum of its digits


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * sum of digits: 23 -> 2 + 3 = 5, 496 -> 4 + 9 + 6 = 19
    * postive integer: Any number above 0

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Take in one argument
  2. Arguement is a positive integer 
  3. The sum of the digits is returned as a single number
  4. Cannot use iterating methods such as for, while, do...while loops
  5. Must use method calls to acheive the returned sum

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 23
    Output: 5

    EXAMPLE TWO
    Input: 45
    Output: 9

    EXAMPLE THREE
    Input: 67777
    Output: 34

D: DATA STRUCTURE
string methods, reduce method
A: ALGORITHM

START

  1. Break up input integer into individual elements of an array, SET to intArray
  2. Use an array iterating method to loop through the elements
  3. Convert each element to a number and Add each element to the next, return a single digit sum

END


Verified this works with an example:
  Input: 23
  Output: 5

START

  1. Break up input integer into individual elements of an array, SET to intArray
  [2, 3]
  2. Use an array iterating method to loop through the elements
  3. Add each element to the next, return a single digit sum
  5

END
 */

// C: CODE WITH INTENT

function sum(int) {
  let intArray = String(int).split('');
  return intArray.reduce((accum, currentNum) => Number(accum) + Number(currentNum), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45