/*
PROBLEM:
Write a function that takes a string, doubles every consonant character in the
string, and returns the result as a new string. The function should not double
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace.

Examples:
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input:
    Output:


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * consonant characters: All letters besides vowels
    * vowel charactesr: a, e, i, o, u

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Take in a string
  2. Return a new string
  3. Only consonants are doubled, all other characters or whitespaces are left
  as-is

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: "Books are great!"
    Output: "BBookkss arre ggrreatt!"

D: DATA STRUCTURE
strings, arrays

A: ALGORITHM

START

  1. SET input string as inputString
  2. SET empty string as outputString
  3. Split inputString as individual characters into list, SET as letters
  4. Create list of vowels and SET as vowels
  5. Loop through letters
    a. IF letter !== vowels
      add letter to outputString
    b. ELSE IF letter !== letters a-z or A-Z
      add letter to outputString
    c. ELSE
      repeat letter and add both to outputString
  6. Return outputString

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT/*

function doubleConsonants(string) {
  if (string === '') {
    return '""';
  }

  let inputString = string;
  let outputString = '';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let alphabet = /[a-zA-Z]/g;

  for (let index = 0; index < inputString.length; index += 1) {
    let currentLetter = inputString[index];
    if (currentLetter.match(alphabet) && !(vowels.includes(currentLetter))) {
      outputString += currentLetter.repeat(2);
    } else {
      outputString += currentLetter;
    }
  }
  return outputString;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""