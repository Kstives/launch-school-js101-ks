/*
Js101 - Lesson 2 - Karey Stivers
Rock, Paper, Scissors Program Bonus Features

1. Lizard Spock - This game is a variation on the Rock Paper Scissors game that
adds two more options - Lizard and Spock.
The goal of this bonus is to add Lizard and Spock to your game.

2. Shortened Input - Typing the full word "rock" or "lizard" is tiring.
Update the program so the user can type "r" for "rock," "p" for "paper,"
and so on. Note that if you do bonus #1, you'll have two words that start
with "s." How do you resolve that?

3. Best of 5 Keep score of the player's and computer's wins. When either the
player or computer reaches five wins, the match is over, and the winning player
becomes the grand winner. Don't add your incrementing logic to displayWinner.
Keep your functions simple; they should perform one logical task — no more, no
less.
*/

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

const VALID_CHOICES = {
  r: 'rock',
  p: 'paper',
  s: 'scissors',
  l: 'lizard',
  sp: 'spock'
};

let playerScore = 0;
let computerScore = 0;

function displayWinner(choice, computerChoice) {

  // comparing choices
  prompt(`You chose ${choice}, Computer chose ${computerChoice}`);

  // if = user wins, else if = computer wins
  if (((choice === 'rock') && (computerChoice === 'lizard' || computerChoice === 'scissors')) ||
  ((choice === 'paper') && (computerChoice === 'rock' || computerChoice === 'spock')) ||
  ((choice === 'scissors') && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
  ((choice === 'spock') && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
  ((choice === 'lizard') && (computerChoice === 'spock' || computerChoice === 'paper'))) {
    prompt('You win!');
    playerScore += 1;
  } else if (((computerChoice === 'rock') && (choice === 'lizard' || choice === 'scissors')) ||
  ((computerChoice === 'paper') && (choice === 'rock' || choice === 'spock')) ||
  ((computerChoice === 'scissors') && (choice === 'paper' || choice === 'lizard')) ||
  ((computerChoice === 'spock') && (choice === 'scissors' || choice === 'rock')) ||
  ((computerChoice === 'lizard') && (choice === 'spock' || choice === 'paper'))) {
    prompt('Computer wins!');
    computerScore += 1;
  } else { // tie
    prompt("It's a tie");
  }

}

// returning score
function playToFive() {
  if (playerScore === 5 || computerScore === 5) {
    return true;
  } else {
    return false;
  }
}

// welcome to the game
prompt('Welcome to the game! First to 5 points wins!');

while (true) {
  // user's choice
  prompt(`Your choices: ${Object.values(VALID_CHOICES).join(', ')}.\n(Choose by typing one of the following: ${Object.keys(VALID_CHOICES).join(', ')})`);
  let choiceKey = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(choiceKey)) {
    prompt("That's not a valid choice");
    choiceKey = readline.question();
  }

  let choice = VALID_CHOICES[choiceKey];

  // computer's choice
  let randomIndex = Math.floor(Math.random() * Object.keys(VALID_CHOICES).length);
  let computerChoiceKey = Object.keys(VALID_CHOICES)[randomIndex];
  let computerChoice = VALID_CHOICES[computerChoiceKey];

  displayWinner(choice, computerChoice);
  let gameOver = playToFive();

  // play again?
  if (!gameOver) {
    prompt(`You have ${playerScore} win(s), Computer has ${computerScore} win(s).`);
    prompt('Press c to continue');
    let continueGame = readline.question().toLowerCase();
    while (continueGame[0] !== 'c') {
      prompt('Please enter "c" to continue');
      continueGame = readline.question().toLowerCase();
    }
  } else {
    prompt(`Game over! The final scores are You: ${playerScore} Computer: ${computerScore}`);
    playerScore = 0;
    computerScore = 0;
    prompt(`Do you want to play again (y/n)?`);
    let answer = readline.question().toLowerCase();
    while (answer[0] !== 'n' && answer[0] !== 'y') {
      prompt('Please enter "y" or "n".');
      answer = readline.question().toLowerCase();
    }
    if (answer[0] !== 'y') break;

  }

}