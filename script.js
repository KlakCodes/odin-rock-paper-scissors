// Randomly return Rock, Paper or Scissors
function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3);

    switch(randNum) {
        case 0:
            compChoice = "Rock"
            break;
        case 1:
            compChoice = "Paper"
            break;
        case 2:
            compChoice = "Scissors"
            break;
    }

    return compChoice;
}

// Ask the user to type Rock, Paper or Scissors
function getHumanChoice() {
    input = window.prompt("Rock, Paper or Scissors?").toLowerCase();

    switch(input) {
        case "rock":
            userChoice = "Rock"
            break;
        case "paper":
            userChoice = "Paper"
            break;
        case "scissors":
            userChoice = "Scissors"
            break;
        default:
            getHumanChoice()
            break;
    }

    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

// Take user and computer inputs and decide who wins the round
function playRound(humanChoice, computerChoice) {
    const gameMsg = document.querySelector('.gameMessage');
    const player = document.querySelector('#player');
    const computer = document.querySelector('#computer');

    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        gameMsg.textContent = "You win! Rock beats Scissors";
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        gameMsg.textContent = "You win! Scissors beats Paper";
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        gameMsg.textContent = "You win! Paper beats Rock";
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        gameMsg.textContent = "You lose! Rock beats Scissors";
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        gameMsg.textContent = "You lose! Scissors beats Paper";
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        gameMsg.textContent = "You lose! Paper beats Rock";
        computerScore++;
    } else {
        gameMsg.textContent = "Tie! Nobody wins this round";
    }

    player.textContent = "Player score: " + humanScore;
    computer.textContent = "Computer score: " + computerScore;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            gameMsg.textContent = "Player has won!";
        } else if (computerScore === 5) {
            gameMsg.textContent = "Computer has won!";
        }
        document.querySelector('#rock').disabled = true;
        document.querySelector('#paper').disabled = true;
        document.querySelector('#scissors').disabled = true;
    }
}

window.addEventListener("DOMContentLoaded", (event) => {
    const gameBtns = document.querySelector('#gameBtns');
    const resetBtn = document.querySelector('.resetBtn');

    gameBtns.addEventListener('click', (event) => {
        let target = event.target;

        switch(target.id) {
            case 'rock':
                playRound('Rock', getComputerChoice());
                break;
            case 'paper':
                playRound('Paper', getComputerChoice());
                break;
            case 'scissors':
                playRound('Scissors', getComputerChoice());
                break;
        }
    })

    resetBtn.addEventListener('click', () => {
        humanScore = 0;
        computerScore = 0;

        document.querySelector('.gameMessage').textContent = "Choose your weapon of choice!";

        document.querySelector('#player').textContent = "Player score: 0";
        document.querySelector('#computer').textContent = "Computer score: 0";

        document.querySelector('#rock').disabled = false;
        document.querySelector('#paper').disabled = false;
        document.querySelector('#scissors').disabled = false;
    })
});