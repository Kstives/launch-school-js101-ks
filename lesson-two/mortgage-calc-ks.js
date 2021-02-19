/* eslint-disable max-lines-per-function */
/*
PROBLEM:
Build a mortgage/cart payment calculator.
Calculate the following three things:
- monthly interest rate
- loan duration in months
- monthly payment

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: loan amount, APR, loan duration
    (ex. Loan amount: $300,000.00, APR: 3.99%, Loan duration: 30 years)

    Output: monthly interest rate, loan duration in months, and monthly payment
    (ex. monthly interest rate: .33 %, loan duration in months: 360,
      monthly payment: $1430.52)


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * mortgage - A type of loan you can use to buy or refinance a home.
    * loan - When money is given to another party in exchange for repayment of
    the loan principal amount plus interest
    * principal - the initial amount borrowed or what is still owed on a loan
    * Annual Percentage Rate (APR) - The total amount of interest you pay
    each year, represented as a percentage of the loan balance.
    * Loan duration - the amount of time until the loan is paid off
    (in years or months)
    * monthly interest rate - The percentage of interest you pay each month
    along with the monthly prinicipal amount.
    To calculate a monthly interest rate, divide the annual rate by 12
    to reflect 12 months in the year.

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The program will need three pieces of information:
    - the loan amount
    - the Annual Percentage Rate (APR)
    - the loan duration (in years)
  2. Using those three things, calculate:
      - monthly interest rate
      - loan duration in months
      - monthly payment
  3. Use the formula: let m = p * (j / (1 - Math.pow((1 + j), (-n))));
  4. Use descriptive names for variables in the program
  5. Print the payment amount as dollar and cents (ex. $10.00)
  6. Use ESLint to check for errors
  7. Be clear in what format of input you want from user (ex. always percentages
    or always decimals)
  8. Choose names that represent the type of information you have (ex. if it's
  years versus months for rates)

  Clarifying Questions:
    1. What if there is no interest rate (interest rate = 0)?
    Then the monthly payment will be the loan amount divided by loan duration
    in months.


 MENTAL MODEL:
Create a mortgage/car payment calculator that receives the input of the loan
amount, the Annual Percentage Rate (APR) as a percentage, and the loan duration
in years, converts these figures, and calculates and returns the monthly
payment, monthly interest rate, and the loan duration in months.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE (home mortgage)
    Input:The loan amount is $268,000 for 25 years with an interest rate of 5%
    Output: The monthly payment is $1566.70, monthly interest rate is .42%, and
    the loan duration is 300 months.

    EXAMPLE TWO (car loan)
    Input:The loan amount is $60,000 for 5 years with an interst rate of 5.5%
    Output: The monthly payment is $1146.07, monthly interest rate is .46%, and
    the loan duration is 60 months.

    EXAMPLE THREE (no interest rate car loan)
    Input:The loan amount is $40,000 for 3 years with an interst rate of 0%
    Output: The monthly payment is $1,111.11, monthly interest rate is 0%, and
    the loan duration is 36 months.


D: DATA STRUCTURE
function, variables, math operators

A: ALGORITHM

START
  1. GET loan amount from user, convert to number, and SET to loanAmount
  2. GET the Annual Percentage Rate (APR) from user as percentage,
  convert to number, and SET to APR
  3. GET loan duration in years from user, convert to number,
  and SET to loanYearsDuration
  4. Convert APR to decimal, divide by 12 and SET to monthlyInterestRate
  5. Multiply loanYearDuration by 12 and SET to loanMonthsDuration
  6. Use the monthly payment formula with loanAmount, monthlyInterestRate, and
  loanMonthsDuration to get the monthly payment, and SET to monthlyPayment
  7. Return a report of the user's monthly payment rounded to the nearest
  hundredths place, monthly interest rate as percentage, and loan duration
  in months
END

  Verified this works with an example:
  EXAMPLE TWO (car loan)
    Input:The loan amount is $60,000 for 5 years with an interst rate of 5.5%
    Output: The monthly payment is $1146.07, monthly interest rate is .46%, and
    the loan duration is 60 months.

   START
  1. GET loan amount from user, convert to number, and SET to
  loanAmount (loanAmount = 60000)
  2. GET the Annual Percentage Rate (APR) from user as percentage, convert
  to number, and SET to APR (APR = 5.5)
  3. GET loan duration in years from user, convert to number, and
  SET to loanYearsDuration (loanYearsDuration = 5)
  4. Convert APR to decimal, divide by 12, and SET to monthlyInterestRate
  ((5.5 / 100) / 12) (monthlyInterestRate = .004583)
  5. Multiply loanYearDuration by 12 and SET to loanMonthsDuration (5 * 12)
  (loanMonthsDuration = 60)
  6. Use the monthly payment formula with loanAmount, monthlyInterestRate, and
  loanMonthsDuration to get the monthly payment, and SET to monthlyPayment:
  60000 * (.004583 / (1 - Math.pow((1 + .004583), (-60))));
  monthlyPayment = 1146.0697...
  7. Return a report of the user's monthly payment, monthly interest rate,
  and loan duration in months:
  The monthly payment is $1146.07, monthly interest rate is .46%, and
  the loan duration is 60 months.
END


 */

// C: CODE WITH INTENT
function mortgageCalc() {
  let readLineSync = require('readline-sync');

  let loanAmount = readLineSync.question('What is your loan amount? (Exclude symbols and punctuation.)\n');
  // Number input validation
  while ((loanAmount === '') || Number.isNaN(Number(loanAmount)) || (Number(loanAmount) < 0)) {
    console.log('Please enter a valid number.');
    loanAmount = readLineSync.prompt();
  }

  let apr = readLineSync.question('What is your Annual Percentage Rate? (Example: 5 not 5%.)\n');
  // Number input validation
  while ((apr === '') || Number.isNaN(Number(apr)) || (Number(apr) < 0)) {
    console.log('Please enter a valid number.');
    apr = readLineSync.prompt();
  }

  let loanYearsDuration = readLineSync.question('What is your loan duration in years? (Just give a number.)\n');
  // Number input validation
  while ((loanYearsDuration === '') || Number.isNaN(Number(loanYearsDuration)) || (Number(loanYearsDuration) < 0)) {
    console.log('Please enter a valid number.');
    loanYearsDuration = readLineSync.prompt();
  }

  // convert input to numbers
  loanAmount = Number(loanAmount);
  apr = Number(apr);
  loanYearsDuration = Number(loanYearsDuration);

  // Monthly interest rate as a decimal
  let monthlyInterestRate = (apr / 100) / 12;

  // Loan duration in months
  let loanMonthsDuration = loanYearsDuration * 12;

  // Monthly payment amount
  let monthlyPayment;
  if (apr !== 0) { // if interest rate is not zero
    monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 +
      monthlyInterestRate), (-loanMonthsDuration))));
  } else { // if interest rate is zero
    monthlyPayment = loanAmount / loanMonthsDuration;
  }

  console.log(`The monthly payment is $${monthlyPayment.toFixed(2)}, the monthly interest rate is ${(monthlyInterestRate * 100).toFixed(2)}%, and the loan duration is ${loanMonthsDuration} months.`);

  console.log('\nWould you like to perform another calculation? Yes or No');
  let repeat = readLineSync.prompt().toLowerCase();
  if (repeat === 'yes' || repeat === 'y') {
    mortgageCalc();
  }
}

mortgageCalc();