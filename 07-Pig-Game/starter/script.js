'use strict';
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
let currentScore = 0;
let score = [0, 0];
let activeUser = 0;
//roll dice function

btnRoll.addEventListener('click', function () {
  //genarate a radom dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //check if it's 1
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activeUser}`).textContent =
      currentScore;
  } else {
    document.getElementById(`current--${activeUser}`).textContent = 0;
    currentScore = 0;
    activeUser = activeUser === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
