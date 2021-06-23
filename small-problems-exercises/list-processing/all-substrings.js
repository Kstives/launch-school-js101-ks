/*
PROBLEM:
Write a function that returns a list of all substrings of a string.
Order the returned list by where in the string the substring begins.
This means that all substrings that start at index position 0 should
come first, then all substrings that start at index position 1, and so on.
Since multiple substrings will occur at each position, return the substrings
at a given index from shortest to longest.

You may (and should) use the leadingSubstrings function you wrote
in the previous exercise:

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input:
    Output:


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1.

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

  1.

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function substrings(inputString) {

}

substrings('abcde');
// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/