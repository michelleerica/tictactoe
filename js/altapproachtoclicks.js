var oImage = 'img/heartbleed.png';
var xImage = 'img/xicon.png';


var hits = 0; // keep track of clicks
var winX = 0; // keep track of X wins
var winO = 0; // keep track of O wins


$(document).ready(function () {
  $('.cell').on("click", function(){
    if (hits % 2 !== 0) { //for hits 2,4,6,8 etc
      var $imgX = $('<img>').attr('src', xImage);
      $(this).append( $imgX );
      $('img').addClass("inPlay");
      gameLogic.trackPlayerTwo(this.id);
      gameLogic.winDetector(2);
      // debugger;

    } else if (hits % 2 === 0) { // for hits 1,3,5,7
      var $imgO = $('<img>').attr('src', oImage);
      $(this).append( $imgO);
      $('img').addClass("inPlay");
      gameLogic.trackPlayerOne(this.id);
      gameLogic.winDetector(1);
    }

    console.log(gameLogic.game);
    hits++;

  });

//reset
  $( "#reset" ).on("click", function() {
    gameLogic.game = [0,0,0,0,0,0,0,0,0],
    $('.inPlay').remove();
    console.log(gameLogic.game)

    $('.cell').on("click").css('backgroundColor', '#7586B7');
    $('.animated bounce flash').remove();
    $("body").css('backgroundColor', '#A7CAB1');
    $("h1").html("Play again");
    $('.animated bounce swing rollIn').remove ();
  });

var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // game array

  win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]], // win array

  trackPlayerOne: function (y) {
    gameLogic.game[y] = 1;
  },

  trackPlayerTwo: function (x) {
    gameLogic.game[x] = 2;
  },

  arrayConvertp1: function (){
  var indexes = [];
  for(var i=0; i<gameLogic.game.length; i++) {
    if(gameLogic.game[i] === 1){
     indexes.push(i);
     var listOne = indexes.join(',');
     return listOne;
     console.log(gameLogic.game)
   } // close if
     } //closes for loop
   },//closes function


 arrayConvertp2: function (){
 var indexes = [];
 for(var i=0; i<gameLogic.game.length; i++) {
  if(gameLogic.game[i] === 2){
    indexes.push(i);
    var listTwo = indexes.join(',');
    return listTwo;
    console.log(gameLogic.game);
    } //close if
  }//close for
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

      if (aVal === player && bVal === player && cVal === player){
        gameLogic.winNotification(player);
        // debugger;
        return player;

      } else if ((aVal !== player || bVal !== player || cVal !== player) && (hits >= 8 )) {
        gameLogic.drawNotification();
      }
    // debugger;
    }
  },

  winNotification: function(winner) {
    var $gameboard = $('.cell');
    $gameboard
      .css('backgroundColor', 'red')
      // .off('click');
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'red');
    $("h1").html("Player " + winner + " won!").addClass('animated bounce swing rollIn');
  },

  drawNotification: function() {
    var $gameboard = $('.cell');
    $gameboard
      .css('backgroundColor', 'grey')
      // .off('click');
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'rgba(121, 119, 122, 0.42)');
    $("h1").html("It's a draw").addClass('animated bounce swing rollIn');
  },

} //close object

}); //end of .ready
