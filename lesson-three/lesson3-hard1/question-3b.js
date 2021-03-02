// Js101 Lesson Three Practice Problems Hard 1: question 3 B)
// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one = ["two"];
  two = ["three"];
  three = ["one"];
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: ['one']
console.log(`two is: ${two}`); // two is: ['two']
console.log(`three is: ${three}`); // three is: ['three']

/*
The function messWithVars creates local variables one, two, three,
and assigns them new objects to those local variables that don't effect
the global variables. So the variables one, two, three that are being logged
to the console on lines 16-18 are the global variables that have been unchanged
from their initialization. The function does not return any of the local variables
so their values are lost after the program finishes running.
*/
