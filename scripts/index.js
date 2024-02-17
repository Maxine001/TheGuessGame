//import { gameRules } from './main-game.js';

function addButton(){
  const buttonElement = document.querySelector('.add-button');
  buttonElement.addEventListener('click',() => {
    const user = document.querySelector('.inputChange');
    let userName = user.value;
    user.value ='';
    const displayMessage = `Hello Welcome ${userName}...\n Do you want to Play game?
    <button onclick="yesButton('yes')">Yes</button> or <button>No</button>`;
    console.log(displayMessage)
    document.querySelector('.display').innerHTML = displayMessage;
    
    
  })
  
}
addButton();



const yesButton = (param) => {
  if(param ==='yes') {
    location.replace('mainGame.html');
  }
}


