//Soda Sprongs API//
var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?zip=83276,us&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
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


   document.getElementById("sscurrent-temp").innerHTML = weatherData.main.temp.toFixed (0);
   document.getElementById("sspressure").innerHTML = weatherData.main.pressure;
   document.getElementById("sshumidity").innerHTML = weatherData.main.humidity;
   document.getElementById("sstemp_min").innerHTML = weatherData.main.temp_min.toFixed (0);
   document.getElementById("sstemp_max").innerHTML = weatherData.main.temp_max.toFixed (0);
   document.getElementById("sswindspeed").innerHTML = weatherData.wind.speed.toFixed (0);
}
var apiforecaststring = 'https://api.openweathermap.org/data/2.5/forecast?zip=83276,us&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial';
var forecastRequest = new XMLHttpRequest();
forecastRequest.open('GET', apiforecaststring, true);
forecastRequest.responseType = 'json';
forecastRequest.send();
forecastRequest.onload = function () {
   var forecastData = forecastRequest.response;
 
   

   document.getElementById("sstempmin1").innerHTML = forecastData.list[1].main.temp_min.toFixed (0);
   document.getElementById("sstempmax1").innerHTML = forecastData.list[6].main.temp_max.toFixed (0);


   document.getElementById("sstempmin2").innerHTML = forecastData.list[9].main.temp_min.toFixed (0);
   document.getElementById("sstempmax2").innerHTML = forecastData.list[14].main.temp_max.toFixed (0);


   document.getElementById("sstempmin3").innerHTML = forecastData.list[17].main.temp_min.toFixed (0);
   document.getElementById("sstempmax3").innerHTML = forecastData.list[22].main.temp_max.toFixed (0);


   document.getElementById("sstempmin4").innerHTML = forecastData.list[25].main.temp_min.toFixed (0);
   document.getElementById("sstempmax4").innerHTML = forecastData.list[30].main.temp_max.toFixed (0);

   document.getElementById("sstempmin5").innerHTML = forecastData.list[33].main.temp_min.toFixed (0);
   document.getElementById("sstempmax5").innerHTML = forecastData.list[38].main.temp_max.toFixed (0);

}


   var fcstDaysArr = [];
   var fcstHighArr = [];
   for (let j = 0; j < 5; j++) {
      fcstDaysArr[j] = getFcstDay(j);
    
   }
   document.getElementById('ssday0').innerHTML = fcstDaysArr[0];
   document.getElementById('ssday1').innerHTML = fcstDaysArr[1];
   document.getElementById('ssday2').innerHTML = fcstDaysArr[2];
   document.getElementById('ssday3').innerHTML = fcstDaysArr[3];
   document.getElementById('ssday4').innerHTML = fcstDaysArr[4];

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


