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
        return "You lose";
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        score++;
        return "You win";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        alert(playRound(playerSelection, computerSelection));
        alert("Score: " + score + " Attempts left: " + (4 - i))
    }
}

let score = 0
game()