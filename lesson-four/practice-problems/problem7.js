// What is the return value of map in the following code? Why?
['ant', 'bear'].map(elem => {
  if (elem.length > 3) {
    return elem;
  }
});

// the return value will be 'bear' because it meets the condition of map
/*
Launch School solution:
First, the return value of map is an array, which is the collection type that
map always returns. Second, where did we get that undefined value? If we look
at the if condition (elem.length > 3), we'll notice that it evaluates to
true when the length of the element is greater than 3. In this case, the only
value with a length greater than 3 is 'bear'. Thus, for the first element,
'ant', the condition evaluates to false and elem isn't returned.
*/
