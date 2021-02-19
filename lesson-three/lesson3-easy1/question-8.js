//  QUESTION 8
// How can we add the family pet, "Dino", to the following array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

flintstones.push("Dino");
console.log(flintstones);
// OR

flintstones.unshift("Dino");

// OR

flintstones[flintstones.length] = "Dino";

console.log(flintstones);