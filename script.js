const againButton = document.querySelector('.again');
const guessInput = document.querySelector('.guess');
const numberOutput = document.querySelector('.number');
const checkButton = document.querySelector('.check');
const messageOutput = document.querySelector('.message');
const scoreShow = document.querySelector('.score');
const highscoreShow = document.querySelector('.highscore');
const bodyColor = document.querySelector('body');

let secrectNumber = Math.floor(Math.random() * 20) + 1;

// console.log(secrectNumber);

let scoreNumber = 20;
let highscoreNumber = 0;

const displayMessage = msg => {
  messageOutput.innerText = msg;
};

checkButton.addEventListener('click', () => {
  let guess = Number(guessInput.value);
  //   console.log(guess, typeof guess);
  //is not number
  if (!guess) {
    displayMessage('⛔ No number');
  } else if (guess === secrectNumber) {
    displayMessage('💐 Correct number!');
    bodyColor.style.backgroundColor = '#800080';
    numberOutput.innerText = secrectNumber;
    numberOutput.style.width = '30rem';
    numberOutput.style.backgroundColor = 'green';
    if (scoreNumber > highscoreNumber) {
      highscoreNumber = scoreNumber;
      highscoreShow.innerText = highscoreNumber;
    }
  } else if (guess !== secrectNumber) {
    if (scoreNumber > 1) {
      displayMessage(guess > secrectNumber ? '📈 Too high' : '📉Too low');
      scoreNumber--;
      scoreShow.innerText = scoreNumber;
      console.log(scoreNumber);
    } else {
      displayMessage('🔥 You lost the game!');
    }
  }
});

againButton.addEventListener('click', () => {
  secrectNumber = Math.floor(Math.random() * 20) + 1;
  //   console.log(secrectNumber);
  let guess = Number((guessInput.value = ''));
  scoreNumber = 20;
  displayMessage('Start guessing...');
  scoreShow.innerText = scoreNumber;
  numberOutput.innerText = '?';
  numberOutput.style.width = '20rem';
  numberOutput.style.backgroundColor = '#fff';
  bodyColor.style.backgroundColor = '#222';
});
