/* eslint-disable max-lines-per-function */
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
    * 24 hr = 1 day (1,440 minutes)
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
  IF integer is greater than 0:
  1. SET days = integer divided by 1140 (60 minutes x 24 hours)
  2. SET hours = 0
  3. SET minutes = 0
  4. IF days divided by 60 equals 0
    a. SET hours as days divided by 60
  ELSE
    a. SET hours as days divided by 60 rounded down
    b. SET minutes as the remainder of days divided by 60
  
  Addressing positive numbers (time after midnight) - version 2 (loop)
  IF integer is greater than 0:
  1. SET count = 0
  2. SET hours = 0
  3. SET minutes = 0
  4. WHILE count is less than integer
    a. count + 1
    b. SET minutes = count
    c. IF minutes % 60 === 0
      i. hours + 1
    d. IF hours % 23 === 0 && minutes % 59 === 0
      i. SET minutes = 0
      ii. SET hours = 0
  5. RETURN hours and minutes formated as hh:mm

  Addressing negative numbers (time before midnight)
  1. SET count = 1440
  2. SET hours = 0
  3. SET minutes = 0


   
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

function beforeMidnight(negNum) {
  let count = negNum;
  let hours = 23;
  let minutes = 60;

  while (count < 0) { // -1437 === "00:03
    count += 1;
    minutes -= 1;

    if (minutes === 0) {
      hours -= 1;
      minutes = 60;
    }

    if (hours === -1) {
      hours = 23;
      minutes = 60;
    }

  }
  return setFormat(hours, minutes);
}

function afterMidnight(posNum) {
  let count = 0;
  let hours = 0;
  let minutes = 0;

  while (count < posNum) {
    count += 1;
    minutes = count;

    if (minutes % 60 === 0) {
      hours += 1;
      minutes = 0;
    } else {
      minutes %= 60;
    }

    if (hours === 24) {
      hours = 0;
      minutes = 0;
    }

  }
  return setFormat(hours, minutes);
}
// function afterMidnight(posNum) {
//   let days = posNum % 1440;
//   let hours = 0;
//   let minutes = 0;

//   if (days % 60 === 0) {
//     hours = days / 60;
//   } else {
//     hours = Math.floor(days / 60);
//     minutes = days % 60;
//   }

//   return setFormat(hours, minutes);
// }

function timeOfDay(integer) {
  if (integer < 0) {
    return beforeMidnight(integer);
  } else {
    return afterMidnight(integer);
  }
}

/*
 IF integer is less than 0:
  1. SET count = 0
  2. SET hours = 0
  3. SET minutes = 0
  4. WHILE count is less than integer
    a. count + 1
    b. SET minutes = count
    c. IF minutes % 60 === 0
      i. hours + 1
    d. IF hours === 23 && minutes === 59
      i. SET minutes = 0
      ii. SET hours = 0
  5. RETURN hours and minutes formated as hh:mm
*/

// all of the following should log true
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

// console.log(timeOfDay(0)); // 00:00
// console.log(timeOfDay(-3)); // 23:57
// console.log(timeOfDay(35)); // 00:35
// console.log(timeOfDay(-1437)); // 00:03
// console.log(timeOfDay(3000)); // 02:00
// console.log(timeOfDay(800)); // 13:20
// console.log(timeOfDay(-4231)); // 01:29


// launch school solution:
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay2(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

console.log(timeOfDay2(0) === "00:00");
console.log(timeOfDay2(-3) === "23:57");
console.log(timeOfDay2(35) === "00:35");
console.log(timeOfDay2(-1437) === "00:03");
console.log(timeOfDay2(3000) === "02:00");
console.log(timeOfDay2(800) === "13:20");
console.log(timeOfDay2(-4231) === "01:29");

// Further Exploration
/*
How would you approach this problem if you were allowed to use JavaScript's
Date class? Suppose you also needed to consider the day of week? (Assume that
deltaMinutes is the number of minutes before or after midnight between Saturday
and Sunday; in such a method, a deltaMinutes value of -4231 would need to
produce a return value of Thursday 01:29.)
*/