/*
P: PROBLEM
Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

A: ALGORITHM

START


END

*/

// C: CODE WITH INTENT

// function isBalanced (string) {
//   let stringChars = string.split('');
//   let paraArray = stringChars.filter(char => char === '(' || char === ')');
//   let paraCount = [];
//   for (let index = 0; index < paraArray.length; index += 1) {
//     if (paraArray[index] === "(" && paraArray[index + 1] === ")") {
//       paraCount.push(paraArray[index], paraArray[index + 1] + ',');
//     } else if ()
//   }
//   paraArray = paraArray.join('').split(',');

// }

function isBalanced (string) {
  let stringChars = string.split('');
  let paraArray = stringChars.filter(char => char === '(' || char === ')');
  let paraPairs = [];

  for (let index = 0; index < paraArray.length; index += 1) {
    let first = paraArray.shift();
    let last = paraArray.pop();
    if (first && last) {
      paraPairs.push(first + last);
    } else {
      paraPairs.push(first); // if there's only one parentheses
    }
    console.log(paraPairs);
  }
  let results = paraPairs.map(element => element === '()' ? true : false);
  if (results.includes(false)) {
    return false;
  } else {
    return true;
  }

  }

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

// console.log(isBalanced("What (is) this?"));
// console.log(isBalanced("What is) this?"));
// console.log(isBalanced("What (is this?"));
// console.log(isBalanced("((What) (is this))?"));
// console.log(isBalanced("((What)) (is this))?"));
// console.log(isBalanced("Hey!"));
// console.log(isBalanced(")Hey!("));
// console.log(isBalanced("What ((is))) up("));

/*
Further Exploration

There are a few other characters that should be matching as well. Square brackets and curly brackets normally come in pairs. Quotation marks(single and double) also typically come in pairs and should be balanced. Can you expand this function to take into account those characters?
*/