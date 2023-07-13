const ROUND_TEXT = document.getElementById('round-text');
const GAME_RESULT_TEXT = document.getElementById('game-result');
const END_TEXT = document.getElementById('end-text');
const PLAY_AGAIN_PAGE = document.getElementById('play-again-page');
/**
 * Add colors for pressed buttons for both player and computer
 * @param {string} playerChoice 'rock', 'paper', or 'scissors'
 * @param {string} computerChoice 'rock', 'paper', or 'scissors'
 */
export function addColors(playerChoice, computerChoice) {
  const PLAYER_BUTTON = document.getElementById(playerChoice);
  PLAYER_BUTTON.classList.add('using');
  const COMPUTER_BUTTON = document.getElementById(`computer-${computerChoice}`);
  COMPUTER_BUTTON.classList.add('computer-using');
}
/**
 * Remove colors from both last pressed player and computer buttons
 */
export function removeColors() {
  const COMPUTER_BUTTONS = Array.from(
      document.getElementsByClassName('computer-button'),
  );
  COMPUTER_BUTTONS.forEach((computerButton) =>
    computerButton.classList.remove('computer-using'),
  );
  const PLAYER_BUTTONS = Array.from(
      document.getElementsByClassName('player-button'),
  );
  PLAYER_BUTTONS.forEach((playerButton) =>
    playerButton.classList.remove('using'),
  );
}

/**
 * Changes the score on page for either computer or player
 * @param {string} element computer or player
 * @param {number} score computer wins or player wins
 */
export function updateScore(element, score) {
  const SCORE_ELEMENT = document.getElementById(`${element}-score`);
  SCORE_ELEMENT.textContent = score;
}
/**
 * Clears the score text on page for both computer and player
 */
export function clearScore() {
  const PLAYER_SCORE = document.getElementById('player-score');
  const COMPUTER_SCORE = document.getElementById('computer-score');
  PLAYER_SCORE.textContent = 0;
  COMPUTER_SCORE.textContent = 0;
}

/**
 * Shows text after each round where it's displayed who won and why
 * @param {string} roundWinner Computer or Player
 * @param {string} playerChoice What player picked
 * @param {string} computerChoice What computer 'picked'
 */
export function showRoundText(roundWinner, playerChoice, computerChoice) {
  if (roundWinner === 'player') {
    ROUND_TEXT.textContent = `Player wins! ${playerChoice.toUpperCase()} 
    beats ${computerChoice.toUpperCase()}.`;
  } else if (roundWinner === 'computer') {
    ROUND_TEXT.textContent = `Computer wins. ${computerChoice.toUpperCase()} 
    beats ${playerChoice.toUpperCase()}.`;
  } else {
    ROUND_TEXT.textContent = `It's a tie!`;
  }
}
/**
 * Removes the text that shows after each round is played
 */
export function clearRoundText() {
  ROUND_TEXT.textContent = '';
}

/**
 * Shows popup modal in case user tries to any choice again
 * before restarting the game
 */
export function showModal() {
  const MODAL_PLAY_AGAIN = new bootstrap.Modal(
      document.getElementById('staticBackdrop'),
  );
  MODAL_PLAY_AGAIN.show();
}
/**
 * Show the play again button at the end of a page
 */
export function showPlayAgainButton() {
  PLAY_AGAIN_PAGE.classList.remove('hidden');
}
/**
 * Hides the play again button at the end of a page
 */
export function hidePlayAgainButton() {
  PLAY_AGAIN_PAGE.classList.add('hidden');
}

/**
 * Displays the winner with the final result
 * @param {string} result The game winner
 * @param {number} playerWins Number of rounds player has won
 * @param {number} computerWins Number of rounds computer has won
 */
export function showEndGameResult(result, playerWins, computerWins) {
  END_TEXT.textContent = `FINAL SCORE: Player(${playerWins}) - 
  Computer(${computerWins})`;
  GAME_RESULT_TEXT.textContent = `WINNER: ${result}!`;
}
/**
 * Removes the final result and game winner display
 */
export function clearGameResult() {
  GAME_RESULT_TEXT.textContent = '';
  END_TEXT.textContent = '';
}
