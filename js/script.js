/*---- constants ---*/

/*---- app's state (variables) ----*/
let bet, bal, selection;

/*---- cached element references ----*/
let newBal = document.getElementById("bal").value;
let betBtn = document.getElementById("bet").value;


/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
document.getElementById("spin").addEventListener('click', spinWhl);

/*---- functions ----*/
initialize();

function initialize(){
  bal;
  bet = 100;
  document.getElementById("bal").textContent = bet;
};

function makeBet() {
  let betBtn = document.getElementById("bet").value;
  document.getElementById("message").innerHTML = 
  `The player's bet is $ ${betBtn}. Make your table selection.`;
};

function selectNum(evt) {
  console.log(` ${evt.target.innerHTML}`);
  evt.target.style.border = '5px solid blue';
};

function spinWhl() {
  let spinVal = (Math.floor(Math.random() * (36-0) + 0));
  document.getElementById("whlNum").innerHTML = spinVal
  // last user action
  // evaluate the values of bet vs. spin
  matchSpin(selection, spinVal)
};

function matchSpin(guess, actual) {
  if (guess === actual) {
    document.getElementById("message").innerHTML = "You WIN!"
  } else {
    document.getElementById("message").innerHTML = "You lose"
  }
  getBalance(bal, betBtn);
};

function getBalance(guess, actual) {
  let newBal = document.getElementById("bal").value;
  console.log(`The player bet ${betBtn}`)
  console.log(`the players new total is ${newBal}`)
  if (guess !== actual) {
    return (newBal - betBtn);
  } else {
    return (newBal + betBtn);
  }
};
