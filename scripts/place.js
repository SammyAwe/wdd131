
function calculateWindChill(temperature, windSpeed) {
    const windChill = temperature <= 10 && windSpeed > 4.8 ?
    13.12 + 0.6215 * temperature - 11.37 *
Math.pow(windSpeed, 0.16) + 0.3965 * temperature *
Math.pow(windSpeed, 0.16) :
   temperature <= 50 && windSpeed > 3 ?
   35.74 + 0.6215 * temperature - 35.75 *
Math.pow(windSpeed, 0.16) + 0.4275 * temperature *
Math.pow(windSpeed, 0.16) :
   "N/A";
   return windChill;
}

window.addEventListener('load', function() {
    
    const temperature = 5;
    const windSpeed = 10;
    const windChillFactor = calculateWindChill(temperature, windSpeed);
    const weatherSection = document.querySelector('#weather');
    const weatherDataElement = document.createElement('p');
    weatherDataElement.innerHTML = `Temperature: ${temperature}Celsius,<br> Wind Speed: ${windSpeed} km/h,<br> Windchill: ${windChillFactor}`;
    weatherSection.appendChild(weatherDataElement);
});

var currentYear = new Date().getFullYear();
var lastModifiedDate = document.lastModified;
document.getElementById("currentYear").innerText = currentYear;
document.getElementById("lastModified").innerText = lastModifiedDate;
