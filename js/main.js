//players object has three properties, allowing for two player mode and player vs bill murray (i.e. computer player)
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

//action: click function on cell class used to obtain ID of specific div being clicked. div ID used as an input to gamePlay function to append the image token to relevant div (i.e. square). A method within the gameLogic object, which checks for a win (explained below) is called in this function.

//input: ID of div clicked (obtained from "on click" function), current player (set to x on line 25, but switches between o and x). If billMode is triggered, then player will be fixed to x and lines 69-83 will run, which uses Math.random (line 39) to determine which square the Bill Murray token will take.

//
  $('.cell').on("click", function(){
    var cellId = this.id;
    var bCellId = parseInt((Math.random() * 8));
    if ( (gameLogic.game[this.id] !== 0) || (endGame === true) ){
      return;
    }

    var gamePlay = function(player, cellSelected){
      $("h1").html("Player " + players[player].number + "'s turn");

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

    // array depicting gameboard at start of game
    game: [0,0,0,0,0,0,0,0,0],

    //  array setting out the indices which need to match within the game array for there to be a win
    win:[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],

    // this function updates the game array to reflect what is happening on screen. i.e. game array on line 92 is updated with x, o and billMurray to reflect which squares are taken. Div IDs in HTML are consistent with array indices.

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

    //action: this function takes the values in the game array (line 89) which correspond with the indices of the win array (line 95) to check if they match. If all three are the same as the player who just moved, a win is detected and the winNotification method is triggered. If there is no win and there are are 8 clicks of more for two player mode, or 4 clicks or more for billMode, a draw is identified.

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

    //action: uses the DOM and jquery to update screen to notify player/s of the win. Utilises animate.css library.
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

    //action: uses the DOM and jquery to update screen to notify player/s of a draw. Utilises animate.css library.
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

  //action: this function resets the game when the resetButton is clicked. Upon reset, the game array reverts to its original state (all zero's), and the DOM is manipulated to reflect its' pre-win/draw state.
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

  // function to allow twoPlayer mode to be called on click of twoPlayerButton
  $( ".twoPlayerButton" ).on("click", function() {
    reset();
    currentPlayer='o';
    billMode = false;
    hits = 0;
    $("h1").html("Two player mode");
  });

  // function to allow billMode mode to be called on click of playBillButton.
  $( ".playBillButton" ).on("click", function() {
    reset()
    currentPlayer = 'x';
    billMode = true;
    hits = 0;
    $("h1").html("You vs Bill");
  });

}); //end of .ready
