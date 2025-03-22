function getComputerChoice() {
    value = Math.floor(Math.random() * 3)
    if (value == 0) {
        return "rock"
    } else if (value == 1) {
        return "paper"
    } else if (value == 2) {
        return "scissors"
    }
}

function getHumanChoice() {
    choice = parseInt(prompt("Enter 1. for Rock \n Enter 2. for paper\n Enter 3. for scissors"))
    if (choice == 1) {
        return "rock"
    } else if (choice == 2) {
        return "paper"
    } else if (choice == 3) {
        return "scissors"
    }
}

function playgame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, ComputerChoice) {
        if (humanChoice == "rock" && ComputerChoice == "rock") {
            console.log("There is no winner play the next round")
        } else if (humanChoice == "rock" && ComputerChoice == "scissors") {
            console.log("You win!Rock beats scissors ")
            humanScore++
        } else if (humanChoice == "paper" && ComputerChoice == "rock") {
            console.log("You win!paper beats rock ")
            humanScore++
        } else if (humanChoice == "scissors" && ComputerChoice == "paper") {
            console.log("You win!scissors beats paper ")
            humanScore++
        } else {
            console.log("computer wins")
            computerScore++
        }
         
    }
    
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
   
    if (humanScore > computerScore) {
        console.log("you win! yaayy")
    } else {
        console.log("The computer won booo")
    }



}

playgame()