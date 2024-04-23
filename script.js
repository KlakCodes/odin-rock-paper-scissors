// Randomly return Rock, Paper or Scissors
function getComputerChoice() {
    randNum = Math.floor(Math.random() * 3);

    switch(randNum){
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
function getHumanChoice(){
    input = window.prompt("Rock, Paper or Scissors?").toLowerCase();

    switch(input){
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