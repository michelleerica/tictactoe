console.log('test')


var gameLogic = {
  game: [1,1,1,2,1,0,4,0,1], // game array

  win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],


  checkGameBoardAgainstWinArray: function () {
  for (var i = 0; i < gameLogic.win.length; i++) {
    console.log(gameLogic.win[i]);
  }
}
}
