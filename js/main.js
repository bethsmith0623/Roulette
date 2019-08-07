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

/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
document.getElementById("spin").addEventListener('click', spinWhl);
document.getElementById("nextSpin").addEventListener('click', reset);

/*---- functions ----*/
initialize();

function initialize(){
  bal = 100;
  placeBet.style.backgroundColor = "green";
  render();
};

function render() {
  document.getElementById("bal").value = bal;
};

function makeBet() {
  // let bet2 = document.getElementById("bet").value;
  if (parseInt(bal2.value) === 0) {
    message.style.color = "red";
    message.innerHTML = `Your balance is $0. Thank you for playing.`;
  } else if (parseInt(bet2.value) > parseInt(bal2.value)) {
    message.style.color = "red";
    message.innerHTML = `You do not have enough to make that wager.`;
  } else {
    message.style.color = "black"; 
    message.innerHTML = `The player's bet is $ ${bet2.value}. Make your table selection.`;
    placeBet.style.backgroundColor = "white";
  }
};

function selectNum(evt) {
  if (selection) return;
  selection = evt.target
  evt.target.style.border = '5px solid blue';
  spin.style.backgroundColor = "green";
};

function spinWhl() {
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

function reset() {
  if(selection) {
    selection.style.border = 'none';
    selection = undefined
    message.innerHTML = ""
    wheelNum.innerHTML = ""
  }
  nextSpin.style.backgroundColor = "white";
  placeBet.style.backgroundColor = "green";
}