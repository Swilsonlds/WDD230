// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("hide");
}

document.querySelector("#hamburger-button").addEventListener('click', toggleMenu);

// weather
function setWindChill(windspeed, temp){        
    tempSpan = document.querySelector("#temperature");
    windSpeedSpan = document.querySelector("#windspeed");
    windChillSpan = document.querySelector("#windchill");

    let windchill = 'N/A';
    if (windspeed >= 3.0 && temp <= 50){
        let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
        windchill = `${chill}`;
    }

    tempSpan.textContent = temp;
    windSpeedSpan.textContent = windspeed;
    windChillSpan.innerHTML = windchill;
}

setWindChill(4, 33);