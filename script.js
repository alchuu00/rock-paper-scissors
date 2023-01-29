// global variables
let playerScore = 0
let computerScore = 0
const message = document.querySelector('.container-text');
const modalContainer = document.getElementById('modal-container');
const computerPoints = document.querySelector('.computer-score');
const playerPoints = document.querySelector('.player-score');
const containerCards = document.querySelector('.container-cards');
const cardsPlayer = document.querySelectorAll('.player-cards > div');
const cardsComputer = document.querySelectorAll('.computer-cards > div')

// get random computer move
function getComputerChoice() {
    const moves = ["rock", "paper", "scissors"];
    const computerChoice = moves[Math.floor(Math.random() * moves.length)];
    return computerChoice;
}

// get player card
function getPlayerChoice() {
    cardsPlayer.forEach(card => {
        card.addEventListener('click', function () {
            const playerSelection = card.getAttribute('id'); // listen for which of buttons is clicked and make that as player choice
        });
    });
};

// compare computer and player moves and return result
function compareCards(playerSelection, computerSelection) {
    switch (playerSelection + "," + computerSelection) {
        case "rock,rock":
        case "paper,paper":
        case "scissors,scissors":
            return "It's a Tie!";
        case "rock,paper":
        case "paper,scissors":
        case "scissors,rock":
            computerScore++;
            return "You lost the round!";
        case "rock,scissors":
        case "paper,rock":
        case "scissors,paper":
            playerScore++;
            return "You won the round!";
    }
}

//modal function
function modal() {
    const modalContainer = document.getElementById('modal-container');
    const restart = document.getElementById('restart');

    modalContainer.classList.add('show');

    restart.addEventListener('click', resetGame);

    // write the result text
    const resultText = document.getElementById('result');
    console.log(resultText)
    if (playerScore === 5) {
        resultText.textContent = 'YOU WON'
    } else {
        resultText.textContent = 'YOU LOST'
    }
}

// display score
function displayScore() {
    computerPoints.innerHTML = '&nbsp' + computerScore  //&nbsp is instead of spacebar
    playerPoints.innerHTML = '&nbsp' + playerScore

    // stop the game when one of the players scores 5 points
    if (playerScore === 5 || computerScore === 5) {
        modal()
    }
}

// restart the game
function resetGame() {
    modalContainer.classList.remove('show');
    playerScore = 0;
    computerScore = 0;
    message.textContent = 'Choose a card to play!'
    cardsPlayer.forEach(element => {
        element.disabled = false;
    });
    computerPoints.textContent = computerScore;
    playerPoints.textContent = playerScore;
}

// player card fly to middle
function playerCardFlyToMiddle(playerSelection) {
    const playerStack = document.querySelector('.player-cards');
    const playerCard = document.querySelector(`#${playerSelection}`);
    playerCard.classList.add('fly-to-middle-player');
    playerStack.classList.add('no-hover');
    containerCards.classList.add('no-hover');

    setTimeout(() => {
        playerCard.classList.remove('fly-to-middle-player');
        playerCard.classList.add('fly-from-middle-player');
    }, 3000);

    setTimeout(() => {
        playerCard.classList.remove('fly-from-middle-player');
        playerStack.classList.remove('no-hover');
        containerCards.classList.remove('no-hover');
    }, 4000);
}

// computer card fly to middle
function computerCardFlyToMiddle(computerSelection) {
    const computerStack = document.querySelector('.computer-cards');
    const computerCard = document.querySelector(`.computer-cards > #${computerSelection}`);
    computerCard.classList.add('fly-to-middle-computer');
    computerStack.classList.add('no-hover');
    containerCards.classList.add('no-hover');

    setTimeout(() => {
        computerCard.classList.remove('fly-to-middle-computer');
        computerCard.classList.add('fly-from-middle-computer');
    }, 3000);

    // computerCard.classList.add('flip');

    setTimeout(() => {
        computerCard.classList.remove('fly-from-middle-computer');
        computerCard.classList.remove('flip');
        computerStack.classList.remove('no-hover');
        containerCards.classList.remove('no-hover');
    }, 4000);
}


// GAME
function game(playerScore, computerScore) {
    cardsPlayer.forEach(cardPlayer => {
        cardPlayer.addEventListener('click', function () {

            // get player and computer move
            const computerSelection = getComputerChoice();
            const playerSelection = cardPlayer.getAttribute('id'); // listen for which of buttons is clicked and make that as player choice

            playerCardFlyToMiddle(playerSelection)
            computerCardFlyToMiddle(computerSelection)

            setTimeout(() => {
                const messageRound = document.querySelector('.container-text');
                messageRound.textContent = compareCards(playerSelection, computerSelection);
                console.log(message)

                displayScore()
            }, 1000)
        });
    });
}

// start game when button is clicked
game()

