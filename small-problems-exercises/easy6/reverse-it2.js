/*
P: PROBLEM
Write a function that takes a string argument containing one or more words and
returns a new string containing the words from the string argument.
All five-or-more letter words should have their letters in reverse order.
The string argument will consist of only letters and spaces. Words will be
separated by a single space.

A: ALGORITHM

START

  1. Split the input string into an array, each word its own element
  and SET to originalArray
  2. Create an empty array SET to reversedWordsArray
  3. While iterating through originalArray
    a. split each word into an array, each
  letter it own element
    b. Reverse the order of the letters
    c. Join the letters back to words
    d. Push the words to reversedWordsArray
  4. Join reversedWordsArray as a string with spaces
  5. Return reversedWordsArray

END

*/

// C: CODE WITH INTENT

function reverseWords(string) {
  let originalArray = string.split(' ');
  let reversedWordsArray = [];

  for (let index = 0; index < originalArray.length; index += 1) {
    let currentWord = originalArray[index];
    if (currentWord.length > 5) {
      reversedWordsArray.push(currentWord.split('').reverse().join(''));
    } else {
      reversedWordsArray.push(currentWord);
    }
    
  }

  return reversedWordsArray.join(' ');
  
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"