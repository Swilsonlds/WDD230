let url = new URL(window.location);
let params  = url.searchParams;

document.querySelector('#yourname').textContent = params.get("fname");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphone').textContent = params.get("phone");

document.querySelector('#fruit1').textContent = params.get("Fruit1");
document.querySelector('#fruit2').textContent = params.get("Fruit2");
document.querySelector('#fruit3').textContent = params.get("Fruit3");

let fruit1 = params.get("Fruit1");
let fruit2 = params.get("Fruit2");
let fruit3 = params.get("Fruit3");

document.querySelector('#yourinstructions').textContent = params.get("instructions");

let today = new Date()
document.querySelector('#todaysdate').innerHTML = String(today).slice(0,10);

async function fruit(){
try {
    const response = await fetch(fruitAPI);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      sumUp(data, fruit1, fruit2, fruit3);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

function sumUp(data, fruit1, fruit2, fruit3){
    let carbs = 0;
    let fats = 0;
    let proteins = 0;
    let sugars = 0;
    let calories = 0;

    for (let i = 0; i <40; i++){
        if((data[i].name == fruit1) || (data[i].name == fruit2) || (data[i].name == fruit3)){
            carbs = carbs + Number(data[i].nutritions.carbohydrates);
            fats = fats + Number(data[i].nutritions.fat);
            proteins = proteins + Number(data[i].nutritions.protein);
            sugars = sugars + Number(data[i].nutritions.sugar);
            calories = calories + Number(data[i].nutritions.calories);

        }
    }

    document.querySelector("#carbs").textContent = carbs;
    document.querySelector("#protein").textContent = proteins;
    document.querySelector("#fat").textContent = fats;
    document.querySelector("#sugar").textContent = sugars;
    document.querySelector("#calories").textContent = calories;

}

fruit();
