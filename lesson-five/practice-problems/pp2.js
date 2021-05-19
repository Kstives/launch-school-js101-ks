// JS101 Lesson Five: Practice Problems: Problem 2
/*
How would you order the following array of objects based on the year of
publication of each book, from the earliest to the latest?

PSEUDOCODE
1. Iterate through the objects in books array
  i. Filter the published dates to an array called datesArray
  ii. Convert the published dates to numbers and sort from earliest to latest
2. Sort the order of the objects in the books array based on the position of
the datesArray's elements

*/


let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortedDatesArray = books.map(book => book.published).sort((a, b) =>
  Number(a) - Number(b));
console.log(sortedDatesArray);


