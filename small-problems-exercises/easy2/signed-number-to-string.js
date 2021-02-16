/*
PROBLEM:
In the previous exercise, you developed a function that converts non-negative
numbers to strings. In this exercise, you're going to extend that function by
adding the ability to represent negative numbers as well.

Write a function that takes an integer, and converts it to a string
representation.

You may not use any of the standard conversion functions available in JavaScript,
such as String() and Number.prototype.toString(). You may, however, use
integerToString() from the previous exercise.

You might also want to check the Math.sign() function.


PSEUDOCODE

START
  1. Check if number is negative or positive, SET to numSign
  2. IF number starts with - or +
      a. remove first character
  3. IF numSign = -1
      a. add "-" to front of stringArray
    IF numSign = 1
      b. add "+" to front of stringArray

END

 */

// C: CODE WITH INTENT

let stringObj = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
};


function returnNumberArray(number) {
  let outputNumberList = [];
  let remainder;
 
  if (number === 0) {
    outputNumberList = [0];
  }
  
  while (number > 0) {
    remainder = number % 10;
    outputNumberList.push(remainder);
    number -= remainder;
    number /= 10;
  }

  return outputNumberList.reverse();
}

function signedIntegerToString(number) {
  let numSign = Math.sign(number);

  // converts negative number to positive number
  if (number < 0) {
    number *= -1;
  }
  
  let stringArray = [];
  let numberArray = returnNumberArray(number);
  

  numberArray.map(num => stringArray.push(stringObj[num]));

  // adds + or - to stringArray
  if (numSign === 1) {
    stringArray.unshift('+');
  } else if (numSign === -1) {
    stringArray.unshift('-');
  }

  return stringArray.join('');

}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");