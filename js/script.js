







$(document).ready(function(){
  //player1 button
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
<<<<<<< HEAD
if (die1 === 1 || (die1 === 6 && previousRoll === 6)) {
      // switch to other player
      toggle();
    } else {
      // add dice value to round score:
      roundScore += die1;
      previousRoll = die1;
      document.getElementById('current-' + activePlayer).textContent = roundScore;
    };
=======
>>>>>>> 5b77d6861915342cf1bbef328a77812b68831896
});

//player2 button
$("#button1").click(function(){
  var die2=Math.floor(Math.random()*6 + 1);
$("#player2").text(die2)
var result=94
$("#result2").text("your result2 is" + "" + parseInt(result+die2))
if (die2===6){
  $("#congrats").show();
}
else{
  $("#congrats").hide();
}
});
//button disable button
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
  function enableButton(){
$("#button1").disabled=shouldEnable;

  }
});

//button1 diasble function
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
<<<<<<< HEAD
   return false;
=======
  return false;

>>>>>>> 5b77d6861915342cf1bbef328a77812b68831896

  });

});
