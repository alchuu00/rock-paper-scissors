function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice;
}

let playerChoice
function getPlayerChoice() {
    const elements = document.querySelectorAll('button');
    elements.forEach(element => {
      element.addEventListener('click', function() {
      playerChoice = this.className;
      });
    });
    return playerChoice
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "It's a Tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++;
        return "You lose";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You win";
    }
}

function game(playerSelection) {
    const computerSelection = getComputerChoice();
    console.log(playerSelection)
    console.log(computerSelection)

    const message = document.querySelector('.message');
    message.textContent = playRound(playerSelection, computerSelection);
    console.log(message)

    const computerPoints = document.querySelector('.computerScore');
    computerPoints.textContent = computerScore

    const playerPoints = document.querySelector('.playerScore');
    playerPoints.textContent = playerScore
  }

let playerScore = 0
let computerScore = 0

const elements = document.querySelectorAll('button');
elements.forEach(element => {
  element.addEventListener('click', function() {
    game(this.className);
  });
});