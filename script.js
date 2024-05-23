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

/*
// Run the user through the inputted number of rounds and display the winner at the end
function playGame(roundCount) {
    let humanScore = 0;
    let computerScore = 0;

    // Take user and computer inputs and decide who wins the round
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

        console.log("Player score: "+humanScore);
        console.log("Computer score: "+computerScore);
    }

    // Loop through the playRound function as many times as defined in the parameter
    for(i = 0; i < roundCount; i++) {
        console.log("Round "+ (i + 1));
        playRound(getHumanChoice(), getComputerChoice());
    }

    // Check who the winner is and display it to the console
    if(humanScore > computerScore) {
        console.log("Player is the Winner!");
    } else if(humanScore < computerScore) {
        console.log("Computer is the winner!");
    } else {
        console.log("It's a tie!");
    }
}

playGame(1);
*/

let humanScore = 0;
let computerScore = 0;

// Take user and computer inputs and decide who wins the round
function playRound(humanChoice, computerChoice) {
    if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log("You win! Scissors beats Paper");
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice === "Rock" && computerChoice === "Paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else {
        console.log("Tie! Nobody wins this round");
    }

    console.log("Player score: " + humanScore);
    console.log("Computer score: " + computerScore);
}

//playRound(getHumanChoice(), getComputerChoice());

window.addEventListener("DOMContentLoaded", (event) => {
    const rock = document.querySelector("#rockBtn");
    if (rock) {
        rock.addEventListener('click', () => {
            console.log("Rock");
        }, false);
    }
});