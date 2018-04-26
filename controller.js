document.read
function()
{
  $.getJSON("http://api.openweathermap.org/data/2.5/weather",{ 'q' : $(#localita).val() , 'APPID' : "3b8939ce1f3413f183f908d321debab5"} , function(resut){
   console.log(data.name);
  });
}