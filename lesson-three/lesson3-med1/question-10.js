// Js101 Lesson Practice Problems: Medium 1 - question 10
// Consider these two simple functions:
function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}

// What will the following function invocation return?
bar(foo());
/*
no, because the foo function gets ran first and then returns
 yes for the bar function to use as a parameter, which bypasses its default
parameter of no and then gets passsed into the ternary expression which
returns no beause param does not equal 'no'
*/