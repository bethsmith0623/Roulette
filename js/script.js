/*---- constants ---*/
const newBal = document.getElementById('bal');

/*---- app's state (variables) ----*/
let wager, balance, selection;

/*---- cached element references ----*/


/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);
document.querySelector(".table").addEventListener('click', selectNum);

/*---- functions ----*/
// init();

function initialize(){
  wager = '0';
  bal = '$100';
};

function makeBet() {
  // let betBtn = wager;
  const betBtn = document.getElementById("bet").value;
  // console.log("clicked button") 
  console.log(betBtn)
};

function selectNum(evt) {
  console.log(evt.target.innerHTML);
  evt.target.style.border = '5px solid blue';
};

function spinWhl() {

};

function matchSpin() {

};

function updateBal(betBtn) {
  if (winner === true) {
    console.log(newBal + betBtn);
  } else {
    console.log (newBal - betBtn);
  }
};

function render() {

};

