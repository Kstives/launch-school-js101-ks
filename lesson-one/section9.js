// Good vs Bad Questions

// Bad Question:
// Can I assign a new value to a variable that's defined outside
// the current function?

let number = 5;

function test() {
  number = 3;
}

test();
console.log(number); // 3 because number was declared globally 
// and is accessible to change from the test function

// Good Questions
// Ask why behavior is so different in different circumstances

function test2(number) {
  number = 2;
}

test2(number);
console.log(number); // this will still log 3 
/*
** function parameters create local variables within that block
** and so the number parameter being assigned the value of 2 in the function is a
** different variable from the global variable on line 7
*/