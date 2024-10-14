const humanScore = document.getElementById('humanScore');
const computerScore = document.getElementById('computerScore');;
const result = document.getElementById('result');
const userRow = document.getElementById('user_row');
const computerRow = document.getElementById('computer_row');
const buttonPanel = document.getElementById('button_panel');

function getComputerChoice (){
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function buttonOption(event) {
    if (event.target.matches('button')) {
        playRound(event.target.id);
    };
}

buttonPanel.addEventListener('click', buttonOption);


function disableButtons() {
    buttonPanel.removeEventListener('click', buttonOption);
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.style.color = 'white';
        button.style.border = 'gray';
    } )

}

function capitalize(str) {
    if (!str) {
        throw new Error('empty string');
    }
    return str[0].toUpperCase() + str.slice(1); 
}

function updateWinner(playerWins, humanChoice, computerChoice) {
    result.innerText = `${playerWins? 
                        `${capitalize(humanChoice)} beats ${capitalize(computerChoice)}` : 
                        `${capitalize(computerChoice)} beats ${capitalize(humanChoice)}`} 
                        `;
    result.style.opacity = '100';
}

function increaseScore(score) {
    score.textContent = (Number(score.textContent) + 1).toString();
}



function calculateGameOver(){
    if (humanScore.textContent === '5') {
        result.innerText = 'You win!';
        userRow.style.backgroundColor = 'green';
        computerRow.style.backgroundColor = 'red';
        disableButtons();
    }
    if (computerScore.textContent === '5') {
        result.innerText = 'You lose!';
        userRow.style.backgroundColor = 'red';
        computerRow.style.backgroundColor = 'green';
        disableButtons();
    }

}

function playRound(humanChoice){
    const computerChoice= getComputerChoice();
    if (computerChoice === humanChoice) {
        result.innerText = `Both players chose ${capitalize(computerChoice)}`;
        result.style.opacity = '100';
    } else {
        const playerWins = (humanChoice === "rock" && computerChoice === "scissors" ||
            humanChoice === "scissors" && computerChoice === "paper" ||
            humanChoice === "paper" && computerChoice === "rock"
            );
        updateWinner(playerWins, humanChoice, computerChoice);
        increaseScore(playerWins ? humanScore : computerScore);
        calculateGameOver();
    }
}

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playRound();
//     }
//     console.log(`Your final score is: ${humanScore}`);
//     console.log(`The CPU's score is: ${computerScore}`);
// }

// playGame();

