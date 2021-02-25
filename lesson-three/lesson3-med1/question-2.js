// Js101 Lesson Practice Problems: Medium 1 - question 2
// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`

// function reverseCase() {
//   for (let char = 0; char < munstersDescription.length; char += 1) {
//     if (munstersDescription[char] === munstersDescription[char].toUpperCase())
// {
//       munstersDescription += munstersDescription[char].toLowerCase();
//     } else {
//       munstersDescription += munstersDescription[char].toUpperCase();
//     }
//   }
//   return munstersDescription;
// }

// console.log(reverseCase());

munstersDescription = munstersDescription.split('').map(letter => letter ===
letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join('');

console.log(munstersDescription);