// Lesson 3: Easy 2 Question 2
/*
The Array.prototype.reverse method reverses the order of elements in an array,
and Array.prototype.sort can rearange the elements in a variety of ways,
including descending. Both of these methods mutate the original array as shown
below. Write two distinct ways of reversing the array without mutating the
original array. Use reverse for the first solution, and sort for the second.
*/

let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

numbers = [1, 2, 3, 4, 5];
numbers.sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 5, 4, 3, 2, 1 ]

// non-mutating sorting methods with slice and spread syntax
numbers = [1, 2, 3, 4, 5];
numbers.slice(0).reverse();
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

[...numbers].sort((num1, num2) => num2 - num1);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]

// Bonus Question: Can you do it using the Array.prototype.forEach() method?
