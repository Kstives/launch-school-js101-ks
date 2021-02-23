// Lesson 3: Easy 2 Question 7
// Consider the follow object
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Create an array from this object that contains only two elements:
// Barney's name and Barney's number [ 'Barney', 2 ]

let barneyInfo = [];
for (let prop in flintstones) {
  if (prop === 'Barney') {
    barneyInfo.push(prop);
    barneyInfo.push(flintstones[prop]);
  }
}

console.log(barneyInfo);
