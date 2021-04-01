// a place to test code before saving in exercise/program file.


// using conditionals to make a to z character range

// let searchTerm = /abc/g;
// let regex;
// while (regex = searchTerm.exec("abc abc")) {
//   console.log(regex);
// }

// let message = "This message is for you!";
// let newMessage = '';
// let index = 0;

// message = message.toLowerCase();

// while (index < message.length) {
//   if ('a' <= message[index] && message[index] <= 'z') {
//     newMessage += message[index];
//   }
//   index += 1;
// }


// // using regExp to match exactly an IP address pattern x.x.x.x
// console.log(newMessage);

// function isDotSeparatedIpAddress(inputString) {
//   let fourPeriodsRegex = /\d\.\d\.\d\.\d/;
//   return fourPeriodsRegex.test(inputString);
// }

// console.log(isDotSeparatedIpAddress('4.5.5')); // false
// console.log(isDotSeparatedIpAddress('4.5.5.5'));  // true
// console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // false


console.log('===Filter method examples:===');

// Check to see if you have a fruit, if not, add it to the grocery list

let fruitBowl = ['apples', 'oranges'];
let groceryList = [];
let fruitNeeded = ['grapes', 'apples', 'kiwis', 'bananas'];

for (let index = 0; index < fruitNeeded.length; index += 1) {
  if (!fruitBowl.includes(fruitNeeded[index])) {
    groceryList.push(fruitNeeded[index]);
  }
}

console.log(`The items on my grocery list are ${groceryList.join(', ')}`);

// .filter() method index argument
let names = ['ashley', 'hank', 'mickey', 'nora'];

let evenNames = names.filter((name, idx) => idx % 2 === 0);

console.log(evenNames);

// .filter() method array argument

let numbers = [1, 1, 3, 3, 6, 7];

let lengthMatch = numbers.filter((num, idx, array) => num === array.length);

console.log(lengthMatch);

// String.prototype.includes()
console.log('===includes() method examples:===');

// Array.prototype.includes()

let doubleFeature = ['Forrest Gump', 'Batman Begins'];

if (doubleFeature.includes('Forrest Gump')) {
  console.log("I'll be there! Forrest Gump is my favorite movie!");
} else {
  console.log("No, I'll pass. They're not playing my favorite movie.");
}

if (doubleFeature.includes('Batman Begins', 1)) {
  console.log("I'll only come if there's a later movie and it's Batman!");
}

// with ternary operator
let faveMovie = "Forrest Gump";
console.log(`Are they showing ${faveMovie}? ${doubleFeature.includes(faveMovie) ? 'Yes? I will' : 'No? I will not'} watch it!`);

// ternary operator
console.log("===ternary operator:===");


let movieGenres = {
  "Cast Away":  'drama',
  "Dumb and Dumber": 'comedy',
  "Speed": 'action',
  "While You were Sleeping": 'romance',
  "Seabiscuit": 'drama',
  "Zoolander": 'comedy'
};

let faveGenre = 'comedy';
let movieValues = Object.values(movieGenres);
let movieKeys = Object.keys(movieGenres);
console.log(movieValues);

for (let index = 0; index < movieValues.length; index += 1) {
  let movieName = movieKeys[index];
  let movieGenre = movieValues[index];
  console.log(`Is ${movieName} a ${faveGenre}? ${movieGenre === faveGenre ? 'Yes? I will' : 'No? I will not'} watch it!`);
}

// array find method
console.log("===find method:===");

let colors = ['yellow', 'green','red', 'blue', 'grey'];

console.log(colors.find(element => element[0] === 'y')); // yellow
console.log(colors.find(element => element[0] === 'c')); // undefined
console.log(colors.find((element, index) => index === element.length)); // grey

// array map method
console.log("===map method:===");
let flowers = ['rose', 'lily', 'pansy', 'tulip'];

let flowersPlural = flowers.map(element => {
  if (element[element.length - 1] === 'y') {
    return element.slice(0, -1) + 'ies';
  } else {
    return element + 's';
  }
});

console.log(flowersPlural); // ['roses', 'lilies', 'pansies', 'tulips']