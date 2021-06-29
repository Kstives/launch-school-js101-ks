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

function leadingSubstrings(inputString) {
  let outputArray = [];

  for (let char = 1; char <= inputString.length; char += 1) {
    outputArray.push(inputString.substring(0, char));
  }

  return outputArray;
}

function substrings(inputString) {
  let stringCopy = inputString;
  let outputArray = [];

  for (let counter = 0; counter < inputString.length; counter += 1) {
    outputArray.push(leadingSubstrings(stringCopy));
    stringCopy = stringCopy.split('');
    stringCopy.shift();
    stringCopy = stringCopy.join('');
  }

  return outputArray.flat();
  
}

// console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
// console.log(leadingSubstrings('a'));        // ["a"]
// console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log(substrings('abcde'));
// returns
/*
[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]
*/

/*
Further Exploration

Rewrite substrings using list processing functions. That is,
convert the string into an array of some sort and use
functions like map, filter, or reduce to get the desired
substrings. (You will also need to use join.) Try not to use
forEach as that is too similar to the for loop approach.

*/