/*
PROBLEM:
Write a function that takes a positive integer as an argument and returns that
number with its digits reversed.

Examples:
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21
(Note that leading zeros in the result get dropped!)
reverseNumber(1);        // 1

PEDAC PROCESS

A: ALGORITHM

START

  1. convert the input number to a string
  2. convert the string to an array
  3. reverse the array
  4. join the elements of the array into a string
  5. convert the string into a number and SET it as the input number
  6. return the number

END

 */

// C: CODE WITH INTENT

function reverseNumber(num) {
  let arrayOfReversedNumStrings = String(num).split('').reverse();
  let outputNum = Number(arrayOfReversedNumStrings.join(''));
  return outputNum;

}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that leading zeros in the result get dropped!
console.log(reverseNumber(1));        // 1