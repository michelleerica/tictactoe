console.log('test')


var gameLogic = {
  game: [0,0,3,0,5,0,4,0,0], // game array

  win: [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ],
  checkWin: function() {
    for (var i = 0; i < gameLogic.win.length; i++) {
      for (var j = 0; j < gameLogic.win[i].length; j++) {
      	var index = parseInt(gameLogic.win[i][j]);
      	console.log(gameLogic.win[i] + "'s' contents are" + gameLogic.game[index])
      }
    }
  }
}
//
//
// for ( i=0; i<animals.length; i++ )
// {
//   for ( j=0; j<animals[i].length; j++ )
//   {
//     alert ( animals[i][j][0] + " is a " + animals[i][j][1] + " year old " + animals[i][j][2] );
//   }
// }
