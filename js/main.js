console.log('test')


var oImage = 'http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png';
var xImage = 'http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/2e/Transparent_City_Sticker.png/revision/latest?cb=20170111222644'


var gameLogic = {

  trackPlayerOne: function (div) {
    gameLogic.game[div] = 1;
  },

  trackPlayerTwo: function (div) {
    gameLogic.game[div] = 2;
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
      console.log('is this working?');
      x = // need to pull through the DIV ID
      gameLogic.trackPlayerTwo(x);
    } else { // for hits 1,3,5,7
        var $imgO = $('<img>').attr('src', oImage);
        $(this).append( $imgO);
        console.log('else')
        y = // need to pull through the DIV ID
        gameLogic.trackPlayerOne(y); 
    }
     hits++;
     return false;
      });
  })
}
//to access img:
// var $ax = $('#ax');
// $ax.html()

//true
// $('.cell').html() === '<img src="http://static.wixstatic.com/media/c09ee4_6b9a876a03844e25a314e5ed36d649a3.png">'
