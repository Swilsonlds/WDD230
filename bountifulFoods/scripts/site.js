// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

// Weather api
const key = 'e8ca06ebca150cdbf1174d606c6f32c0';
const weather_url = 'https://api.openweathermap.org/data/2.5/forecast?zip=92008,us&appid=e8ca06ebca150cdbf1174d606c6f32c0&units=imperial';

async function apiFetch() {
    try {
      const response = await fetch(weather_url);
      if (response.ok) {
        const data = await response.json();
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
function displayResults(data) {
    const weather_container = document.querySelector("#weatherBox");

    for(let i = 0; i<4; i++){
    let temp = data.list[i].main.temp;
    let desc = data.list[i].weather[0].description;
    let hum = data.list[i].main.humidity;

    let today = new Date()
    let tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + (i))    

    let newdiv = document.createElement("div");
    newdiv.classList.add("weather-day-box")
    let date = document.createElement("p");
    let temperature = document.createElement("p");
    let description = document.createElement("p");
    let humidity = document.createElement("p");

    date.innerHTML = `<b>Date:</b> ${String(tomorrow).slice(0,10)}`;
    temperature.innerHTML = `<b>Temperature:</b> ${temp} &#176F`;
    description.innerHTML = `<b>Description:</b> ${desc}`;
    humidity.innerHTML = `<b>Humidity:</b> ${hum}`;

    weather_container.appendChild(newdiv);
    newdiv.appendChild(date);
    newdiv.appendChild(temperature);
    newdiv.appendChild(description);
    newdiv.appendChild(humidity);
    }
}

apiFetch();

// POPULATE FRUIT SELECT
const fruitAPI = "./data/fruit.json"
async function apiFetchFruit() {
    try {
      const response = await fetch(fruitAPI);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        PopulateFruitResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function PopulateFruitResults(data) {
  fruitSelection = document.querySelector(".fruit1");
  fruitSelection2 = document.querySelector(".fruit2");
  fruitSelection3 = document.querySelector(".fruit3");

  for(let i=0; i<40; i++){
      let newFruit = document.createElement("option");
      let newFruit2 = document.createElement("option");
      let newFruit3 = document.createElement("option");
      fruitName = data[i].name;
      fruitSelection.appendChild(newFruit);
      fruitSelection2.appendChild(newFruit2);
      fruitSelection3.appendChild(newFruit3);
      newFruit.value = fruitName;
      newFruit.text = fruitName;
      newFruit2.value = fruitName;
      newFruit2.text = fruitName;
      newFruit3.value = fruitName;
      newFruit3.text = fruitName;
  }
}

apiFetchFruit()

// KEEPING TRACK
drinksMade = document.querySelector("#drinksmade");
drinksMade.innerHTML = localStorage.getItem("drinkCount")

if (!localStorage.getItem("drinkCount")){
  drinksMade.innerHTML = 0;
} else{
  drinksMade.innerHTML = localStorage.getItem("drinkCount");
}

function KeepingTrack() {
  if(!localStorage.getItem("drinkCount")) {
    localStorage.setItem("drinkCount", "1");
    drinksMade.innerHTML = localStorage.getItem("drinkCount");


  } else {
    let newCount = Number(localStorage.getItem("drinkCount")) + 1;
    localStorage.setItem("drinkCount", String(newCount));
    drinksMade.innerHTML = localStorage.getItem("drinkCount");
  }

}




