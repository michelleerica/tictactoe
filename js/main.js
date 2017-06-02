var players = {
  x: {
    number: 1,
    score: 0,
    image: 'img/xicon.png',
    scoreID: "#p1score"
  },
  o: {
    number: 2,
    score: 0,
    image: 'img/heartbleed.png',
    scoreID: "#p2score"
  }
};
var hits = 0;
var draw = 0;
var currentPlayer = 'x';

$(document).ready(function () {
  $('.cell').on("click", function(){
    var cellID = this.id;

    if( gameLogic.game[this.id] !== 0 || gameLogic.game === 'gameover' ){
      return;
    }
    var gamePlay = function(player, cellSelected){
      var $img = $('<img>').attr('src', players[player].image);
      $("#"+ cellSelected).append( $img );
      $('img').addClass("inPlay");
      gameLogic.updateBoardArray(player, cellSelected);
      if (player === 'x')
        {gameLogic.winDetector('x');
        currentPlayer = 'o';
      } else if (player === 'o') {
        gameLogic.winDetector('o');
        currentPlayer ='x'
      }
    }
    gamePlay(currentPlayer, cellID);
    hits++;
});

  //reset game board
  $( ".resetButton" ).on("click", function() {
    gameLogic.game = [0,0,0,0,0,0,0,0,0],
    $('.inPlay').remove();
    $('.cell')
      .on("click")
      .css('backgroundColor', '#7586B7');
    $('.animated bounce flash').remove();
    $('.scoreboard').addClass('bounceIn');
    $("body").css('backgroundColor', '#A7CAB1');
    $("h1").html("Play again");
    $('.animated bounce swing rollIn').remove();
    hits = 0;
  })

var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // array depicting gameboard

  win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]], //  array of possible wins

  //function to update gameboard array
  updateBoardArray: function( currentPlayer, z ) {
    if (players[ currentPlayer ].number  === 1){
      gameLogic.game[z] = "x";
    } else { gameLogic.game[z] = "o"}
  },

  //function to detect if a player has won
  winDetector: function (player) {
    var win = false;
    for (var i = 0; i < gameLogic.win.length; i++) {
      var possWins = gameLogic.win[i];
      var a = possWins[0];
      var b = possWins[1];
      var c = possWins[2];

      var aVal = gameLogic.game[a];
      var bVal = gameLogic.game[b];
      var cVal = gameLogic.game[c];
      win = (aVal === player && bVal === player && cVal === player);
      if (win){
        gameLogic.winNotification(player);
        return player;
      }
    } // for

    if ( !win && hits >= 8 ){
        gameLogic.drawNotification();
        return false;
    }
  },

  //function to alert of win
  winNotification: function(winner) {
    $('.cell')
      .css('backgroundColor', '#FDF0D5')
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', '#D81E5B');
    $("h1").html("Player " +  players[ winner ].number  + " won!").addClass('animated bounce swing rollIn');
    $(".scoreboard").addClass('animated swing');
    players[ winner ].score++;
    $(players[ winner ].scoreID).html(players[ winner ].score)
    gameLogic.gameOver()
  },
  //function to alert there is a draw
  drawNotification: function() {
    draw++;
    $('#draw').html(draw);
    $('.cell')
      .css('backgroundColor', 'grey')
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'rgba(121, 119, 122, 0.42)');
    $("h1").html("It's a draw").addClass('animated bounce swing rollIn');
    gameLogic.gameOver()
  },
  //function to reflect game is over
  gameOver: function () {
    gameLogic.game = 'gameover';
    currentPlayer = 'x';
  }
} //close object
}); //end of .ready
