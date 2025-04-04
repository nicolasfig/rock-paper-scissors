let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function randomOption(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function getComputerChoice() {
  option = randomOption(1, 3);
  if (option === 1) {
    return "rock";
  } else if (option === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice(option) {
  humanChoice = option;
  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! rock beats scissors");
    humanScore += 1;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! paper beats rock");
    humanScore += 1;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You win! scissors beats paper");
    humanScore += 1;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    console.log("You lose! rock beats scissors");
    computerScore += 1;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    console.log("You lose! paper beats rock");
    computerScore += 1;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    console.log("You lose! scissors beats paper");
    computerScore += 1;
  } else if (computerChoice === humanChoice) {
    console.log("Tie");
  }
  console.log(
    "Human score = " + humanScore + " - Computer score = " + computerScore
  );
}
