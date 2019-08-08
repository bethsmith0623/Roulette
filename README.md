# **_Roulette_**

**_HISTORY_**

Roulette comes from the French word for 'little wheel'. Legend has it that Blaise Pascal accidently invented the gaming wheel in 1655 while trying to invent a perpetual motion machine. A hydrid game using the gaming wheel and a betting table was invented in 1720 in France and has been played in its present form since 1796. The zero was added to the gaming wheel by Francois and Louis Blanc in the mid-1800's to give the house an edge. This addition birthed the famous Monte Carlo gaming culture. When the game was brought to America, the double zero was added to give the house an even greater edge. Currently there are 2 kinds of gaming wheels, the European wheel with 37 numbers and the American wheel with 38 numbers.

In casino play, there are a variety of betting options with varying payouts based on probability. Inside bets such as the single number bet have higher payouts than outside bets such as odd/even or black/red. The game also typically imposes minimum and maximum bets. The dealer can allow bets to continue while the ball spins until he announces "no nore bets".

**_MOTIVATION AND DESIGN_**

As a child, my Aunt Helen had a miniature roulette wheel that I loved to play with. This was my inspiration for creating this game. Currently the game I have built here accepts single number table selections only and does not have minimum or maximum bets. The payout for my game is just the amount of the wager. Future versions will include a functioning wheel to spin as well as additional betting options and proportional payouts (see Next Steps below).

[Original wireframe](https://wireframe.cc/pro/pp/3d912db8b264588)

[Original pseudocode](https://docs.google.com/document/d/1SJwBhMl_dXjQCciWCenDWi_vRhLC5N65a3xe0IveJaM/edit?usp=sharing)


## **_HOW TO PLAY:_**

[Roulette game](https://bethsmith0623.github.io/Roulette/)

The game page features a minimalistic design with a message bar that walks the user through game play.
![Game page](https://i.imgur.com/OxKwqMd.png)


1. Type in the amount you would like to wager in the box.
![Type in your wager](https://i.imgur.com/I2RufCb.png)

2. When you click the PLACE BET button a message appears prompting you to make your table selection.
![Click Place Bet](https://i.imgur.com/rxBzT47.png)

3. Click on the number you would like to place your wager on. This game is currently accepting single number selections only and the number you choose appears with a blue border.
![Make selection](https://i.imgur.com/3vGO1ta.png)

4. Click the SPIN button. A number is generated to simulate a wheel spin and that number is displayed above the button. In the bank area your win/lose message appears and the balance is updated. To continue play, click the NEXT SPIN button. The wheel and table are cleared for another round.
![Spin the 'wheel'](https://i.imgur.com/UDDhAL3.png)

5. If you try to place a bet while your bank is at $0, you will be prompted to reset the game. The reset feature is also available at any time during the game but the button only changes color when your game is over.
![Play again](https://i.imgur.com/IwTbTq2.png)


**_TECHNOLOGY USED_**

* HTML  
* CSS  
* JavaScript  


**_NEXT STEPS_**

1. Add logic to generate a pointer with a wheel that spins (requires knowledge in HTML5 Canvas).
2. Add logic for betting on RED or BLACK.
3. Add logic for betting on ODD or EVEN numbers.
4. Add logic for betting on 1st dozen, 2nd dozen, or 3rd dozen.
5. Add logic for betting HIGH (numbers 1 to 18) or LOW (numbers 19 to 36).
6. Add the mathematical formulas for proportional payouts.


**_ROULETTE TRIVIA_**

The wheel is spun in one direction and the ball in the opposite direction.

The odds of two consecutive wins on a European wheel are exactly 1368 to 1 against.

The sum of all the numbers on the wheel is 666.

Wheel sequencing and table design is specific:  
* 0 and 00 are always green,  
* 1-10 and 19-28 have odd numbers in red and evens in black,  
* 11-18 and 29-36 have odd numbers in black and evens in red, and  
* the color pattern on the wheel alternates red and black.