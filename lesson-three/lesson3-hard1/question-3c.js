// Js101 Lesson Three Practice Problems Hard 1: question 3 C)
// Given the following similar sets of code, what will each code snippet print?

function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`); // one is: ['two']
console.log(`two is: ${two}`); // two is: ['three']
console.log(`three is: ${three}`); // three is: ['one']

/*
Because the values of the global variables one, two, three get passed as
references to the function messWithVars, and because the splice method alters
the original arrays, the console will log the values of the arrays that were
changed in the function invocation.
*/