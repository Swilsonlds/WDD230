// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("hide");
}

document.querySelector("#hamburger-button").addEventListener('click', toggleMenu);

// Weather
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const weatherDesc = document.querySelector('#weather-description');


const key = 'e8ca06ebca150cdbf1174d606c6f32c0';
const url = 'https://api.openweathermap.org/data/2.5/weather?zip=98321,us&appid=e8ca06ebca150cdbf1174d606c6f32c0&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }  
    
apiFetch();

function displayResults(weatherData) {
    currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
    var temperature = parseInt(weatherData.main.temp);
    var windspeed1 = parseInt(weatherData.wind.speed);
    const desc = weatherData.weather[0].description;

    console.log(temperature);
    console.log(windspeed1);
  
    weatherIcon.setAttribute('src', iconsrc);
  
    weatherIcon.setAttribute('alt', desc);
  
    captionDesc.textContent = desc;

    function setWindChill(windspeed, temp){        
        tempSpan = document.querySelector("#temperature");
        windSpeedSpan = document.querySelector("#windspeed");
        windChillSpan = document.querySelector("#windchill");
    
        let windchill = 'N/A';
        if (windspeed >= 3.0 && temp <= 50){
            let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));
            windchill = `${chill}`;
        }
    
        windSpeedSpan.textContent = windspeed;
        windChillSpan.innerHTML = windchill;
    }
    
    setWindChill(windspeed1, temperature);
  }

 


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