// Lesson 3: Easy 2 Question 10
// write two one-line expressions to count the number of lower-case t
// characters in each of the following strings:

let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";


let matches = statement1.match(/t/g).length;
console.log(matches);

matches = statement2.match(/t/g);
console.log(matches);