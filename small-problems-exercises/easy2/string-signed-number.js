/* eslint-disable max-lines-per-function */
/*
PROBLEM:
Write a function that takes a string of digits, and returns the appropriate
number as an integer. The string may have a leading + or - sign; if the first
character is a +, your function should return a positive number; if it is a -,
your function should return a negative number. If no sign is given, you should
return a positive number.

You may assume the string will always contain a valid number.

You may not use any of the standard conversion methods available in JavaScript,
such as parseInt() and Number(). You may, however, use the stringToInteger()
function from the previous lesson.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A string of digits that may start with a + or -
    Output: The numeric equivelant of that string. A positive number if it
    starts with a + and a negative number if it starts with a -. If there is
    not sign, return a positive number.


 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: '33'
    Output: 33

    EXAMPLE ONE
    Input: '-24'
    Output: -24

    EXAMPLE ONE
    Input: '100'
    Output: 100


D: DATA STRUCTURE
function, search methods, object

A: ALGORITHM
Goal #1: String to integer
Goal #2: Determine if it is a positive or negative number

START

  1. SET object of numbers 0-9 as numObj
  2. Make each character in input string an element of the list stringNumList
  3. Is the first element of stringNumList "-"?
    a. IF yes, remove element and add to variable SET as negativeNumber
  4. SET empty list as outputNumberList
  5. Convert numObj element names to elements in a list, SET list to numObjKeys
  6. Iterate through to the length of stringNumlist
  7. Does the current item of stringNumList match an item in numObjKeys?
    a. IF yes, add the matched element in numObj to outputNumberList using
    its corresponding key in numObjKeys
    b. ELSE, continue to next item in iteration
  8. Iterate through outputNumberList and convert the numbers to a single number
  by their positions as face value positions and SET to OutputNumber
  9. IF negativeNumber === true, add -1 to outputNumber

END

SECOND REVISION
  START

  1. SET object of numbers 0-9 as numObj
  2. Make each character in input string an element of the list stringNumList
  3. Is the first element of stringNumList "-" OR '+'?
    a. IF yes, remove element and add to variable SET as numberSign
  4. SET empty list as outputNumberList
  5. Iterate through to the length of stringNumlist
  6. Does the current item of stringNumList match an item in numObjKeys?
    a. IF yes, add the matched element in numObj to outputNumberList using
    its corresponding key in numObjKeys
    b. ELSE, continue to next item in iteration
  7. Iterate through outputNumberList and convert the numbers to a single number
  by their positions as face value positions and SET to OutputNumber
  8. IF negativeNumber === '-', multiply outputNumber by -1 and return,
  ELSE return outputNumber
  
  END

  Verified VERSION 1 works with an example:
    Input: "-33"
    Output: -33

START

  1. SET object of numbers 0-9 as numObj
  numObj = {"0: 0..."9": 9}
  2. Make each character in input string an element of the list stringNumList
  stringNumList = ["-", "3", "3"]
  3. Is the first element of stringNumList "-"?
    a. IF yes, remove element and add to variable SET as negativeNumber
  stringNumList = ["3", "3"], negativeNumber = "-"
  4. SET empty list as outputNumberList
  outputNumberList = []
  5. Convert numObj element names to elements in a list, SET list to numObjKeys
  numObjKeys = ["0"..."9"]
  6. Iterate through to the length of stringNumlist
  7. Does the current item of stringNumList match an item in numObjKeys?
  "3" === "3"
    a. IF yes, add the matched element in numObj to outputNumberList using
    its corresponding key in numObjKeys
    outputNumberList = [3, 3]
    b. ELSE, continue to next item in iteration
  8. Iterate through outputNumberList and convert the numbers to a single number
  by their positions as face value positions and SET to outputNumber
  (10 * 0) + 3
  (10 * 3) + 3
  outputNumber = 33
  9. IF negativeNumber === true, add -1 to outputNumber
  outputNumber + -1
  outputNumber == -33

END


 */

// C: CODE WITH INTENT
let numObj = {
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

function stringToSignedInteger(string) {
  let stringNumList = string.split('');
  let outputNumberList = [];
  let numberSign;

  // remove - or + for later
  if (stringNumList[0] === '-' || stringNumList[0] === '+') {
    numberSign = stringNumList.shift();
  }

  /*
  ** iterate through array of stringed numbers and compare to keys
  ** in numObj, if match found, add the value of that key to
  ** outputNumberList
   */
  for (let index = 0; index < stringNumList.length; index += 1) {
    // this:
    outputNumberList.push(numObj[stringNumList[index]]);
    
    // instead of this:
  
    // for (const property in numObj) {
    //   if (property === stringNumList[index]) {
    //     outputNumberList.push(numObj[property]);
    //   } else {
    //     continue;
    //   }
    // }
  }

  /*
  ** convert each number in outputNumberList to their respective face value
  ** positions in a single number
  */
  let outputNumber = outputNumberList.reduce((accumulator, currentValue) =>
    (10 * accumulator) + currentValue);
  
  // if number was originally negative, convert it to negative
  if (numberSign === '-') {
    return -outputNumber;
  } else {
    return outputNumber;
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true