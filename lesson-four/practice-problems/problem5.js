// What is the callback's return value in the following code?
// Also, what is the return value of every in this code?
[1, 2, 3].every(num => {
  return num = num * 2;
});

// callback return value: [2, 4, 6]
// return value of every: true

// solution: 2, 4, 6 on their own iterations and true