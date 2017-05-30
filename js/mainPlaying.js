console.log('test')


var oImage = 'http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png';
var xImage = 'http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/2e/Transparent_City_Sticker.png/revision/latest?cb=20170111222644'

$(document).ready(function () {
//
// //click function with anonymous function inside
//   var divTracker = $('.cell').bind('click', addFunction);
//       return ;// gets the id of a clicked link that has a class of menu. THIS NUMBER IS NOT PULLING THROUGH TO game.
//       console.log(tracker + "from tracker")
// /////


//game object
var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // game array

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

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },
  //
  checkWin: function() {
    for (var i = 0; i < this.game.length; i++) {
    	var index = parseInt(this.win[i]);
    	console.log(this.game[index])}

    // for (var i = 0; i < gameLogic.win.length; i++) {
    //     for (var j = 0; j < gameLogic.win[i].length; j++) {
    //       if ()(gameLogic.win[i][j])
    //     }
    //   }

    },

  altClicks: $(function(){
    var hits = 0; // keep track of clicks
    $('.cell').click(function(){
      if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
        var $imgX = $('<img>').attr('src', xImage);
        $(this).append( $imgX );
        gameLogic.trackPlayerTwo(this.id);

      } else { // for hits 1,3,5,7
          var $imgO = $('<img>').attr('src', oImage);
          $(this).append( $imgO);
          gameLogic.trackPlayerOne(this.id);
      }
      gameLogic.checkWin();
      console.log(gameLogic.game);
      hits++;
     return false;
    });
  }),

}

}); //end of .ready

//
// //loop for returning contents of particular indicies of an array, using the indices specified in another array...
// for (var i = 0; i < testindex.length; i++) {
// 	var index = parseInt(testindex[i]);
// 	console.log(testArray[index])}
