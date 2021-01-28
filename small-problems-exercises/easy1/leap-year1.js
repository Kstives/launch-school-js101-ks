// PROBLEM:
/*
In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns true if the year is a leap year, or false if it is not a leap year.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: A year greater than 0
    Output: True if the year is a leap year, false if it is not a leap year
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * leap year: a year that has one extra day (366) than the typical count (365)
    * year: a number representing one calendar year (365 days)
    * leap year calculations: 
        * every year divided by 4 with remainder of 0 AND the year is not divided by 100 with the remainder of 0
        * every year evenly divided by 100 with the remainder of 0 AND 
        divided by 400 with the remainder of 0

    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. A function with one parameter must be used
    2. The argument must be a digit greater than 0
    3. Using the calculations for determining a leap year, a boolean value is returned
    4. The boolean value true is returned if the inputted year is a leap year
    5. The boolean value false is returned if the inputted year is not a leap year

    Clarifying Questions:
    1. Must both calculations to determine a leap year be used?
    Yes.

    */
  
  // MENTAL MODEL:
    /*
    Using the conditions for a leap year, a digit passed to a function from a function call is checked to see if it is a leap year. If it is, the function returns true, if it is not, the function returns false.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: isleapYear(1752)
    Output: true
    */
  // EXAMPLE TWO
    /*
    Input: isleapYear(1)
    Output: false
    */
  // EXAMPLE THREE
    /*
    Input: isleapYear(100)
    Output: false
    */

// D: DATA STRUCTURE
  // function and conditionals

// A: ALGORITHM
  /*
  1. create a function called console.log(isLeapYear with one parameter YEAR
  2. Is YEAR a leap year?
    a. Yes, if:
    *YEAR divided by 4 has a remainder of 0 AND the year is not divided by 100 with the remainder of 0
    OR
    *YEAR divided by 100 has a remainder of 0  
    AND YEAR divided by 400 has a remainder of 0
    b. No, If YEAR does not meet the above critera


  Verified this works with an example:
    Input: console.log(isLeapYear(2016)
    Output: true

  1. create a function called console.log(isLeapYear with one parameter YEAR
  2. Is YEAR (2016) a leap year?
    a. Yes, if:
    *2016 divided by 4 has a remainder of 0 AND the year is not divided by 100 with the remainder of 0
    OR
    *YEAR divided by 100 has a remainder of 0  
    AND YEAR divided by 400 has a remainder of 0
    b. No, If YEAR does not meet the above critera

  */

// C: CODE WITH INTENT
function isLeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return true; 
  } else {
  return false;
  }
}

// console.log(isLeapYear(2016));      // true
// console.log(isLeapYear(2015));      // false
// console.log(isLeapYear(2100));      // false
// console.log(isLeapYear(2400));      // true
// console.log(isLeapYear(240000));    // true
// console.log(isLeapYear(240001));    // false
// console.log(isLeapYear(2000));      // true
// console.log(isLeapYear(1900));      // false
// console.log(isLeapYear(1752));      // true
// console.log(isLeapYear(1700));      // false
// console.log(isLeapYear(1));         // false
// console.log(isLeapYear(100));       // false
// console.log(isLeapYear(400));       // true

// Launch School Solution:

// function isLeapYear(year) {
//   if (year % 400 === 0) {
//     return true;
//   } else if (year % 100 === 0) {
//     return false;
//   } else {
//     return year % 4 === 0;
//   }
// }

// FURTHER EXPLORATION
/*
The order in which you perform tests for a leap year calculation is important. For what years will isLeapYear fail if you rewrite it as shown below?
*/

// All of the leap years divisible by 100 and 400


function isLeapYear2(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}

/*
Can you rewrite isLeapYear to perform its tests in the opposite order of the above solution? That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by 400. Is this solution simpler or more complex than the original solution?
*/

// This solution is wouldn't work because it fails all of the cases
// The complexity isn't any different, it just doesn't work


function isLeapYear3(year) {
  if (year % 4 === 0) {
    return false;
  } else if (year % 100 === 0) {
    return true;
  } else {
    return year % 400 === 0;
  }
}

console.log(isLeapYear3(2016));      // true
console.log(isLeapYear3(2015));      // false
console.log(isLeapYear3(2100));      // false
console.log(isLeapYear3(2400));      // true
console.log(isLeapYear3(240000));    // true
console.log(isLeapYear3(240001));    // false
console.log(isLeapYear3(2000));      // true
console.log(isLeapYear3(1900));      // false
console.log(isLeapYear3(1752));      // true
console.log(isLeapYear3(1700));      // false
console.log(isLeapYear3(1));         // false
console.log(isLeapYear3(100));       // false
console.log(isLeapYear3(400));       // true