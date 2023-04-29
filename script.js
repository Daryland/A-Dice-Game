let dice1 = document.getElementById('dice1');
let dice2 = document.getElementById('dice2');
let dice1Img = document.getElementById('dice1-img');
let dice2Img = document.getElementById('dice2-img');
let counter = document.getElementById('counter');
let rollButton = document.querySelector('button');

function rollDice() {
  let dice1Val = Math.floor(Math.random() * 6) + 1;
  let dice2Val = Math.floor(Math.random() * 6) + 1;
  
  dice1.value = dice1Val;
  dice2.value = dice2Val;
  counter.innerText = Number(counter.innerText) + 1;
  
  // Display corresponding dice image for dice1
  dice1Img.src = `/White Dice/dice${dice1Val}.svg`;
  dice1Img.alt = `Dice ${dice1Val}`;
  
  // Display corresponding dice image for dice2
  dice2Img.src = `/Black Dice/dice${dice2Val}.svg`;
  dice2Img.alt = `Dice ${dice2Val}`;
}
