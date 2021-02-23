// Lesson 3: Easy 3 Question 5
/*
The following function unnecessarily uses two return statements to return
boolean values. Can you rewrite this function so it only has one return
statement and does not explicitly use either true or false?
*/

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }

// solution 1
console.log("solution 1");
function isColorValid2(color) {
  return color === "blue" || color === "green";
}

console.log(isColorValid2("green")); // true
console.log(isColorValid2("blue")); // true
console.log(isColorValid2("purple")); // false


// solution 2
console.log("solution 2");
let isColorValid3 = (color) => color === "blue" || color === "green";

console.log(isColorValid3("green")); // true
console.log(isColorValid3("blue")); // true
console.log(isColorValid3("purple")); // false

// launch school solution 2
console.log("launch school solution 2");
const isColorValid4 = color => ["blue", "green"].includes(color);

console.log(isColorValid4("green")); // true
console.log(isColorValid4("blue")); // true
console.log(isColorValid4("purple")); // false