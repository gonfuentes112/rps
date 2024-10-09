let humanScore = 0;
let computerScore = 0;

function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function getHumanChoice (){
    const humanChoice = prompt("Enter your choice");
    return humanChoice.toLowerCase();
}

function playerWins(humanChoice, computerChoice) {
    return `You win! ${humanChoice} beats ${computerChoice}`;
}

function calculateWinner(computerChoice, humanChoice) {
    if (computerChoice === "rock" && humanChoice === "scissors" ||
    computerChoice === "scissors" && humanChoice === "paper" ||
    computerChoice === "paper" && humanChoice === "rock") {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
    } else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        humanScore += 1;        
    }

}

function playRound(){
    const computerChoice= getComputerChoice();
    const humanChoice = getHumanChoice();
    if (computerChoice === humanChoice) {
        console.log( `Draw. Both players chose ${computerChoice}`);
        return;
    } else {
        calculateWinner(computerChoice, humanChoice);
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log(`Your final score is: ${humanScore}`);
    console.log(`The CPU's score is: ${computerScore}`);
}

playGame();

