/* eslint-disable no-unused-expressions */
/*
PROBLEM:
The Fibonacci series is a series of numbers (1, 1, 2, 3, 5, 8, 13, 21, ...) such
that the first two numbers are 1 by definition, and each subsequent number is
the sum of the two previous numbers. This series appears throughout the
natural world.

Computationally, the Fibonacci series is a simple series, but the results grow
at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,
848,179,261,915,075—that's enormous, especially considering that it takes six
iterations just to find the first 2-digit Fibonacci number.

Write a function that calculates and returns the index of the first Fibonacci
number that has the number of digits specified by the argument. (The first
Fibonacci number has an index of 1.)

You may assume that the argument is always an integer greater than
or equal to 2.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A number argument that is an integer greater than or equal to 2
    Output: The index of the first Fibonacci number that has the number of
    digits specified by the argument.


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Fibonacci formula: the first two numbers are 1
    and each subsequent number is the sum of the two previous numbers
    * index of a Fibonacci number: The number of the position that
    a number falls in the list of Fibonacci numbers
    (ex.: in the first numbers of Fibonacci - 1, 1, 2, 3, 5, 8... 8 has
    the index of 6)

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The argument takes a number >= 2
  2. The output is a number that represents the location of the
  the first number in the Fibonacci number series that has the same amount
  of digits as the number passed into the function specifies (3 = three value
  places like 100)
  3. Use BigInt integers to support the size of the numbers being calculated.
  (append the letter n to any number used in the solution)
  4. The Fibonacci number series needs to be calculated to get the index
  of the number needed for the output
  5. Start with the calculation of the Fibonacci numbers at 2
  (formula: the sum of the two previous numbers)

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 2n
    Output: 7n

    EXAMPLE TWO
    Input: 3n
    Output: 12n

D: DATA STRUCTURE
function, array, loop

A: ALGORITHM

START

  1. SET input number as placeValue
  Find Fibonacci numbers:
  2. Create a list and SET as fibNums
  3. IF placeValue equals 1
     a. Add 1 twice to fibNums
  4. ELSE add the second to last and the last element of fibNums together and
  append to the end of the fibNums list
  5. Return the last element of the fibNums list
  Find Fibonacci numbers index:
  6. IF the the last element of the fibNums list is equal to or greater than
  placeValue to (placeValue - 1)th power times 10 and less than placeValue
  to (placeValue)th power times 10
    a. return last element

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

// Launch School solution
function findFibonacciIndexByLength(length) {
  let first = 1n;
  let second = 1n;
  let count = 2n;
  let fibonacci;

  do {
    fibonacci = first + second;
    count += 1n;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return count;
}

console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.