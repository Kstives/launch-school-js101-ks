/*
Problem:
Build a program that logs when the user will retire and how many more years the
user has to work until retirement.

Example:
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

A: ALGORITHM

START

  1. GET user's age
  2. GET user's desired retiring age
  3. Get current Year
  4. Add the desired retiring year to the current year.
  5. Subtract user's age from the desired retiring age
  6. PRINT "It's [current year]. You will retire in [retiring year].
  You only have [retiring age - user age] years of work to go!"

END

*/

let rlSync = require('readline-sync');

console.log('What is your age? (Enter only digits)');
let userAge = Number(rlSync.prompt());

console.log('At what age would you like to retire? (Enter only digits)');
let retiredAge = Number(rlSync.prompt());

let yearsToRetirement = retiredAge - userAge;

let currentYear = new Date().getFullYear();

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsToRetirement}.\nYou only have ${yearsToRetirement} years of work to go!`);

// further exploration
/*
What would happen if the new keyword wasn't used in defining the today
variable on line 39?
*/

// It would probably throw an error because in creating a new Date object,
// you have to use the keyword new
