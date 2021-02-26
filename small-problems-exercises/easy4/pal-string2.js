/*
PROBLEM:
Write another function that returns true if the string passed as an argument is
a palindrome, or false otherwise. This time, however, your function should be
case-insensitive, and should ignore all non-alphanumeric characters.
If you wish, you may simplify things by calling the isPalindrome function
you wrote in the previous exercise.

D: DATA STRUCTURE

A: ALGORITHM

START

  1.

END
*/

// function removeSymbols(string) {
//   let stringArray = string.toLowerCase().split('');
//   if (stringArray.search(/^a-z/, /w/g)) {
       
//   }
// }
function isRealPalindrome(string) {
  // string = removeSymbols(string);
  let stringReverse = string.split('').reverse().join('');
  console.log(string);
  console.log(stringReverse);
  return string.toLowerCase() === stringReverse.toLowerCase();
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false