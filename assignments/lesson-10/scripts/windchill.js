
    var temperature = "";
    var windSpeed = 10;
    var windChill = (35.74 + 0.6215 * temperature )- (35.75 * Math.pow(windSpeed,0.16)) + ( 0.4275* temperature*  Math.pow(windSpeed,0.16));

    document.getElementById('windChill').innerHTML= "Wind Chill: " + windChill.toFixed (0) + "&deg;";
    document.getElementById('windSpeed').innerHTML= windSpeed;
    document.getElementById('current-temp').innerHTML= temperature;
    