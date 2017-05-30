console.log('test')


var oImage = 'http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png';
var xImage = 'http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/2e/Transparent_City_Sticker.png/revision/latest?cb=20170111222644'

var hits = 0; // keep track of clicks

$(document).ready(function () {

  $('.cell').click(function(){
    if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
      var $imgX = $('<img>').attr('src', xImage);
      $(this).append( $imgX );
      gameLogic.trackPlayerTwo(this.id);
      gameLogic.winDetector(2);

    } else { // for hits 1,3,5,7
        var $imgO = $('<img>').attr('src', oImage);
        $(this).append( $imgO);
        gameLogic.trackPlayerOne(this.id);
        gameLogic.winDetector(1);
    }


    console.log(gameLogic.game);
    hits++;
    if (gameLogic.winDetector() === true){
      alert("gameover!");
    }
  });

var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // game array

  win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },

  // altClicks: function(){
  //   console.log('altClicks!!');
  // },

  arrayConvertp1: function (){
  var indexes = [];
  for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 1){
       indexes.push(i);
       var listOne = indexes.join(',');
       console.log("test line 57: " +listOne);
       return listOne;}
       console.log(gameLogic.game)
     } //closes for loop
   },//closes function


   arrayConvertp2: function (){
   var indexes = [];
   for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 2){
        indexes.push(i);
    var listTwo = indexes.join(',');
    console.log("test line 59: " +listTwo);
    return listTwo;
    console.log(gameLogic.game);
    }
  }
},//closes function

  winDetector: function (player) {
    for (var i = 0; i < gameLogic.win.length; i++) {
      var possWins = gameLogic.win[i];
      var a = possWins[0];//this cycles from indices 1-3 of each set of arrays in 'wins'
      var b = possWins[1];
      var c = possWins[2];

      var aVal = gameLogic.game[a];
      var bVal = gameLogic.game[b];
      var cVal = gameLogic.game[c];

      var winner = false;
      if (aVal === player && bVal === player && cVal === player){
        alert("player " + player + " has won the game!");
        winner = true;
        return winner;
      }
      else if (winner === false)
        { if (hits>=8)
          { alert("It's a draw. No one wins")
      return}
      }
    // } else {alert()}
    // debugger;
    // return possWins;
    }
  }
  // reset: {gameLogic.game = [0,0,0,0,0,0,0,0,0]} // game array

  //
  // identifyWinner: function(player) {
  //   if (gameLogic.winDetector === true) {
  //     console.log('winner');
  //     alert("player" + player + " has won the game!");
  //   }

  //
  // checkWin: function () {
  //   //check if any of the winArrayConverts appear in the arrayConverter1 or 2.. if true -> WIN


    // console.log(gameLogic.checkGameBoardAgainstWinArray([[1,2,3],[3,4,5]], [1,2,3])); // true
} //close object

}); //end of .ready
