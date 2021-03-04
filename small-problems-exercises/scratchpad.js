// a place to test code before saving in exercise/program file.


// using conditionals to make a to z character range

// let searchTerm = /abc/g;
// let regex;
// while (regex = searchTerm.exec("abc abc")) {
//   console.log(regex);
// }

let message = "This message is for you!";
let newMessage = '';
let index = 0;

message = message.toLowerCase();

while (index < message.length) {
  if ('a' <= message[index] && message[index] <= 'z') {
    newMessage += message[index];
  }
  index += 1;
}


// using regExp to match exactly an IP address pattern x.x.x.x
console.log(newMessage);

function isDotSeparatedIpAddress(inputString) {
  let fourPeriodsRegex = /\d\.\d\.\d\.\d/;
  return fourPeriodsRegex.test(inputString);
}

console.log(isDotSeparatedIpAddress('4.5.5')); // false
console.log(isDotSeparatedIpAddress('4.5.5.5'));  // true
console.log(isDotSeparatedIpAddress('1.2.3.4.5')); // false