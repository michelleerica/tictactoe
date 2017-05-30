console.log('test')


var gameLogic = {
  game: [0,2,3,2,1,0,4,0,1], // game array

  win: {
    one: [0,1,2],
    two: [3,4,5],
    three: [6,7,8],
    four: [0,3,6],
    five: [1,4,7],
    six: [2,5,8],
    seven: [0,4,8],
    eight: [2,4,6],
  },

  winCheckOne: function (){
  var indexes = [];
  for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 2)
       indexes.push(i);
     }
     console.log(indexes.join(','));
   },

   winCheckTwo: function (){
   var indexes = [];
   for(var i=0; i<gameLogic.game.length; i++) {
     if(gameLogic.game[i] === 1)
        indexes.push(i);
      }
      console.log(indexes.join(','));
    },

  //splits out the win object as separate objects
//   checkWin: function() {
//     for (var prop in gameLogic.win) {
//       console.log(`gameLogic.win.${prop} = ${gameLogic.win[prop]}`);
//
//     }
// }
//   winCheck: var indexes = [];
// for(var i=0; i<gameLogic.game.length; i++) {
//     if(gameLogic.game[i] === 2)
//        indexes.push(i);
// }
//
// alert(indexes.join(',')); //2,3,9

}


  //   console.log(check)
  //   for (var i = 0; i < gameLogic.win.length; i++) {
  //     for (var j = 0; j < gameLogic.win[i].length; j++) {
  //     	var index = parseInt(gameLogic.win[i][j]);
  //     	console.log(gameLogic.win[i] + "'s' contents are" + gameLogic.game[index])
  //     }
  //   }
  // }


//
//
// for ( i=0; i<animals.length; i++ )
// {
//   for ( j=0; j<animals[i].length; j++ )
//   {
//     alert ( animals[i][j][0] + " is a " + animals[i][j][1] + " year old " + animals[i][j][2] );
//   }
// }
