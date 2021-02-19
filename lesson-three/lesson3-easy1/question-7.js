// QUESTION 7
// Determine whether the name Dino appears in the string below
// -- check each string separately:
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.includes('Dino')); // false
console.log(str2.includes('Dino')); // true

// OR

console.log(str1.search('Dino')); // -1, no match found
console.log(str2.search('Dino')); // 41, the location of the first character in 'Dino'

// OR

str1.match('Dino') !== null; // false
str2.match('Dino') !== null; // true

// OR

str1.indexOf('Dino') > -1; // false
str2.indexOf('Dino') > -1; // true