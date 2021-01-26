/*
Consider the word "abode".
The letter `a` is in position 1 and `b` is in position 2.
In the alphabet, `a` and `b` are also in positions 1 and 2.

The letters `d` and `e` in "abode" occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

solve(["abode","ABc","xyzD"]) // [4, 3, 1]

Input will consist of alphabetic characters, both uppercase and lowercase.  No spaces.

PROBLEM
input: array of strings
output: array of numbers
-> each num represents number of alphabet position matches from str at curr index of argument array

rules:

- case-insensitive (but we may rec. upper or lower case chars)
- no spaces & only alphabetic chars

EXAMPLES/TEST CASES

- one number in output arr per string in input array (length of two arrays is same)
- put a zero in array if str has no 'matches'
- if we have an empty str, zero in return array
- if input arr is empty, return empty arr

DATA STRUCTURES

- input/output is an arr
- built-in functionality of arrays might be helpful
- noticing **transformation**
- /

console.log(solve(["abode","ABc","xyzD"])); // [4,3,1]
console.log(solve(["abide","ABc","xyz"]));  // [4,3,0]
console.log(solve(["IAMDEFANDJKL","thedefgh","xyzDEFghijabc"])); // [6,5,7]
console.log(solve(["encode","abc","xyzD","ABmD"])); // [1, 3, 1, 3]
console.log(solve(["encode","abc","xyzD",""])); // [1, 3, 1, 0]
console.log(solve([])); // []
*/
