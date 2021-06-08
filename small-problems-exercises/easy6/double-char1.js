/*
 write a function that takes a string, doubles every character in the string,
and returns the result as a new string.

Examples:
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

A: ALGORITHM

START

  1. Split input string into single characters
  2. Loop through list of characters
    a. repeat character and add the character and its repeat to a new list
  3. Return list

END


*/

function repeater(string) {
  if (string === "") {
    return '""';
  }
  
  let doubles = [];
  string.split('').map(char => doubles.push(char.repeat(2)));
  return doubles.join('');
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""