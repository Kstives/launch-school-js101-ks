// Take a look at the following array
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];
/*
 Write a program that uses this array to create an object where the keys
and values are the positions in the array:
*/
// { Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }

function toObj(array) {
  let obj = {};
  array.map((element, indx) => {
    obj[element] = indx;
    return obj;
  });
  return obj;
}

console.log(toObj(flintstones));