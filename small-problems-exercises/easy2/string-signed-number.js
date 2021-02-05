/*
PROBLEM:
Write a function that takes a string of digits, and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If no sign is given, you should
return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number(). You may, however, use the stringToInteger()
function from the previous lesson.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A string of digits that may start with a + or -
    Output: The numeric equivelant of that string. A positive number if it
    starts with a + and a negative number if it starts with a -. If there is
    not sign, return a positive number.


 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: '33'
    Output: 33

    EXAMPLE ONE
    Input: '-24'
    Output: -24

    EXAMPLE ONE
    Input: '100'
    Output: 100


D: DATA STRUCTURE
function, search methods, object

A: ALGORITHM
Goal #1: String to integer
Goal #2: Determine if it is a positive or negative number

START

  1.

END

  Verified this works with an example:
    Input:
    Output:

    1.


 */

// C: CODE WITH INTENT


console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true