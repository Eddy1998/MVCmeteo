$(document).ready(function() {
  console.log("new");

  $("#search").click(function() {
    console.log("bottone click");
    $('#first').empty();
    var d = new Date();
    d.toUTCString();
    $.getJSON("https://api.openweathermap.org/data/2.5/weather", {
      "q": $("#localita").val(),
      "APPID": "3b8939ce1f3413f183f908d321debab5",
      "units": "metric"
    }, function(result) {
      console.log(result);
      var cit = "<h2 class='fh5co-sub-ddown'>" + result.name + ", " + result.sys.country + "</h2>";
      var k = "<br><img src='http://openweathermap.org/img/w/" + result.weather[0].icon + ".png' style='width: 200px;  height: 200px;'><br>";
      var primo = "<br><table><tr><th scope='col' colspan='2'>" + result.name + ", " + result.sys.country + " (lon= " + result.coord.lon + ", lat= " + result.coord.lat + ") </th></tr>";
      var secondo = "<tr><th>Main</th><td>" + result.weather[0].main + "</td></tr>";
      var ter = "<tr><th>Description</th><td>" + result.weather[0].description + "</td></tr>";
      var quar = "<tr><th>Temp</th><td>" + result.main.temp + " &#x2103;</td></tr>";
      var quin = "<tr><th>Pressure</th><td>" + result.main.pressure + " hPa</td></tr>";
      var sest = "<tr><th>Humidity</th><td>" + result.main.humidity + "%</td></tr>";
      var sett = "<tr><th>Wind speed</th><td>" + result.wind.speed + " m/s</td></tr>";
      var ott = "<tr><th>Wind deg</th><td>" + result.wind.deg + "</td></tr></table>";
      var string = cit + d + k + primo + secondo + ter + quar + quin + sest + sett + ott;
      $("#first").append(string);
      $("#first").append("<i class='owf owf-" + result.weather[0].id + "></i>");
    });
  });
  $("#search1").click(function() {
    console.log("bottone click");
    $.getJSON("https://api.openweathermap.org/data/2.5/forecast", {
      "q": $("#localita1").val(),
      "APPID": "3b8939ce1f3413f183f908d321debab5",
      "units": "metric"
    }, function(risposta) {
      console.log(risposta);

      $('#primeiro').empty();
      var d = "<h2 class='fh5co-sub-ddown'>" + result.name + ", " + result.sys.country + "</h2>";
      //var d = risposta.city.name+", "+risposta.city.country+" (lon= "+risposta.city.coord.lon+", lat= "+risposta.city.coord.lat+")<br>Select a date/time  <select id='set'>  </select>";
      $('#primeiro').append(d);
      console.log("ciao");

      $(risposta.list).each(function(i, o) {

        $('#set').append($('<option>', {
          value: i,
          text: o.dt_txt,
        }));
      });
      var a = $('#set').val();
      $('#second').empty();
      var primo = "<br><table><tr><th scope='col' colspan='2'><img src='http://openweathermap.org/img/w/" + risposta.list[a].weather[0].icon + ".png'></th></tr>";
      var secondo = "<tr><th>Main</th><td>" + risposta.list[a].weather[0].main + "</td></tr>";
      var ter = "<tr><th>Description</th><td>" + risposta.list[a].weather[0].description + "</td></tr>";
      var quar = "<tr><th>Temp</th><td>" + risposta.list[a].main.temp + " &#x2103;</td></tr>";
      var quin = "<tr><th>Pressure</th><td>" + risposta.list[a].main.pressure + " hPa</td></tr>";
      var sest = "<tr><th>Humidity</th><td>" + risposta.list[a].main.humidity + "%</td></tr>";
      var sett = "<tr><th>Wind speed</th><td>" + risposta.list[a].wind.speed + " m/s</td></tr>";
      var ott = "<tr><th>Wind deg</th><td>" + risposta.list[a].wind.deg + "</td></tr></table>";
      var string = primo + secondo + ter + quar + quin + sest + sett + ott;
      $('#second').append(string);
      $('#set').change(function() {
        var a = $('#set').val();
        $('#second').empty();
        var primo = "<table><tr><th scope='col' colspan='2'><img src='http://openweathermap.org/img/w/" + risposta.list[a].weather[0].icon + ".png'></th></tr>";
        var secondo = "<br><table><tr><th>Main</th><td>" + risposta.list[a].weather[0].main + "</td></tr>";
        var ter = "<tr><th>Description</th><td>" + risposta.list[a].weather[0].description + "</td></tr>";
        var quar = "<tr><th>Temp</th><td>" + risposta.list[a].main.temp + " &#x2103;</td></tr>";
        var quin = "<tr><th>Pressure</th><td>" + risposta.list[a].main.pressure + " hPa</td></tr>";
        var sest = "<tr><th>Humidity</th><td>" + risposta.list[a].main.humidity + "%</td></tr>";
        var sett = "<tr><th>Wind speed</th><td>" + risposta.list[a].wind.speed + " m/s</td></tr>";
        var ott = "<tr><th>Wind deg</th><td>" + risposta.list[a].wind.deg + "</td></tr></table>";
        var string = primo + secondo + ter + quar + quin + sest + sett + ott;
        $('#second').append(string);

      });



    });
  });
  $("#set").change(function() {

    changed($('#set').val());
  });
  $(function changed(a, result) {

  });
});