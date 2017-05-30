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



//
//     function containsAll(arr1, arr2){
//      for(var i = 0 , len = arr1.length; i < len; i++){
//         if(arr2.indexOf(arr1[i]) == -1) return false;
//      }
//
//      return true;
//
// }
//
// var arr1 = [34, 78, 89];
// var arr2 = [78, 67, 34, 99, 56, 89];
// //
// winCheck: function() {
//   var containsVal = true;
//
//   $.each(gameLogic.arrayConvert(), function(i, val){
//     if(!$.inArray(val, gameLogic.game)!== -1){
//          retVal = false;
//          console.log('this is false')
//          return false;}
//     if(containsVal){
//       console.log(containsVal);  //arr2 contains all the values from arr1
//     }})
// }
// }


  //
  // var first = [1,3];
  // var second = [1,2,3,4,5];
  //
  // if (containsAll(first, second)) {
  //    console.log(true);
  // } else {
  //    console.log(false);
  // }

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
