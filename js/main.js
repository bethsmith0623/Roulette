/*---- constants ---*/

/*---- app's state (variables) ----*/
let bet, bal, selection;

/*---- cached element references ----*/
let bal2 = document.getElementById("bal");
let bet2 = document.getElementById("bet");
let message = document.getElementById("message");
let placeBet = document.getElementById("placeBet");
let spin = document.getElementById("spin");
let wheelNum = document.getElementById("whlNum");
let nextSpin = document.getElementById("nextSpin");
let resetGame = document.getElementById("reset");

/*---- event listeners ----*/
placeBet.addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
spin.addEventListener('click', spinWhl);
nextSpin.addEventListener('click', nextTurn);
resetGame.addEventListener('click', reset);

/*---- functions ----*/
initialize();

function initialize(){
  bal = 100;
  placeBet.style.backgroundColor = "green";
  message.innerHTML = "";
  render();
};

function render() {
  document.getElementById("bal").value = bal;
};

function makeBet() {
  if (parseInt(bal2.value) === 0) {
    message.style.color = "red";
    message.innerHTML = `Your balance is $0. Thank you for playing.`;
    resetGame.style.backgroundColor = "yellow";
  } else if (parseInt(bet2.value) > parseInt(bal2.value)) {
    message.style.color = "red";
    message.innerHTML = `You do not have enough to make that wager.`;
  } else {
    message.style.color = "blue"; 
    message.innerHTML = `The player's bet is $ ${bet2.value}. Make your table selection.`;
    placeBet.style.backgroundColor = "white";
  }
};

function selectNum(evt) {
  if (parseInt(bal2.value) === 0) return;
  if (parseInt(bet2.value) > parseInt(bal2.value)) return;
  if (selection) return; 
  selection = evt.target
  evt.target.style.border = '5px solid blue';
  spin.style.backgroundColor = "green";
};

function spinWhl() {
  if (parseInt(bal2.value) === 0) return;
  if (parseInt(bet2.value) > parseInt(bal2.value)) return;
  let spinVal = (Math.floor(Math.random() * (36-0) + 0));
  wheelNum.innerHTML = spinVal
  spin.style.backgroundColor = "white";
  matchSpin(selection, spinVal);
};

function matchSpin(guess, actual) {
  if (guess === actual) {
    message.style.color = "green"
    message.innerHTML = "You WIN!"
  } else {
    message.style.color = "red"
    message.innerHTML = "You lose"
  }
  getBalance(bal2, bet2);
  nextSpin.style.backgroundColor = "green"
};

function getBalance(guess, actual) {
  if (guess !== actual) {
    bal -= parseInt(bet2.value)
    render()
  } else {
    bal += parseInt(bet2.value)
    render()
  }
};

function nextTurn() {
  if(selection) {
    selection.style.border = 'none';
    selection = undefined
    message.innerHTML = ""
    wheelNum.innerHTML = ""
  }
  nextSpin.style.backgroundColor = "white";
  placeBet.style.backgroundColor = "green";
}

function reset() {
  nextTurn();
  initialize();
  resetGame.style.backgroundColor = "lightyellow";
}