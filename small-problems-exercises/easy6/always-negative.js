/*
Problem: Write a function that takes a number as an argument. If the argument is
a positive number, return the negative of that number. If the argument is a
negative number, return it as-is.

Examples:
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

A: ALGORITHM

START

  1.

END

*/

// C: CODE WITH INTENT

function negative(num) {
  if (num < 0) {
    return num;
  } else {
    return -num;
  }
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

// ternary operator solution
console.log('ternary operator solution');

let negative2 = (num) => num < 0 ? num : -num;

console.log(negative2(5));     // -5
console.log(negative2(-3));    // -3
console.log(negative2(0));     // -0