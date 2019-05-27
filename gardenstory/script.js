function greetMe(name) {
  var today = new Date().toDateString();
  console.log("Hello " + name + ", today is " + today);
}

greetMe("World");

$(function(){
  var x = 0;
  var y = 0;
  setInterval(function(){
    x -=3;
    y -=2;
    $('#bg').css('background-position', x + 'px ' + y +'px');
  }, 50);
});

function hoverdiv(e,divid){

  var left  = e.clientX  + "px";
  var top  = e.clientY  + "px";

  var div = document.getElementById(divid);

  div.style.left = left;
  div.style.top = top;

  $("#"+divid).toggle();
  return false;
}
