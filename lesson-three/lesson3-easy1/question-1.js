// QUESTION 1
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// no, it will create a length of 7, with the empty slots filled with undefined
console.log(numbers);
// [1, 2, 3. <3 empty items>, 5]
console.log(numbers[4] === undefined); // true

/*
Though empty items in arrays return undefined, they are not the value undefined
*/