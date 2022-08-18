let scorePlayer = 0;
let scorePc = 0;

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// Generates random choices for the computer
function getComputerChoice (){
    const gameChoices = ["rock", "paper", "scissors"];
    let compChoice = gameChoices[Math.floor(Math.random() * gameChoices.length)];
    return compChoice;
}

// Plays 1 round
function playRound(playerSelection, computerSelection){
    
            const pop = document.getElementById("pop-container");
            const modal = document.createElement("div");
            const para = document.createElement("p");
            const winText = document.createTextNode("You won");
            const loseText = document.createTextNode("You lost");
            const tieText = document.createTextNode("Tie");
            const resetBtn = document.createElement("button");
            const choice = document.querySelector("#choice");
            const choicePara = document.createElement("p")
            modal.id = "modal-overlay";
            modal.appendChild(para);
            modal.appendChild(resetBtn).textContent="Start New Game"
          
            
            
    if (playerSelection == "rock" && computerSelection == "scissors"){

        scorePlayer += 1;
        document.querySelector('.score-player').textContent = `${scorePlayer}`;
        document.getElementById("choice").textContent="You Win! Rock Beats Scissors"

        if(scorePlayer == 5) {
            
            pop.replaceWith(modal);
            para.appendChild(winText);
            resetBtn.addEventListener("click",()=>{
                modal.replaceWith(pop);
                scorePlayer = 0;
                scorePc = 0;
                document.querySelector('.score-player').textContent = 0;
                document.querySelector('.score-pc').textContent = 0;
                choice.textContent="Choose Wisely"
                choice.appendChild(choicePara).textContent="5 points wins the game"
            });
        }
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        
        scorePlayer += 1;
        document.querySelector('.score-player').textContent = `${scorePlayer}`;
        document.getElementById("choice").textContent="You Win! Paper Beats Rock"
        if(scorePlayer == 5) {
            pop.replaceWith(modal);
            para.appendChild(winText);
            resetBtn.addEventListener("click",()=>{
                modal.replaceWith(pop);
                scorePlayer = 0;
                scorePc = 0;
                document.querySelector('.score-player').textContent = 0;
                document.querySelector('.score-pc').textContent = 0;
                choice.textContent="Choose Wisely"
                choice.appendChild(choicePara).textContent="5 points wins the game"
            });
        }
      
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        
        scorePlayer += 1;
        document.querySelector('.score-player').textContent = `${scorePlayer}`;
        document.getElementById("choice").textContent="You Win! Scissors Beats Paper"
        if(scorePlayer == 5) {
            pop.replaceWith(modal);
            para.appendChild(winText);
            resetBtn.addEventListener("click",()=>{
                modal.replaceWith(pop);
                scorePlayer = 0;
                scorePc = 0;
                document.querySelector('.score-player').textContent = 0;
                document.querySelector('.score-pc').textContent = 0;
                choice.textContent="Choose Wisely"
                choice.appendChild(choicePara).textContent="5 points wins the game"
            });
        }
    }

    else if (playerSelection == computerSelection){
        document.getElementById("choice").textContent="Its a Tie"
    }
    // If player conditions are not met it means the computer won
    else { 
        scorePc += 1;
        document.querySelector('.score-pc').textContent = `${scorePc}`;
        document.getElementById("choice").textContent=`Computer Wins! ${capitalize(computerSelection)} beats ${capitalize(playerSelection)}`
        if(scorePc == 5) {
            pop.replaceWith(modal);
            para.appendChild(loseText);
            resetBtn.addEventListener("click",()=>{
                modal.replaceWith(pop);
                scorePlayer = 0;
                scorePc = 0;
                document.querySelector('.score-player').textContent = 0;
                document.querySelector('.score-pc').textContent = 0;
                choice.textContent="Choose Wisely"
                choice.appendChild(choicePara).textContent="5 points wins the game"
            }); 
        }  
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
const btn = document.querySelectorAll("button");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
rockBtn.addEventListener("click",()=>playRound("rock",getComputerChoice()));
paperBtn.addEventListener("click",()=>playRound("paper",getComputerChoice()));
scissorsBtn.addEventListener("click",()=>playRound("scissors",getComputerChoice()));

  