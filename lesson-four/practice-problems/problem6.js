// How does Array.prototype.fill work?
// Is it destructive? How can we find out?

let arr = [1, 2, 3, 4, 5];
arr.fill(1, 1, 5);

/*
Every element in the arr array will be replaced with the pattern given in
the fill method, in this case, 1, 1, 5, which will repeat until all the elemnts
are replaced. It is destructive, the original array will be changed.
We can check by logging arr after the fill method is used on it.
*/

/*
Launch School solution:
We can determine that fill takes a value and two indices and replaces the
indices in between those two given indices with the given value. We can
also verify that it's a destructive method.
*/
