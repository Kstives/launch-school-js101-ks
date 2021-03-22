// What is the return value of map in this case? Why?
[1, 2, 3].map(num => num * num);
/*
a new array of [1, 4, 9] because map iterates through the attached array and
multiplies each element by itself and returns it in a new array,
also because it is all on one line, the return statement is implicit.
*/