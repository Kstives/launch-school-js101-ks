// PROBLEM:
/*
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.
*/

// PEDAC PROCESS

// P: UNDERSTAND THE PROBLEM
  // EXPECTED INPUT AND OUTPUT
    /*
    Input: An integer greater than 1
    Output: The sum of all numbers between 1 and the input integer that are 
    multiples of 3 or 5
    */
  
  // MAKE THE REQUIREMENTS EXPLICIT
    /*
    Terms of the problem domain:
    * sum: the total amount resulting from the addition of one or more numbers
    * inclusive: including the enpoints of an interval
    * multiple: A number that can be divided by another number without a remainder
    */
  
  // IDENTIFY THE RULES (IMPLICIT REQUIREMENTS)
    /*
    1. A function with one parameter is used
    2. The argument passed to the function is an integer greater than 1
    3. An cumulative sum occurs between an interval of 1 and the given number
    4. The numbers to be included in the sum are numbers that can be divided by 3 or 5 with a remainder of 0
    5. The interval endpoints, 1 and the given number, are included in the sum

    Clarifying Questions:
    1. What if a number is not a multiple of 3 or 5?
    Then it is passed over and not included in the sum
    2. What if the number given is negative?
    Within this problem scope, that is an impossibility

    */
  
  // MENTAL MODEL:
    /*
    Write a function that will create an interval of a number between 1 and the given number from the function call's argument and cumulatively add the numbers if they are multiples of 3 or 5. Return the sum of these numbers.
    */

// E: EXAMPLES/TEST CASES
// (based on the above rules and edge cases)
  // EXAMPLE ONE
    /*
    Input: 3
    Output: 3
    */
   // EXAMPLE TWO
    /*
    Input: 5
    Output: 8
    */
   // EXAMPLE THREE
    /*
    Input: 10
    Output: 33
    */
   // EXAMPLE FOUR
    /*
    Input: 1000
    Output: 234168
    */
   

// D: DATA STRUCTURE
  // function, array, and array methods

// A: ALGORITHM
  /*
  1. Create an ordered list called NUM_INTERVAL
  2. Create a variable called COUNTER with the value of 1
  3. Create a variable called NUM_MAX_RANGE to receive a value from user
  4. For every time COUNTER iterates up until and including the NUM_MAX_RANGE:
    5. Can the current value of NUM_INTERVAL be multiplied by 3 OR 5 and the remainder is 0?
    a. if Yes, add the current value to NUM_INTERVAL
    b. if No, repeat step 4
  7. Iterate through the values of NUM_INTERVAL and add them together
  8. Return the sum

  Verified this works with an example:
    Input: 5
    Output: 8
  1. Create an ordered list called NUM_INTERVAL
  2. Create a variable called COUNTER with the value of 1
  3. Create a variable called NUM_MAX_RANGE to receive a value from user
  4. For every time COUNTER iterates up until and including the NUM_MAX_RANGE:
    5. Can the current value of NUM_INTERVAL be multiplied by 3 OR 5 and the remainder is 0?
    a. if Yes, add the current value to NUM_INTERVAL
    NUM_INTERVAL = [3]
    NUM_INTERVAL = [3, 5]
    b. if No, continue the iteration in step 4
  7. Iterate through the values of NUM_INTERVAL and add them together 
  3 + 5
  8. Return the sum
  8

  */

// C: CODE WITH INTENT
  function multisum(numMaxRange) {
    let numInterval = [];
    for (let counter = 1; counter <= numMaxRange; counter += 1) {
      if (counter % 3 === 0 || counter % 5 === 0) {
        numInterval.push(counter);
      } else {
        continue;
      }
    }
    return numInterval.reduce((accumulator, currentValue) => accumulator + currentValue);

  }

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168