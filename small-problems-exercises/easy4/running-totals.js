/*
Write a function that takes an array of numbers, and returns an array with the
same number of elements, with each element's value being the running total from
the original array.

PSEUDOCODE:

  START
    1. SET input array to numArray
    2. SET totalArray to empty list
    3. SET index to 0
    4. SET total to 0
    4. WHILE index is less than the length of numArray list
      a. Add current value to previous value and SET to total
      b. Add total to totalArray list
      c. increment index by 1
    5. PRINT totalArray
  
*/


function runningTotal(numArray) {
  let totalArray = [];
  let index = 0;
  let total = 0;
  while (index < numArray.length) {
    total += numArray[index];
    totalArray.push(total);
    index += 1;
  }
  return totalArray;
}


console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []

// Further Exploration
/*
Can you rewrite the solution using the Array.prototype.map method? What types of
problems do you think are well-suited for the Array.prototype.map method?

I don't think so. The problem here is using an arrow function for this more
complex program. The map() method may be better suited for accessing the data in
the array and transforming each individual element
*/

console.log('RunningTotal2:');

function runningTotal2(numArray) {
  let totalArray = [];
  let total = 0;
  return numArray.map(num => totalArray.push(total += numArray[num]));
}


console.log(runningTotal2([2, 5, 13]));             // [1, 2, 3]
console.log(runningTotal2([14, 11, 7, 15, 20]));    // [1, 2, 3, 4, 5]
console.log(runningTotal2([3]));                    // [1]
console.log(runningTotal2([]));                     // []