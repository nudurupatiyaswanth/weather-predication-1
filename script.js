async function getWeather(){

let city = document.getElementById("city").value;

let apiKey = "364d77b1c81dea1278e2dedf2d19a1c9";

let url = "https://api.openweathermap.org/data/2.5/weather?q=" 
+ city + ",IN&appid=" + apiKey + "&units=metric";

let response = await fetch(url);
let data = await response.json();

/* get weather condition */

let condition = data.weather[0].main;

let image = "";

/* choose image based on weather */

if(condition == "Clear"){
image = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
}

else if(condition == "Clouds"){
image = "https://cdn-icons-png.flaticon.com/512/414/414825.png";
}

else if(condition == "Rain"){
image = "https://cdn-icons-png.flaticon.com/512/1163/1163624.png";
}

else{
image = "https://cdn-icons-png.flaticon.com/512/869/869869.png";
}

document.getElementById("weather").innerHTML =

"<h2>" + data.name + "</h2>" +

"<img src='" + image + "' width='120'>" +

"<br>Temperature: " + data.main.temp + " °C <br>" +

"Weather: " + data.weather[0].description + "<br>" +

"Humidity: " + data.main.humidity + "%<br>" +

"Wind Speed: " + data.wind.speed + " m/s";

}
