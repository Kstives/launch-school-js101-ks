/*
PROBLEM:
Write a function that combines two arrays passed as arguments, and returns a new
array that contains all elements from both array arguments, with each element
taken in alternation.

You may assume that both input arrays are non-empty, and that they have the same
number of elements.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: Two arrays
    Output: A new array, with the elements of each array alternating in position
    of the output array


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Pass two arrays to a function
  2. Return a new array
  3. All elements from both input arrays are added to the new array
  4. The lengths of both input arrays are equal lengths (same amount of
    elements in each array)
  5. The input arrays are not empty
  6. The elements from the input array are added to the output array in
  alternating patterns (input1 = [3, 3, 3] input2 = [5, 5, 5]
    output = [3, 5, 3, 5, 3, 5])

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: [1, 2, 3], ['a', 'b', 'c']
    Output: [1, "a", 2, "b", 3, "c"]

D: DATA STRUCTURE
array, iteration, array methods
A: ALGORITHM

START

  1. SET first input array as array1
  2. SET second input array as array2
  3. SET output array as outputArray
  4. SET outputArray length as array1 + array2
  4. SET iterator = 0
  5. WHILE iterator is less than outputArray length
    a. IF iterator is less than array1 length
      i. Add current element from array1 to outputArray
    b. IF iterator is less than array2 length
      i. Add current element from array2 to outputArray

END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

/*
START

  1. SET first input array as array1
  2. SET second input array as array2
  3. SET output array as outputArray
  4. SET outputArray length as array1 + array2
  4. SET iterator = 0
  5. WHILE iterator is less than outputArray length
    a. IF iterator is less than array1 length
      i. Add current element from array1 to outputArray
    b. IF iterator is less than array2 length
      i. Add current element from array2 to outputArray

END
*/

function interleave(array1, array2) {
  let outputArray = [];
  let iterator = 0;
  
  while (iterator < array1.length) {
    outputArray.push(array1[iterator], array2[iterator]);
    iterator += 1;
  }

  return outputArray;
}

console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

// forEach solution


function interleave2(array1, array2) {
  let outputArray = [];
 
  array1.forEach((element, index) => {
    outputArray.push(element, array2[index]);
  });
  return outputArray;
}

console.log(interleave2([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]