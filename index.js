



function getComputerChoice (){
    const gameChoices = ["Rock", "Paper", "Scissors"];
    let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return compChoice
    // console.log(compChoice)
}

function playRound(playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "Scissors"){
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection == "rock" && computerSelection == "Paper"){
        return "You lose! paper beats rocks"
    }
    else if (playerSelection == "paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "paper" && computerSelection == "Rock"){
        return "You win! Paper beats Rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "Paper"){
        return "You win! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors"
    }

    else if (computerSelection == "Scissors" && playerSelection == "scissors"|| computerSelection == "Paper" && playerSelection == "paper"|| computerSelection == "Rock" && playerSelection == "rock"){
        return "its a tie man"
    }

    else{
        return "Wrong Choice"
    }
}

let playerSelection = "rock";

// console.log(playRound(playerSelection, computerSelection));

function game(){
    for (i = 0; i < 5; i++){
        
        let userChoice= prompt("enter rock or paper or scissors: ").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(userChoice, computerSelection))
    }
}
game()

