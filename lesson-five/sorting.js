
// sorting with .sort() and callback function
let numbers = [4, 1, 5, 6, 66, 100];

numbers.sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
});

console.log(numbers); // [1, 4, 5, 6, 66, 100]

// How would you sort the following array by the lengths of each word?
let words = ['go', 'ahead', 'and', 'jump'];

words.sort((a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return 0;
  }
});

words.sort((a, b) => a.length - b.length); // sort ascending
console.log(words); // ['go', 'and', 'jump', 'ahead']

words.sort((a, b) => b.length - a.length); // sort descending
console.log(words); // ['ahead', 'jump', 'and', 'go']

// sorting subarrays

let scores = [[3, 6, 4], [6, 8, 9], [1, 4, 2]];

scores.sort((a, b) => {
  let totalAScore = a.reduce((accum, currentValue) => accum + currentValue);
  let totalBScore = b.reduce((accum, currentValue) => accum + currentValue);

  return totalAScore - totalBScore;
});

console.log(scores); // [[1, 4, 2], [3, 6, 4], [6, 8, 9]]