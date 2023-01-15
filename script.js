const buttons = document.querySelectorAll("input")
let playerScore = 0
let computerScore = 0

function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerChoice){
    let computerSelection = computerChoice()
    let result = ""

    if ((playerChoice == "Rock" && computerSelection == "Scissors") ||
        (playerChoice == "Scissors" && computerSelection == "Paper") ||
        (playerChoice == "Paper" && computerSelection == "Rock")){
            playerScore += 1
            result = ("You win! " + playerChoice + " beats " + computerSelection + "<br><br>Your Score: " + playerScore + "<br>My Score: " +computerScore)
            if (playerScore == 5) {
                result += "<br>You've won the Game!"
                disableButtons()
            }
    }
    else if (playerChoice == computerSelection){
            result = ("It's a tie! You both chose " + playerChoice + "<br><br>Your Score: " + playerScore + "<br>My Score: " +computerScore)
    }
    else {
        computerScore += 1    
        result = ("You Lose! " + playerChoice + " loses to " + computerSelection + "<br><br>Your Score: " + playerScore + "<br>My Score: " +computerScore)
        if (computerScore == 5) {
            result += "<br>You lost, care to try again?"
            disableButtons()
        }
    }

document.getElementById('result').innerHTML = result
return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})