// Js101 Lesson Three Practice Problems Hard 1: question 2
// What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object); // { first: [1, 2] }
// numArray and object are both pointing to the same object

// alternatives to mutating the original object

let object2 = { first: [1] };
let numArray2 = object2["first"].slice();
numArray2.push(2);

let object3 = { first: [1] };
let numArray3 = object3["first"].concat();
numArray3.push(2);