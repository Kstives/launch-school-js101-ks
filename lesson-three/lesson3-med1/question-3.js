// Js101 Lesson Practice Problems: Medium 1 - question 3
/*
 Alan wrote the follow function, which was intended to return all of the
// factors of a nuumber:

function factors(number) {
  let divisor = number;
  let factors = [];
  do {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  } while (divisor !== 0);
  return factors;
}

Alyssa noticed that this code would fail when the input is 0 or a negative
number, and asked Alan to change the loop. How can he make this work without
using a do/while loop? Note that we're not looking to find the factors for 0
or negative numbers, but we want to handle it gracefully instead of raising an
exception or going into a infinite loop.
*/

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(33)); // [1, 3, 11, 33]
console.log(factors(10)); // [1, 2, 5, 10]
console.log(factors(0)); // []
console.log(factors(-3)); // []

// Bonus: What is the purpose of number % divisor === 0 in this code?
/*
 It is used to check for factors. Any number that divides into a number without
the remainder of 0 is a factor of that number
*/

// How does the result differ if you replace line 30 with factors.push(divisor)?
/*
You would get the factors of the number that was inputted, but reverse order
*/

