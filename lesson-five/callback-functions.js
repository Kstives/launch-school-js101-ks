// for loop transformation
let numbers = [1, 2, 3, 4, 5];
let transformedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transformedNumbers.push(squaredNum);
}

console.log(transformedNumbers);


// map transformation
let numbers2 = [1, 2, 3, 4, 5];
let transformedNumbers2 = numbers2.map(currentNum => currentNum * currentNum);

console.log(transformedNumbers2);