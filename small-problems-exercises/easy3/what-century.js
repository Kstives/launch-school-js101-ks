/* eslint-disable max-lines-per-function */
/*
PROBLEM:
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01.
So, the years 1901 - 2000 comprise the 20th century.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A number representing a year
    Output: a string that begins with the century number and ends with 'st',
    'nd', 'rd', or 'th' as appropriate for that number


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * century: 99 years, starting with the year that ends with 01
    (ex. 1901 - 2000)
    * ordinal numbers: The position of a number:
    numbers ending with 1 use 'st', numbers ending with 2 use 'nd',
    numbers ending with 3 use 'rd', except for numbers ending with 11,
    12, and 13, which use 'th'. All other numbers use 'th'

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Any number representing a year can be the passed as an argument
  2. A string of the century number and its ordinal number ending is returned
  3. New centuries end with 01, except for the first century (1)
  4. The current century number is one higher than the number that starts
  the century years (1 of 1st century, 1 of 1; 2 of 2nd century, 1 of 100s;
  3 of 3rd century, 2 of 200s; 15 of 15th century, 14 of 1400s)
  5. The appropriate ordinal number ending is attached to the century year
  number and returned as a string


  Clarifying Questions:
    1.

 MENTAL MODEL:
 Create a function that receives any number higher than 1 representing a year,
 and return its corresponding century number and ordinal number ending in
 a string.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 2000
    Output: '20th century'

    EXAMPLE TWO
    Input: 1
    Output: '1st century'

    EXAMPLE THREE
    Input: 10101
    Output: '102nd century'

    EXAMPLE FOUR
    Input: 2001
    Output: '21st century'

    EXAMPLE FIVE
    Input: 0
    Output: 'Please enter a number greater than 0'


D: DATA STRUCTURE
Function, conditionals
A: ALGORITHM

START

  1. SET centuryNum
  2. SET input number as yearNum
  3. IF yearNum is less than 0
    a. PRINT "Please enter a number greater than 0"
  4. 1st century
    a. IF yearNum is less than or equal to 100
    PRINT '1st century'
  5. Beginning of century:
    a. IF YearNum - 1 equals a digit ending in '99'
      centuryNum equals yearNum's digits minus the last two digits
    b. ELSE
    SET centuryNum as yearNum's digits minus the last two digits, plus 1
  6. Find the ordinal number position ending
    a. IF centuryNum ends with 11, 12, or 13
    SET ordinalNum = 'th'
    b. ELSE IF centuryNum ends with 1
    SET ordinalNum = 'st'
    c. ELSE IF centuryNum ends with 2
    SET ordinalNum = 'nd'
    d. ELSE IF centuryNum ends with 3
    SET ordinalNum = 'rd'
    e. ELSE
    SET ordinalNum = 'th'
  7. SET centuryName as centuryNum + ordinalNum + 'century'
  8. PRINT centuryName

END


Verified this works with an example:
    Input: 2001
    Output: '21st century'

START

  1. SET centuryNum
  2. SET input number as yearNum
  yearNum = 2001
  3. IF yearNum is less than 0
    a. PRINT "Please enter a number greater than 0"
  4. 1st century
    a. IF yearNum is less than or equal to 100
    PRINT '1st century'
  5. Beginning of century:
    a. IF YearNum - 1 equals a digit ending in '99'
      centuryNum equals yearNum's digits minus the last two digits
    b. ELSE
    SET centuryNum as yearNum's digits minus the last two digits, plus 1
    centuryNum = 21
  6. Find the ordinal number position ending
    a. IF centuryNum ends with 11, 12, or 13
    SET ordinalNum = 'th'
    b. ELSE IF centuryNum ends with 1
    SET ordinalNum = 'st'
    ordinalNum = 'st'
    c. ELSE IF centuryNum ends with 2
    SET ordinalNum = 'nd'
    d. ELSE IF centuryNum ends with 3
    SET ordinalNum = 'rd'
    e. ELSE
    SET ordinalNum = 'th'
  7. SET centuryName as centuryNum + ordinalNum
  centuryName = 21 + 'st'
  8. PRINT centuryName
  '21st'

END
 */

// C: CODE WITH INTENT

function century(yearNum) {
  let yearNumBegin = String(yearNum).slice(0, String(yearNum).length - 2);
  let ordinalNumString;
  let centuryNum;

  // check that year is greater than 0
  if (yearNum <= 0) {
    return 'Please enter a number greater than 0';
  } else if (yearNum <= 100) { // first century
    return "1st";
  } else if (String(yearNum).endsWith('00')) { // years ending in 00
    centuryNum = Number(yearNumBegin);
  } else {
    centuryNum = Number(yearNumBegin) + 1;
  }
  
  ordinalNumString = returnOrdinalNumString(centuryNum);
  
  return centuryNum + ordinalNumString;
}

function returnOrdinalNumString(number) {
  let ordinalNumString;
  if (String(number).endsWith('11') ||
  String(number).endsWith('12') ||
  String(number).endsWith('13')) {
    ordinalNumString = 'th';
  } else {
    switch (number % 10) {
      case 1 :
        ordinalNumString = 'st';
        break;
      case 2 :
        ordinalNumString = 'nd';
        break;
      case 3 :
        ordinalNumString = 'rd';
        break;
      default :
        ordinalNumString = 'th';
    }
  }
  return ordinalNumString;
}

console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(1999));        // "20th"
console.log(century(0));           // "Please enter a number greater than 0"