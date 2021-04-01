/*
PROBLEM:
Write a function that takes one argument, a positive integer, and returns a list
of the digits in the number.

D: DATA STRUCTURE
object, array methods

A: ALGORITHM

START

  1. Create an object called count
  2. Iterate through the array
    i. IF the current element is not a key in the object count
      a. add element as key to object and set value as 1
    ii. ELSE add 1 to value of current element key in object
  3. Convert object keys and values to arrays
  4. Iterate over arrays and PRINT key & values

END

*/

// C: CODE WITH INTENT

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck','motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let countObj = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    let currentElement = array[idx];
    if (!countObj[currentElement]) {
      countObj[currentElement] = 1;
    } else {
      countObj[currentElement] += 1;
    }
  }

  let countEntries = Object.entries(countObj);

  let result = countEntries.forEach(element => console.log(`${element[0]} => ${element[1]}`));

  return result;
}

console.log(countOccurrences(vehicles));

// expected console output -- your output sequence may be different
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2

// FURTHER EXPLORATION
/*
Try to solve the problem when words are case insensitive, e.g. "suv" and "SUV"
represent the same vehicle type.
*/

let vehicles2 = ['car', 'CAR', 'truck', 'car', 'SUV', 'truck','motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences2(array) {
  let countObj = {};

  for (let idx = 0; idx < array.length; idx += 1) {
    let currentElement = array[idx].toLowerCase();
    if (!countObj[currentElement]) {
      countObj[currentElement] = 1;
    } else {
      countObj[currentElement] += 1;
    }
  }

  let countEntries = Object.entries(countObj);

  let result = countEntries.forEach(element => console.log(`${element[0]} => ${element[1]}`));

  return result;
}

console.log(countOccurrences2(vehicles2));