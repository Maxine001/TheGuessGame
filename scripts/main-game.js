

function gameRules() {
  const rulesText = document.querySelector('.text');
  const rulesMessage = 'Welcome, i am Adam and i am going to let you play my game :)\n \
   Here are the rules for the game \n \
   1. You have just 3 trials to pick the correct number in my head.\n';
  rulesText.append(rulesMessage);
};
gameRules();

let randomNumber = '';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  randomNumber = randNumber.toString()
}
getRandomInt(1,7);
console.log(randomNumber)





const displayText = document.querySelector('.display-name');
const displayResult = document.querySelector('.result');

function playGame() {
  let guessCount = 0;
  document.querySelector('.number-container').addEventListener('click',(event) => {
    
    const buttonId = event.target && event.target.dataset.buttonId;
    let btn = event.target;
    console.log(btn);
    
    if(buttonId === randomNumber) {
      displayResult.innerHTML = 'You won';
      btn.classList.add('add-class');
      winSound();
      setGameOver();
    }
     
    else if(guessCount === 2){
      displayResult.innerHTML = 'Game Over!!!';
      setGameOver(btn);
      lossSound();
    }
    
    else{
      displayResult.innerHTML = 'You lose'
      btn.classList.add('add-failed');
      lossSound();
    }
    
    guessCount+=1;
    
  });

  
  console.log(guessCount);
  
}

playGame()




//sound of game
function winSound() {
  let myAudio = document.querySelector('#sound1');
  myAudio.play();
}

function lossSound() {
  let myAudio = document.querySelector('#sound2');
  myAudio.play();
}



const popUp = document.querySelector('#pop-up');
function popupPage() {
  const popUpText = document.querySelector('.pop-up-text');
  console.log(popUp)
  popUp.style.display = "block";
  if(displayResult.innerHTML === 'You won') {
    popUpText.innerHTML = 'congratulations You won!!!';
  }
  else if(displayResult.innerHTML = 'Game Over!!!') {
    popUpText.innerHTML = 'sorry you lost';
  }
  
}


function setGameOver() {
  resetButton = document.createElement('button');
  resetButton.className = "new-button";
  resetButton.textContent = 'Start new game';
  popUp.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
  popupPage();
  
}


function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  //lastResult.style.backgroundColor = 'white';
  location.reload();
  getRandomInt(1,7);//randomNumber = Math.floor(Math.random() * 100) + 1;
}












 
  
 
