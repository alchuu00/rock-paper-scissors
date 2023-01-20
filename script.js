function getComputerChoice() {
    const choice = Array("rock", "paper", "scissors")
    let computerChoice = choice[Math.floor(Math.random()*choice.length)]
    return console.log(computerChoice)
}

getComputerChoice()