var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var b = document.querySelector("body");
var degress = document.getElementById("grados")
var bot = document.getElementById("bot")

color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);
bot.addEventListener("click",changeBackground);

function changeBackground(event){
	b.style.background = "linear-gradient(" + Number(degress.value) + "deg, " + color1.value + ", " + color2.value + ")";
	css.textContent = b.style.background + ";";
}