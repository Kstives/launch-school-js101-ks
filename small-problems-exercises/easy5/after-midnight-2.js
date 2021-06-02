/*
PROBLEM:
As seen in the previous exercise, the time of day can be represented as the
number of minutes before or after midnight. If the number of minutes is
positive, the time is after midnight. If the number of minutes is negative,
the time is before midnight.

Write two functions that each take a time of day in 24 hour format, and return
the number of minutes before and after midnight, respectively. Both functions
should return a value in the range 0..1439.

You may not use javascript's Date class methods.

Examples:
console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);

The tests above should log true.

Disregard Daylight Savings and Standard Time and other irregularities.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: string argument of a time of day in 24 hour format (ex. "00:00" or
    "12:34")
    Output: The number of minutes equal to that time of day (686 for "12:34"
    if inputed into beforeMidnight function)


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Minutes in a day = 1440
    * positive num = time after midnight = counting time forwards from 00:00
    * negative num = time before midnight = counting time backwards from 00:00
    * "24:00/00:00" = midnight = 0
    * 24 hour format = first set of numbers 00 - 24, second set of numbers
    00 - 59

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. One function: beforeMidnight - calculates time backwards from midnight
  ("24:00" - minutes)
  2. One function: afterMidnight - calculates time forwards from midnight
  ("00:00" + minutes)
  3. the input is a string, the output is a number
  4. The range of the return value has to be in 0-1439
  5. Cannot use JavaScript's Date class methods


  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: afterMidnight("12:34")
    Output: (12 x 60) + 34 = 754

    EXAMPLE TWO
    Input: beforeMidnight("12:34")
    Output: (11 x 60) - 26 = ((12 - 1) x 60) - (60 - 34) = 686

D: DATA STRUCTURE

A: ALGORITHM
AfterMidnight formula: (Hour * 60) + Minutes
Before Midnight formula: ((Hour - 1) * 60) - (60 - Minutes)
START
    AFTERMIDNIGHT
  1. Retrieve the hours from the input and SET as hours
  2. Retrieve the minutes from the input and SET as minutes
  3. Convert hours to a number
  4. Convert minutes to a number
  5. Multiply the hours by 60 plus 5 and SET as numOfMinutes
  6. Return numOfMinutes

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function afterMidnight(timeString) {
  let hours = Number(timeString.slice(0, 2));
  let minutes = Number(timeString.slice(3));
  

  if ((hours && minutes === 0) || (hours === 24)) {
    return 0;
  }

  return (hours * 60) + minutes;

}

function beforeMidnight(timeString) {
  let hours = Number(timeString.slice(0, 2));
  let minutes = Number(timeString.slice(3));
  
  if ((hours === 0 && minutes === 0) || hours === 24) {
    return 0;
  }

  return ((hours - 1) * 60) + (60 - minutes);

}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);