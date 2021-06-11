/*
P: PROBLEM
Write a function that takes an Array as an argument and reverses its
elements in place. That is, mutate the Array passed into this method.
The return value should be the same Array object.

You may not use Array.prototype.reverse().

A: ALGORITHM

START

  1. 

END

*/

// C: CODE WITH INTENT

function reverse(array) {
  for (let index = 0; index < array.length; array += 1) {
    array.unshift(array.pop());
  }

  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true
