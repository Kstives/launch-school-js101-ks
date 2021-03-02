// Js101 Lesson Three Practice Problems Hard 1: question 4
/*
Problem:
Ben was tasked to write a simple JavaScript function to determine whether an
input string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11.
He is not familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a
string is a numeric string between 0 and 255 as required for IP numbers and
asked Ben to use it. Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few
things. You're not returning a false condition, and you're not handling the case
when the input string has more or less than 4 components, e.g.,
4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.

*/

/*
Determine whether an input string is an IP Address using 4-dot-separated numbers
e.g. 10.4.5.11.

An IP address is:
1. Has 4 numbers
2. It starts and ends with a number
3. It has period in between the numbers
4. all of the numbers added together is a number between 0 and 225

*/

function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function rightLength(string) {
  return string.length === 7;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    } else if (!rightLength(inputString)) {
      return false;
    }
  }

  return true;
}

console.log(isDotSeparatedIpAddress('4.5.5')); // false
console.log(isDotSeparatedIpAddress('4.5.5.5')); // true
console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // false