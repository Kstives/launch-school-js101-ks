/*
PROBLEM:
Write a function that takes one argument, a positive integer, and returns a list
of the digits in the number.

D: DATA STRUCTURE
string, array, loop, number

A: ALGORITHM

START

  1. Split number into separate numbers
    a. convert number to string
    b. split string into array
    c. iterate over elements and convert them to numbers
    d. return array of numbers

END

*/

// C: CODE WITH INTENT

function digitList(numArray) {
  return String(numArray).split('').map(num => Number(num));
}

console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]