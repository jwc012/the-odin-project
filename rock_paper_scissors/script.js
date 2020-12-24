const types = ['rock', 'paper', 'scissors'];

function computerPlay() {
  return types[Math.floor(Math.random() * types.length)];
}

function playRound(playerSelection, computerSelection) {
  let playerSelectLower = playerSelection.toLowerCase();
  let computerSelectLower = computerSelection.toLowerCase();
  if (!types.includes(playerSelectLower)) {
    return "Invalid Input";
  } else if (playerSelectLower.localeCompare(computerSelectLower) == 0) {
    return 'Tie';
  } else if (playerSelectLower.localeCompare('rock') == 0 && computerSelectLower.localeCompare('scissors') == 0 || playerSelectLower.localeCompare('paper') == 0 && computerSelectLower.localeCompare('rock') == 0 || playerSelectLower.localeCompare('scissors') == 0 && computerSelectLower.localeCompare('paper') == 0) {
    return `You Win! ${playerSelectLower} beats ${computerSelectLower}`;
  } else {
    return `You Lose! ${computerSelectLower} beats ${playerSelectLower}`;
  }
}

function game() {
  let userScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    let userInput = prompt("Rock, Paper, or Scissors?");
    let computerSelection = computerPlay();
    let output = playRound(userInput, computerSelection);
    console.log(output);
    let winner = determineWinner(output);
    if (winner > 0) {
      userScore++;
    } else if (winner < 0) {
      computerScore++;
    }
    console.log(`Player: ${userScore} vs Computer: ${computerScore}`);
  }
}

function determineWinner(str) {
  if (str.includes('Win')) {
    return 1;
  } else if (str.includes('Lose')) {
    return -1;
  } else {
    return 0;
  }
}