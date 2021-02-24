/* eslint-disable max-lines-per-function */
/*
PROBLEM:
Write a function that determines the mean (average) of the three scores passed
to it, and returns the letter associated with that grade.

Numerical score letter grade list:

    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'

Tested values are all between 0 and 100. There is no need to check for negative
values or values greater than 100.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: three numbers, each between 0 and 100
    Output: The letter A, B, C, D, or F depending on the computation


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * mean: The average number of a set of numbers determined by
    adding up all of the numbers, then dividing it by how many numbers
    there are ((5 + 5 + 5) / 3 = 5)


IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Find the mean of 3 numbers
  2. Based on the mean, determine the letter grade equivelant:
    90 <= score <= 100: 'A'
    80 <= score < 90: 'B'
    70 <= score < 80: 'C'
    60 <= score < 70: 'D'
    0 <= score < 60: 'F'
3. The numbers inputted are between 0 and 100
4. Return the letter grade

  Clarifying Questions:
    1.

 MENTAL MODEL:
  Create a function that calculates the average between three given numbers,
  and, depending on where the number falls in a set of number ranges, a letter
  representing the grade is returned

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 95, 90, 93
    Output: 'A'

    EXAMPLE TWO
    Input: 50, 50, 95
    Output: 'D'

    EXAMPLE THREE
    Input: 81, 90, 85
    Output: 'B'

    EXAMPLE FOUR
    Input: 0, 62, 80
    Output: 'F'

    EXAMPLE FIVE
    Input: 53, 85, 100
    Output: 'C'

D: DATA STRUCTURE
Function, number, number methods, switch

A: ALGORITHM

START

  1. Calculate the average of the three number arguments given,
  SET to averageScoreNum
  2. Check the averageScoreNum in number ranges:
    a.IF averageScoreNum is greater than or equal to 90 AND less than or equal
    to 100, return 'A'
    b. ELSE IF averageScoreNum is greater than or equal to 80 AND less than 90,
    return 'B'
    c. ELSE IF averageScoreNum is greater than or equal to 70 and less than 80,
    return 'C'
    d. ELSE IF averageScoreNum is greater than or equal to 60 and less than 70,
    return 'D'
    e. ELSE IF averageScoreNum is greater than or equal to 0 and less than 60,
    return 'F'
    f. ELSE return "Please enter positive numbers and numbers less than 100"

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
START

  1. Calculate the average of the three number arguments given,
  SET to averageScoreNum
  2. Check the averageScoreNum in number ranges:
    a.IF averageScoreNum is greater than or equal to 90 AND less than or equal
    to 100, return 'A'
    b. ELSE IF averageScoreNum is greater than or equal to 80 AND less than 90,
    return 'B'
    c. ELSE IF averageScoreNum is greater than or equal to 70 and less than 80,
    return 'C'
    d. ELSE IF averageScoreNum is greater than or equal to 60 and less than 70,
    return 'D'
    e. ELSE IF averageScoreNum is greater than or equal to 0 and less than 60,
    return 'F'
    f. ELSE return "Please enter positive numbers and numbers less than 100"

END
*/

function getAverage(num1, num2, num3) {
  return Math.floor((num1 + num2 + num3) / 3);
}
function getGrade(num1, num2, num3) {
  let averageScoreNum = getAverage(num1, num2, num3);
  let letterGrade = '';
  
  if ((averageScoreNum >= 90) && (averageScoreNum <= 100)) {
    letterGrade = 'A';
  } else if ((averageScoreNum >= 80 && averageScoreNum < 90)) {
    letterGrade = 'B';
  } else if ((averageScoreNum >= 70 && averageScoreNum < 80)) {
    letterGrade = 'C';
  } else if ((averageScoreNum >= 60 && averageScoreNum < 70)) {
    letterGrade = 'D';
  } else if ((averageScoreNum >= 0 && averageScoreNum < 60)) {
    letterGrade = 'F';
  } else {
    letterGrade = "Couldn't determine a letter grade based on given grade average";
  }
  
  return letterGrade;
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"
console.log(getGrade(81, 90, 85));    // "B"
console.log(getGrade(0, 62, 80));     // "F"
console.log(getGrade(53, 85, 100));   // "C"
console.log(getGrade(53, 85, 'd'));   // "Couldn't determine a letter grade
// based on given grade average"