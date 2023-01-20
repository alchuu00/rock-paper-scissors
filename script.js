function getComputerChoice() {
    const moves = Array("rock", "paper", "scissors")
    const computerChoice = moves[Math.floor(Math.random() * moves.length)]
    return (computerChoice, moves[computerChoice])
}

function playerSelection() {
    const playerChoice = prompt("Input your move (rock, paper or scissors)!")
    return console.log(playerChoice.toLowerCase())
}

