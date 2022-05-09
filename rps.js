const r = "rock"
const p = "paper"
const s = "scissors"

let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    })
})

function computerPlay(){
    let rand = Math.floor(Math.random() * 3) //random integer from 0 - 2
    // console.log(rand)

    if(rand == 0){
        return r
    } else if(rand == 1) {
        return p
    } else if(rand == 2) {
        return s
    }
}

function playRound(playerSelection, computerSelection){
    if(![r,p,s].includes(playerSelection.toLowerCase())){
        throw new TypeError("please enter either rock, paper, or scissors only")
    }

    if(playerSelection == computerSelection){
        resultsHandler("draw", r, s)
    }

    if(playerSelection == r){
        if(computerSelection == s) resultsHandler("win", r, s)
        if(computerSelection == p) resultsHandler("lose", p, r)
    }

    if(playerSelection == s){
        if(computerSelection == p) resultsHandler("win", s, p)
        if(computerSelection == r) resultsHandler("lose", r, s)
    }

    if(playerSelection == p){
        if(computerSelection == r) resultsHandler("win", p, r)
        if(computerSelection == s) resultsHandler("lose", s, p)
    }
}

function resultsHandler(result, winnerChoice, loserChoice){
    const resultDiv = document.querySelector('.results')
    const p = document.createElement('p')
    
    switch(result) {
        case "draw":
            document.getElementById('results').innerHTML = 'It\'s a draw!';
            break;
        case "win":
            playerScore++;
            document.getElementById('playerCounter').innerHTML = "Player score: " + playerScore;

            document.getElementById('results').innerHTML = 'You Win! ' + winnerChoice + " beats " + loserChoice;

            if(playerScore == 5){
                document.getElementById('winner').innerHTML = "Player has won " + playerScore + " rounds!"
                removeButtons();
            }
            break;
        case "lose":
            computerScore++;
            document.getElementById('computerCounter').innerHTML = "Computer score: " + computerScore;

            document.getElementById('results').innerHTML = 'You Lose! ' + winnerChoice + " beats " + loserChoice;

            if(computerScore == 5){
                document.getElementById('winner').innerHTML = "Computer has won " + computerScore + " rounds!";
                removeButtons();
            }
            break;
    }
    resultDiv.appendChild(p);
}

function removeButtons(){
    const buttons = document.querySelectorAll('button')

    buttons.forEach(button => {
        button.remove();
    });
}