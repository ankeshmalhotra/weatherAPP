<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather App - Dynamic Background</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
    <link rel="stylesheet" href="jsp.css">
</head>

<body>
    <div id="dynamicBackground" class="background-animation"></div>

    <div class="mainContainer">
        <form action="MyServlet" method="post" class="searchInput">
            <input type="text" placeholder="Enter City Name" id="searchInput"  name="city" />
            <button id="searchButton"><i class="fa-solid fa-magnifying-glass"></i></button>
        </form>

        <div class="weatherCard">
            <div class="weatherIcon">
                <img src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png" alt="Weather Icon" id="weather-icon">
                <h2 id="temp">${temperature} °C</h2>
            </div>
            <div class="cityDetails">
                <h3 id="cityName"><strong>${city}</strong></h3>
                <p id="currentDate">${date}</p>
            </div>

            <div class="windDetails">
                <div class="humidityBox">
                    <img src="https://cdn-icons-png.flaticon.com/512/414/414974.png" alt="Humidity">
                    <div class="humidity">
                        <span>Humidity</span>
                        <h2 id="humidity">${humidity}%</h2>
                    </div>
                </div>
                <div class="windSpeed">
                    <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="Wind Speed">
                    <div class="wind">
                        <span>Wind Speed</span>
                        <h2 id="windSpeed">${windSpeed} km/h</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="myScript.js"></script>
</body>

</html>
