const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn'); // New stop button

let score = 0;
let currentHole = null;
let gameInterval;
let moleTimeout;

function randomHole() {
  holes.forEach(hole => hole.classList.remove('mole'));
  const index = Math.floor(Math.random() * holes.length);
  currentHole = holes[index];
  currentHole.classList.add('mole');

  // Remove mole after 1 second
  moleTimeout = setTimeout(() => {
    currentHole.classList.remove('mole');
    currentHole = null;
  }, 1000);
}

holes.forEach(hole => {
  hole.addEventListener('click', () => {
    if (hole === currentHole) {
      score++;
      scoreDisplay.textContent = score;
      hole.classList.remove('mole');
      clearTimeout(moleTimeout);
      currentHole = null;
    }
  });
});

startBtn.addEventListener('click', () => {
  score = 0;
  scoreDisplay.textContent = score;
  clearInterval(gameInterval);
  gameInterval = setInterval(randomHole, 1200);
});

// Stop the game when Stop Game button is clicked
stopBtn.addEventListener('click', () => {
  clearInterval(gameInterval); // Stop the game interval
  clearTimeout(moleTimeout); // Stop the mole timeout
  holes.forEach(hole => hole.classList.remove('mole')); // Remove mole from any hole
});
