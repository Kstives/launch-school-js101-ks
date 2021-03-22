// What is the return value of the following statement? Why?
['ant', 'bear', 'caterpillar'].pop().length;
// The return value will be 2 because in the method chain on this array,
// the last element is removed and then the length of the array is given

/*
solution:
The return value of this code is 11 because the length is given for the element
that was removed from the array, which is a string, and so the characters of
the string are counted, 11 in this instance
*/