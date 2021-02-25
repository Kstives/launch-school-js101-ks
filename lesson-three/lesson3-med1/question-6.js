// Js101 Lesson Practice Problems: Medium 1 - question 6
// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN); // false

// you can check if something is NaN by using Number.isNaN(value)

// Launch School explanation
/*
The output is false. NaN -- not a number -- is a special numeric value that
indicates that an operation that was intended to return a number failed.
JavaScript doesn't let you use == and === to determine whether a value is NaN.
*/
