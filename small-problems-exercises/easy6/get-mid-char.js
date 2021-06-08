/*
PROBLEM:
Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters.

Examples:
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

A: ALGORITHM

START

  1. Determine the length of the input string
  2. IF the length of the input string is equally divided by 2
    return the character at the index of the string's length divided by 2
  3. ELSE IF the length of the input string is not equally divided by 2
    return the characters at the index of the string's length divded by 2,
    rounded up and rounded down


END

*/

// C: CODE WITH INTENT

function centerOf(string) {
  let midchar = '';
  if ((string.length - 1) % 2  === 0) {
    midchar = string[(string.length - 1) / 2];
  } else {
    let midchar1 = string[Math.floor((string.length - 1) / 2)];
    let midchar2 = string[Math.ceil((string.length - 1) / 2)];
    midchar = midchar1 + midchar2;
  }
  return midchar;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"