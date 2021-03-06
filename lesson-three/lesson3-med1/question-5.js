// Js101 Lesson Practice Problems: Medium 1 - question 5
// What does the following two lines of code output?
console.log(0.3 + 0.6); // expected 0.9, actually 0.8999999999999999
console.log(0.3 + 0.6 === 0.9); // expected true, actually false


// Launch School explanation:
/*
JavaScript uses floating point numbers for all numeric operations. Most floating
point representations used on computers lack a certain amount of precision, and
that can yield unexpected results like these.
*/