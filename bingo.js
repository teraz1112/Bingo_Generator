document.addEventListener('DOMContentLoaded', () => {
  const newGameButton = document.getElementById('new-game');
  const nextBallButton = document.getElementById('next-ball');
  const currentBallElement = document.getElementById('current-ball');
  let drawnBalls = [];
  
  newGameButton.addEventListener('click', newGame);
  nextBallButton.addEventListener('click', drawNextBall);
  
  function newGame() {
    drawnBalls = [];
    currentBallElement.textContent = '';
    nextBallButton.disabled = false;
    generateBingo().then(numbers => {
      bingoNumbers = numbers;
      // ボタンを有効にする
      newGameButton.disabled = false;
      nextBallButton.disabled = false;
    }).catch(error => {
      console.error('Bingo generation failed:', error);
      // NEW GAME ボタンを有効にする
      newGameButton.disabled = false;
      // NEXT BALL ボタンは無効のまま
    });
    for (let i = 1; i <= 75; i++) {
      document.getElementById(`ball-${i}`).textContent = '';
    }
  }
  
  function drawNextBall() {
    let nextBall;
    do {
      nextBall = Math.floor(Math.random() * 75) + 1;
    } while (drawnBalls.includes(nextBall));
    drawnBalls.push(nextBall);
    currentBallElement.textContent = nextBall;
    document.getElementById(`ball-${nextBall}`).textContent = nextBall;
  }
});

