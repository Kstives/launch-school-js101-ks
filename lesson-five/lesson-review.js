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