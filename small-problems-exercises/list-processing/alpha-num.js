/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
/*
P: PROBLEM
Write a function that takes an array of integers between 0 and 19 and returns an
array of those integers sorted based on the English word for each number:

    zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven,
    twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

A: ALGORITHM

START

  1. Create a list of the english words of 0-19 set to wordsAndNums
  2. Use the index of the position of the word in the list to
  sort the list alphabetically

END

*/

// C: CODE WITH INTENT

// function alphabeticNumberSort(intArray) {

//   let wordsAndNums = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//     eleven:11,
//     twelve: 12,
//     thirteen: 13,
//     fourteen: 14,
//     fifteen: 15,
//     sixteen: 16,
//     seventeen: 17,
//     eighteen: 18,
//     nineteen: 19

//   };

//   let sortedWords = [];
//   for (let num = 0; num < intArray.length; num += 1) {
//     let currentIndex = intArray[num];
//     let currentWord = Object.keys(wordsAndNums)[currentIndex];
//     if (currentIndex === wordsAndNums[currentWord]) {
//       sortedWords.push(currentWord);
//     }
//   }

//   sortedWords.sort();
//   let sortedOutputNums = [];

//   for (let word = 0; word < sortedWords.length; word += 1) {
//     let currentWordKey = sortedWords[word];
//     sortedOutputNums.push(wordsAndNums[currentWordKey]);
//   }

//   return sortedOutputNums;
  
// }


const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
  'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
  'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function wordSort(num1, num2) {
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return [...array].sort(wordSort);
}
console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
console.log(alphabeticNumberSort([1, 4, 6])); // [4, 1, 6]
console.log(alphabeticNumberSort([0, 16, 6])); // [6, 16, 0]