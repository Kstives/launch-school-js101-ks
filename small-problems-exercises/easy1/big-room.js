// PROBLEM:
/*
Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: The User inputs:
      a. length of room in meters
      b. width of room in meters
    Output: The area of the room logged in square meters and square feet
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * User: The console user
    * area: l x w = area or squared 
    * 1 square meter == 10.7639 square feet
    * 
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. The user is asked for the input
    2. The input must be two numbers
    3. The first number is for the length of the room
    4. The second number is for the width of the room
    5. readlineSync.prompt method must be used to gather the data
    6. The output must contain the area of the room in meters and in feet
    7. Validation of the input doesn't have to be performed
    8. The program created has to ask for input and log a computation of that 
    input 

    Clarifying Questions:
    1. Do I round the square feet?
    Yes, rounded to 2 decimal points based on the given example

    */
  
  // MENTAL MODEL:
    /*
    Using the readlineSync.prompt method, a user is asked to enter a number representing the length of a room in meters and then asked to enter a number representing the width of that room in meters. A string with the area of that room in square meters and square feetd is returned to the console.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: 0, 0
    Output: The area of the room is 0.00 square meters (0.00 square feet).

    Input: 10, 5
    Output: The area of the room is 50.00 square meters (538.20 square feet).

    Input: 37, 28
    Output: The area of the room is 1,036,00 square meters (11,151.40 square feet).

    Input: -5, 80
    Output: The area of the room is -400,00 square meters (-4,305.56 square feet).

    */

// D: DATA STRUCTURE
  // JS function

// A: ALGORITHM
  /*
  1. Ask the user for the length of a room in meters
  2. Store the input value in a variable called LENGTH
  3. Ask the user for the width of a room in meters
  4. Store the input value in a variable called WIDTH
  5. Multipy LENGTH by WIDTH, and store the product in a variable
  called AREA_IN_METERS
  6. Multiply AREA_IN_METERS by 10.7639, and store the product in a variable called AREA_IN_FEET
  7. Concatenate the variables rounded to two decimal places within the string: 
  'The area of the room is AREA_IN_METERS square meters (AREA_IN_FEET square feet).
  8. Log the string to the console.

  Verified this works with an example:
    Input: 10, 8
    Output: The area of the room is 80.00 square meters (861.11 square feet).

    1. Ask the user for the length of a room in meters
  2. Store the input value: 10 in a variable called LENGTH
  3. Ask the user for the width of a room in meters
  4. Store the input value: 8 in a variable called WIDTH
  5. Multipy 10 by 8, and store the product in a variable called AREA_IN_METERS (AREA_IN_METERS = 80.00)
  6. Multiply 80 by 10.7639, and store the product in a variable called AREA_IN_FEET (AREA_IN_FEET = 861.11)
  7. Concatenate the variables rounded to two decimal places within the string: 
  'The area of the room is 80.00 square meters (861.11 square feet).
  8. Log the string to the console.
  */

// C: CODE WITH INTENT

// function getRoomArea(length, width) {
//   let areaInMeters = length * width;
//   let areaInFeet = areaInMeters * 10.7639;
//   console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);
// }

//  let rlSync = require('readline-sync');

// getRoomArea(rlSync.question("Enter the length of the room in meters\n"), rlSync.question("Enter the width of the room in meters\n"));


// FURTHER EXPLORATION:
/*
Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.
*/

let getLength;
let getWidth;
let metersOrFeet;
let rlSync = require('readline-sync');



function getRoomSquared(length, width) {
  let areaInMeters = Number(length) * Number(width);
  let areaInFeet = areaInMeters * 10.7639;
  
  if (metersOrFeet === 'square meters') {
    console.log(`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`);
  } else {
    console.log(`The area of the room is ${areaInFeet.toFixed(2)} square feet (${areaInMeters.toFixed(2)} square meters).`);
  } 
}

console.log("Do you want the area of the room in square meters or square feet?\n");
metersOrFeet = rlSync.prompt();

if (metersOrFeet === 'square meters') {
  console.log("Enter the length of the room in meters");
  getLength = rlSync.prompt();
  console.log("Enter the width of the room in meters");
  getWidth = rlSync.prompt();
  getRoomSquared(getLength, getWidth);
} else {
  console.log("Enter the length of the room in feet");
  getLength = rlSync.prompt();
  console.log("Enter the width of the room in feet");
  getWidth = rlSync.prompt();
  getRoomSquared(getLength, getWidth);
}