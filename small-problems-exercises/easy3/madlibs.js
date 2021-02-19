/*
 PSEUDOCODE

START
  1. GET an input from user, SET to noun
  2. GET an input from user, SET to verb
  3. GET an input from user, SET to adjective
  GET an input from user, SET to adverb
  4. Create string, inserting the inputs at appropriate times
  5. PRINT string
*/

/*
There's a lot of edge cases to consider with this because there are many ways to
write verbs. Even with specifying a present tense verb, the verb can still end
with an 's', 'ies', or 'es', in which case, the static words of the sentence
would need to dynamically change depending on the verb ended.
*/

let readlineSync = require('readline-sync');

let noun = readlineSync.question('Enter a noun: ').toLowerCase();
let verb = readlineSync.question('Enter a present tense verb: ').toLowerCase();
let adjective = readlineSync.question('Enter an adjective: ').toLowerCase();
let adverb = readlineSync.question('Enter an adverb: ').toLowerCase();

if (verb[verb.length - 1] === 's') {
  verb = verb.substring(0, verb.length - 1);
}

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!\nThe ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.\nThe ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);