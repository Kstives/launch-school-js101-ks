/*
Given a string of words separated by spaces, write a function that swaps the
first and last letters of every word.

You may assume that every word contains at least one letter, and that the string
will always contain at least one word. You may also assume that each string
contains nothing but words and spaces, and that there are no leading, trailing,
or repeated spaces.
*/

function swap(string) {
  let wordArray = string.split(' ');
  let wordSwap = [];
  for (let word = 0; word < wordArray.length; word += 1) {
    if (wordArray[word].length !== 1) {
      let firstLetter = wordArray[word][0];
      let lastLetter = wordArray[word].slice(-1);
      let middleLetters = wordArray[word].slice(1, -1);

      wordSwap.push(lastLetter + middleLetters + firstLetter);
    } else {
      wordSwap.push(wordArray[word]);
    }
  }
  return wordSwap.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"