const ROUNDS = 5;

let currentYear =  new Date().getFullYear();
document.getElementById("year").textContent = currentYear;

let playerWins = 0;
let playerScore = document.getElementById("player-score");
let computerWins = 0;
let computerScore = document.getElementById("computer-score");
let gameResult = "";

const buttons = Array.from(document.getElementsByClassName("player-button"));
buttons.forEach((button) => {
    button.addEventListener("click", function() {
        if (!gameOver()) {
            buttons.forEach((button) => button.classList.remove("using"));
            button.classList.add("using");
            playRound(getComputerChoice(), button.id);
        } else {
            const myModal = new bootstrap.Modal(document.getElementById('staticBackdrop'));
            myModal.show();
        };
    });
});

const restart = document.getElementById("restart-game");
restart.addEventListener("click", function() { 
    restartGame();
});

function restartGame() {
    playerWins = 0;
    playerScore.textContent = playerWins;
    computerWins = 0;
    computerScore.textContent = computerWins;
    gameResult = "";
    buttons.forEach((button) => button.classList.remove("using"));
}

const choice = ["Rock", "Paper", "Scissors"];

/**
 * Get computer choice from array {@link choice}
 * @returns {string}
 */
function getComputerChoice() {
    return choice[Math.floor(Math.random() * choice.length)];
}

/**
 * Play round by getting two strings and comparing them
 * Return result as string
 * @param {string} computerChoice
 * @param {string} playerChoice
 * @returns {string}
 */
function playRound(computerChoice, playerChoice) {
    computerChoice = computerChoice.toLowerCase();
    playerChoice = playerChoice.toLowerCase();

    if (computerChoice == playerChoice) {
        return "tie"
    } else if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        computerWins++;
        computerScore.textContent = computerWins;
        return "lose";
    } else {
        playerWins++;
        playerScore.textContent = playerWins;
        return "win";
    }
}

function gameOver() {
    return playerWins === ROUNDS || computerWins === ROUNDS;
}