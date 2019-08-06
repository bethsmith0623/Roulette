/*---- constants ---*/

/*---- app's state (variables) ----*/
let bet, bal, selection;

/*---- cached element references ----*/
let bal2 = document.getElementById("bal");
let bet2 = document.getElementById("bet");

/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
document.getElementById("spin").addEventListener('click', spinWhl);
document.getElementById("nextSpin").addEventListener('click', reset);

/*---- functions ----*/
initialize();

function initialize(){
  // bal = 100;
  bet = 100;
  document.getElementById("bal").value = bet;
};

function makeBet() {
  let bet3 = document.getElementById("bet").value;
  document.getElementById("message").innerHTML = 
  `The player's bet is $ ${bet3}. Make your table selection.`;
};

function selectNum(evt) {
  console.log(`${evt.target.innerHTML}`);
  evt.target.style.border = '5px solid blue';
  document.getElementById("spin").style.backgroundColor = "green";
};

function spinWhl() {
  let spinVal = (Math.floor(Math.random() * (36-0) + 0));
  document.getElementById("whlNum").innerHTML = spinVal
  document.getElementById("spin").style.backgroundColor = "white";
  // last user action
  // evaluate the values of bet vs. spin
  matchSpin(selection, spinVal)
};

function matchSpin(guess, actual) {
  if (guess === actual) {
    document.getElementById("message").style.color = "green"
    document.getElementById("message").innerHTML = "You WIN!"
  } else {
    document.getElementById("message").style.color = "red"
    document.getElementById("message").innerHTML = "You lose"
  }
  document.getElementById("nextSpin").style.backgroundColor = "green"
  getBalance(bal2, bet2);
};

function getBalance(guess, actual) {
  // let newBal = document.getElementById("bal").value;
  // console.log(`The player bet ${bet2.value}`)
  // console.log(`the players new total is ${bal2}`)
  if (guess !== actual) {
    console.log(bal2.value - bet2.value);
  } else {
    console.log(bal2.value + bet2.value);
  }
};

function reset() {
  document.getElementById("nextSpin").style.backgroundColor = "white"
  bet = '';
  
}