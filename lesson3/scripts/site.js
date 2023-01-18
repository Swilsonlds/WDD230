// sets the year for the footer
const today = new Date();
document.querySelector("#currentyear").textContent = today.getFullYear();

// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;