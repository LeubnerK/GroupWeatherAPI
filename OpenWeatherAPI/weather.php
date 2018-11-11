<?php
$WeatherSource = "https://api.forecast.io/forecast/c31c5d41033f98d090a49e455dadf686/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>