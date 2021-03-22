/*
PROBLEM:
Write a function that takes a floating point number representing an angle
between 0 and 360 degrees, and returns a string representing that angle in
degrees, minutes, and seconds. You should use a degree symbol (˚) to represent
degrees, a single quote (') to represent minutes, and a double quote (") to
represent seconds. There are 60 minutes in a degree, and 60 seconds in a minute.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A floating point number (ex. 30 or 76.73)
    Output: A string


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * floating point number - Numbers that may contain decimal places
    * angle - figure formed by two rays, sharing a common endpoint (vertex),
    each ray can be pointing anywhere from 0 to 360 degrees
    * degree (a degree of arc) - a measurement of a plane angle in which
    one full rotation is 360 degrees (unicode for symbol: \u00B0)
    * minute - The convertion of an angle's degree to 60 fractions of the arc
    * seconds - There are 60 seconds in a minute
    * 1 degree = 60 minutes = 3600 seconds

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The input accepts any length of decimal places
  2. The number range of the input is 0-360
  3. A string with the input number convert to degrees, minutes, and seconds is
  returned, with a degree symbol, single quote, and double quote respectively
  4. From the input number, degrees = whole number, minutes = remaining decimal
  times 60, seconds = remaining decimal of the minutes times 60
  (degrees % 1)

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input:
    Output:

D: DATA STRUCTURE

A: ALGORITHM

START

  1. SET input number as angleNum
  2. IF angle is less than zero or greater than 360
    a. PRINT "Enter a number between 0-360"
  3. SET degrees as only the whole number portion of angleNum
  4. SET minutes as the remainder of angleNum divided by degrees times 60,
  5. SET seconds as the remainder of degrees divided by 1 times 60
  6. PRINT degrees, minutes, seconds rounded to the nearest whole numbers, with
  their symbols appended

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

/*
1. SET input number as angleNum
  2. IF angle is less than zero or greater than 360
    a. PRINT "Enter a number between 0-360"
  3. SET degrees as only the whole number portion of angleNum
  4. SET minutes as the remainder of angleNum divided by degrees times 60,
  5. SET seconds as the remainder of degrees divided by 1 times 60
  6. PRINT degrees, minutes, seconds rounded to the nearest whole numbers, with
  their symbols appended
*/


function dms(angleNum) {
  if (angleNum < 0 || angleNum > 360) {
    return "Enter a number between 0 and 360";
  }
  let degrees = Math.floor(angleNum);
  let minutes = (angleNum % degrees) * 60;
  let seconds = (minutes % 1) * 60;
  let dmsValue = `${degrees}\u00B0${Math.round(minutes)}'${Math.round(seconds)}"`;
  return dmsValue;
  
}

console.log(dms(365));          // "Enter a number between 0 and 360"
console.log(dms(30));           // 30°00'00"
console.log(dms(76.73));        // 76°43'48"
console.log(dms(254.6));        // 254°35'59"
console.log(dms(93.034773));    // 93°02'05"
console.log(dms(0));            // 0°00'00"
console.log(dms(360));          // 360°00'00" or 0°00'00"

// Further Exploration

/*
The current solution implementation only works with positive numbers in the
range of 0 to 360 (inclusive). Can you refactor it so that it works with any
positive or negative number?
*/

// Launch School code (refactored by me):

const DEGREE = '\xB0';
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function inRange(number) {
  if (number < 0) {
    if (number < -360) {
      return (360 + number) + 360;
    } else {
      return 360 + number;
    }
  } else if (number > 360) {
    return (360 - number) * -1;
  } else {
    return number;
  }
}

function dms2(degreesFloat) {
  degreesFloat = inRange(degreesFloat);
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - (minutes / MINUTES_PER_DEGREE)) *
    SECONDS_PER_DEGREE
  );

  return String(degreesInt) + DEGREE + padZeroes(minutes) + "'" +
                                       padZeroes(seconds) + '"';
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? ('0' + numString) : numString;
}

console.log(dms2(-1));   // 359°00'00"
console.log(dms2(400));  // 40°00'00"
console.log(dms2(-40));  // 320°00'00"
console.log(dms2(-420)); // 300°00'00"