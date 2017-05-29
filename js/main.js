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

var addFunction = function(){
    var tracker = $(this).attr('id');
    console.log(tracker + "from tracker");

    return tracker;
  }
var divTracker = $('.cell').bind('click', addFunction);
    // console.log(divTracker + "from tracker")

var gameLogic = {

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },

  checkWin: function() {

  },
  game: [0,0,0,0,0,0,0,0,0],

  altClicks: $(function(){
    var hits = 0; // keep track of clicks
    $('.cell').click(function(){ //
    if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
      var $imgX = $('<img>').attr('src', xImage);
      $(this).append( $imgX );
      var x = addFunction;// need to pull through the DIV ID
      console.log(x + "checking line 35");
      gameLogic.trackPlayerTwo(x);
      console.log(gameLogic.game);
    } else { // for hits 1,3,5,7
        var $imgO = $('<img>').attr('src', oImage);
        $(this).append( $imgO);
        var y = addFunction();// need to pull through the DIV ID from divTracker above
        console.log(y + "checking 42");
        gameLogic.trackPlayerOne(y);
        debugger;
        console.log(gameLogic.game + "line 43");

    }
     hits++;
     return false;
      });
  })

}


}); //end of .ready

//to access img:
// var $ax = $('#ax');
// $ax.html()

//true
// $('.cell').html() === '<img src="http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png">'
