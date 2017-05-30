console.log('test')


var gameLogic = {
  game: [1,1,1,2,1,0,4,0,1], // game array

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

  arrayConvertp1: function (){
  var indexes = [];
  for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 2)
       indexes.push(i);
     }
     var listOne = indexes.join(',');
     console.log(listOne);
     return listOne;
   },

   arrayConvertp2: function (){
   var indexes = [];
   for(var i=0; i<gameLogic.game.length; i++) {
     if(gameLogic.game[i] === 1)
        indexes.push(i);
      }
      console.log(indexes.join(','));
    },

  winArrayConvert: function () { //converts win objects into individual lines to compare against
     for (var prop in gameLogic.win) {
      var m = `${gameLogic.win[prop]}`;
      console.log(m);
      } //for loop to print out all lines in win objects

// console.log(isaWinArrayInGameArray(m, [1,2,3])); // true


   },//close arrayConvert

  checkGameBoardAgainstWinArray: function(source, search) {
    var searchLen = search.length;
    for (var i = 0, len = source.length; i < len; i++) {
        // skip not same length
        if (source[i].length != searchLen) continue;
        // compare each element
        for (var j = 0; j < searchLen; j++) {
            // if a pair doesn't match skip forwards
            if (source[i][j] !== search[j]) {
                break;
            }
            return true;
        }
    }
    return false;

    // console.log(gameLogic.checkGameBoardAgainstWinArray([[1,2,3],[3,4,5]], [1,2,3])); // true
  }
  }
