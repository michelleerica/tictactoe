var oImage = 'img/heartbleed.png';
var xImage = 'img/xicon.png';


var hits = 0; // keep track of clicks
var win1 = 0; // keep track of P1 wins
var win2 = 0; // keep track of P2 wins
var draw = 0; // keep track of draw
var turn = true

$(document).ready(function () {
  $('.cell').on("click", function(){
    if (gameLogic.game[this.id] === 0) {
      if (turn === true) { //for hits 2,4,6,8 etc
        var $imgX = $('<img>').attr('src', xImage);
        $(this).append( $imgX );
        $('img').addClass("inPlay");
        gameLogic.trackPlayerTwo(this.id);
        gameLogic.winDetector(2);
        turn = false;
        // debugger;

      } else if (turn === false) { // for hits 1,3,5,7
        var $imgO = $('<img>').attr('src', oImage);
        $(this).append( $imgO);
        $('img').addClass("inPlay");
        gameLogic.trackPlayerOne(this.id);
        gameLogic.winDetector(1);
        turn=true;
      }
      console.log(gameLogic.game);
      hits++;
    } else {
      alert('Pick another box');
      return
    }
    //   //if the box has an image...
    //   alert(pick another square!)
    // } else {

    // }
  });

//reset
  $( "#reset" ).on("click", function() {
    gameLogic.game = [0,0,0,0,0,0,0,0,0],
    $('.inPlay').remove();
    console.log(gameLogic.game)
    $('.cell')
      .on("click")
      .css('backgroundColor', '#7586B7');
    $('.animated bounce flash').hide();
    $("body").css('backgroundColor', '#A7CAB1');
    $("h1").html("Play again");
    $('.animated bounce swing rollIn').hide();
    hits = 0;
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
      debugger;
      var win = (aVal === player && bVal === player && cVal === player);
      if (win){
        gameLogic.winNotification(player);
        // debugger;
        // $('.cell').off('click');
        return player;

      }
      else if ((!win) && (hits>=8))
      {
          gameLogic.drawNotification();
          return;
      }
    // debugger;
    }
  },

  winNotification: function(winner) {
    $('.cell')
      .css('backgroundColor', 'red')
      // .off('click');
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'red');
    $("h1").html("Player " + winner + " won!").addClass('animated bounce swing rollIn');
    if (winner === 1)
      {win1++;
      $('#p1score').html(win1)
    } else if (winner === 2){
      win2++;
      $('#p2score').html(win2)
    }
    gameLogic.gameOver()
  },

  drawNotification: function() {
    // debugger;
    draw++;
    $('#draw').html(draw);
    $('.cell')
      .css('backgroundColor', 'grey')
      // .off('click');
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'rgba(121, 119, 122, 0.42)');
    $("h1").html("It's a draw").addClass('animated bounce swing rollIn');
    gameLogic.gameOver()
  },

  gameOver: function () {
    gameLogic.game = 'gameover';
    // $('.cell').off('click');

  }

} //close object

}); //end of .ready
