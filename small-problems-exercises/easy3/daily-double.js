/* eslint-disable max-lines-per-function */
/* eslint-disable no-unused-vars */
/*
PROBLEM:
Write a function that takes a string argument and returns a new string that
contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: 'ddaaiillyy ddoouubbllee'
    Output: 'daily double'


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * consecutive duplicate characters: the same characters, one after the other
    * collapsed into a single character: having one of each character, getting
    rid of their duplicates

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. The function takes in one string that contains duplicates of each character
  2. For each number of unique characters in the input string,
   that is how many characters are ouputed (ddaaiilly = 5 unique characters,
   gggg = 1 unique character)
  3. If an empty string gets passed into the function, an empty string is
  returned
  4. The output string is different than the input string (i.e. the input string
    is not mutated.)
  5. The order of the characters remains the same, just the duplicate characters
    are taken out. (ddaaiilly = daily, gggg = g)

  Clarifying Questions:
    1. What if a word like 'ccaannaaddiiaann ggeeeessee' is passed to
    the function? Although you would expect 'canadian geese' to be returned,
    the scope of the problem is to get rid of all duplicate characters and
    only single unique characters get returned. So 'canadian gese' would be
    returned
    2. Do the same characters in different parts of the string get taken out?
    Ex. 'ggiinnggeerr' (all of the g's?)? No, because all the g's are not
      consecutive, there are other unique characters that separate the set of
      consecutive g duplicates

 MENTAL MODEL:
    Pass a string that contains consecutive duplicate characters to a function
    and return a different string, with the consecutive duplicate characters
    taken out.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 'ggiinnggeerrrrr snnapp'
    Output: 'ginger snap'

    EXAMPLE TWO
    Input: '3333mmuusskketteeeeerrs'
    Output: '3musketers'

    EXAMPLE THREE
    Input: ""
    Output: ""

    EXAMPLE FOUR
    Input: 'ggggg'
    Output: 'g'

D: DATA STRUCTURE
function, array

A: ALGORITHM

START

  1. Is the input string empty?
    a. IF yes, PRINT empty string
  2. Separate input string characters into a list
  3.SET charCount = 0
  4. Check if consecutive characters match and SET result to singleCharString
  5. Does the current character match the next character?
    a. IF yes AND charCount < 1
    remove the next character and add to singleCharString, add 1 to charCount
    b. ELSE
    charCount = 0 and continue
    (repeat until the length of the string is reached)
  6. PRINT singleCharString

END

  Verified this works with an example:
    Input: 'ddaaiillyy'
    Output: 'daily

  START

  1. Is the input string empty?
    a. IF yes, PRINT empty string
  2. Separate input string characters into a list [d, d, a, a, i, i, l, l, y, y]
  3.SET charCount = 0
  4. Check if consecutive characters match and SET result to singleCharString
  5. Does the current character match the next character?
    a. IF yes AND charCount < 1
    remove the next character and add to singleCharString, add 1 to charCount
    d === d
    singleCharString = 'd'
    charCount = 1
    a === a
    singleCharString = 'da'
    charCount = 1
    ...
    y === y
    singleCharString = 'daily'
    charCount = 1

    b. ELSE
    charCount = 0 and continue
    charCount = 0
    charCount = 0
    ...
    charCount = 0
    (repeat until the length of the string is reached)
  6. PRINT singleCharString
  'daily'

END

Verified this works with an example:
    Input: 'ggggg'
    Output: 'g'
    
START

  1. Is the input string empty?
    a. IF yes, PRINT empty string
  2. Separate input string characters into a list [g, g, g, g, g]
  3.SET charCount = 0
  4. Check if consecutive characters match and SET result to singleCharString
  5. Does the current character match the next character?
    a. IF yes AND charCount < 1
    remove the next character and add to singleCharString, add 1 to charCount
    g === g
    singleCharString = 'g'
    charCount = 1
    b. ELSE
    charCount = 0 and continue
    (repeat until the length of the string is reached)
  6. PRINT singleCharString
    'g'
END

  Verified this works with an example:
      Input: '44abcca'
      Output: '4abca'

START

  1. Is the input string empty?
    a. IF yes, PRINT empty string
  2. Separate input string characters into a list [4, 4, a, b, c, c, a]
  3.SET charCount = 0
  4. Check if consecutive characters match and SET result to singleCharString
  5. Does the current character match the next character?
    a. IF yes AND charCount < 1
    add the current character to singleCharString, add 1 to charCount
    4 === 4
    singleCharString = '4'
    singleCharString = '4abc'
    charCount = 1
    b. ELSE IF no & charCount < 1
    add character to singleCharString
    singleCharString = '4a'
    singleCharString = '4ab'
    singleCharString = '4abc'
    c. ELSE
    charCount = 0 and continue
    charCount = 0
    (repeat until the length of the string is reached)
  6. PRINT singleCharString

END
 */

// C: CODE WITH INTENT

/*
START

  1. Is the input string empty?
    a. IF yes, PRINT empty string
  2. Separate input string characters into a list
  3.SET charCount = 0
  4. Check if consecutive characters match and SET result to singleCharString
  5. Does the current character match the next character?
    a. IF yes AND charCount < 1
    add the current character to singleCharString, add 1 to charCount
    b. ELSE IF no & charCount < 1
    add character to singleCharString
    c. ELSE
    charCount = 0 and continue
    (repeat until the length of the string is reached)
  6. PRINT singleCharString

END
*/

function crunch(string) {
  if (string === '') {
    return '""';
  }
  
  let singleCharString = '';

  for (let char = 0; char < string.length; char += 1) {
    let currentChar = string[char];
    let nextChar = string[char + 1];

    if (currentChar !== nextChar) {
      singleCharString += currentChar;
    }
  }
  return singleCharString;
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""