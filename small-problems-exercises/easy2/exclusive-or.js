/*
PROBLEM:
The || operator returns a truthy value if either or both of its operands are
truthy, a falsey value if both operands are falsey. The && operator returns a
truthy value if both of its operands are truthy, and a falsey value if either
operand is falsey. This works great until you need only one of two conditions to
be truthy, the so-called exclusive or.
In this exercise, you will write a function named xor that takes two arguments,
and returns true if exactly one of its arguments is truthy, false otherwise.
Note that we are looking for a boolean result instead of a truthy/falsy value as
returned by || and &&.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: two arguments
    Output: Returns the boolean true if just one of its arguments is truthy,
    false if not


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * OR Operator: Returns a truthy value if either or both operands are truthy,
    otherwise, returns a falsey value if both operands are falsey.
    * AND Operator: Returns a truthy falue if both of its operands are truthy,
    and a falsey value if either operand is falsey
    * truthy: any expression or value that evaluates to true
    * falsey: any expression or value that evaluates to false
    * Exclusive or: Only one operand evaluates to true

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Take in two arguements, of truthy and/or falsey values
  2. Return a boolean value of true or false depending on the evaluation
  3. Return true if one of the operands is true and the other one is false
  4. Return false if both operands are true or both operands are false

  Clarifying Questions:
    1. Can the || operator or the && operator be used to get the desired results
    I believe so, it matters more about the truthy and falsey of the values
    being evaluated than the operators used


 MENTAL MODEL:
  Evaluate two values for their truthy or falsey status. If one value is true
  and the other value is false, return the boolean value of true. If both values
  are false, return the boolean value of false. If both values are true, return
  the boolean value of false.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input: 1,1
    Output: false

    EXAMPLE TWO
    Input: 1,0
    Output: true

    EXAMPLE THREE
    Input: 0,0
    Output: false

    EXAMPLE FOUR
    Input: 0,1
    Output: true


D: DATA STRUCTURE
function, evaluation operators

A: ALGORITHM

START

  1. GET first value, SET it to value1
  2. GET second value, SET it to value2
  3. Comepare value1 to value2
  4.  a. IF value1 is true
        I. check if value2 is true
          i. IF value2 is true, PRINT false
          ii. ELSE, PRINT true
      b. ELSE value1 is false
        I. check if value2 is false
          i. IF value2 is false, PRINT false
          ii. ELSE, PRINT true
      
END

  Verified this works with an example:
    Input: 1,1
    Output: false

START

  1. GET first value, SET it to value1
  value1 = 1
  2. GET second value, SET it to value2
  value2 = 1
  3. Comepare value1 to value2
  4.  a. IF value1 is true
        I. check if value2 is true
          i. IF value2 is true, PRINT false
          false
      
END

    Input: 0, 1
    Output: true

START

  1. GET first value, SET it to value1
  value1 = 0
  2. GET second value, SET it to value2
  value2 = 1
  3. Comepare value1 to value2
  4.  a. IF value1 is true
        I. check if value2 is true
          i. IF value2 is true, PRINT false
          ii. ELSE, PRINT true
      b. ELSE value1 is false
        I. check if value2 is false
          i. IF value2 is false, PRINT false
          ii. ELSE, PRINT true
          true
      
END

    Input: 0
    Output: 0

START

  1. GET first value, SET it to value1
  value1 = 0
  2. GET second value, SET it to value2
  value2 = 0
  3. Comepare value1 to value2
  4.  a. IF value1 is true
        I. check if value2 is true
          i. IF value2 is true, PRINT false
          ii. ELSE, PRINT true
      b. ELSE value1 is false
        I. check if value2 is false
          i. IF value2 is false, PRINT false
          false
      
END

 */

// C: CODE WITH INTENT

/*
START

  1. GET first value, SET it to value1
  2. GET second value, SET it to value2
  3. Comepare value1 to value2
  4.  a. IF value1 is true
        I. check if value2 is true
          i. IF value2 is true, PRINT false
          ii. ELSE, PRINT true
      b. ELSE value1 is false
        I. check if value2 is false
          i. IF value2 is false, PRINT false
          ii. ELSE, PRINT true
      
END
*/

function xor(value1, value2) {
  if (value1) {
    if (value2) {
      return false;
    } else {
      return true;
    }
  } else {
    if (!value2) {
      return false;
    } else {
      return true;
    }
  }
}

// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

// ternary operations

function xor2(value1, value2) {
  if (value1) {
    return value2 ? false : true;
  } else {
    return !value2 ? false : true;
  }


}

console.log(xor2(5, 0) === true);
console.log(xor2(false, true) === true);
console.log(xor2(1, 1) === false);
console.log(xor2(true, true) === false);

// Launch school solutions:

function xor3(value1, value2) {
  if ((value1 && !value2) || (value2 && !value1)) {
    return true;
  }
  return false;
}

// console.log(xor3(5, 0) === true);
// console.log(xor3(false, true) === true);
// console.log(xor3(1, 1) === false);
// console.log(xor3(true, true) === false);

function xor4(value1, value2) {
  return !!((value1 && !value2) || (value2 && !value1));
}

// console.log(xor4(5, 0) === true);
// console.log(xor4(false, true) === true);
// console.log(xor4(1, 1) === false);
// console.log(xor4(true, true) === false);

// FURTHER EXPLORATION
/*
Can you think of a situation in which a boolean xor function would be useful?
Whenever you need a this or that decision to be made. It will eliminate
the possibility of making both choices. In forms with radio buttons, that's the
type of logic you need to build that functionality in lower abstraction.
*/