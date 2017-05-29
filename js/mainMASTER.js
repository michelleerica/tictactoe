console.log('test')

// var $ax = $('#ax');
//
//
// // //this works for single input - all cells identified as class 'cell'
// var colorChange = $(function () {
//     $('.cell').click(function(){
//     $(this).css('background-color', '#000000');
//     });
// });



//alternating clicks - this works for colors
var altClicks = $(function(){
  var hits = 0; // keep track of clicks
  $('.cell').click(function(){ // --> This whole function is the handler or listener
  if  (hits % 2 !== 0) { //for hits 2,4,6,8 etc. Also the condition
    var $imgX = $('<img>').attr('src', 'http://www.freeiconspng.com/uploads/letter-o-icon-png-7.png');
    $(this).append( $imgX );

    // $(this).css('background-color', 'rgba(183, 41, 209, 0.63)');
    console.log('is this working?');
    // $('#content2').fadeOut("slow");
  } else { // for hits 1,3,5,7
      var $imgO = $('<img>').attr('src', 'https://vignette4.wikia.nocookie.net/creation/images/7/7e/Red_x.png/revision/latest?cb=20160323201834');
      $(this).append( $imgO);

    // $(this).css('background-color', 'rgb(72, 46, 200)');
      console.log('else')
    // $('#content2').fadeIn("slow");
  }
   hits++;
   return false;
    });
});



var $boxes = $('.cell');

$boxes.each(function() {

  var $img = $('<img>').attr('src', 'http://www.fillmurray.com/123/123');

  $(this).append( $img );


});
