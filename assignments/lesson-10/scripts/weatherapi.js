var apiURLstring = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
var weatherRequest = new XMLHttpRequest();
weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();
weatherRequest.onload = function () {
   var weatherData = weatherRequest.response;


   document.getElementById("current-temp").innerHTML = weatherData.main.temp;
   document.getElementById("pressure").innerHTML = weatherData.main.pressure;
   document.getElementById("humidity").innerHTML = weatherData.main.humidity;
   document.getElementById("temp_min").innerHTML = weatherData.main.temp_min;
   document.getElementById("temp_max").innerHTML = weatherData.main.temp_max;
   document.getElementById("windspeed").innerHTML = weatherData.wind.speed;


   
   
}
var apiforecaststring = 'http://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiforecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();
forecastRequest.onload = function () {
   var forecastData = forecastRequest.response;
   showForecast(forecastData);

  
  

   document.getElementById("tempmin1").innerHTML = forecastData.list[0].main.temp_min;
   document.getElementById("tempmax1").innerHTML = forecastData.list[0].main.temp_max;


   document.getElementById("tempmin2").innerHTML = forecastData.list[1].main.temp_min;
   document.getElementById("tempmax2").innerHTML = forecastData.list[1].main.temp_max;

  
   document.getElementById("tempmin3").innerHTML = forecastData.list[2].main.temp_min;
   document.getElementById("tempmax3").innerHTML = forecastData.list[2].main.temp_max;

  
   document.getElementById("tempmin4").innerHTML = forecastData.list[3].main.temp_min;
   document.getElementById("tempmax4").innerHTML = forecastData.list[3].main.temp_max;

   document.getElementById("tempmin5").innerHTML = forecastData.list[4].main.temp_min;
   document.getElementById("tempmax5").innerHTML = forecastData.list[4].main.temp_max;
  
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
   for (let j = 0; j < 5 ;j++) {
     fcstDaysArr[j]=getFcstDay(j);
     fcstHighArr[j] = forecastData.list[i].main.temp;
     i += 8;
   }
   document.getElementById('day0').innerHTML = fcstDaysArr[0];
   document.getElementById('day1').innerHTML = fcstDaysArr[1];
   document.getElementById('day2').innerHTML = fcstDaysArr[2];
   document.getElementById('day3').innerHTML = fcstDaysArr[3];
   document.getElementById('day4').innerHTML = fcstDaysArr[4];

   function getFcstDay(index) {
      now = new Date();
      today = now.getUTCDay() + index;
      if (today >= 7) today = today - 7;
      if (today  == 0) return 'Sun';
      else if (today == 1) return 'Mon';
      else if (today == 2) return 'Tue';
      else if (today == 3) return 'Wed';
      else if (today == 4) return 'Thu';
      else if (today == 5) return 'Fri';
      else return 'Sat';
      }
      
    }
