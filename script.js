const buttons = document.querySelectorAll("input")

function computerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function playRound(playerChoice){
    let computerSelection = computerChoice()
    let result = ""

    if ((playerChoice == "Rock" && computerSelection == "Scissors") ||
        (playerChoice == "Scissors" && computerSelection == "Paper") ||
        (playerChoice == "Paper" && computerSelection == "Rock")){
            result = ("You win! " + playerChoice + " beats " + computerSelection)
    }
    else if (playerChoice == computerSelection){
            result = ("It's a tie! You both chose " + playerChoice)
    }
    else {
            result = ("You Lose! " + playerChoice + " loses to " + computerSelection)
    }

document.getElementById('result').innerHTML = result
return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})