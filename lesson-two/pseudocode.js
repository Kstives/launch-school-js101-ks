// Lesson 2 - 6. Pseudocode

/*
Pseudocode keywords
Keyword             Meaning
START  ------------ start of the program
SET  -------------- set a variable that we can use later
GET  -------------- retrieve input from user
PRINT ------------- display output to user
READ  ------------- retrieve a value from a variable
IF/ELSE IF/ELSE --- show conditional branchess in logic
WHILE  ------------ show looping logic
END  -------------- end of program
*/

// Write out pseudocode (both casual and formal) that does the following:

  // a function that returns the sum of two numbers
    /*
      START

      1. GET a number from user, SET it to num1
      2. GET a second number from user, SET it to num2
      3. Add num1 and num2 and SET to total
      4. Return total

      END
    */
function getSum(num1, num2) {
  let total = Number(num1) + Number(num2);
  return total;
}
let rlSync = require('readline-sync');
console.log(getSum(rlSync.question("What's your first number?\n"), rlSync.question("What's your second number?\n"))); 

  // a function that takes an array of strings, and returns a string that is all
  // those strings concatenated together
    /*
    START

    1. GET an array of strings, SET to arrayOfStrings
    2. SET an empty string called finalString
    3. SET iterator = 0
    4. WHILE iterator <= length of arrayOfStrings, 
        a. concatenate the current string to finalString
        b. iterator + 1
    5. Return finalString

    END
    */
function joinStrings(arrayOfStrings) {
  let finalString = "";
 for (let i = 0; i <= arrayOfStrings.length - 1; i += 1) {
   finalString = finalString.concat(arrayOfStrings[i]); 
 }
 return finalString;
}

console.log(joinStrings(["dic", "tion", "ary"])); // "dictionary"

  // a function that takes an array of integers, and returns a new array with
  // every other element
    /*
    START

    1. GET an array of integers and SET to arrayOfNums
    2. SET outputNums = []
    3. SET iterator = 1
    4. WHILE iterator <= length of arrayOfNums
        a. Add current integer to outputNums
        b. iterator + 2
    5. Return outputNums

    END
    */

function everyOtherNum(arrayOfNums) {
  let outputNums = [];
  for (let i = 1; i <= arrayOfNums.length - 1; i += 2) {  
    outputNums.push(arrayOfNums[i]);  
  }
  return outputNums
}

console.log(everyOtherNum([2, 4, 5, 6, 7, 9])); // [4, 6, 9]





