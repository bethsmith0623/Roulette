/*---- constants ---*/
const newBal = document.getElementById('bal').innerHTML;

/*---- app's state (variables) ----*/
let wager, balance, selection;

/*---- cached element references ----*/


/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);
document.getElementById("spin").addEventListener('click', spinWhl);

/*---- functions ----*/
// init();

function init(){
  wager = '';
  document.getElementById("bal").innerHTML = '100';
  render();
};

function makeBet() {
  // let betBtn = wager;
  const betBtn = document.getElementById("bet").value;
  // console.log("clicked button") 
  document.getElementById("message").innerHTML = `The player's bet is ${betBtn}`;
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
  return guess === actual ? 
    document.getElementById("message").innerHTML = "You WIN!"
    :
    document.getElementById("message").innerHTML = "You lose"

    getBalance(balance, betBtn);
  };

function getBalance(newBal, betBtn) {
  if (winner === true) {
    document.getElementById("bal").innerHTML = (newBal + betBtn);
  } else {
    document.getElementById("bal").innerHTML = (newBal - betBtn);
  }
};

function render() {
//render balance
  makeBet();
  selectNum();
  spinWhl();
  matchSpin();
  getBalance();

};

