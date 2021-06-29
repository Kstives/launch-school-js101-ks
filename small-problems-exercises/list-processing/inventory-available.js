/* eslint-disable indent */
/*
PROBLEM:
Building on the previous exercise, write a function that returns true or false
based on whether or not an inventory item is available. As before, the function
takes two arguments: an inventory item and a list of transactions. The function
should return true only if the sum of the quantity values of the item's
transactions is greater than zero. Notice that there is a movement property
in each transaction object. A movement value of 'out' will decrease
the item's quantity.

You may (and should) use the transactionsFor function from
the previous exercise.

PEDAC PROCESS

P: UNDERSTAND THE PROBLEM
  EXPECTED INPUT AND OUTPUT
    Input: item id number, transaction list of objects
    Output: true or false


TERMS OF THE PROBLEM DOMAIN
  Terms of the problem domain:
    * movement: 'in': add the number in quantity's value to the total
    * movement: 'out': subtract the number in the qauntity's value from the
    total

IDENTIFY THE RULES (EXPLICIT & IMPLICIT REQUIREMENTS)

  1. Function takes two arguments: item and transactions
  2. The function returns either true or false
    returns true: the sum of the quantity values is greater than 0
    returns false: the sum of the quantity values is less than 0
  3. if the value of the 'movement' property is 'in':
    add the 'quantity' property number value to the total of item's quantities
  4. if the value of the 'movement' property is 'out':
    subtract the 'quantity' property number value from the total of item's
    quantities


  Clarifying Questions:
    1.

 MENTAL MODEL:
Enter an item id number and the transactions list into a function.
In the transactionsFor function, filter and return the objects with the input id
number. In isItemAvailable function, determine if the item is avaialbe (true) or
not (false) by keeping a running total of the quantity of the item.
For each transaction of the item, based on the 'movement' property value,
the quantity number of that transaction is either added or subtracted from the
running total of the quantity of items in stock.

 E: EXAMPLES/TEST CASES
 (based on the above rules and edge cases)
   EXAMPLE ONE
    Input:
    Output:

D: DATA STRUCTURE

A: ALGORITHM

START

  1. Filter and return an array of the objects containing the input item id
  and SET to itemTransactions
  2. SET quantityInStock = 0;
  2. Iterate through itemTransactions
    a. IF the 'movement' property in the current object = 'in'
      i. ADD the number in the value of the 'quantity' property of the current
      object to quantityInStock
    b. IF the 'movement' property in the current object = 'out'
      i. SUBTRACT the number in the value of the 'quantity' property of the
      current object from quantityInStock
  4. IF quantityInStock > 0
    i. return TRUE
    ii. ELSE return FALSE
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

  1. Filter and return an array of the objects containing the input item id
  and SET to itemTransactions
  2. SET quantityInStock = 0;
  2. Iterate through itemTransactions
    a. IF the 'movement' property in the current object = 'in'
      i. ADD the number in the value of the 'quantity' property of the current
      object to quantityInStock
    b. IF the 'movement' property in the current object = 'out'
      i. SUBTRACT the number in the value of the 'quantity' property of the
      current object from quantityInStock
  4. IF quantityInStock > 0
    i. return TRUE
    ii. ELSE return FALSE
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

function transactionsFor(inventoryItem, transactions) {
  return transactions.filter(inventory => inventory.id === inventoryItem);
}

function isItemAvailable(item, transactions) {
  let itemTransactions = transactionsFor(item, transactions);
  let quantityInStock = 0;

  for (let obj = 0; obj < itemTransactions.length; obj += 1) {
    let currentObj = itemTransactions[obj];

    if (currentObj.movement === 'in') {
      quantityInStock += currentObj.quantity;
    } else {
      quantityInStock -= currentObj.quantity;
    }
  }
  
  if (quantityInStock > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isItemAvailable(101, transactions));     // false
console.log(isItemAvailable(103, transactions));     // false
console.log(isItemAvailable(105, transactions));     // true


