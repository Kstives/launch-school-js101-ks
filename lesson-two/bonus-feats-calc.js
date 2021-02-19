// Calculator Bonus Features

/*
1. Asking the user for another calculation
Currently, our calculator asks the user for two numbers and an operation
and then exits after displaying the result.

Wouldn't it be nice if we could ask the user if they wanted to perform another
calculation and start a new calculation when they respond with yes?
*/

const READLINE = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the Calculator!');

prompt('What\'s the first number?');
let number1 = READLINE.question();

while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = READLINE.question();
}

prompt('What\'s the second number?');
let number2 = READLINE.question();

while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = READLINE.question();
}

prompt(`${number1} ${number2}`);

prompt('What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide');
let operation = READLINE.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Must choose 1, 2, 3, or 4');
  operation = READLINE.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}
prompt(`The result is: ${output}`);
