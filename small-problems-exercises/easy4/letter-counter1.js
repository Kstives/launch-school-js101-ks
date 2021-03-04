/*
Write a function that takes a string consisting of zero or more space separated
words, and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.

PSEUDOCODE:
  START
    1. Place every word in a list, SET as wordArray
    2. SET iterator index = 0
    3. SET empty object = letterCount
    3. WHILE index is less than the length of wordArray
      a. IF letterCount is empty
        i. SET letterCount key as current value's length
        ii. SET value of key to 0
      b. IF current value's length === any of letterCount's keys
          i. add one to that key's value
        ELSE
          i. add current value's length as key to letterCount
          ii. add one to that key's value
*/


function addKeys(string) {
  let wordArray = string.split(' ');
  let keysObject = {};
  let index = 0;

  if (string === '') {
    return keysObject;
  }

  while (index < wordArray.length) {
    if (!(keysObject[String(index)])) {
      keysObject[wordArray[index].length] = 0;
    }
    index += 1;
  }
  return keysObject;
}

function wordSizes(string) {
  let letterCountObj = addKeys(string);
  let wordArray = string.split(' ');
  let index = 0;
  let objKeys = Object.keys(letterCountObj);

  while (index < wordArray.length) {
    let indexLength = String(wordArray[index].length);
    if (objKeys.includes(indexLength)) {
      letterCountObj[indexLength] += 1;
    }
    index += 1;
  }

  return letterCountObj;
}


console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}