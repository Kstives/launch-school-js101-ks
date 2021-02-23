// Lesson 3: Easy 2 Question 9
/*
Back in the stone age (before CSS), we used spaces to align things on the screen
If we have a 40-character wide table of Flintstone family members, how can we
center the following title above the table with spaces?
*/

let title = "Flintstone Family Members";
let table = '*'.repeat(40);
console.log(' '.repeat((table.length - title.length) / 2) + title );
console.log(table);

