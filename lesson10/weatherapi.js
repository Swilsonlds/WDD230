// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

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

    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
  
    weatherIcon.setAttribute('alt', desc);
  
    captionDesc.textContent = desc;  
  
  }

  