// Lesson 3: Easy 3 Question 4
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);
/*
this will log:
[{ first: 42 }, { second: "value2" }, 3, 4, 5];
because arr1 and arr2 reference the objects in the arrays
the slice method creates two different arrays, but the objects in both arrays
are still pointing to the same memory slot
*/