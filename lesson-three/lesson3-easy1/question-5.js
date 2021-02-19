// QUESTION 5
// What will the following code output?
console.log(false == '0'); // true
/*
The loose equality operater coerces the string '0' to a number,
and then evaluates it as false because the number 0 is falsey
*/
console.log(false === '0'); // false
/*
The strict equality operator evaluates its operands to each other
by type and value, this evaluates to false because a string is truthy
*/