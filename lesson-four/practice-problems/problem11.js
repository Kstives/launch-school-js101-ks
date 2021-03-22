// Create an object that expresses the frequency with which each letter
// occurs in this string:
let statement = "The Flintstones Rock";

// The output will look something like the following:
// { T: 1, h: 1, e: 2, F: 1, l: 1, ... }

let letterCount = {};

statement.split('').forEach(letter => {
  if (!letterCount[letter]) {
    letterCount[letter] = 1;
    return letterCount;
  } else {
    letterCount[letter] += 1;
    return letterCount;
  }
});

console.log(letterCount);