// QUESTION 2
// How can you determine whether a given string ends with an exclamation mark?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function findExclamationMark(string) {
  if (string[string.length - 1] === '!') {
    return true;
  } else {
    return false;
  }
}

console.log(findExclamationMark(str1)); // true
console.log(findExclamationMark(str2)); // false

// OR

str1.endsWith('!'); // true
str2.endsWith('!'); // false