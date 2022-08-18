let scorePlayer = 0;
let scorePc = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Generates random choices for the computer
function getComputerChoice(){
    const gameChoices = ["rock", "paper", "scissors"];
    let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return compChoice;
}

function resetGame(){
    resetBtn.addEventListener("click",()=>{
        div.replaceWith(pop);
        scorePlayer = 0;
        scorePc = 0;
        document.querySelector('.score-player').textContent = 0;
        document.querySelector('.score-pc').textContent = 0;
        choice.textContent="Choose Wisely"
        choice.appendChild(choicePara).textContent="5 points wins the game"
    });
}

function gameOver(){
    if(scorePlayer == 5 && scorePlayer > scorePc) {
        div.id = "modal-overlay";
        div.appendChild(para);
        para.appendChild(winText);
        winText.textContent="You Won!";
        div.appendChild(resetBtn).textContent="Start New Game";
        pop.replaceWith(div);
    }
    else if(scorePc == 5 && scorePc > scorePlayer){
            div.id = "modal-overlay";
            div.appendChild(para);
            para.appendChild(loseText);
            winText.textContent="You Lost!";
            div.appendChild(resetBtn).textContent="Start New Game";
            pop.replaceWith(div);
            
        }
        resetGame();
    }
// Plays 1 round
function playRound(playerSelection, computerSelection){
    
    if (
        (playerSelection == "rock" && computerSelection == "scissors")||
        (playerSelection == "paper" && computerSelection == "rock")||
        (playerSelection == "scissors" && computerSelection == "paper")
       ){
        scorePlayer += 1;
        document.querySelector('.score-player').textContent = `${scorePlayer}`;
        document.getElementById("choice").textContent=`You Win! ${capitalize(playerSelection)} Beats ${capitalize(computerSelection)}`
    }
    else if (playerSelection == computerSelection){
        document.getElementById("choice").textContent="Its a Tie"
    }
    // If player conditions are not met it means the computer won
    else { 
        scorePc += 1;
        document.querySelector('.score-pc').textContent = `${scorePc}`;
        document.getElementById("choice").textContent=`Computer Wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
    }
    gameOver()
}

// UI elements
const pop = document.getElementById("pop-container");
const div = document.createElement("div");
const para = document.createElement("p");
const winText = document.createElement("p");
const loseText = document.createElement("p");
const tieText = document.createTextNode("Tie");
const resetBtn = document.createElement("button");
const choice = document.querySelector("#choice");
const choicePara = document.createElement("p");
const btn = document.querySelectorAll("button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click",()=>playRound("scissors",getComputerChoice()));