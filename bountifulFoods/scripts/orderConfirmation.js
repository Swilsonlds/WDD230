let url = new URL(window.location);
let params  = url.searchParams;

document.querySelector('#yourname').textContent = params.get("fname");
document.querySelector('#youremail').textContent = params.get("email");
document.querySelector('#yourphone').textContent = params.get("phone");

document.querySelector('#fruit1').textContent = params.get("Fruit1");
document.querySelector('#fruit2').textContent = params.get("Fruit2");
document.querySelector('#fruit3').textContent = params.get("Fruit3");

document.querySelector('#yourinstructions').textContent = params.get("instructions");

let today = new Date()
document.querySelector('#todaysdate').innerHTML = String(today).slice(0,10);