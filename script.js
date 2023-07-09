const ROUNDS = 5;

let playerWins = 0;
let computerWins = 0;
let winner = "";

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
        return "tie"
    } else if (
        (computerChoice == "rock" && playerChoice == "scissors") ||
        (computerChoice == "paper" && playerChoice == "rock") ||
        (computerChoice == "scissors" && playerChoice == "paper")
    ) {
        return "lose";
    } else {
        return "win";
    }
}

/**
 * Play rounds until winner is decided
 * Log Winner
 */
function game() {
    do {
        let roundWinnder = playRound(getComputerChoice(), "rock");
        if (roundWinnder == "tie") {
            console.log("It's a tie!")
        } else if (roundWinnder == "win") {
            console.log("You win!");
            playerWins++;
        } else {
            console.log("You lose. Try again!");
            computerWins++;
        }
        console.log(`Computer: ${computerWins} | Player: ${playerWins}`);
        if (computerWins == 5) {
            winner = "computer";
        } else if (playerWins == 5) {
            winner = "player";
        }

    } while (winner == "")

    if (winner == "player") { console.log("PLAYER IS WINNER!") }
    else { console.log("COMPUTER IS WINNER") }
}

game();