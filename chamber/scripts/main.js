// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

function toggleMenu() {
    document.querySelector("nav ul").classList.toggle("hide");
}

document.querySelector("#hamburger-button").addEventListener('click', toggleMenu);