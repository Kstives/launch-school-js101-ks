/*
PROBLEM:
Write a program that will ask for user's name. The program will then greet the user. If the user writes "name!" then the computer yells back to the user.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A user's name
    Output: Two different greetings, one lowercase, and the other all uppercase,
    depending on the input


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * yells: output in all uppercase letters
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The user will input a name
  2. The program will return a greeting with that name
  3. If the user gives a name without an exclamation mark, then
  the greeting returned is a normal greeting
  4. If the user gives a name with an exclamation mark "name!", then
the greeting returned is in all uppercase letters

  Clarifying Questions:
    1. What if the user gives a name with other punctuation
    The greeting is normal, the only different response will be given
    when an exclamation is present


 MENTAL MODEL:
  A program receives an input from the user, their name. The program returns a greeting in lowercase unless there is an exclamation present in the input given,
  then the program returns a greeting in all uppercase letters

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: Frank
    Output: Hi, Frank.

  EXAMPLE TWO
    Input: Frank!
    Output: HELLO FRANK. WHY ARE WE SCREAMING?


D: DATA STRUCTURE
function, string methods

A: ALGORITHM

  1. GET name from user and SET to userName
  2. Does userName include an exclamation mark (!)?
    a. IF yes, PRINT a greeting in all uppercase letters
    b. ELSE, PRINT a greeting in lowercase letters

  Verified this works with an example:
    Input: Nancy!
    Output: HELLO NANCY. WHY ARE WE SCREAMING?

  1. GET name from user and SET to userName userName = Nancy!
  2. Does userName include an exclamation mark (!)?
    a. IF yes, return a greeting in all uppercase letters
    HELLO NANCY. WHY ARE WE SCREAMING?
    b. ELSE, return a greeting in lowercase letters
   


 */

// C: CODE WITH INTENT
/*
1. GET name from user and SET to userName
2. Does userName include an exclamation mark (!)?
    a. IF yes, PRINT a greeting in all uppercase letters
    b. ELSE, PRINT a greeting in lowercase letters
*/

let rlSync = require("readline-sync");
let userName = rlSync.question("What is your name?\n");

if (userName.includes('!')) {
  userName = userName.substr(0, userName.length - 1);
  console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${userName}.`);
}