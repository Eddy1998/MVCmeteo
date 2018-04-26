
$( document ).ready(function() {
  
  $("#search").click(function (){
    console.log("partio");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather",{ "q":$("#localita").val(),"APPID":"3b8939ce1f3413f183f908d321debab5"} , function(result){
    console.log(result);
    });
  }); 
});