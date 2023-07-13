const CHOICE = ['rock', 'paper', 'scissors'];

/**
 * Randomly get one option from {@link CHOICE}
 * @return {string} rock, paper or scissors
 */
export function getComputerChoice() {
  const RANDOM_INDEX = Math.floor(Math.random() * CHOICE.length);
  return CHOICE[RANDOM_INDEX];
}

/**
 * Play round based on players and computers choices
 * @param {string} computerChoice Random computer choice
 * @param {string} playerChoice Player choice passed as argument
 * @return {string} Returns the outcome of round, 'computer',
 * 'player' winner or 'tie'
 */
export function playRound(computerChoice, playerChoice) {
  switch (computerChoice) {
    case playerChoice:
      return 'tie';
    case 'rock':
      return playerChoice === 'scissors' ? 'computer' : 'player';
    case 'paper':
      return playerChoice === 'rock' ? 'computer' : 'player';
    case 'scissors':
      return playerChoice === 'paper' ? 'computer' : 'player';
    default:
      return 'unknown';
  }
}
