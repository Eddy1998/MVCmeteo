
$( document ).ready(function() {
  
  $("#search").click(function (){
    console.log("bottone click");
    $.getJSON("http://api.openweathermap.org/data/2.5/weather",{ "q":$("#localita").val(),"APPID":"3b8939ce1f3413f183f908d321debab5"} , function(result){
      console.log(result);
    var string="<table><tr><th>Main</th><td>"+result.weather[0].main+"</td></tr><tr><th>Description</th><td>"+result.weather[0].description+"</td></tr><tr><th>Temp</th><td>"+result.main.temp+"</td></tr></table>";
    $("#ciao").append(string);
    });
  }); 
});