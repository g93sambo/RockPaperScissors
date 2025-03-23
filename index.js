
const btn = document.querySelectorAll("button")
const result = document.getElementById("result-heading")
const score1 = document.getElementById("firstScore")
const score2 = document.getElementById("secondScore")

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

function playgame() {
    let humanScore = 0;
    let computerScore = 0;
    btn.forEach((button) => {
        button.addEventListener("click",() =>{
            const humanChoice = button.textContent
            const computerChoice = getComputerChoice()
            playRound(humanChoice, computerChoice)
        }
        )
    })
    function humanWin(humanChoice, computerChoice){
      result.textContent = `${humanChoice} wins ${computerChoice}`
    }
    function computerWin(humanChoice, computerChoice){
        result.textContent = `${computerChoice} wins ${humanChoice} `
    }
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == "rock") {
            console.log("There is no winner play the next round")
        } else if (humanChoice == "rock" && computerChoice == "scissors") {
            humanWin(humanChoice, computerChoice)
            humanScore++
        } else if (humanChoice == "paper" && computerChoice == "rock") {
            humanWin(humanChoice, computerChoice)
           humanScore++
        } else if (humanChoice == "scissors" && computerChoice == "paper") {
            humanWin(humanChoice, computerChoice)
            humanScore++
        } else {
            computerWin(humanChoice,computerChoice)
            computerScore++
        }
        score1.textContent = humanScore
        score2.textContent = computerScore
        if (humanScore == 5 && computerScore < 5) {
            result.textContent = "you win! yaayy"
         
        } else if(computerScore == 5 && humanScore < 5) {
            result.textContent = "The computer won booo"
        }
    
    }
   

}

playgame()