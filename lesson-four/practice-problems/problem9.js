// Add up all the ages from the Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let totalAges = Object.values(ages).reduce((acc, currentVal) => acc +
currentVal, 0);

console.log(totalAges);