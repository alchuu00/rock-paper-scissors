function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice;
}

function getPlayerChoice() {
    const playerChoice = prompt("Input your move (rock, paper or scissors)!").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection === "rock" && computerSelection === "rock") || (playerSelection === "paper" && computerSelection === "paper") || (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "It's a Tie!";
    }
    else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        computerScore++
        return "You lose";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        return "You win";
    }
}

function game() {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    alert(playRound(playerSelection, computerSelection));
    alert("Player: " + playerScore + " Computer: " + computerScore)
}

let playerScore = 0
let computerScore = 0

game()