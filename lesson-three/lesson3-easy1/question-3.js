// QUESTION 3
// Determine whether the following object of people and their age contains
// an entry for 'Spot'

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

let spot = ages.Spot ? 'Yup, Spot is here!' : 'Nope, no Spot here!';

console.log(spot);

// OR

spot = ages.hasOwnProperty('Spot');