$(document).ready(function() {
  resize();

});

$(window).on('resize orientationChange', function(){ resize()} );
window.onscroll = function() {resize()};

function resize(){
  

  var width = $(window).width();
  var height = $(window).height();
  var scrolly = $(window).scrollTop();
  
  $("#picobanner").css({"left" : ((width / 2) - 100) + "px" , "top" : ((height / 2) - 72) + "px" });
   $("#soonbanner").css({"left" : ((width / 2) - 89) + "px" , "top" : ((height / 2) + 24) + "px" });
  $("#buttons").css({"left" : ((width / 2) - 59) + "px" , "top" : ((height / 2) + 86) + "px" });
  $("#buttonback").css({"left" : ((width / 2) - 68) + "px" , "top" : ((height / 2) + 56) + "px" });
  
};