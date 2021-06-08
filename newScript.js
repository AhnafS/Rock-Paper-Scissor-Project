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

//action display
let playerDisplay = document.querySelector(".playerDisplay");
let computerDisplay = document.querySelector(".computerDisplay");

//main function
const allActions = document.querySelectorAll('.action');
allActions.forEach(action => {    
    action.addEventListener('click', e => {
        let player = getPlayerButton(e);
        let computer = computerPlay();
        let results = playRound(player, computer);
        actionDisplay(player, computer);
        update();
        if (computerScore + playerScore == 5) { finalDecision(); reset();}
    });
})

window.addEventListener('keydown', e => {
    if (e.code != 'KeyF') {return;}
    playerScore = 0;
    computerScore = 0;
    displayComment('');
    update();
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

//Used by playRound
function displayComment (message){
    let comment = document.querySelector('.comment');
    comment.textContent = message;
}

//Used by playRound
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

//Puts who wins and displays it in comments
function finalDecision (){
    if (computerScore == playerScore){
        displayComment('Tie')
    } else if (playerScore > computerScore){
        displayComment('You Win')
    } else {
        displayComment('Computer Wins')
    }
}

function reset(){
    alert('Press F to reset score')
}

//Object of displays and its link to pictures
const pictures = {
    'rock' : "images/rock.png",
    'paper' : 'images/paper.png',
    'scissors' : 'scissors.png'
}

//changes the display that presesnts action
function actionDisplay (player, computer) {
    // playerDisplay.style.backgroundImage = `url("${pictures[player]}"))`;
    // playerDisplay.style.cssText = 'background-repeat: no-repeat: background-size: cover; background-position: center;'
    const playerDisplay = document.querySelector('.playerDisplay');
    const computerDisplay = document.querySelector('.computerDisplay');
    if (playerDisplay.lastChild) {
        playerDisplay.removeChild(playerDisplay.lastChild);
        computerDisplay.removeChild(computerDisplay.lastChild);;
    }
    playerImg = document.createElement('img')
    playerImg.setAttribute('src', `../images/${player}.png`);
    playerDisplay.appendChild(playerImg);

    computerImg = document.createElement('img')
    computerImg.setAttribute('src', `../images/${computer}.png`);
    computerDisplay.appendChild(computerImg);
}