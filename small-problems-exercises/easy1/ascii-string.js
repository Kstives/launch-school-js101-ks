// PROBLEM:
/*
Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use String.prototype.charCodeAt() to determine the ASCII value of a character.)
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: 1 string
    Output: The ASCII string value of that string
    */
  
  // TERMS OF THE PROBLEM DOMAIN
    /*
    * ASCII: American Standard Code for Information Interchange.
    Code that uses numbers to represent characters. Each letter is assigned a number between 0 and 127. A upper and lower case character are assigned different numbers
    */
  
  // IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)
    /*
    1. Use a function with one parameter
    2. The argument passed to the function is a string
    3. The output consists of the sum of all ASCII value equivalents to
    each character in the string

    Clarifying Questions:
    1. What if there are spaces in the string, do spaces have an ASCII value?
    Yes, the spaces get counted. The ASCII value for a space is 32
    2. Does it matter if there is both lower and upper case letters?
    No. Upper and lower case each have different ASCII values, but it doesn't matter in this problem scope because the sum of the values, regardless of their case, is expected.
    3. What if the string is empty?
    Then, according to the examples given, 0 should be returned. There is no 'nothing' characters in ASCII

    */
  
  // MENTAL MODEL:
    /*
    Using a function, a string is passed to the function which then converts each letter of the string to it's equivalent ASCII value, adds those values, and returns the sum of that value as a single integer.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: "Four Score"
    Output: 984
    */

    // EXAMPLE TWO
    /*
    Input: "happy"
    Output: 546
    */
  
    // EXAMPLE THREE
    /*
    Input: "Happy"
    Output: 514
    */

    // EXAMPLE FOUR
    /*
    Input: ""
    Output: 0
    */

// D: DATA STRUCTURE
  // function, string, string methods, array, array methods, loops

// A: ALGORITHM
  /*
  1. Create a program called asciiValue that accepts a string input called STRING
  2. If STRING is empty, return 0
  3. Create an ordered list called ASCII_NUMS
  4. Iterate through STRING's characters 
    a. Convert the current character to its ascii number equivalent and add it to ASCII_NUMS ordered list
  6. Add all of the numbers in ASCII_NUMS together and return the sum

  Verified this works with an example:
    Input: "I am"
    Output: 311

    1. Create a program called asciiValue that accepts a string input called STRING
  2. If STRING is empty, return 0
  3. Create an ordered list called ASCII_NUMS
  4. Iterate through STRING's characters 
    a. Convert the current character to its ascii number equivalent and add it to ASCII_NUMS ordered list
    I ASCII_NUMS = [73]
      ASCII_NUMS = [73, 32]
    a ASCII_NUMS = [73, 32, 97]
    m ASCII_NUMS = [73, 32, 97, 109]
  6. Add all of the numbers in ASCII_NUMS together and return the sum
  73 + 32 + 97 + 109 = 311
  311

  */

// C: CODE WITH INTENT

  // with reduce method
// function asciiValue(string) {
//   let asciiNums = [];
//   if (string === '') {
//     return 0;
//   } else {
//     for (let index = 0; index < string.length; index += 1) {
//       asciiNums.push(string.charCodeAt(index));
//     }
//   }
  
//   return asciiNums.reduce((accumulator, currentValue) => accumulator + currentValue);
// }

// console.log(asciiValue('Four score'));         // 984
// console.log(asciiValue('Launch School'));      // 1251
// console.log(asciiValue('a'));                  // 97
// console.log(asciiValue(''));                   // 0
// console.log(asciiValue(' '));                  // 32
// console.log(asciiValue('four score'));         // 1016

// with accumulative addition of variable.
function asciiValue(string) {
  let asciiNums = 0;
  if (string === '') {
    return 0;
  } else {
    for (let index = 0; index < string.length; index += 1) {
      asciiNums += string.charCodeAt(index);
    }
  }
  
  return asciiNums;
}

console.log(asciiValue('Four score'));         // 984
console.log(asciiValue('Launch School'));      // 1251
console.log(asciiValue('a'));                  // 97
console.log(asciiValue(''));                   // 0
console.log(asciiValue(' '));                  // 32
console.log(asciiValue('four score'));         // 1016