/*
Problem:
Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting of the last name,
a comma, a space, and the first name.
*/

function swapName(inputName) {
  return inputName.split(' ').reverse().join(', ');
}

console.log(swapName('Joe Roberts'));    // "Roberts, Joe"
console.log(swapName('Jane Doe'));    // "Doe, Jane"
console.log(swapName('John Smith'));    // "Smith, John"

/*
Further Exploration

What if the person has one or more middle names? Refactor the current solution
so that it can accommodate this; the middle names should be listed after the
first name
*/

function swapName2(name) {
  let nameArray = name.split(' ');
  let nameOutput = [];
  nameOutput.push(nameArray[nameArray.length - 1] + ',');
  for (let index = 0; index < nameArray.length; index += 1) {
    nameOutput.push(nameArray[index]);
  }

  return nameOutput.join(' ');
}

console.log(swapName2('Karl Oskar Henriksson Ragvals'));    // "Ragvals, Karl Oskar Henriksson"