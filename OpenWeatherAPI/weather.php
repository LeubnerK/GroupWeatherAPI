<?php
$WeatherSource = "http://api.openweathermap.org/data/2.5/weather?lat=39.0845&lon=-94.5631&APPID=3a2aa7ae6f8e7a9577211ea5cec2a2be";
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>