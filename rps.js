const r = "rock"
const p = "paper"
const s = "scissors"

let computerScore = 0;
let playerScore = 0;
// game(5)

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id, computerPlay());
    })
})

// playRound("rock", computerPlay())

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
        const resultDiv = document.querySelector('.results')

        const p = document.createElement('p')
        p.textContent = 'It\'s a draw!';
        resultDiv.appendChild(p);
    }

    if(playerSelection == r){
        if(computerSelection == s) win(r, s)
        if(computerSelection == p) lose(p, s)
    }

    if(playerSelection == s){
        if(computerSelection == p) win(s, p)
        if(computerSelection == r) lose(r, s)
    }

    if(playerSelection == p){
        if(computerSelection == r) win(p, r)
        if(computerSelection == s) lose(s, p)
    }
}

function win(winnerChoice, loserChoice){
    playerScore++;
    document.getElementById('playerCounter').innerHTML = "Player score: " + playerScore;

    const resultDiv = document.querySelector('.results')

    const p = document.createElement('p')
    p.textContent = 'You Win! ' + winnerChoice + " beats " + loserChoice;
    resultDiv.appendChild(p);

    if(playerScore >= 5){
        document.getElementById('winner').innerHTML = "Player has won " + playerScore + " rounds!"
    }
}

function lose(winnerChoice, loserChoice){
    computerScore++;
    document.getElementById('computerCounter').innerHTML = "Computer score: " + computerScore;
    
    const resultDiv = document.querySelector('.results')

    const p = document.createElement('p')
    p.textContent = 'You Lose! ' + winnerChoice + " beats " + loserChoice;
    resultDiv.appendChild(p);

    if(computerScore >= 5){
        document.getElementById('winner').innerHTML = "Computer has won " + computerScore + " rounds!"
    }
}

function game(numRounds){
    for(let i = 0; i < numRounds; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();

        playerSelection = playerSelection.toLowerCase()
        playRound(playerSelection, computerSelection)
    }

}