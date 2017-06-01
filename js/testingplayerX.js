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
      number: 2,
      score: 0,
      image: 'http://www.fillmurray.com/130/130',
      scoreID: "#p2score"
    }
  };
  //
  // var score = players.x.score;
  // var score = players[currentPlayer].score

  var hits = 0; // keep track of clicks
  var draw = 0; // keep track of draw
  var turn = 'x';
  var game= [0,0,0,0,0,0,0,0,0] // array depicting gameboard

  $(document).ready(function () {

    $('.cell').on("click", function(){
      var cellID = this.id;

      var bCellId = Math.floor((Math.random() * 8)-1);
      // if( gameLogic.game[this.id] !== 0 || gameLogic.game === 'gameover' ){
      //   return;
      var gamePlay = function(cellSelected){
        var $img = $('<img>').attr('src', players.x.image);
        $("#"+ cellSelected).append( $img );
        $('img').addClass("inPlay");
        // gameLogic.updateBoardArray('x', cellSelected);
        // gameLogic.winDetector('x')

        if( game[bCellId] === 0)
        {
        console.log(bCellId + "game:" + game);
        var $bimg = $('<img>').attr('src', players.billMurray.image);
        $("#"+ bCellId).append( $bimg );
        $('img').addClass("inPlay");
        }else {
          bCellId = game.indexOf(0);
          console.log(bCellId + "game:" + game);

          $("#"+ bCellId).append( $bimg );
          $('img').addClass("inPlay");
        }
        // gameLogic.updateBoardArray('billMurray', bCellID);
        // gameLogic.winDetector('billMurray');
          // currentPlayer ='x';
        }
      gamePlay(cellID);
      hits++;
    });
}); //end of .ready
