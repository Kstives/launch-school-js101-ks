/*
PROBLEM:
The time of day can be represented as the number of minutes before or after
midnight. If the number of minutes is positive, the time is after midnight.
If the number of minutes is negative, the time is before midnight.

Write a function that takes a time using this minute-based format and returns
the time of day in 24 hour format (hh:mm). Your method should work with any
integer input.

You may not use javascript's Date class methods.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A negative or positive integer
    Output: A string of numbers representing the hours and minutes of the input
    integer (ex. 0 === "00:00" or -1437 === "00:03")


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * 1 hour = 60 minutes
    * 24 hr = 1 day
    * 0 === 00:00 === 12am
    * 720 === 12:00 === 12pm

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The first hour 0 === 12am === 00:00, and the time resets to 00:00
  after the HH:MM 23:59 (24hr cirular time interval)
  2. All positive numbers entered will be counted as time after midnight(00:00)
   -> the time gets counted upwards in the time cycle
  3. All negative numbers entered will be counted as time before midnight(00:00)
  -> the time gets counted downwards in the time cycle
  4. Counting is circular, time immediately before 00:00 is 23:59 and the time
  immediately after 23:59 is 00:00
  5. Because 60 minutes = 1 hour, each time interval of an hour is interpreted
   as +60 or -60 (ex. 60 = 00:00 to 01:00, -60 = 0:00 to 23:00)
  6. 123 === 60x2 hr + 3 min === 02:03

  Clarifying Questions:
    1.

 MENTAL MODEL:
 Based on standard time keeping conventions (24hr time circuit, 60 minutes/1hr),
  given a positive or negative integer, convert the input to a string
  representing a time of day


 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 0
    Output: "00:00"
   
    EXAMPLE TWO
    Input: -3
    Output: "23:57"

D: DATA STRUCTURE
string, number, loops, addition/subtraction
A: ALGORITHM

START
  Addressing positive numbers (time after midnight)
  1. SET days = integer divided by 1140 (60 minutes in 24 hours)
  2. SET hours = 0
  3. SET minutes = 0
  4. IF days divided by 60 equals 0
    a. SET days divided by 60 as the value of hours
  ELSE
    a. SET days divided by 60 rounded down as the value of hours
    b. SET the remainder of days divided by 60 as the value of minutes
  
  Addressing negative numbers (time before midnight)
  1.

  Convert computed time to a string with HH:MM format
  1. CONVERT hours to a string
  2. CONVERT minutes to a string
  3. IF the amount of characters in hours string does not equal 2
      a. Add '0' to the beginning of the string
  4. IF the amount of characters in minutes string does not equal 2
      a. Add '0' to the beginning of the string
  5. SET time withe the value of Concatenate hours + : + minutes
  6. RETURN time

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function setFormat(hours, minutes) {
  let hoursString = String(hours);
  let minutesString = String(minutes);

  if (hoursString.length !== 2) {
    hoursString = '0' + hoursString;
  }

  if (minutesString.length !== 2) {
    minutesString = '0' + minutesString;
  }

  return `${hoursString}:${minutesString}`;
  
}
function timeOfDay(integer) {
  let days = integer % 1440;
  let hours = 0;
  let minutes = 0;

  if (days % 60 === 0) {
    hours = days / 60;
  } else {
    hours = Math.floor(days / 60);
    minutes = days % 60;
  }

  return setFormat(hours, minutes);
}

/*
1. CONVERT hours to a string
  2. CONVERT minutes to a string
  3. IF the amount of characters in hours string does not equal 2
      a. Add '0' to the beginning of the string
  4. IF the amount of characters in minutes string does not equal 2
      a. Add '0' to the beginning of the string
  5. SET time withe the value of Concatenate hours + : + minutes
  6. RETURN time
*/

// all of the following should log true
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

console.log(timeOfDay(0));
console.log(timeOfDay(-3));
console.log(timeOfDay(35));
console.log(timeOfDay(-1437));
console.log(timeOfDay(3000));
console.log(timeOfDay(800));
console.log(timeOfDay(-4231));