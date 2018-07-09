

const locationinput = document.getElementById('locationInput');
const displayWeatherLocation = document.getElementById('displayWeather');


var xhr = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=Brossard&appid=5649a3f39b1975b1732986f61988a10c";

xhr.open("GET", url, true);
xhr.send();
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
    }
};






