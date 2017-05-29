console.log('test')


var altClicks = $(function(){
  var hits = 0; // keep track of clicks
  $('.cell').click(function(){ //
  if  (hits % 2 !== 0) { //for hits 2,4,6,8 etc
    var $imgX = $('<img>').attr('src', 'http://www.freeiconspng.com/uploads/letter-o-icon-png-7.png');
    $(this).append( $imgX );
    console.log('is this working?');
  } else { // for hits 1,3,5,7
      var $imgO = $('<img>').attr('src', 'http://vignette2.wikia.nocookie.net/animal-jam-clans-1/images/2/2e/Transparent_City_Sticker.png/revision/latest?cb=20170111222644');
      $(this).append( $imgO);
      console.log('else')
  }
   hits++;
   return false;
    });
});
