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

// Days since last visit
const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;
let lastVisitString = localStorage.getItem("lastVisit");
let visitspan = document.querySelector('#days-since-visit');

if (lastVisitString==null){        
    visitspan.textContent = '0';
}
else{
    lastVisitDate=new Date(lastVisitString);
    daysSinceLastVisit = Math.floor((today.getTime() - lastVisitDate.getTime()) / MILLIS_PER_DAY);
    visitspan.textContent = daysSinceLastVisit;
}
localStorage.setItem("lastVisit", today.toLocaleDateString());

// Date page loaded for join page
dateAccessed = new Date();

hiddenField = document.querySelector(".hidden-field").value;
hiddenField = dateAccessed;