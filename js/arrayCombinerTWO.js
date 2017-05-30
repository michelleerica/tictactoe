console.log('test')


var oImage = 'http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png';
var xImage = 'http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/2e/Transparent_City_Sticker.png/revision/latest?cb=20170111222644'

$(document).ready(function () {
var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // game array

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

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },

  altClicks: $(function(){
    var hits = 0; // keep track of clicks
    $('.cell').click(function(){
      if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
        var $imgX = $('<img>').attr('src', xImage);
        $(this).append( $imgX );
        gameLogic.trackPlayerTwo(this.id);
        console.log(gameLogic.arrayConvertp1())


      } else { // for hits 1,3,5,7
          var $imgO = $('<img>').attr('src', oImage);
          $(this).append( $imgO);
          gameLogic.trackPlayerOne(this.id);
          console.log(gameLogic.arrayConvertp2())

      }
      console.log(gameLogic.game);
      hits++;
     return false;
    });
  }),

  arrayConvertp1: function (){
  var indexes = [];
  for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 2)
       indexes.push(i);
     }
     var listOne = indexes.join(',');
     console.log("test line 57: " +listOne);
     return listOne;
   },

   arrayConvertp2: function (){
   var indexes = [];
   for(var i=0; i<gameLogic.game.length; i++) {
     if(gameLogic.game[i] === 1)
        indexes.push(i);
      }
      var listTwo = indexes.join(',');
      console.log("test line 59: " +listTwo);
      return listTwo;    },

  winArrayConvert: function () { //converts win objects into individual lines to compare against
     for (var prop in gameLogic.win) {
      var m = `${gameLogic.win[prop]}`;
      console.log(m);
      } //for loop to print out all lines in win objects

   },//close arrayConvert

//source = possible wins; search = game Board converted to P1/P2 arrays
  checkGameBoardAgainstWinArray: function(source, search) {
    for (var i = 0; i < search.length; i++) {
        // skip not same length
        if (source[i].length != search.length) continue;
        // compare each element
        for (var j = 0; j < source.length; j++) {
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
} //close object
}); //end of .ready
