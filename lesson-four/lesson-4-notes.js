// Notes and examples from JS101 Lesson 4

// Collection Basics
console.log('\n');
console.log('===Collection Basics===');
console.log('\n');

let obj = { apple: 'Produce', carrot: 'Produce', pear: 'Produce', broccoli: 'Produce' };
obj['apple'] = 'Fruit';
obj.carrot = 'Vegetable';
obj.pear = 'Fruit';
obj['broccoli'] = 'Vegetable';

console.log(obj);

// String Methods

// Iterating with for and while loops
console.log('\n');
console.log("===Iterating with for and while loops===");
console.log('\n');

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
/*
Outputs:
1
1
3
2
0
6
2
8
6
6
2
5
Exiting...

1. Each time the loop is ran, it outputs a random number on a new line
2. It prints 5 and then Exiting...
3. All of the numbers are between 0 and 9
*/

console.log('\n');
console.log("===Introduction to the PEDAC PROCESS===");
console.log('\n');

/*
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

input: string
output: an array with string elements that were found in the input string
rules:
     Explicit requirements:
      - all plalindromes (words that are the same forward and backward) are
      returned
      - the palindrome words are case sensitive (mom or MOM will be returned,
        but not Mom)

    Implicit requirements:
      - an array with string elements is returned
      - the palindrome can just be a set of characters that do or don't form
      a word
      - if there are no palindromes found, an empty array is returned
      - if an empty string given, an empty array is returned
      - the palindrome substrings are lowercase
*/

console.log('\n');
console.log("===Selection and Transformation===");
console.log('\n');

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

function selectFruit(object) {
  let objKeys = Object.keys(object);
  let fruitValues = {};
  
  for (let key = 0; key < objKeys.length; key += 1) {
    let isFruit = objKeys[key];

    if (object[isFruit] === 'Fruit') {
      fruitValues[isFruit] = 'Fruit';
    }
  }
  return fruitValues;
}

console.log(selectFruit(produce)); // => { apple: 'Fruit', pear: 'Fruit' }

function doubleNumbers(numbers) {
  for (let counter = 0; counter < numbers.length; counter += 1) {
    numbers[counter] *= 2;
  }
  return numbers;
}
let myNumbers = [1, 4, 3, 7, 2, 6];
doubleNumbers(myNumbers); // => [2, 8, 6, 14, 4, 12]
console.log(myNumbers);   // => [2, 8, 6, 14, 4, 12]