// Js101 Lesson Four: Iterating with for and while loops

while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);

  if (number === 5) {
    console.log('Exiting...');
    break;
  }
}
/*
Outputs:
1
1
3
2
0
6
2
8
6
6
2
5
Exiting...

1. Each time the loop is ran, it outputs a random number on a new line
2. It prints 5 and then Exiting...
3. All of the numbers are between 0 and 9
*/