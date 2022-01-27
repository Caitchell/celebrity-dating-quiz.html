$(document).ready(function(){
$("form#quiz").submit(function() {

  const beverage = $("#beverage").val();
  const pets = $("#pets").val();
  const steering = $("#steering").val();

  if (beverage === "Coffee" && pets === "Walrus" && steering === "Look ma no hands!") {
    $("#result1").show();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();
  } else if (steering === "1 hand") {
    $("#result1").hide();
    $("#result2").show();
    $("#result3").hide();
    $("#result4").hide();
  } else if (pets === "Cat") {
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").show();
    $("#result4").hide();
  } else {
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").show();
  }

  event.preventDefault();
  });
});