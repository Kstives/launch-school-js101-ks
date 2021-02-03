/*
PROBLEM:
Write a program that prompts the user for two positive integers, and then prints
the results of the following operations on those two numbers: addition,
subtraction, product, quotient, remainder, and power. Do not worry about 
validating the input.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Two positive integers from the user
    Output: Print the addition, subtraction, product, quotient, remainder, and power of those numbers.


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Prints: Log to the console
    * Addition: the sum of number + number
    * Subtraction: the result of number - number
    * Product: number * number
    * Quotient: number / number
    * Remainder: number % number
    * Power: number ** number

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. GET two positive numbers from the user
  2. Don't validate the input, expect it to be correct
  3. Display in the console the results of mathematical operations on the two
  numbers
  4. Use the operations of addition, subtraction, multiplication, division, 
  division with remainders, and exponent on the numbers


  Clarifying Questions:
    1.


 MENTAL MODEL:
  Take two numbers from the user and use those two numbers in the operations of
  addition, subtraction, multiplication, division, division with remainders, and 
  and exponent. Display to the user all of the results of these operations.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 2, 4
    Output: 
    2 + 4 = 6
    2 - 4 = -2
    2 * 4 = 8
    2 / 4 = .5
    2 % 4 = 2
    2 ** 4 = 16

D: DATA STRUCTURE
function, math operators, console.log method

A: ALGORITHM

  1. GET two postiive integers from the user
  2. Disply the result of number1 + number2
  3. Display the result of number1 - number2
  4. Display the result of number1 * number2
  5. Display the result of number1 / number2
  6. Display the result of number1 % number2
  7. Display the result of number1 ** number2

  Verified this works with an example:
    Input: 2, 2
    Output:
    2 + 2 = 4
    2 - 2 = 0
    2 * 2 = 4
    2 / 2 = 1
    2 % 2 = 0
    2 ** 2 = 4
    
  1. GET two postiive integers from the user
  2,2
  2. Disply the result of number1 + number2
  2 + 2 = 4
  3. Display the result of number1 - number2
  2 - 2 = 0
  4. Display the result of number1 * number2
  2 * 2 = 4
  5. Display the result of number1 / number2
  2 / 2 = 1
  6. Display the result of number1 % number2
  2 % 2 = 0
  7. Display the result of number1 ** number2
  2 ** 2 = 4


 */
// C: CODE WITH INTENT
/*
1. GET two postiive integers from the user
  2. Disply the result of number1 + number2
  3. Display the result of number1 - number2
  4. Display the result of number1 * number2
  5. Display the result of number1 / number2
  6. Display the result of number1 % number2
  7. Display the result of number1 ** number2
  */

  let readlineSync = require('readline-sync');

  let num1 = Number(readlineSync.question('Enter the first number:\n'));
  let num2 = Number(readlineSync.question('Enter the second number:\n'));

  console.log(`${num1} + ${num2} = ${num1 + num2}`);
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
  console.log(`${num1} / ${num2} = ${num1 / num2}`);
  console.log(`${num1} % ${num2} = ${num1 % num2}`);
  console.log(`${num1} ** ${num2} = ${num1 ** num2}`);