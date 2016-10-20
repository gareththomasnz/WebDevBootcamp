var numberOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init () {
	setUpModeButtons();
	setUpSquares();
	reset();
}

function setUpModeButton () {
	modeButtons[0].classList.remove("selected");
	modeButtons[1].classList.remove("selected");
	this.classList.add("selected");
	numberOfSquares = this.textContent === "Easy" ? 3 : 6;
	reset();
}

resetButton.addEventListener("click", reset);

function setUpModeButtons () {
	for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", setUpModeButton);
	}
}

function setUpSquare () {
	var clickedColor = this.style.background;
	if (clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct";
		resetButton.textContent = "Play Again?";
		changeColors(clickedColor);
		h1.style.background = clickedColor;
	} else {
		this.style.background = "#232323";
		messageDisplay.textContent = "Try Again";
	}
}

function setUpSquares () {
	for (var i = 0; i < squares.length; i++) {
		squares[i].addEventListener("click", setUpSquare);
	}
}

function reset () {
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}

function changeColors (color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

function pickColor () {
	var random = (Math.random() * colors.length) | 0; // | 0 is a hack to truncate a float to an int
	return colors[random];
}

function generateRandomColors (n) {
	var arr = [];
	for (var i = 0; i < n; i++) {
		arr.push(randomColor());
	}
	return arr;
}


function randomColor(){
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from  0 -255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from  0 -255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}