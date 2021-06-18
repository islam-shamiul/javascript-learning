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

let currentScore, score, activeUser, playing;

const init = function () {
  playing = true;
  currentScore = 0;
  score = [0, 0];
  activeUser = 0;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};
init();
const switchUser = function () {
  document.getElementById(`current--${activeUser}`).textContent = 0;
  currentScore = 0;
  activeUser = activeUser === 0 ? 1 : 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

//roll dice function

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchUser();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //add current score to total score
    score[activeUser] += currentScore;
    //display score
    document.getElementById(`score--${activeUser}`).textContent =
      score[activeUser];
    //check if player score is 100
    if (score[activeUser] >= 20) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activeUser}`)
        .classList.add('player--winner');
      diceEl.classList.add('hidden');
    } else {
      //switch the user
      switchUser();
    }
  }
});

btnNew.addEventListener('click', init);
