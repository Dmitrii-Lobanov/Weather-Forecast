'use strict';

var weatherConditions = new XMLHttpRequest();
var weatherForecast = new XMLHttpRequest();
var cObj;
var fObj;

// GET THE CONDITIONS
weatherConditions.open('GET', '//api.openweathermap.org/data/2.5/weather?q=Perm&appid=b664e72c005edb246e0c7bcf17cad05a&units=metric', true);
weatherConditions.responseType = 'text';
weatherConditions.send(null);

weatherConditions.onload = function() {
    if (weatherConditions.status === 200){
        cObj = JSON.parse(weatherConditions.responseText); 
        document.getElementById('location').innerHTML = cObj.name;
        document.getElementById('weather').innerHTML = cObj.weather[0].description;
        document.getElementById('temperature').innerHTML = cObj.main.temp;
        document.getElementById('desc').innerHTML = "Wind Speed " + cObj.wind.speed;

    }
};

// GET THE FORECARST
weatherForecast.open('GET', '//api.openweathermap.org/data/2.5/forecast?q=Perm&appid=b664e72c005edb246e0c7bcf17cad05a&units=metric', true);
weatherForecast.responseType = 'text'; 
weatherForecast.send();

weatherForecast.onload = function() {
if (weatherForecast.status === 200){
	fObj = JSON.parse(weatherForecast.responseText);
    console.log(fObj);
    
    // Tomorrow
    var date_raw = fObj.list[8].dt_txt.substring(5, 11);
    document.getElementById('r1c1').innerHTML = 'Tomorrow';

    var iconcode = fObj.list[8].weather[0].icon;
    console.log(iconcode);
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r1c2').src = icon_path;
    document.getElementById('r1c3').innerHTML = fObj.list[0].main.temp_min.toFixed(0) + "&deg;";
    document.getElementById('r1c4').innerHTML = fObj.list[0].main.temp_max.toFixed(0)  + "&deg;";

    // Day after tomorrow
    var date_raw = fObj.list[16].dt_txt.substring(5, 11);
    console.log(date_raw);
    document.getElementById('r2c1').innerHTML = date_raw.slice(3) + '.' + date_raw.slice(0, 2);

    var iconcode = fObj.list[16].weather[0].icon;
    console.log(iconcode);
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r2c2').src = icon_path;
    document.getElementById('r2c3').innerHTML = fObj.list[0].main.temp_min.toFixed(0) + "&deg;";
    document.getElementById('r2c4').innerHTML = fObj.list[0].main.temp_max.toFixed(0)  + "&deg;";

    // Third day
    var date_raw = fObj.list[24].dt_txt.substring(5, 11);
    console.log(date_raw);
    document.getElementById('r3c1').innerHTML = date_raw.slice(3) + '.' + date_raw.slice(0, 2);

    var iconcode = fObj.list[24].weather[0].icon;
    console.log(iconcode);
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('r3c2').src = icon_path;
    document.getElementById('r3c3').innerHTML = fObj.list[0].main.temp_min.toFixed(0) + "&deg;";
    document.getElementById('r3c4').innerHTML = fObj.list[0].main.temp_max.toFixed(0)  + "&deg;";
}
};


