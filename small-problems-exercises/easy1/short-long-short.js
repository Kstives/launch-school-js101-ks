// PROBLEM:
/*
Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: two strings of different lengths
    Output: the concatenation of those two strings in the sequence of: 
    short string -long string - short string
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * concatenate: To join two ore more strings into one string.
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. A function with two parameters are used
    2. The two arguments passed to the fuction are two strings of different lengths
    3. The function determines the lengths of the strings
    4. The function returns the result of concatenating the given strings
    5. The returned concatenation sequence is: short string - long string - short string
    
    Clarifying Questions:
    1. 

    */
  
  // MENTAL MODEL:
    /*
    Two strings of different lengths are provided to a function, within the function it is determined which string is shorter, and those who strings are then concatenated together into one strong with the characters of the shorter string first, followed by the longer string, then the short string again. This new concatenated string is then returned from the function.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: shortLongShort('apples', 'juice')
    Output: 'juiceapplesjuice'
    */

    // EXAMPLE TWO
    /*
    Input: shortLongShort('volley', 'ball')
    Output: 'ballvolleyball'
    */

// D: DATA STRUCTURE
  // function, strings, concatenation

// A: ALGORITHM
  /*
  1. create a function called shortLongShort with the parameters string1 and string2
  2. Determine the lengths of string1 and string2
  3. Is string1 shorter than string2?
    a. if Yes, concatenate string2 to string1 then string1 to that concatenation
    b. if No, concatenate string1 to string2 then string2 to that cancatenation
  4. return the newly created string concatenation

  Verified this works with an example:
    Input: 'volley', 'ball'
    Output: 'ballvolleyball'

  1. create a function called shortLongShort with the parameters string1 and string2
  2. Determine the lengths of string1 (volley) and string2 (ball)
  3. Is string1 (volley) shorter than string2 (ball)?
    a. if Yes, concatenate string2 to string1 then string1 to that concatenation
    b. if No, concatenate string1 to string2 then string2 to that cancatenation
    ball + volley + ball
  4. return the newly created string concatenation
  consoel:
  ballvolleyball
  */

// C: CODE WITH INTENT

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2.concat(string1, string2);
  } else {
    return string1.concat(string2, string1);
  }
}

console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"