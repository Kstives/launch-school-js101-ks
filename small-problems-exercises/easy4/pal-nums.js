/*
Write a function that returns true if its integer argument is palindromic, or
false otherwise. A palindromic number reads the same forwards and backwards.
*/

function isPalindromicNumber(number) {
  let numString = String(number);
  let numStringReverse = numString.split('').reverse().join('');
  return numString === numStringReverse;
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true

// Further exploration
/*
Suppose the number argument begins with one or more 0s. Will the solution still
work? Why or why not? Is there any way to address this?
*/

/*
 No, it changes the number passed in the function call as an octal.
 So you need to pass a number as a string into the function and convert it to a
 number with the ParseInt() method with 10 as the base ex. parseInt(string, 10)
 */

function convertOctal(string) {
  let num = parseInt(string,10);
  return num;
}

console.log(convertOctal('0123')); // 123

function stillAnOctal(number) {
  return number;
}

console.log(stillAnOctal(0123)); // 83