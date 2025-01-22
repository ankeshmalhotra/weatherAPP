/**
 * 
 */
document.addEventListener("DOMContentLoaded", function () {
    // Get the weather condition and other necessary details from JSP
    const weatherCondition = (document.getElementById("wc") && document.getElementById("wc").value) || "Clear"; // Default to Clear if no data
    const cityTime = new Date(); // You can replace this with city-specific time if available
    const hour = cityTime.getHours();
    const isNight = hour >= 18 || hour < 6; // Define night as from 6 PM to 6 AM
    const dynamicBackground = document.getElementById("dynamicBackground");

    // Background images based on time of day and weather condition
    const backgrounds = {
        day: {
            Clear: "url('https://source.unsplash.com/1600x900/?clear-sky')",
            Clouds: "url('https://source.unsplash.com/1600x900/?cloudy-day')",
            Rain: "url('https://source.unsplash.com/1600x900/?rainy-day')",
            Snow: "url('https://source.unsplash.com/1600x900/?snow-day')",
            Thunderstorm: "url('https://source.unsplash.com/1600x900/?stormy-day')",
            Mist: "url('https://source.unsplash.com/1600x900/?mist-day')",
            Default: "url('https://source.unsplash.com/1600x900/?weather-day')",
        },
        night: {
            Clear: "url('https://source.unsplash.com/1600x900/?clear-night')",
            Clouds: "url('https://source.unsplash.com/1600x900/?cloudy-night')",
            Rain: "url('https://source.unsplash.com/1600x900/?rainy-night')",
            Snow: "url('https://source.unsplash.com/1600x900/?snow-night')",
            Thunderstorm: "url('https://source.unsplash.com/1600x900/?stormy-night')",
            Mist: "url('https://source.unsplash.com/1600x900/?mist-night')",
            Default: "url('https://source.unsplash.com/1600x900/?weather-night')",
        },
    };

    // Get the appropriate background for the weather and time of day
    const timeOfDay = isNight ? "night" : "day";
    const weatherBackground = backgrounds[timeOfDay][weatherCondition] || backgrounds[timeOfDay]["Default"];
    dynamicBackground.style.backgroundImage = weatherBackground;
});
