// pseudo code
/*
START
1. SET function penultimate with one parameter string
2. Find the next to last word and RETRIEVE it, SET it to nextToLast
3. Return that nextToLast
*/

function penultimate(string) {
  let nextToLast = string.split(' ');
  return nextToLast[nextToLast.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

// FURTHER EXPLORATION
/*
Suppose we need a function that retrieves the middle word of a phrase/sentence.
What edge cases need to be considered? How would you handle those edge cases
without ignoring them? Write a function that returns the middle word of a phrase
or sentence. It should handle all of the edge cases you thought of.
*/

/*
Edge cases:
* If there were an even amount of words = log the two middle words
* If there were only one word = say there isn't a middle word, log that word
* If it was an empty string = log that there are no words in this sentence
* If there were punctuation = log the middle word(s) without punctuation
*/


function penultimate2(string) {
  if (string === "" || string === '') { // empty string
    return "There are no words in this sentence.";
  }
  let middleWord = string.split(' ');

  if (middleWord.length === 1) { // one word
    return `There is only one word: ${middleWord[0]}.`;
  } else if (middleWord.length % 2 === 0) { // even number of words
    let midWordIndex1 = (middleWord.length / 2) - 1;
    let midWordIndex2 = (middleWord.length / 2);
    return `${middleWord[midWordIndex1]} ${middleWord[midWordIndex2]}`;
  } else {
    return middleWord[Math.floor(middleWord.length / 2)]; // odd number of words
  }
}

console.log(penultimate2("Between a rock and a hard place")); // logs 'and'
console.log(penultimate2("Welcome to the neighborhood")); // even number of words
// logs 'to the' (the two middle words)
console.log(penultimate2("One")); // one word logs "The only word here is: 'One'"
console.log(penultimate2("")); // empty string 'There are no words in this sentence.'
console.log(penultimate2("Good Morning, Mary! How are you?")); // punctuation, logs 'Mary How'
