# Tic Tac Toe

### by Michelle Lo


This is my [Tic Tac Toe Project ](https://michelleerica.github.io/tictactoe/).

#### What it is
Tic Tac Toe is a simple game with the objective of getting three squares in a row.

Players alternate placing Xs and Os on the game board until either opponent has three in a row or all nine squares are filled.


This project is an interactive tic tac toe game, which can be played with two players (_two player mode_), or against the computer under the guise of Bill Murray (_Bill Murray mode_).

#### What it does
Through click handlers, the unique ID of the square being played is obtained an an image node is created and appended to that particular square. After the marker (_X_ or _O_) is placed on the board, a check is run against an array representing the game board to see if the game has been won. If the game is won, or if the board is full, players will be notified of the win / draw. In the absence of a win, provided there continues to be squares left on the board, the next player has a turn.

In _Bill Murray mode_, the computer takes the role of the second player. Bill's moves are selected at random (``Math.random`` to be exact). If the random number selected correlates with a square on the game board already used / index in the array representing the game board which has already been taken, the computer will take the next available square.

#### Libraries used
- jQuery
- Animate CSS

#### Features
- Two different playing modes _two player mode_ and _Bill Murray mode_
- Animation on win
- Score board which tracks wins is on screen
- reset board - available anytime (i.e. during play and at end of game)

#### Known bugs
