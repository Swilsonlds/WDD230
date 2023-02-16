// Day of the week
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
document.querySelector(".date p").textContent = fulldate;

// Meeting announcement to appear on Mondays and Tuesdays
const d = new Date();
let day = d.getDay();

let meeting = document.querySelector("#meeting");

if (day != 1 && day !=2){
	meeting.style.display = "none";
}

else{
	meeting.style.display = "block";
}


