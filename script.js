// Plan 

/* 
    1. Make a function computerPlay that picks Rock Paper or Scissors for 
    the computer.
        You can create an object where each play is referenced with number
        ex: {1: rock. 2: paper, 3: scissor}
        and make the computer randomly pick from a number

    2. Make a function singleRound which takes in the platerSelection 
    and computerSelection, and tells who wins and who loses. 

    3. make a function called game which plays a whole game using the 
    above functions. 
    
    4. Create a const that keeps track of the score for each player
    
    5.WHILE player score and computer score is not equal to 5, keep
    calling the cuntion play
*/

// All possible choices to play from
const actions = {
    1: "rock",
    2: "paper",
    3: "scissors"
}

// Score Board
let playerScore = 0;
let computerScore = 0;


function game (){

    let count = 0;
    while (count != 5){
        playRound(playerPlay(), computerPlay());
        count++;
        console.log(count);
    }

    finalDecision();
    reset();

}


function playerPlay () {
    let playerInput = prompt("Please pick an action with its respective number: 1 - rock, 2 - paper, 3 - scissors");
    return actions[playerInput];
}

function computerPlay () {
    let randomSelection =  Math.floor((Math.random() * 3) + 1);
    return actions[randomSelection];
}

function playRound (playerSelection, computerSelection){    
    if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return console.log("You win, rock beats scissors");
    } else if (playerSelection == 'paper' && computerSelection == 'rock'){
        playerScore++;
        return console.log('You win, paper beats rock');
    } else if (playerSelection == 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return console.log('You win, scissors beat paper');
    }

    else if (computerSelection == "rock" && playerSelection == "scissors"){
        computerScore++;
        return console.log("Computer win, rock beats scissors");
    } else if (computerSelection == 'paper' && playerSelection == 'rock'){
        computerScore++;
        return console.log('Computer win, paper beats rock');
    } else if (computerSelection == 'scissors' && playerSelection == 'paper'){
        computerScore++;
        return console.log('Computer win, scissors beat paper');
    }
}

function finalDecision (){
    if (computerScore == playerScore){
        console.log('Tie')
    } else if (playerScore > computerScore){
        console.log('You Win');
    } else {
        console.log('Computer Wins')
    }

    let playAgainInput = prompt('Would you like to play again y/n');

    if (playAgainInput.toLowerCase() == 'y'){
        return game();
    } else {
        return console.log('Thank You For playing');
    }
}


game();