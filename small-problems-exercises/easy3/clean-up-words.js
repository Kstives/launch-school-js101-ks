/*
PROBLEM:
Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the
non-alphabetic characters replaced by spaces. If one or more non-alphabetic
characters occur in a row, you should only have one space in the result
(i.e., the result string should never have consecutive spaces).

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

// function cleanUp(string) {
//   let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
//   for (let char = 0; char < string.length; char += 1) {
//     if (alphabet.includes(string[char])) {
//       continue;
//     } else {
//       string = string.replace(string[char], ' ');
//     }
//   }
//   return string;
// }

// console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

function cleanUp(string) {
  string = string.replace(/[^a-z0-9\s]/g, ' ');
  for (let char = 0; char < string.length; char += 1) {
    if (string[char] === ' ' && string[char + 1] === ' ') {
      continue;
    }  else {
      string.replace(string[char], '');
    }
  }
  return string;
}

console.log(cleanUp("---what's my +*& line?"));    // expected: " what s my line "
// actually logs: '   what s my    line '