

 function getTemple (zip) {
    var weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=' +
        zip + ',us&APPID=bce121c08c27c65cd7f48d40df929695&units=imperial'; 
    var weatherRequest = new XMLHttpRequest();
    weatherRequest.open('GET', weatherUrl, true);
    weatherRequest.responseType = 'json';
    weatherRequest.send();
    weatherRequest.onload = function () {
        var weatherData = weatherRequest.response;
        
        var templeWeather;
        if (zip === '87122') {
            templeWeather = ('temple1');
        } else if (zip === '80122') {
            templeWeather = ('temple2');
        } else if (zip === '33331') {
            templeWeather = ('temple3');
        } else if (zip === '85297') {
            templeWeather = ('temple4');
        } else if (zip === '84095') {
            templeWeather = ('temple5');
        }
        document.getElementById(templeWeather).innerHTML=weatherData.main.temp.toFixed(0) + ' F ';
    }   
    }
   
    getTemple('87122');
   
    getTemple('80122');
    
    getTemple('33331');
    
    getTemple('85297');
    
    getTemple('84095');