'use strict'
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
let guess;
let playerNumber = null;
let endGame = false;

console.log(secretNumber)

const body = document.querySelector('body')
const number = document.querySelector('.number')
const scoreEl = document.querySelector('.score')
const highScoreEl = document.querySelector('.highscore')
const guessEl = document.querySelector('.guess')

let displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

const startGame = () => {
  playerNumber =  document.querySelector('.guess').value;

   if(!playerNumber){
    return displayMessage('Enter Number In Input !');
   }
   
   if(!endGame) {
    winOrLess();
   }
}

const winOrLess = () => {
  if(playerNumber == secretNumber) {
    win();
  } else if(score == 0) {
    loose()
  } else {
    checkMoreOrLess()
  }
}

const win = () => {
  displayMessage('Great, You guess number !')
  number.textContent = secretNumber;
  body.style.backgroundColor = "green";

  if(score > highScore) {
    highScore = score;
    highScoreEl.textContent = highScore;
  }
}

const loose = ()=> {
  scoreEl.textContent = score;
  body.style.backgroundColor = "red";
  displayMessage('You Loose !')
}

const checkMoreOrLess = () => {
  if(playerNumber > secretNumber){
    score--;
    scoreEl.textContent = score;
    displayMessage('Your number is ahead secret number !')
 } else if(playerNumber < secretNumber) {
    score--;
    scoreEl.textContent = score;
    displayMessage('your number is less secret number !')
 }
}

const playAgain = () => {
  body.style.backgroundColor = '#222'
  scoreEl.textContent = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  guessEl.value = '';
  console.log(secretNumber)
  number.textContent = '?'
  score = 20;
}

document.querySelector('.check').addEventListener('click', startGame);
document.querySelector('.again').addEventListener('click', playAgain);
