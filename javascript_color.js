/* console.log("!")
var body = document.getElementById("body")
body.style.backgroundColor = "rgb(255, 255, 255)"


document.addEventListener("mousemove", colorChange)

function colorChange(evt) {

	var xPos = event.pageX
	var yPos = event.pageY

	console.log(xPos, yPos)

	var w = window.innerWidth
	var h = window.innerHeight

	console.log(w, h)

	var multiplierRed = (xPos/w)
	var multiplierGreen = (yPos/h)

	console.log(multiplierRed)

red = 255 * multiplierRed
green = 255 * multiplierGreen

red = Math.round(red)
green = Math.round(green)

document.body.style.backgroundColor = "rgb" + "(" + red + "," + green + "," + "255)"

var rgb = document.getElementById("rgb").innerHTML = "(" + red + "," + green + "," + "255)"


} */