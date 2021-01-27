// PEDAC JS100/101 study session with Elizabeth on January 26 2021

// PROBLEM:
/*
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: Array of strings
    Output: Array of numbers (each index position representing matches found of
      position matches of letters in strings to alaphabet order )
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * positions: the position of the string characters in comparison
    to the position of letters in the alphabet
    * array: ordererd list object
    * alphabet: the 26 letters used in the english language 
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. An array of strings with only letters is input
    2. An array of only numbers is output
    3. For every string in the input array, there will be a number in the output 
    array representing how many matches there were in each string
    (The length of the input and output arrays have the same length)
    4. A match consists of a character in a string being in the same position of 
    the string as it is in the position of the alphabet 
    (a = 1 in the string and a = 1 in the alphabet --> match, c = 2 in the 
    string, but c = 3 in the alphabet --> not a match)
    4. Matches should be case-insensitive (lower or upper case doesn't matter)
    5. There should be no spaces in the input strings

    Clarifying Questions:
    1. 

    */
  
  // MENTAL MODEL:
    /*
      Output an array of numbers where each number in the array represents the number of matches that were found when the position of each letter in each string from the input array is compared to the position of that letter in the alphabet.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  /*
    Input: ["abode","ABc","xyzD"]
    Output: [4,3,1]

    Input: ["abide","ABc","xyz"]
    Output: [4,3,0]

    Input: ["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"]
    Output: [6,5,7]

    Input: []
    Output: []

  */

// D: DATA STRUCTURE
  //  Array iteration, search or find method

// A: ALGORITHM
  /*
    1. Create input ordered list of strings called STRINGS
    2. Create an ordered list with the all alphabet characters called ALPHABET
    3. Create an ordered list called MATCHES
    4. Create a variable called MATCH_COUNT with the value of 0
    4. Iterate through each position in ALPHABET
    5. Compare the STRINGS list against the ALPHABET list, from the first position of the STRINGS list to the last
    6. Does the position of the character in the string
    match that character's position in the alphabet?
      a. If yes, add 1 to MATCH_COUNT and set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index, repeat step 5 & 6 until all of STRINGS elements are iterated through
      b. If no, set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index, repeat step 5 & 6 until all of STRINGS elements are iterated through
    7. Return MATCHES

  Verified this works with an example:
    Input: ["abode"]
    Output: [4]

    1. Create input ordered list of strings called STRINGS 
    ["abode"]
    2. Create an ordered list with the all alphabet characters called ALPHABET
    [abcdefghijklmnopqrstuvwxyz]
    3. Create an ordered list called MATCHES
    []
    4. Create a variable called MATCH_COUNT with the value of 0
    MATCH_COUNT(0)
    4. Iterate through each position in ALPHABET
    5. Compare the STRINGS list against the ALPHABET list, from the first position of the STRINGS list to the last
    1st position = "abode"
    6. Does the position of the character in the string
    match that character's position in the alphabet?
    "abode" a = 1st position of string ---> a = 1st position of the alphabet
    "abode" b = 2nd position of string ---> b = 2nd position fo the alphabet
    "abode" o = 3rd position of string ---> o = 15th position of the alphabet
    "abode" d = 4th position of string --->  d = 4th position of the alaphabet
    "abode" e = 5th position of the string ---> 5th position of the alphabet
      a. If yes, add 1 to MATCH_COUNT 
      MATCH_COUNT(0) + 1 = 1
      MATCH_COUNT(1) + 1 = 2
      MATCH_COUNT(2) + 1 = 3
      MATCH_COUNT(3) + 1 = 4
      and set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index,
      MATCHES[0] = 1 
      MATCHES[0] = 2
      MATCHES[0] = 3
      MATCHES[0] = 4
      repeat step 5 & 6 until all of STRINGS elements are iterated through
      b. If no, set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index, 
      MATCHES[0] = 2
      repeat step 5 & 6 until all of STRINGS elements are iterated through
    7. Return MATCHES
    MATCHES = [4]

  */

// C: CODE WITH INTENT
/*
    1. Create input ordered list of strings called STRINGS
    2. Create an ordered list with the all alphabet characters called ALPHABET
    3. Create an ordered list called MATCHES
    4. Create a variable called MATCH_COUNT with the value of 0
    4. Iterate through each position in ALPHABET
    5. Compare the STRINGS list against the ALPHABET list, from the first position of the STRINGS list to the last
    6. Does the position of the character in the string
    match that character's position in the alphabet?
      a. If yes, add 1 to MATCH_COUNT and set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index, repeat step 5 & 6 until all of STRINGS elements are iterated through
      b. If no, set the value of MATCH_COUNT as the element of the index in MATCHES that corresponds to the current string's index, repeat step 5 & 6 until all of STRINGS elements are iterated through
    7. 
    7. Return MATCHES
*/


function positionMatch(array) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let matches = [];
  let matchCount = 0;

  alphabet = alphabet.split(''); // [a, b, c,...etc]

}

positionMatch(["abode","ABc","xyzD"]); // [4,3,1]




// function positionMatch(array) {
//   const ALPHABET = ['abcdefghijklmnopqrstuvwxyz'];
//   let matches = [];
//   let matchCount = 0;

//   for (let i = 0; i < array.length; i += 1) {
//      for (let letter = 0; letter < array[i].length; letter += 1) {
//        if (array[i].indexOf(array[i][letter]) === ALPHABET[0].search(array[i][letter])) {
//          matchCount += 1;
//          matches[i] = matchCount;
//        } 
//        else if () {
         
//        } else {
//         matches[i] = matchCount;
//        }
//      }   
//     } 
// return matches;
// } // close of function


// console.log(positionMatch(["abode","ABc","xyzD"])); // [4,3,1]
