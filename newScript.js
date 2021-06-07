const actions = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

// Score Board
let playerScore = 0;
let computerScore = 0;
document.querySelector(".playerScore").textContent = playerScore;
document.querySelector(".computerScore").textContent = computerScore;

const allActions = document.querySelectorAll('.action');
allActions.forEach(action => {    
    action.addEventListener('click', e => {
        let results = playRound(getPlayerButton(e), computerPlay());
        update();
    });
})

function getPlayerButton(e) {
    let play = e.target.value;
    return actions[play];
}

function computerPlay () {
    let randomSelection =  Math.floor((Math.random() * 3) + 1);
    return actions[randomSelection];
}

function playRound (playerSelection, computerSelection){    
    if (playerSelection == "rock" && computerSelection == "scissors"){
        update('player');
        displayComment('You win, rock beats scissors');
        return console.log("You win, rock beats scissors");
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        update('Player');
        displayComment('You win, paper beats rock');
        return console.log('You win, paper beats rock');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        update('Player');
        displayComment('You win, scissors beat paper');
        return console.log('You win, scissors beat paper');
    }

    else if (computerSelection == "rock" && playerSelection == "scissors"){
        update('computer');
        displayComment('Computer win, rock beats scissors')
        return console.log("Computer win, rock beats scissors");
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        update('computer');
        displayComment('Computer win, paper beats rock')
        return console.log('Computer win, paper beats rock');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        update('computer');
        displayComment('Computer win, scissors beat paper');
        return console.log('Computer win, scissors beat paper');
    }
}

function displayComment (message){
    let comment = document.querySelector('.comment');
    comment.textContent = message;
}

function update(winner){
    switch(winner){
        case 'computer':
            computerScore++;
            break;
        case 'player':
            playerScore++;
            break;
    }
    document.querySelector(".playerScore").textContent = playerScore;
    document.querySelector(".computerScore").textContent = computerScore;
}