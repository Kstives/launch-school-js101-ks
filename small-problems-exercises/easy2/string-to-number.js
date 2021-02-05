/* eslint-disable max-lines-per-function */
/*
PROBLEM:
The parseInt() method converts a string of numeric characters (including an
optional plus or minus sign) to an integer. The method takes 2 arguments where
the first argument is the string we want to convert and the second argument
should always be 10 for our purposes. parseInt() and the Number() method behave
similarly. In this exercise, you will create a function that does the same
thing.

Write a function that takes a String of digits, and returns the appropriate
number as an integer. You may not use any of the methods mentioned above.

For now, do not worry about leading + or - signs, nor should you worry about
invalid characters; assume all characters will be numeric.

You may not use any of the standard conversion methods available in JavaScript,
such as String() and Number(). Your function should do this the old-fashioned
way and calculate the result by analyzing the characters in the string.

  PSEUDOCODE
1. GET string of numbers, SET to string
2. Convert the numbers in the string to integers without changing the values,
SET to numbers
3. PRINT numbers


*/

// C: CODE WITH INTENT

function stringToInteger(string) {
  return string - 0;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

/*
 performing a mathematical operation other than addition
 on a string of numbers converts it to a number. Minusing 0 from the
 string will return the exact number as a number
 */

// launch school solution:
function stringToInteger2(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

// FURTHER EXPLORATION
/*
Write a hexadecimalToInteger() function that converts a string representing a
hexadecimal number to its integer value. Note that hexadecimal numbers use base
16 instead of 10, and the "digits" A, B, C, D, E, and F (and the lowercase
equivalents) correspond to decimal values of 10-15.
*/

/*
PSEUDOCODE
  START
  1. GET string of hexadecimal numbers, SET to string
  2. Put each number in string into a list called stringNumbers
  2. SET all hexadecimal values to a list called hexadecimal
  3. SET iterator = 0
  4. WHILE iterator < stringNumbers length
    a. Compare the stringNumber's current hexadecimal to
    the hexadecimal list values
      I. IF hexadecimal in stringNumbers is lowercase, convert to uppercase
    b. Put equivelant hexadecimal value into list called numbers
    c. Convert list of numbers to one number with each number in its appropriate
    place value 1, 2, 3 = 123

  END
*/

function hexadecimalToInteger(string) {
  string = string.toUpperCase();
  let stringNumbers = string.split('');
  let numbers = [];
  let hexadecimal = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15
  };
  let keys = Object.keys(hexadecimal);
  for (let index = 0; index < stringNumbers.length; index += 1) {
    keys.forEach(hex => {
      if (hex === stringNumbers[index]) {
        numbers.push(hexadecimal[hex]);
      }
    });

  }
  // launch school base calculation for hexadecimal:
  let value = 0;
  console.log(string);
  console.log(numbers);
  numbers.forEach(digit => (value = (16 * value) + digit));
  return value;
}

console.log(hexadecimalToInteger('4D9f') === 19871);

/*
PSEUDOCODE
  START

  1. GET string of hexadecimal numbers, SET to string
  2. Put each number in string into a list called stringNumbers
  2. SET all hexadecimal values to a list called hexadecimal
  3. SET iterator = 0
  4. WHILE iterator < stringNumbers length
    a. Compare the stringNumber's current hexadecimal to
    the hexadecimal list values
      I. IF hexadecimal in stringNumbers is lowercase, convert to uppercase
    b. Put equivelant hexadecimal value into list called numbers
    c. Convert list of numbers to one number with each number in its appropriate
    place value 1, 2, 3 = 123

  END
*/