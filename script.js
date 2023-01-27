// get random computer move
function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice;
}

// compare computer and player moves and return result
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

function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.disabled = true
    })
}

// global variables
let playerScore = 0
let computerScore = 0
let roundsCounter = 0

// start game when button is clicked
// listen for which of buttons is clicked and make that as player choice
const cardButtons = document.querySelectorAll('.player-choice > div');
cardButtons.forEach(element => {
    element.addEventListener('click', function () {

        const computerSelection = getComputerChoice();
        const playerSelection = element.className

        console.log(playerSelection)
        console.log(computerSelection)

        const message = document.querySelector('.message');
        message.textContent = playRound(playerSelection, computerSelection);
        console.log(message)

        const computerPoints = document.querySelector('.computer-score');
        computerPoints.textContent = computerScore

        const playerPoints = document.querySelector('.player-score');
        playerPoints.textContent = playerScore

        // stop the game when one of the players scores 5 points
        if (playerScore === 5 || computerScore === 5) {
            const endGame = document.querySelector('.endGame')
            endGame.textContent = 'GAME OVER'
            cardButtons.forEach(element => {
                element.disabled = true;
            })

            // write the result text
            const finalScore = document.createElement('div');
            finalScore.setAttribute('class', 'finalScore');
            if (playerScore === 5) {
                finalScore.textContent = 'YOU WON'
            } else {
                finalScore.textContent = 'YOU LOSE'
            }
            endGame.appendChild(finalScore)

            // restart button
            const restartButton = document.createElement('button');
            restartButton.setAttribute('class', 'restartButton');
            restartButton.textContent = 'RESTART'
            endGame.appendChild(restartButton)

            restartButton.addEventListener('click', function () {
                playerScore = 0;
                computerScore = 0;
                roundsCounter = 0;
                endGame.textContent = '';
                finalScore.remove();
                restartButton.remove();
                cardButtons.forEach(element => {
                    element.disabled = false;
                });
                computerPoints.textContent = computerScore;
                playerPoints.textContent = playerScore;
            });
        }
    });
});

