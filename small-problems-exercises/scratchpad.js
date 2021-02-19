// a place to test code before saving in exercise/program file.

// I like what I have done here,
// but there are few things that I would like to improve.
/*
0. As of right now, the quit feature is not working optimally, so
 I need to get that working correctly because I currently have to
 ctrl c to quit.
1. I would like to center the initial questions on the console, and
wrap them with box to make it look a little more professional.
2. I would also like to add a progression bar by using a
simple wrap border box and filling it with stars which would
increase with every question answered. So the length of
the box would be the number of total questions and another star
 would add after the user answers a question which would give
  the effect of a progress bar.
3. I would also like to clear the console after every question
 as opposed to having every question stacked on top of each other
  until the end of the page which is also needed because as I said before,
   I wanted to have the each question wrapped in a box border.

Likes
1. I like how I have the article finder function that
will look to see if the word starts with a vowel and
if it does then it will return a "an" instead of an "a".
2. I think it was also a good idea to have the variables saved into
 a number that corresponds to the blank spot to make constructing
 the text box more clear and easier.
*/

function madlibsMaker(words) {
  let readline =require("readline-sync");

  function getUserInput(input) {
      return readline.question(input)
  }

  function displayMessage(message) {
      console.log(message);
  }

  while(true) {
      console.clear();

      let welcome = `Welcome to Madlibs where we have fun everyday in everyway!!`;


      displayMessage(welcome);

      let one = getUserInput(`Please enter a word to describe your favorite stuffed animal.\n`);
      let two = getUserInput(`Please enter a word to describe your favorite food.\n`);
      let three = getUserInput(`Please enter a word for something large.\n`);
      let four = getUserInput(`Please enter a word that means good.\n`);
      let five = getUserInput(`What is something that you want to learn how to do?\n`);
      let six = getUserInput(`What is an item that can break?\n`);
      let seven = getUserInput(`What is something you do when you are bored?\n`);
      let eight = getUserInput(`What is a word to describe your favorite superhero?\n`);
      let nine = getUserInput(`Who is your favorite cartoon character?\n`);
      let ten = getUserInput(`What is one word to describe how you felt on the last day of school?\n`);
      let eleven = getUserInput(`Where is your favorite place?\n`);
      let twelve = getUserInput(`What is something that you can't live without?\n`);
      let thirteen = getUserInput(`Give a word for a personality trait.\n`);
      let fourteen = getUserInput(`What is your name or nickname?\n`);

      console.clear();

      function displayFunMessage() {
          console.log(
              `I want to tell  you how ${one} and ${two} my dad is.\n He is so strong I bet he could lift ${ifStartsWithAVowel(three)} ${three}.\n He is really ${four} at ${five}.\n I'm sure he could fix anything...even ${ifStartsWithAVowel(six)} ${six}.\n He loves to spend his time ${seven}. \n He is so ${eight} just like ${nine}. \n I feel so ${ten} to have him as my dad. He is the best dad in the whole wide ${eleven}. I love him more than ${twelve}. \n Happy Fathers day to the ${thirteen}est dad.\n By: ${fourteen}`

          )
      }

      function ifStartsWithAVowel(word) {
          let regex = /\b[aeiou]\w*/i;
          if(word === regex) {
              return "an";
          } else {
              return "a"
          }
      }

      displayFunMessage();
      quitOrReplay();

      function quitOrReplay() {
          let userChoice = getUserInput(`Would you like to do it again?`)

          if(userChoice.toLowerCase().charAt(0)  === "y") {
              displayMessage(welcome)
          } else {
              break;
          }
      }
}
}

madlibsMaker();
