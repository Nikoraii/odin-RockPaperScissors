// Import necessary functions from the game module
import {initializeGame, restartGame} from './game/game.js';

// Initialize the game
initializeGame();

// Get the restart button and play-again-page elements
const RESTART = document.getElementById('restart-game');
const RESTART_PAGE = document.getElementById('play-again-page');

// Event handler for restart button click and play-again page click
const handleRestart = () => {
  restartGame();
};

// Attach event listeners to the restart button and play-again page
RESTART.addEventListener('click', handleRestart);
RESTART_PAGE.addEventListener('click', handleRestart);
