const r = "rock"
const p = "paper"
const s = "scissors"

game(5)

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
        console.log("It's a draw.")
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
    console.log("You Win! " + winnerChoice +" beats " + loserChoice)
}

function lose(winnerChoice, loserChoice){
    console.log("You Lose! " + winnerChoice + " beats " + loserChoice)
}

function game(numRounds){
    for(let i = 0; i < numRounds; i++){
        let playerSelection = prompt("Choose rock, paper, or scissors.");
        let computerSelection = computerPlay();

        playerSelection = playerSelection.toLowerCase()
        playRound(playerSelection, computerSelection)
    }

}