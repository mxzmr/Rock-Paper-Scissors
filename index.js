
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Generates random choices for the computer
function getComputerChoice (){
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return compChoice
}

// Plays 1 round
function playRound(playerSelection, computerSelection){

    // Conditions that the player will win 
    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "You Win! Rock beats Scissors"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "You Win! Paper beats Rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "You Win! Scissors beats Paper"
    }
    // Tie condition
    else if (computerSelection == playerSelection){
        return "Its a Tie"
    }
    // If player and tie conditions are not met it means the computer won
    else { 
        return `Computer Wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }
}
// Plays a game of 5 rounds every round a new choice for the player
function game(){
    for (i = 0; i < 5; i++){
        
        let userChoice= prompt("enter rock or paper or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice().toLowerCase();
        console.log(playRound(userChoice, computerSelection))
    }
}

game()

