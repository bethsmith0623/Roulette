/*---- constants ---*/
const BEGBALANCE = "$100"

const CHIP = new Image ("Images/bluePokerChip.png")
/*---- app's state (variables) ----*/
let wager, balance, selection;

/*---- cached element references ----*/


/*---- event listeners ----*/
document.getElementById("placeBet").addEventListener('click', makeBet);

/*---- functions ----*/
// init();

function initialize(){
  wager = '0';
  balance = '$100';
};

function makeBet() {
  // let betBtn = wager;
  const betBtn = document.getElementById("bet").value;
  // console.log("clicked button") 
  console.log(betBtn)
};

function selectNum() {

};

function spinWhl() {

};

function matchSpin() {

};

function updateBal() {

};

function render() {

};

