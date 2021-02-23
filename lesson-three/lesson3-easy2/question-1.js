// Lesson 3: Easy 2 Question 1
/*
Given a string, return a new string that replaces every occurence of the word
"important" with "urgent";
*/

let advice = "Few things in an important life are as important as house training your pet dinosaur.";

advice = advice.replace('important', 'urgent');
console.log(advice);

// How do you replace all instances if the word 'important'?

advice = advice.split(' ').map(word => {
  if (word === 'important') {
    word = 'urgent';
  }
  return word;
}).join(' ');
console.log(advice);