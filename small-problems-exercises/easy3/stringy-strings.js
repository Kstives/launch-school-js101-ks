/*
PROBLEM:
Write a function that takes one argument, a positive integer, and returns a
string of alternating '1's and '0's, always starting with a '1'. The length of
the string should match the given integer.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A positive integer
    Output: A string of alternating 1's and 0's,
    as many as the positive integer input


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. function takes one argument
  2. the arguement is always a positive integer
  3. a string of alternating 1's and 0's is returned
  4. the output string's length is the given integer
  5. the output string always starts with 1

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: stringy(10)
    Output: 1010101010

    EXAMPLE TWO
    Input: stringy(-1)
    Output: 'Please enter a positive number.'

    EXAMPLE THREE
    Input: stringy(0)
    Output: 'Please enter a positive number.'

    EXAMPLE FOUR
    Input: stringy(3)
    Output: 101
    

D: DATA STRUCTURE
function, loop, string

A: ALGORITHM

START

  1. GET positive integer, SET to stringLength
  2. SET iterator = 1
  3. WHILE iterator < stringLength
  4. IF iterator is odd number:
    a. add 1 to binaryString
    b. ELSE add 0 to binaryString
  5. PRINT binaryString
  

END

Verified this works with an example:
  Input: stringy(4)
  Output: '1010'

 START

  1. GET positive integer, SET to stringLength
  stringLength = 4
  2. SET iterator = 1
  3. WHILE iterator < stringLength
  4. IF iterator is odd number:
    a. add 1 to binaryString
  iterator = 1
  binaryString = '1'
  iterator = 3
  binaryString = '101'
    b. ELSE add 0 to binaryString
  iterator = 2
  binaryString = '10'
  iterator = 4
  binaryString = '1010'

  5. PRINT binaryString
  '1010'

END
 */

// C: CODE WITH INTENT
/*
START

  1. GET positive integer, SET to stringLength
  2. SET iterator = 1
  3. WHILE iterator < stringLength
  4. IF iterator is odd number:
    a. add 1 to binaryString
    b. ELSE add 0 to binaryString
  5. PRINT binaryString
  

END
*/

function stringy(stringLength) {
  let iterator = 1;
  let binaryString = '';

  if (stringLength <= 0) {
    return 'Please enter a positive integer.';
  }

  
  while (iterator <= stringLength) {
    iterator % 2 !== 0 ? binaryString += 1 : binaryString += 0;
    iterator += 1;
  }
  return binaryString;
}

console.log(stringy(0));    // Please enter a positive integer.
console.log(stringy(4));    // "1010"
console.log(stringy(6));    // "101010"
console.log(stringy(7));    // "1010101"
console.log(stringy(9));    // "101010101"