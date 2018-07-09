

const locationinput = document.getElementById('locationInput');
const displayWeatherLocation = document.getElementById('displayWeather');


var xmlhttp = new XMLHttpRequest();
var url = "myTutorials.txt";

xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         console.log(JSON.parse(this.responseText));
        
    }
};






