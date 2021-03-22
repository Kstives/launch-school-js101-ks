// Pick out the minimum age from our current Munster family object:
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

let sortedAges = Object.values(ages).sort();
console.log(sortedAges[0]);

/*
Launch School solution:
let agesArr = Object.values(ages);
Math.min(...agesArr); // => 10
In the above example, though, we have the numbers in the agesArr array.
We use the ... operator, called the spread operator, to convert the array to a
list of arguments.
*/