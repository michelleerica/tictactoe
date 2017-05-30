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

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },

  checkWin: function() {

  },
  game: [0,0,0,0,0,0,0,0,0], // game array

  altClicks: $(function(){
    var hits = 0; // keep track of clicks
    $('.cell').click(function(){ //
      if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
        var $imgX = $('<img>').attr('src', xImage);
        $(this).append( $imgX );
        gameLogic.trackPlayerTwo(gameLogic.addFunction);
        debugger
      } else { // for hits 1,3,5,7
          var $imgO = $('<img>').attr('src', oImage);
          $(this).append( $imgO);
          gameLogic.trackPlayerOne(gameLogic.addFunction);
      }
      console.log(gameLogic.game);

      hits++;
     return false;
    });
  }),

  //to obtain div IDs
  add: $('.cell').click(function(event) {
    var id = $(this).attr('id');
    console.log(id + "from addFunction");
    return id;
  // divTracker: $('.cell').on('click', gameLogic.addFunction),


})
}

}); //end of .ready

//


// addFunction: function(){
//     // var $cell = $('.cell');
//     var tracker = $('.cell').attr('id');
//     console.log(tracker + "from addFunction");
//     return tracker;
//   },
