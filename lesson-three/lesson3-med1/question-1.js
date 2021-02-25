// Js101 Lesson Practice Problems: Medium 1 - question 1
/*
Let's do some "ASCII Art": a stone-age form of nerd artwork from back in the
days before computers had video screens.

For this practice problem, write a program that outputs "The Flintstones Rock!"
10 Times, with each line indented 1 space to the right of the line above it.
The output should start out like this:
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!
   ...
*/

let iterator = 0;
let indent = '';

while (iterator < 10) {
  console.log(`${indent += ' '.repeat(iterator)}The Flintstones Rock!`);
  iterator += 1;
}
