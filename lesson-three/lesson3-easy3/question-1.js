// Lesson 3: Easy 3 Question 1
// Write three different ways to remove all of the elements from the array
let numbers = [1, 2, 3, 4];

// solution 1
numbers = numbers.splice();
console.log(numbers);

// soltuion 2
numbers = [1, 2, 3, 4];
while (numbers.length > 0) {
  numbers.pop();
}

console.log(numbers);

// solution 3
// launch school:
numbers = [1, 2, 3, 4];
numbers.length = 0;
console.log(numbers);