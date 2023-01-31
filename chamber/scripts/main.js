// sets last modified date on the home page
document.querySelector("#lastmodified").textContent = document.lastModified;

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);