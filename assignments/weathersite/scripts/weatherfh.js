//fish heaven API//
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83287,us&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function () {
   var weatherData = weatherRequest.response;
   var icon = weatherData.weather[0].icon;
   var description = weatherData.weather[0].description;
   var imageUrl = 'http://openweathermap.org/img/w/' + icon + '.png';

   document.getElementById("icon").setAttribute("src", imageUrl);
   document.getElementById("icon").setAttribute("alt", description);
   document.getElementById("current-conditions").innerHTML = weatherData.weather[0].main;



   document.getElementById("fhcurrent-temp").innerHTML = weatherData.main.temp.toFixed (0);
   document.getElementById("fhpressure").innerHTML = weatherData.main.pressure;
   document.getElementById("fhhumidity").innerHTML = weatherData.main.humidity;
   document.getElementById("fhtemp_min").innerHTML = weatherData.main.temp_min.toFixed (0);
   document.getElementById("fhtemp_max").innerHTML = weatherData.main.temp_max.toFixed (0);
   document.getElementById("fhwindspeed").innerHTML = weatherData.wind.speed.toFixed (0);
}
var apiforecaststring = 'https://api.openweathermap.org/data/2.5/forecast?zip=83287,us&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiforecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();
forecastRequest.onload = function () {
   var forecastData = forecastRequest.response;
   showForecast(forecastData);
  

   document.getElementById("fhtempmin1").innerHTML = forecastData.list[1].main.temp_min.toFixed (0);
   document.getElementById("fhtempmax1").innerHTML = forecastData.list[6].main.temp_max.toFixed (0);


   document.getElementById("fhtempmin2").innerHTML = forecastData.list[9].main.temp_min.toFixed (0);
   document.getElementById("fhtempmax2").innerHTML = forecastData.list[14].main.temp_max.toFixed (0);


   document.getElementById("fhtempmin3").innerHTML = forecastData.list[17].main.temp_min.toFixed (0);
   document.getElementById("fhtempmax3").innerHTML = forecastData.list[22].main.temp_max.toFixed (0);


   document.getElementById("fhtempmin4").innerHTML = forecastData.list[24].main.temp_min.toFixed (0);
   document.getElementById("fhtempmax4").innerHTML = forecastData.list[30].main.temp_max.toFixed (0);

   document.getElementById("fhtempmin5").innerHTML = forecastData.list[33].main.temp_min.toFixed (0);
   document.getElementById("fhtempmax5").innerHTML = forecastData.list[38].main.temp_max.toFixed (0);

}
function showForecast(forecastData) {
   let rgex = /[0-9 :]21:00:00/
   let i = -1;
   do {
      i++;
   }
   while (!rgex.test(forecastData.list[i].dt_txt));

   var fcstDaysArr = [];
   var fcstHighArr = [];
   for (let j = 0; j < 5; j++) {
      fcstDaysArr[j] = getFcstDay(j);
      fcstHighArr[j] = forecastData.list[i].main.temp;
      i += 8;
   }
   document.getElementById('fhday0').innerHTML = fcstDaysArr[0];
   document.getElementById('fhday1').innerHTML = fcstDaysArr[1];
   document.getElementById('fhday2').innerHTML = fcstDaysArr[2];
   document.getElementById('fhday3').innerHTML = fcstDaysArr[3];
   document.getElementById('fhday4').innerHTML = fcstDaysArr[4];

   function getFcstDay(index) {
      now = new Date();
      today = now.getUTCDay() + index;
      if (today >= 7) today = today - 7;
      if (today == 0) return 'Sun';
      else if (today == 1) return 'Mon';
      else if (today == 2) return 'Tue';
      else if (today == 3) return 'Wed';
      else if (today == 4) return 'Thu';
      else if (today == 5) return 'Fri';
      else return 'Sat';
   }

}
