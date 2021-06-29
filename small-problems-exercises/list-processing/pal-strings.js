/*
PROBLEM:
Write a function that returns a list of all palindromic
substrings of a string. That is, each substring must consist
of a sequence of characters that reads the same forward and
backward. The substrings in the returned list should be sorted
y their order of appearance in the input string. Duplicate
substrings should be included multiple times.

You may (and should) use the substrings function you wrote in
the previous exercise.

For the purpose of this exercise, you should consider all
characters and pay attention to case; that is, 'AbcbA' is a
palindrome, but 'Abcba' and 'Abc-bA' are not. In addition,
assume that single characters are not palindromes.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A string
    Output: All possible palindromic substrings from the string


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * palidromic: a sequence of characters that reads the
  same forward and backward
    * substring: a portion of a string

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Function will return an array
  2. The returned array's elements are every possible
  palidromic substring of the input string
  3. The returned array's elements is sorted by the order
  of appearance in the input string
  4. Use the substrings function written in the previous exercise
  5. Pay attention to capitalization and punctuation,
  make sure the substrings are true palindroms

  Clarifying Questions:
    1.

 MENTAL MODEL:
 Write a function that returns an array of elements that
are substrings of every possible palindromic that can be
created from the input string.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: palindromes('knitting cassettes');
    Output: [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

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

function palindromes(string) {
  return substrings(string).filter(segment => segment === segment.split('').reverse().join('') && segment.length > 1);
}

palindromes('abcd');       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]