/*
PROBLEM:
Write a function that returns an Array that contains every other element of an
Array that is passed in as an argument. The values in the returned list should
be those values that are in the 1st, 3rd, 5th, and so on elements of the
argument Array.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: An array
    Output: An array of every other element in the Array


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * Every other: 1, 3, 5, etc. (the odd numbers)
    * element: an item in an array
    * arguement array: the array that gets passed to the function
    from a function invocation

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The input is an array
  2. Every other element is returned in another array
  3. The output array starts with the first element in the input array

  Clarifying Questions:
    1. Does it need to be a new array outputed than the one inputed? 
    I don't think it matters in this context


 MENTAL MODEL:
  From an array given as an argument, take every other element starting with
  the first element and return those elements in an array.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [1, 2, 3, 4, 5, 6]
    Output: [1, 3, 5]

    EXAMPLE ONE
    Input: ['cat', 'dog', 'fish', 'ferret']
    Output: ['cat', 'fish']


D: DATA STRUCTURE
function, array, array methods, iteration

A: ALGORITHM

START

  1. GET array from function call SET it as inputArray
  2. SET a new array as outputArray
  2. SET iteration = 0
  3. WHILE iteration < inputArray length
    a. Add element to outputArray
    b. skip next element
    c. repeat step a
  4. PRINT outputArray

END

  Verified this works with an example:
    Input: ['happy', 'birthday', 'to', 'you']
    Output: ['happy', 'to']

START

  1. GET array from function call SET it as inputArray
  inputArray = ['happy', 'birthday', 'to', 'you']
  2. SET a new array as outputArray
  outputArray;
  2. SET iteration = 0
  iteration = 0
  3. WHILE iteration < inputArray length
  iteration = 1
    a. Add element to outputArray
  outputArray = ['happy']
  outputArray = ['happy', 'to']
    b. Add 1 to iteration
  iteration = 2
  iteration = 3
    b. skip next element
    c. repeat step a
  4. PRINT outputArray
  ['happy', 'to']

END


 */

// C: CODE WITH INTENT
/*
START

  1. GET array from function call SET it as inputArray
  2. SET a new array as outputArray
  2. SET iteration = 0
  3. WHILE iteration < inputArray length
    a. Add element to outputArray
    b. skip next element
    c. repeat step a
  4. PRINT outputArray

END
*/

// iteration by 2
function oddities(inputArray) {
  let outputArray = [];
  for (let i = 0; i < inputArray.length; i += 2) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
}

// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

// while loop and index divided by 2 check

function oddities2(inputArray) {
  let outputArray = [];
  let index = 0;

  while (index < inputArray.length) {
    if (index % 2 === 0) {
      outputArray.push(inputArray[index]);
    }
    index += 1;
  }
  return outputArray;
}

console.log(oddities2([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities2([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities2(["abc", "def"])); // logs ['abc']
console.log(oddities2([123])); // logs [123]
console.log(oddities2([])); // logs []

// evenities (output all even elements)

function evenities(inputArray) {
  let outputArray = [];
  if (inputArray.length === 1) {
    outputArray.push(inputArray[0]);
    return outputArray;
  }
  for (let i = 1; i < inputArray.length; i += 2) {
    outputArray.push(inputArray[i]);
  }
  return outputArray;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs [123]
console.log(evenities([])); // logs []