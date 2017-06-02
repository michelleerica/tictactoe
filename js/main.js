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
  },
  billMurray: {
    number: 'billMurray',
    score: 0,
    image: 'http://www.fillmurray.com/125/125',
    scoreID: "#p3score"
  }
};

var hits = 0;
var draw = 0;
var currentPlayer = "x";
var billMode = false;
var endGame = false;

$(document).ready(function () {
//click box for image to appear and checks to run
  $('.cell').on("click", function(){
    var cellId = this.id;
    var bCellId = parseInt((Math.random() * 8));
    if ( (gameLogic.game[this.id] !== 0) || (endGame === true) ){
      return;
    }
    var gamePlay = function(player, cellSelected){
      endGame = false;
      var $img = $('<img>').attr('src', players[player].image);
      $("#"+ cellSelected).append( $img );
      $('img').addClass("inPlay");
      gameLogic.updateBoardArray(player, cellSelected);


      if (player === 'x'){
        gameLogic.winDetector('x');
          if (billMode === false){
          currentPlayer = 'o';
          }
      }
        else if (player === 'o') {
        gameLogic.winDetector('o');
        currentPlayer ='x';
      }


      if (billMode === false || endGame===true){
        return
      }
      else if (gameLogic.game[bCellId] === 0){
        var $bimg = $('<img>').attr('src', players.billMurray.image);
        $("#"+ bCellId).append( $bimg );
        $('img').addClass("inPlay");
        gameLogic.updateBoardArray('billMurray', bCellId);
        console.log(bCellId + "game:" + gameLogic.game);
        gameLogic.winDetector('billMurray');
      } else {
        bCellId = gameLogic.game.indexOf(0);
        var $bimg = $('<img>').attr('src', players.billMurray.image);
        $("#"+ bCellId).append( $bimg );
        $('img').addClass("inPlay");
        gameLogic.updateBoardArray('billMurray', bCellId);
        gameLogic.winDetector('billMurray');
      }
    }
    gamePlay(currentPlayer, cellId);
    hits++;
  });

  var gameLogic = {
    game: [0,0,0,0,0,0,0,0,0], // array depicting gameboard

    win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]], //  array of possible wins

    //function to update gameboard array
    updateBoardArray: function( currentPlayer, z ) {
      if (players[ currentPlayer ].number  === 1){
        gameLogic.game[z] = "x";
      }
      else if (players[ currentPlayer ].number  === 2){
        gameLogic.game[z] = "o";
      } else {
        gameLogic.game[z] = "billMurray"
      };
    },

    //function to detect if a player has won
    winDetector: function (player) {
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

      if ( (billMode === false) && !win && hits >= 8 ){
          gameLogic.drawNotification();
          return false;
      }
      else if ((billMode === true) && !win && hits >= 4 ){
        gameLogic.drawNotification();
        return false;
      }
    },

    //function to alert of win
    winNotification: function(winner) {
      players[ winner ].score++;
      $('.cell').css('backgroundColor', '#FDF0D5');
      $('.grid').addClass('animated bounce flash');
      $("body").css('backgroundColor', '#D81E5B');
      $("h1").addClass('notification animated bounce swing rollIn');
      $(".scoreboard").addClass('animated swing');
      $(players[ winner ].scoreID).html(players[ winner ].score);
      if (players[ winner ].number === "billMurray"){
        $("h1").html("Bill Murray won!");
      } else {
        $("h1").html("Player " +  players[ winner ].number  + " won!");
      }
      gameLogic.gameOver()
      return;
    },
    //function to alert there is a draw
    drawNotification: function() {
      draw++;
      $('#draw').html(draw);
      $('.cell').css('backgroundColor', 'grey');
      $('.grid').addClass('animated bounce flash');
      $("body").css('backgroundColor', 'rgba(121, 119, 122, 0.42)');
      $("h1").html("It's a draw").addClass('notification animated swing rollIn');
      gameLogic.gameOver()
      return;
    },
    //function to reflect game is over
    gameOver: function () {
      endGame = true;
      currentPlayer = 'x';
      return
    }
  } //close gameLogic object


  var reset = function(){
    gameLogic.game = [0,0,0,0,0,0,0,0,0];
    $('.inPlay').remove();
    $('.cell').css('backgroundColor', '#7586B7');
    $('.animated bounce flash').remove();
    $('.scoreboard').addClass('bounceIn');
    $("body").css('backgroundColor', '#A7CAB1');
    $("h1").html("Play again");
    $('.animated bounce swing rollIn').remove();
    hits = 0;
    endGame = false;
  };

  $( ".resetButton" ).on("click", reset );

  $( ".twoPlayerButton" ).on("click", function() {
    reset();
    currentPlayer='o';
    billMode = false;
    hits = 0;
  });

    //bill mode
  $( ".playBillButton" ).on("click", function() {
    reset()
    currentPlayer = 'x';
    billMode = true;
    hits = 0;
    $("h1").html("You vs Bill");
  });

}); //end of .ready
