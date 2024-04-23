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

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if(humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else {
        console.log("Tie! Nobody wins this round");
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);