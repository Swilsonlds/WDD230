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
const weather_url = 'https://api.openweathermap.org/data/2.5/weather?zip=98321,us&appid=e8ca06ebca150cdbf1174d606c6f32c0&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(weather_url);
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

const business_url = "directory/data/businesses.json";

async function getBusinessData() {
    const response = await fetch(business_url);
    if (response.ok) {
      const data = await response.json();
      displayBusinesses1(data.businesses);
      console.table(data.businesses);
    } else {
      console.error("There was an error loading the data.");
      // const cards = document.querySelector(".directory-cards");
      // cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
    }
  }
const displayBusinesses1 = (businesss) => {
  let x = Math.floor((Math.random() * 9));
  let y = Math.floor((Math.random() * 9));
  let z  = Math.floor((Math.random() * 9));

  console.log(x);

  document.querySelector("#sp1name").textContent = businesss[x].businessName;
  document.querySelector("#sp1image").src = `./directory/${businesss[x].imgURL}`;
  document.querySelector("#sp1web").textContent = businesss[x].websiteURL;

  document.querySelector("#sp2name").textContent = businesss[y].businessName;
  document.querySelector("#sp2image").src = `./directory/${businesss[y].imgURL}`;
  document.querySelector("#sp2web").textContent = businesss[y].websiteURL;

  document.querySelector("#sp3name").textContent = businesss[z].businessName;
  document.querySelector("#sp3image").src = `./directory/${businesss[z].imgURL}`;
  document.querySelector("#sp3web").textContent = businesss[z].websiteURL;

}

getBusinessData();

  


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