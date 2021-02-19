// QUESTION 4
/*
Using the following string, create a new string that contains all lowercase
letters execept for the first charcter, which should be capitalized.
(See the example output.)
*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = munstersDescription[0].toUpperCase() +
munstersDescription.substring(1).toLowerCase();

console.log(munstersDescription);