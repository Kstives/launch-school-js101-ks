/*
PROBLEM:
Write a function that takes a string argument and returns a new string
containing the words from the string argument in reverse order.

*/

// C: CODE WITH INTENT

function reverseSentence(string) {
  let output = string.split(' ').reverse().join(' ');
  return output;

}

console.log(reverseSentence(''));                       // ""
console.log(reverseSentence('Hello World'));            // "World Hello"
console.log(reverseSentence('Reverse these words'));    // "words these Reverse"