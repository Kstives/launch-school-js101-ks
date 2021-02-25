// Js101 Lesson Practice Problems: Medium 1 - question 7
// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer); // value of newAnswer is never used

console.log(answer - 8); // 34

