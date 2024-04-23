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

console.log(getComputerChoice())