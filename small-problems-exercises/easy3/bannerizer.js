/*
PROBLEM:
Write a function that will take a short line of text, and write it to the
console log within a box.

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: A short string of text
    Output: The text in a box


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * box: a text-based box made out of plus signs, hyphens, and pipe symbols

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. One string argument is passed to the function
  2. A text-based box is returned around the string
  3. The output will always fit the browser window
  4. If no string is passed, an empty box is returned

  Clarifying Questions:
    1.

 MENTAL MODEL:
Input a string and output the string with a text-based box surrounding it

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: logInBox('To boldly go where no one has gone before.');
    Output:
    +--------------------------------------------+
    |                                            |
    | To boldly go where no one has gone before. |
    |                                            |
    +--------------------------------------------+

    EXAMPLE ONE
    Input: logInBox('');
    Output:
    +--+
    |  |
    |  |
    |  |
    +--+

D: DATA STRUCTURE
function, loops, strings

A: ALGORITHM

START

  1.  a. Concatenate a plus symbol with one hyphen at the start of line 1
      b. Based on the length of the input string, concatenate hyphens to match
      that total
      c. Concatenate a hyphen and plus symbol at the end of line 1
  2. Add to two new lines
  3.  a. Concatenate a pipe symbol at the start of line 3
      b. Based on length of the input string, concatenate spaces to match
      that total
      c. Concatenate a pipe symbol at the end of line 3
  4. Add to two new lines
  5. a. Concatenate a pipe symbol at the start of line 5
      b. Based on length of the input string, concatenate spaces to match
      that total
      c. Concatenate a pipe symbol at the end of line 5
  6. Add to two new lines
  7. a. Concatenate a plus symbol with one hyphen at the start of line 8
     b. Based on the length of the input string, concatenate hyphens to match
     that total
     c. Concatenate a hyphen and plus symbol at the end of line 8

END

 */

// C: CODE WITH INTENT

function logInBox(string) {
  let leftCornerStart = '+-';
  let rightCorner = '-+';
  let leftBlankStart = '| ';

  for (let fill = 0; fill < string.length; fill += 1) {
    leftCornerStart += '-';
    leftBlankStart += ' ';
  }

  console.log(`${leftCornerStart}${rightCorner}`);
  // +--------------------------------------------+
  console.log(`${leftBlankStart} |`);
  // |                                            |
  console.log(`| ${string} |`);
  // | Xx xxxxxx xx xxxxx xx xxx xxx xxxx xxxxxx. |
  console.log(`${leftBlankStart} |`);
  // |                                            |
  console.log(`${leftCornerStart}${rightCorner}`);
  // +--------------------------------------------+

}

logInBox('To boldly go where no one has gone before.');
/*
logs:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/
logInBox('');
/*
logs:
+--+
|  |
|  |
|  |
+--+
*/