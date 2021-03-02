// Js101 Lesson Three Practice Problems Hard 1: question 3 A)
// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: ['one']
console.log(`two is: ${two}`); // two is: ['two']
console.log(`three is: ${three}`); // three is: ['three']

/*
The values of the local variables in messWithVars get swapped around with
each other, but because they're not returned, they don't effect the global
variables.
*/