/*
PROBLEM:
Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains a
fruit name and a number that represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of times
equal to its desired quantity

In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: An array of inner arrays of a string and a number (the fruit and
      its quantity)
    Output: An array with the fruit string from each inner array, repeated as
    elements the number of times indicated by the second index in the inner
    arrays.


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * two-dimensional array: An array containing inner arrays [[], [], []]
    * one-dimensional array: A flat array, with elements consisting of only
    primitive types

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Write a function that takes an two-dimensional array
  2. A one dimensional array is returned
  3. First element of the input array is a string, the second element is a
  number
  4. The string will be a fruit name
  5. The number will represent the quantity of fruit needed
  6. The output array will return as a one-dimensional array
  7. Every element of the return array is a string equal to the fruit in the
  input inner arrays' first element
  8. The fruit string element will repeart as a new element in the output array
  the amount of times of the number in the inner arrays' second element

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [['grape', 2], ['apple', 3]]
    Output: ['grape', 'grape', 'apple', 'apple', 'apple']

D: DATA STRUCTURE
array, string

A: ALGORITHM

START

  1. SET input array as listItem
  2. SET output array as finalGroceryList
  3. Iterate through listItems
      a. push first element to finalGroceryList, repeated the number of times
      in the second element

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

function buyFruit(listItems) {
  
  let finalGroceryList = [];

  for (let index = 0; index < listItems.length; index += 1) {
    let fruit = listItems[index][0];
    let quantity = listItems[index][1];
    let counter = 0;

    while (counter < quantity) {
      finalGroceryList.push(fruit);
      counter++;
    }
    
  }

  return finalGroceryList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]