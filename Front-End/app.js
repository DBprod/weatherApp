

const locationinput = document.getElementById('locationInput');
const displayWeatherLocation = document.getElementById('displayWeather');


var xmlhttp = new XMLHttpRequest();
var url = "http://localhost:3000/";

xmlhttp.open("POST", url, true);
xmlhttp.send({
    "city": "Brossard"
});
console.log(xmlhttp.responseText);






