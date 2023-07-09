const ROUNDS = 5;

let playerWins = 0;
let computerWins = 0;

const choice = ["Rock", "Paper", "Scissors"];

/**
 * Get computer choice from array {@link choice}
 * @returns {string}
 */
function getComputerChoice() {
    return choice[Math.floor(Math.random()*choice.length)];
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
        return "It's a tie!"
    } else if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        return "You lose. Try again!";
    } else {
        return "You win!";
    }
}