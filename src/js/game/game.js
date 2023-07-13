import {playRound, getComputerChoice} from './game-logic.js';
import {
  updateScore, showEndGameResult, showRoundText, showPlayAgainButton,
  showModal, addColors, removeColors, clearGameResult, clearRoundText,
  hidePlayAgainButton, clearScore,
}
  from './dom.js';

// Total number of rounds that have to be won in order for game to end
const ROUNDS = 5;

let playerWins = 0;
let computerWins = 0;
const BUTTONS_PLAYER = Array.from(
    document.getElementsByClassName('player-button'),
);

/**
 * Restart the game
 */
export function restartGame() {
  playerWins = 0;
  computerWins = 0;

  clearGameResult();
  clearRoundText();
  hidePlayAgainButton();
  clearScore();
  removeColors();
}

/**
 * Handles the players, and gets computers choices
 * and passes arguments to {@link playRound}
 * @param {string} playerChoice rock, paper or scissors
 */
export function handlePlayerChoice(playerChoice) {
  if (isGameOver() === false) {
    removeColors();
    const COMPUTER_CHOICE = getComputerChoice();
    const ROUND_RESULT = playRound(COMPUTER_CHOICE, playerChoice);
    addColors(playerChoice, COMPUTER_CHOICE);
    if (ROUND_RESULT === 'player') {
      playerWins++;
      updateScore('player', playerWins);
      showRoundText('player', playerChoice, COMPUTER_CHOICE);
    } else if (ROUND_RESULT === 'computer') {
      computerWins++;
      document.getElementById(`computer-${COMPUTER_CHOICE}`)
          .classList.add('computer-using');
      updateScore('computer', computerWins);
      showRoundText('computer', playerChoice, COMPUTER_CHOICE);
    } else {
      showRoundText('tie');
    }
    isGameOver();
  } else {
    showModal();
  }
}

/**
 * Start the game by adding event listeners to each player button
 */
export function initializeGame() {
  BUTTONS_PLAYER.forEach((button) => {
    button.addEventListener('click', () => {
      handlePlayerChoice(button.id);
    });
  });
}

/**
 * Checks if the player or computer have reached {@link ROUNDS} wins
 * @return {boolean}
 */
export function isGameOver() {
  const GAME_OVER = playerWins === ROUNDS || computerWins === ROUNDS;
  if (GAME_OVER) {
    showPlayAgainButton();
    if (playerWins === ROUNDS) {
      clearRoundText();
      showEndGameResult('PLAYER', playerWins, computerWins);
    } else {
      clearRoundText();
      showEndGameResult('COMPUTER', playerWins, computerWins);
    }
  }
  return GAME_OVER;
}
