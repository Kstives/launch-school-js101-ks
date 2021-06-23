/*
PROBLEM:
Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all
combinations of number pairs that exist between the two arrays.
The returned array should be sorted in ascending numerical order.

You may assume that neither argument will be an empty array.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Two arrays of numbers
    Output: A new array with products of all number combinations between
    the two input arrays, sorted in numerical order


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * products of all combinations of number pairs that exist between
  the two arrays -> Example:
  multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]
  2 * 4 = 8,
  2 * 3 = 6,
  2 * 1 = 2,
  2 * 2 = 4,
  4 * 4 = 16,
  4 * 3 = 12,
  4 * 1 = 4
  4 * 2 = 8
    * in ascending numerical order: 2, 4, 4, 6, 8, 8, 12, 16

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Two arrays of numbers input as the function's arguments
  2. Neither argument is empty
  3. Multiplication is performed on every number combination
  between the two arrays
  4. A new array is returned
  5. If is x is the number of numbers in the first array, and n is the number
  in the second array, the returned array will hae x * n amount of
  elements (first array = 3 elements, second array = 4 elements,
  returned array = 12 elements)

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [4, 5, 6], [5, 5]
    Output: [20, 20, 25, 25, 30, 30]

    EXAMPLE TWO
    Input: [0], [0]
    Output: [0, 0]

    EXAMPLE THREE
    Input: [-2, 5, -6], [-1, 6]
    Output: [-36, -12, -2, -6, -5, 30]

D: DATA STRUCTURE
array, array elements (reduce, sort)
A: ALGORITHM

START

  1. SET first input array as numList1
  2. SET second input array as numList2
  3. SET output array as productsArray
  4. WHILE counter < numList1
      i. multiply current element of numList1 by current element of numList2
      ii. add product to productsArray
      iii. repeat step i and ii until end of numList2
      iv. increment numList1 index by 1
  5. sort productsArray elements in ascending numerical order
  5. Return productsArray

END


Verified this works with an example:
  Input: [2, 1], [2, 2]
  Output: [2, 2, 4, 4]

START

  1. SET first input array as numList1
  [2, 1]
  2. SET second input array as numList2
  [2, 2]
  3. SET output array as productsArray
  []
  4. WHILE counter < numList1
      i. multiply current element of numList1 by current element of numList2
      2 * 2
      2 * 2
      1 * 2
      1 * 2
      ii. add product to productsArray
      [4]
      [4, 4]
      [4, 4, 2]
      [4, 4, 2, 2]
      iii. repeat step i and ii until end of numList2
      iv. increment numList1 index by 1
  5. sort productsArray elements in ascending numerical order
  [2, 2, 4, 4]
  5. Return productsArray
    [2, 2, 4, 4]
END

 */

// C: CODE WITH INTENT
/*
START

  1. SET first input array as numList1
  2. SET second input array as numList2
  3. SET output array as productsArray
  4. WHILE counter < numList1
      i. multiply current element of numList1 by current element of numList2
      ii. add product to productsArray
      iii. repeat step i and ii until end of numList2
      iv. increment numList1 index by 1
  5. sort productsArray elements in ascending numerical order
  5. Return productsArray

END
*/

function multiplyAllPairs(numList1, numList2) {
  let productsArray = [];
  let counter = 0;

  while (counter < numList1.length) {
    let index = counter;
    numList2.forEach(num => productsArray.push(numList1[index] * num));
    counter += 1;
  }
  return productsArray.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]