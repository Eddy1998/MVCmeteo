<!DOCTYPE html>
<html >
<head>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
 <script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="  crossorigin="anonymous"></script>
  <script src="controller.js"></script>
</head>
<body>
    
  <div class="row">
 <div class="col-sm-6">
    <div class="col-sm-6" class="panel panel-default" position="center" >
     <div class="form-group">
        <legend class="control-label">Inserisci localita'</legend>
        <div>
          <input id="localita" type="text" class="form-control" placeholder="place" >
        </div>
      </div>
      <button id="search"  type="submit" class="btn btn-info"  ><b>Search</b></button>  
   
      <div id="first">

      </div>
   </div>
  </div>
  
    <div  class="col-sm-6">
         <div class="col-sm-6" class="panel panel-default" position="center" >
           <div class="form-group">
              <legend class="control-label">Inserisci localita'</legend>
              <div>
                <input id="localita1" type="text" class="form-control" placeholder="place" >
              </div>
            </div>
            <button id="search1"  type="submit" class="btn btn-danger"  ><b>Search</b></button>  
         </div>
      <div id="second">
        <select id="set">
          
        </select>
      </div>
    </div>
  </div>
  
</body>

</html>
<!-- url : http://api.openweathermap.org/data/2.5/weather?q="variabile"&APPID=3b8939ce1f3413f183f908d321debab5-->