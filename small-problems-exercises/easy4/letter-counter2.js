/*
Modify the wordSizes function from the previous exercise to exclude non-letters
when determining word size. For instance, the word size of "it's" is 3, not 4.
*/


function removePunctuation(string) {
  let justLetters = '';
  string = string.toLowerCase();
  for (let letter = 0; letter < string.length; letter += 1) {
    if (('a' <= string[letter] && string[letter] <= 'z')
  || string[letter] === ' ') {
      justLetters += string[letter];
    }
  }

  return justLetters;
}

function addKeys(string) {
  string = removePunctuation(string);
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
  string = removePunctuation(string);
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

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {}