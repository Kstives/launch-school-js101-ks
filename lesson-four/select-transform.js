// Js101 Lesson Four: Selection and Transformation

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

// Double the numbers that have odd indices

function doubleOddIndices(array) {
  for (let counter = 0; counter < array.length; counter += 1) {
    if (counter % 2 === 1) array[counter] *= 2;
  }
  return array;
}

let arrayOfNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(doubleOddIndices(arrayOfNums)); // [0, 2, 2, 6, 4, 10, 6, 14, 8, 18]

/*
 - Create a function called multiply that can take an additional argument to
determine the transformation criterion
 - Try coding a function that lets you multiply every array item by a specified
 value
*/

// transforms array
function multiply(numbers, multiplier) {
  for (let index = 0; index < numbers.length; index += 1) {
    numbers[index] *= multiplier;
  }
  return numbers;
}

let myNumbers2 = [1, 4, 3, 7, 2, 6];
console.log(multiply(myNumbers2, 3)); // [3, 12, 9, 21, 6, 18]
console.log(myNumbers2); // [3, 12, 9, 21, 6, 18]

// returns new array, does not transform array

function multiply2(numbers, multiplier) {
  let multipliedNums = [];

  for (let index = 0; index < numbers.length; index += 1) {
    multipliedNums.push(numbers[index] * multiplier);
  }
  return multipliedNums;
}

console.log(multiply2(myNumbers2, 2)); // [6, 24, 18, 42, 12, 36]
console.log(myNumbers2); // [3, 12, 9, 21, 6, 18]