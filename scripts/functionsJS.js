var css = document.querySelector("h3");
var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var b = document.querySelector("body");

color1.addEventListener("input",changeBackground);
color2.addEventListener("input",changeBackground);

function changeBackground(event){
	b.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = b.style.background + ";";
}