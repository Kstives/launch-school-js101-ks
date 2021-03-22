// What is the return value of map in the following code? Why?
[1, 2, 3].map(num => {
  num * num;
});

/*
a new array of [1, 4, 9] because map iterates through the attached array and
multiplies each element by itself and returns it in a new array
*/

// solution: This method returns [undefined, undefined, undefined] because
// there was no explicit return value