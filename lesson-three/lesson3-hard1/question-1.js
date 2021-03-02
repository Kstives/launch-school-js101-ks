// Js101 Lesson Three Practice Problems Hard 1: question 1
//Will the following function return the same results?
function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
No, because the opening curly brace needs to be on the same line as the return
statment in function second. Because of how javascript will implicitly add
a semicolon (or run without a semicolon), it interprets the return statement in
function second as an empty return line and will exit the program, so the object
following the return doesn't even get returned.
*/