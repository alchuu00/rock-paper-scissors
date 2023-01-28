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

// check if u need this
function disableButtons() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(element => {
        element.disabled = true
    })
}

//modal function
function modal() {
    const modalContainer = document.getElementById('modal-container');
    const restart = document.getElementById('restart');

    modalContainer.classList.add('show');

    restart.addEventListener('click', () => {
        modalContainer.classList.remove('show');
    })

    // write the result text
    const resultText = document.getElementById('result');
    console.log(resultText)
    if (playerScore === 5) {
        resultText.textContent = 'YOU WON'
    } else {
        resultText.textContent = 'YOU LOSE'
    }
}

// global variables
let playerScore = 0
let computerScore = 0
let roundsCounter = 0

// start game when button is clicked
// listen for which of buttons is clicked and make that as player choice
const cards = document.querySelectorAll('.player-cards > div');
cards.forEach(card => {
    card.addEventListener('click', function () {

        const computerSelection = getComputerChoice();
        const playerSelection = card.className

        console.log(playerSelection)
        console.log(computerSelection)

        const message = document.querySelector('.container-text');
        message.textContent = playRound(playerSelection, computerSelection);
        console.log(message)

        const computerPoints = document.querySelector('.computer-score');
        computerPoints.innerHTML = '&nbsp' + computerScore  //&nbsp is instead of spacebar

        const playerPoints = document.querySelector('.player-score');
        playerPoints.innerHTML = '&nbsp' + playerScore

        // stop the game when one of the players scores 5 points
        if (playerScore === 5 || computerScore === 5) {
            modal()

            // restart game
            restart.addEventListener('click', function () {
                playerScore = null;
                computerScore = null;
                roundsCounter = 0;
                message.textContent = 'Choose a card to play!'
                cards.forEach(element => {
                    element.disabled = false;
                });
                computerPoints.textContent = computerScore;
                playerPoints.textContent = playerScore;
            });
        }
    });
});

