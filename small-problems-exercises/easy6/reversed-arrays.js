/*
P: PROBLEM
Write a function that takes an Array as an argument and reverses its
elements in place. That is, mutate the Array passed into this method.
The return value should be the same Array object.

You may not use Array.prototype.reverse().

A: ALGORITHM

START
  Take out from the beginning
  1. Remove 

END

*/

// C: CODE WITH INTENT

// function reverse(array) {
//   let counter = 0;

//   while (counter <= array.length) {
//    array.
//     counter += 1;
//   }

//   return array;
// }

// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// LAUNCH SCHOOL SOLUTION
function reverse(array) {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  while (leftIndex < array.length / 2) {
    [array[leftIndex], array[rightIndex]] =
      [array[rightIndex], array[leftIndex]];
    leftIndex += 1;
    rightIndex -= 1;
  }
  return array;
}
