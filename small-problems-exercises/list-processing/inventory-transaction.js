/* eslint-disable indent */
/*
PROBLEM:
Write a function that takes two arguments, an inventory item ID and a list of
transactions, and returns an array containing only the transactions for the
specified inventory item.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input:
    Output:


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    *

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1.

  Clarifying Questions:
    1.

 MENTAL MODEL:

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input:
    Output:

D: DATA STRUCTURE

A: ALGORITHM

START

  1. SET function argument 1 = ID and arguement 2 = transactions
  2. SET output array = searchResults
  3. Iterate through the elements of transactions
    a. IF value of key 'id' = ID
      i. add current element of transactions to searchResults
  4. Return searchResults


END


Verified this works with an example:
  Input:
  Output:

START

  1.

END
 */

// C: CODE WITH INTENT

/*
START

  1. SET function argument 1 = ID and arguement 2 = searchArea
  2. SET output array = searchResults
  3. Iterate through the elements of transactions
    a. IF value of key 'id' = ID
      i. add current element of transactions to searchResults
  4. Return searchResults


END
*/

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

let searchResults = [];

function transactionsFor(ID, transactionList) {
  for (let obj = 0; obj < transactionList.length; obj += 1) {
    let currentObj = transactionList[obj];
    if (currentObj.id === ID) {
      searchResults.push(currentObj);
    }
  }
  return searchResults;
}

console.log(transactionsFor(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

// LAUNCH SCHOOL SOLUTION
function transactionsFor2(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

console.log(transactionsFor2(101, transactions));
// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]