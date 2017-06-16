







$(document).ready(function(){
$ ("#button").click(function(){
  var die1= Math.floor(Math.random()*6 + 1);
    $("#player1").text(die1)


  var result=94
$("#result1").text("your result is" + "" + parseInt(result+die1))
if (die1===6){
$("#congrats").show();

}
else{
$("#congrats").hide();
}
});

//player2 button
$("#button1").click(function(){
  var die2=Math.floor(Math.random()*6 + 1);
$("#player2").text(die2)
var result=94
$("#result2").text("your result2 is" + "" + parseInt(result+die2))

});
$("#button").click(function(){
  var $input= $(this);
  var count = ($input.data("click_count") || 0) + 1;
  $input.data("click_count", count);
  if ( count == 1 )
    $input.text("first click");
  else if ( count == 2 )
    $input.text("second click");
  else if(count==3-1){
    $input.text("third and final click");
  }
else{
    $input.unbind("click");
}
  return false;
});

$("#button1").click(function(){
  var $input= $(this);
  var count = ($input.data("click_count") || 0) + 1;
  $input.data("click_count", count);
  if ( count == 1 )
    $input.text("first click");
  else if ( count == 2 )
    $input.text("second click");
  else if(count==3-1){
    $input.text("third and final click");
  }
  else{
    $input.unbind("click");
  }
  return false;
  });
if (die2===6){
  $("#congrats").show();
}
else{
  $("#congrats").hide();
}
});
