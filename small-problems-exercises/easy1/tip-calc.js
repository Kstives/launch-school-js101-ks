// PROBLEM:
/*
Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will enter numbers.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: bill amount, tip percentage
    Output:
    The tip is $x
    The total is $x
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * bill amount: how much money is owed
    * tip rate: (bill * tip rate) + bill = total amount of the bill
    * tip calculator: a program that will compute the tip from the inputted numbers
    * input validation: The checking of inputs for correct data and format
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. A prompt must be used
    2. The user provides the input
    3. There are two inputs: 1) the bill amount 2) the tip percentage
    4. The tip must be logged to the console
    5. The total amount of the bill (bill + tip) must be logged to the console
    6. Input validation can be ignore, the user is assumed to have entered numbers

    Clarifying Questions:
    1. Are there any conversions that need to take place?
    Yes, the tip percentage to a decimal

    */
  
  // MENTAL MODEL:
    /*
    Create a program that will prompt in the console for a bill amount and then a tip rate provided by the user. The program calculates how much the tip will be based on these inputs and logs to the console the tip amount in a dollar amount and the total amount owed (tip + bill) in a dollar amount. 
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: -30, 10
    Output:
    The tip is -$3.00
    The total is: -$33.00

    Input: 35.67, 20
    Output:
    The tip is $7.13
    The total is $42.80

    Input: $155.55, 25
    Output:
    The tip is $38.89
    The total is $194.44

    Input: 0, 20
    Output:
    The tip is $0.00
    The total is $0.00

    */

// D: DATA STRUCTURE
  // function

// A: ALGORITHM
  /*
  1. Prompt for the user to enter the bill amount
  2. Store the bill amount in a variable called BILL
  3. Prompt for the user to enter the tip percentage
  4. Store the tip percentage in a variable called TIP_RATE
  5. Convert TIP_RATE to a decimal number, multiply it by BILL, 
  and store the product in TIP_AMOUNT
  6. Add BILL and TIP_AMOUNT and store it in a variable called TOTAL_AMOUNT
  7. Log TIP_AMOUNT, rounded to two decimal places, to the console in a string
  8. LOG TOTAL_AMOUNT, rounded to two decimal places, to the console in a string

  Verified this works with an example:
    Input: 35.67, 20
    Output:
    The tip is $7.13
    The total is $42.80

    1. Prompt for the user to enter the bill amount
  2. Store the bill amount (35.67) in a variable called BILL
  3. Prompt for the user to enter the tip percentage
  4. Store the tip percentage (20) in a variable called TIP_RATE
  5. Convert TIP_RATE (20) to a decimal number (.2), multiply it by BILL (35.67), 
  and store the product in TIP_AMOUNT (7.134)
  6. Add BILL (35.67) and TIP_AMOUNT (7.134) and store it in a variable called TOTAL_AMOUNT (42.804)
  7. Log TIP_AMOUNT, rounded to two decimal places, (7.13) to the console in a string
  8. LOG TOTAL_AMOUNT, rounded to two decimal places, (42.80) to the console in a string

  */

// C: CODE WITH INTENT
let rlSync = require('readline-sync');

console.log("What is the bill?");
let getBillAmount = rlSync.prompt();

console.log("What is the tip percentage?");
let getTipRate = rlSync.prompt();

function tipCalc(bill, tipRate) {
  let tipAmount = Number(bill) * (Number(tipRate)/100);
  let totalAmount = Number(bill) + tipAmount;
  console.log(`The tip is $${tipAmount.toFixed(2)}`);
  console.log(`The total is $${totalAmount.toFixed(2)}`);
}

tipCalc(getBillAmount, getTipRate);