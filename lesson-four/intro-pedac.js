// Js101 Lesson Four: Introduction to the PEDAC PROCESS

/*
// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes. Consider
// palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

input: string
output: an array with string elements that were found in the input string
rules:
     Explicit requirements:
      - all plalindromes (words that are the same forward and backward) are
      returned
      - the palindrome words are case sensitive (mom or MOM will be returned,
        but not Mom)

    Implicit requirements:
      - an array with string elements is returned
      - the palindrome can just be a set of characters that do or don't form
      a word
      - if there are no palindromes found, an empty array is returned
      - if an empty string given, an empty array is returned
      - the palindrome substrings are lowercase
*/