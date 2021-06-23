/*
PROBLEM:
Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A string
    Output: An array of strings created from the input string


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * substring: A portion of a string

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Create a function with one argument that takes a string
  2. An array of substrings from the input string is the function output
  3. Each substring begins with the first letter of the input string
  4. Each element of the output array adds the next character in the string,
  building upon the previous substring element
  example:
  leadingSubstrings('abc');  // ["a", "ab", "abc"]
  5. The elements in the output array should be ordered from the shortest length
  of characters to the longest length of characters
  6. If a single character is given in the input string, a single element with
  one character is returned
  
  Clarifying Questions:

    1.

 MENTAL MODEL:
Write a function that takes a string and returns an array that contains
elements of substrings created from the input string, starting with the first
character of the string for the first element, and adding an additional
character for each seqeuntial element, until all characters of the input string
are contained in the last element.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 'crazy'
    Output: ['c', 'cr', 'cra', 'craz', 'crazy']

    EXAMPLE TWO
    Input: 'z'
    Output: ['z']

    EXAMPLE THREE
    Input: '12345'
    Output: ['1', '12', '123', '1234', '12345']


D: DATA STRUCTURE
strings and arrays

A: ALGORITHM

START

  1. SET string argument as inputString
  2. SET returned array as outputArray
  3. SET char = 0
  4. WHILE char < inputString.length
    i. Select first character of inputString and add to outputArray
    ii. Take a slice of the input string starting with the first character and
    the next character being the last
    iii. Add slice to outputArray
    iv. Repeat step ii and iii, incrementing the end charcter of the slice
    by one until all characters in inputString are added to outputArray
  5. Return outputArray

END


Verified this works with an example:
  Input: ('abc')
  Output: ['a', 'ab', 'abc']

START

  1. SET string argument as inputString
  inputString = 'abc'
  2. SET returned array as outputArray
  outputArray = []
  3. SET char = 0
  4. WHILE char < inputString.length
    i. Select first character of inputString and add to outputArray
    ['a']
    ii. Take a slice of the input string starting with the first character and
    the next character being the last
    'a'
    'ab'
    'abc'
    iii. Add slice to outputArray
    ['a']
    iv. Repeat step ii and iii, incrementing the end charcter of the slice
    by one until all characters in inputString are added to outputArray
    ['a', 'ab']
    ['a', 'ab', 'abc']
  5. Return outputArray
  ['a', 'ab', 'abc']

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

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/*
Further Exploration

Rewrite leadingSubstrings using list processing functions. That is, convert
the string into an array of some sort and use functions like map, filter,
or reduce to get the desired substrings. (You will also need to use join.)
Try not to use forEach as that is too similar to the for loop approach.
*/

