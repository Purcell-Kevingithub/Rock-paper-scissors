function computerPlay() {
  //generate a random number from 1-100
  let randomNum = Math.floor(Math.random() * 100 + 1);
  // create control flow that sets computer choice based on number from 1-33, 34-66, 66-100
  // with 1-33 rock, 34-66 paper, 67 -100 scissor
  // return rock, paper, or scissor
  if (randomNum <= 33) {
    return "rock";
  } else if (randomNum >= 34 && randomNum <= 66) {
    return "paper";
  } else {
    return "scissor";
  }
}

function playerPlay() {
  // return value rock paper or scissor value that is case insensitive
  //  store a variable from prompt from user
  // clean the string so that it is case insensitive
  //  then return that string;

  let response = prompt("please type rock, paper, or scissor!");
  return response.toLowerCase();
}

function singleRound(playerSelection, computerSelection) {
  // return a string that declares the winner
  // ex: "You lose! Paper beats Rock" or " You win! Scissors beats Paper"

  let result = checkWinner(playerSelection, computerSelection);

  if (result === "tie") {
    return `Tie! ${playerSelection} ties ${computerSelection}.`;
  }

  let msg = result
    ? `You win! ${playerSelection} beats ${computerSelection}.`
    : `You lose! ${computerSelection} beats ${playerSelection}.`;
  //  return a string with who wins

  return msg;
}

function checkWinner(playerpick, computerpick) {
  if (playerpick === computerpick) {
    return "tie";
  }

  if (playerpick === "rock" && computerpick === "scissor") {
    return true;
  }

  if (playerpick === "rock" && computerpick === "paper") {
    return false;
  }

  if (playerpick === "paper" && computerpick === "scissor") {
    return false;
  }

  if (playerpick === "paper" && computerpick === "rock") {
    return true;
  }

  if (playerpick === "scissor" && computerpick === "rock") {
    return false;
  }

  if (playerpick === "scissor" && computerpick === "paper") {
    return true;
  }
}

//  final function that is sum of previous functions
function game() {
  // use singleRound function in here to call singleRound function 5 times
  for (let i = 0; i < 5; i++) {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();
    console.log(singleRound(playerSelection, computerSelection));
  }
}

game();
