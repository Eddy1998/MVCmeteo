
$( document ).ready(function() {
  
  $("#search").click(function (){
    console.log("bottone click");
    var d= new Date();
    d.toUTCString();
    $.getJSON("http://api.openweathermap.org/data/2.5/weather",{ "q":$("#localita").val(),"APPID":"3b8939ce1f3413f183f908d321debab5","units":"metric"} , function(result){
      console.log(result);
   
      var primo=d+"<br><table><tr><th scope='col' colspan='2'>"+result.name+", "+result.sys.country+" (lon= "+result.coord.lon+", lat= "+result.coord.lat+")"+"<th></tr>";
    var secondo="<tr><th>Main</th><td>"+result.weather[0].main+"</td></tr>";
      var ter="<tr><th>Description</th><td>"+result.weather[0].description+"</td></tr>";
      var quar="<tr><th>Temp</th><td>"+result.main.temp+" &#x2103;</td></tr>";
      var quin="<tr><th>Pressure</th><td>"+result.main.pressure+" hPa</td></tr>";
      var sest="<tr><th>Humidity</th><td>"+result.main.humidity+"%</td></tr>";
      var sett="<tr><th>Wind speed</th><td>"+result.wind.speed+" m/s</td></tr>";
      var ott="<tr><th>Wind deg</th><td>"+result.wind.deg+"</td></tr>";
      var nov="<tr><th>Visibility</th><td>"+result.visibility+"</td></tr></table>";
      var string=primo+secondo+ter+quar+quin+sest+sett+ott+nov;
      $("#first").append(string);
    });
  }); 
  $("#search1").click(function (){
    console.log("bottone click");
    $.getJSON("http://api.openweathermap.org/data/2.5/forecast",{ "q":$("#localita1").val(),"APPID":"3b8939ce1f3413f183f908d321debab5","units":"metric"} , function(result){
      console.log(result);
      var d=result.name+", "+result.country+" (lon= "+result.city.coord.lon+", lat= "+result.city.coord.lat+")";
     //$('#select');
      var primo="<br><table><tr><th scope='col' colspan='2'>Select a date/time <select id='myselect'></select><th></tr></table>";
       //$(result).each(function(i, o) {
         //   $('#select').append($('<option>').text(o.list[i].dt_txt).attr('value', i));
       // });
           //funct $(result).each(function(i, o) {
            //var $option = $('<option>').text(o.list[i].dt_txt).attr('value', i);
            //$('#select').append($option);
             // });
      $(result.list).each(function(i,o) {
        console.log(o.dt_txt);
        $('#set').append($('<option>', { 
        value: i,
        text : o.dt_txt,
    }));

      });
//         var secondo="<tr><th>Main</th><td>"+result.weather[0].main+"</td></tr>";
//         var ter="<tr><th>Description</th><td>"+result.weather[0].description+"</td></tr>";
//         var quar="<tr><th>Temp</th><td>"+result.main.temp+" &#x2103;</td></tr>";
//         var quin="<tr><th>Pressure</th><td>"+result.main.pressure+" hPa</td></tr>";
//         var sest="<tr><th>Humidity</th><td>"+result.main.humidity+"%</td></tr>";
//         var sett="<tr><th>Wind speed</th><td>"+result.wind.speed+" m/s</td></tr>";
//         var ott="<tr><th>Wind deg</th><td>"+result.wind.deg+"</td></tr>";
//         var nov="<tr><th>Visibility</th><td>"+result.visibility+"</td></tr></table>";
//         var string=primo+secondo+ter+quar+quin+sest+sett+ott+nov;
        
    });
  }); 
});