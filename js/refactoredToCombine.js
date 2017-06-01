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

var hits = 0; // keep track of clicks
var draw = 0; // keep track of draw
var currentPlayer = 'x';

$(document).ready(function () {

  $('.cell').on("click", function(){
    var cellID = this.id;

    if( gameLogic.game[this.id] !== 0 || gameLogic.game === 'gameover' ){
      return;
    }
    var gamePlay = function(string, cell){
      var $img = $('<img>').attr('src', players[string].image);
      $("#"+ cell).append( $img );
      $('img').addClass("inPlay");
      gameLogic.addScore(string, cell);
      if (string === 'x')
        {gameLogic.winDetector('x');
        currentPlayer = 'o';
      }else{
        gameLogic.winDetector('o');
        currentPlayer ='x'
      }
    }
    gamePlay(currentPlayer, cellID);
    console.log(gameLogic.game);
    hits++;
});

//reset
  $( "#reset" ).on("click", function() {
    gameLogic.game = [0,0,0,0,0,0,0,0,0],
    $('.inPlay').remove();
    console.log(gameLogic.game)
    $('.cell')
      .on("click")
      .css('backgroundColor', '#7586B7');
    $('.animated bounce flash').remove();
    $("body").css('backgroundColor', '#A7CAB1');
    $("h1").html("Play again");
    $('.animated bounce swing rollIn').remove();
    hits = 0;
  })

var gameLogic = {
  game: [0,0,0,0,0,0,0,0,0], // game array

  win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]], // win array


  addScore: function( currentPlayer, z ) {
    // debugger;
    if (players[ currentPlayer ].number  === 1){
      gameLogic.game[z] = "x";
    } else { gameLogic.game[z] = "o"}
  },

  winDetector: function (player) {
    var win = false;
    for (var i = 0; i < gameLogic.win.length; i++) {
      var possWins = gameLogic.win[i];
      var a = possWins[0];//this cycles from indices 1-3 of each set of arrays in 'wins'
      var b = possWins[1];
      var c = possWins[2];

      var aVal = gameLogic.game[a];
      var bVal = gameLogic.game[b];
      var cVal = gameLogic.game[c];
      // debugger;
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

  winNotification: function(winner) {
    $('.cell')
      .css('backgroundColor', 'red')
    $('.grid').addClass('animated bounce flash');
    $("body").css('backgroundColor', 'red');
    $("h1").html("Player " +  players[ winner ].number  + " won!").addClass('animated bounce swing rollIn');
    $(".scoreboard").addClass('animated swing');
    // debugger;
    players[ winner ].score++;
    $(players[ winner ].scoreID).html(players[ winner ].score)
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
    var currentPlayer = 'x';
  }
} //close object
}); //end of .ready
