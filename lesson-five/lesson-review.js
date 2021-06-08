// review of Lesson five concepts

// Sorting

// How would you sort the following array by the lengths of each word?

let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => a.length - b.length);

console.log(words);

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];
scores.sort((a, b) => {
  let totalAScore = a.reduce((number, next) => number + next);
  let totalBScore = b.reduce((number, next) => number + next);

  return totalAScore - totalBScore;
});

console.log(scores);

// SHALLOW COPIES
let arr = [{ a: 'foo'}, {bar: 'bar'}, {c: 'baz'}];
let copyOfArr = [...arr];

copyOfArr[1].d = 'qux';

console.log(arr);
console.log(copyOfArr);

// WORKING WITH CALLBACK FUNCTIONS

// comparing transformation operations

// for loop transformation
console.log("FOR LOOP");
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

console.log(transformedNumbers); // => [1, 4, 6, 16, 25]

// map transformation
console.log("MAP METHOD");
let numbers1 = [1, 2, 3, 4, 5];
let transformatedNumbers2 = numbers1.map(currentNum => currentNum * currentNum);

console.log(transformatedNumbers2); // => [1, 4, 6, 16, 25]

console.log("EXAMPLE 1");
// EXAMPLE 1
[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3

