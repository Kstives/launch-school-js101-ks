/*
PROBLEM:
Create a function that takes 2 arguments, an array and an object. The array will
contain 2 or more elements that, when combined with adjoining spaces, will
produce a person's name. The object will contain two keys, "title" and
"occupation", and the appropriate values. Your function should return a greeting
that uses the person's full name, and mentions the person's title.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: An array (with elements of a person's full name) and an object
    (with two keys, "title" and "occupation" and their values)
    Output: A greeting that uses the person's full name and person's title


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * object key: the name assigned to a value slot in an object
    * object value: the value placed a named slot in an object

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. A function with two parameters is used
  2. Two arguments, an array and an object are passed to the function
  3. The array contains 3 or more string elements that, when combined, produce a person's name
  4. The object has two key-value pairs that make up a title and occupation
  5. All of the array string elements are outputed along with the object two
  key's values in a string.

  Clarifying Questions:
    1. Do the object keys needed to be in the output?
    No, just the values


 MENTAL MODEL:
 Receive two arguments into a function, an array and object, using the elements from those arguments, output a string that greets a person by their full name and their title and occupation

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: ["John", "Q", "Doe"], {title: "Master", occupation: "Plumber"}
    Output: "Hello, John Q Doe! Nice to have a Mast Plumber around."

  EXAMPLE TWO
    Input: ["Melissa", "Smith"], {title: "Registered" occupation: "Nurse"}
    Output: "Hi, Melissa Smith! How long have you been a Registered Nurse?"

  EXAMPLE THREE
    Input: [], {}
    Output: "Please tell us your name and occupation!"

D: DATA STRUCTURE
function, object, array

A: ALGORITHM
START

1. GET array and object from function call
2. SET iterator = 0
3. WHILE iterator <= input's array:
  a. Add each array element to a string called fullName
4. SET a variable to an empty string called message
5. Locate and add both object values with fullName to an output message
6. PRINT message

  Verified this works with an example:
    Input: ["Hannah", "Baker"], {title: "Sous", occupation: "Chef"}
    Output: "Welcome, Hannah Baker, we're so happy to have you as our new Sous
    Chef!"

1. ["Hannah", "Baker"], {title: "Sous", occupation: "Chef"}
2. SET iterator = 0
3. WHILE iterator <= input's array:
  a. Add each array element to a string called fullName
  "Hannah Baker"
4. SET a variable to an empty string called message
message = ""
5. Locate and add both object values with fullName to an output message
Welcome [fullName] we're so happy to have you as our new [title]
    [occupation]!
6. PRINT message
"Welcome, Hannah Baker, we're so happy to have you as our new Sous
 Chef!"
 */

// C: CODE WITH INTENT
/*
1. GET array and object from function call
2. SET iterator = 0
3. WHILE iterator <= input's array:
  a. Add each array element to a string called fullName
4. SET a variable to an empty string called message
5. Locate and add both object values with fullName to an output message
6. PRINT message
*/

function greetings(array, object) {
  let fullName = array.join(' ');
  let message = `Hello, ${fullName}! Nice to have a ${object.title} ${object.occupation} around.`;
  return message;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.