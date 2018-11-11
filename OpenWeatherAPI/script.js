
// Open Weather API Group Project 6
// Javascript Code
// Team Members: Kimberly Leubner, Daniel Diaz, Curtis Kesner
// Term: Fall 2018

var weatherReport;
var httpRequest = false;

function getRequestObject() {
    try {
        httpRequest = new XMLHttpRequest();
    }
    catch (requestError) {
        document.querySelector("p.error").innerHTML = "Forecast not supported by your browser.";
        document.querySelector("p.error").style.display = "block";
        return false;
    }
    return httpRequest;
}

function getWeather(evt) {

    if (!httpRequest) {
        httpRequest = getRequestObject();
        httpRequest.onreadystatechange = displayWeather;
    }
 
    httpRequest.abort();
    httpRequest.open("get", "weather.php?", true);
    httpRequest.send(null);
 }
 
 function displayWeather()
 {
     if (httpRequest.readyState == 4 && httpRequest.status == 200)
     {
         // Stage 4
         var weatherReport = httpRequest.responseText;
         var jsObject = JSON.parse(weatherReport);
         console.log(jsObject);

        // Temperature, covnerted from Kelvin to F
        var temp = Math.round((jsObject.main.temp - 273.15)*9/5 + 32);

        // Humidity
        var humid = jsObject.main.humidity;

        // Forecast string (will add more info)
        var forecast = "Temperature: " + temp + " °F<br/> Humidity: " + humid + "%";

        // Replaces forecast paragraph html with forecast string
         document.getElementById("forecast").innerHTML = forecast;
     }
 }
 
 
 if (window.addEventListener) {
    window.addEventListener("load", getWeather, false);
 } else if (window.attachEvent) {
    window.attachEvent("onload", getWeather);
 }