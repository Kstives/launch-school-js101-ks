// JS101 Lesson Five: Practice Problems: Problem 1
/*
How would you order the following array of number strings by descending
numeric value (largest number value to smallest)?
*/

let arr = ['10', '11', '9', '7', '8'];

let arrSort = arr.map(num => Number(num)).sort((a, b) => b - a);

console.log(arrSort);