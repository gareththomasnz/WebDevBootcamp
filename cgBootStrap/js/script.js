var numSquares = 6;
var colours = generateRandomColours(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColour = pickColour();
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
        hardBtn.classList.remove("selected");
        easyBtn.classList.add("selected");
        numSquares = 3;
        colours = generateRandomColours(numSquares);
        pickedColour = pickColour();
        colourDisplay.textContent = pickedColour;
        for(var i = 0; i < squares.length; i++){
             if(colours[i]){
                squares[i].style.background = colours[i];
                }  else{
                  squares[i].style.display =  "none";     
                        } 
        }
        });

hardBtn.addEventListener("click", function(){
        hardBtn.classList.add("selected");
        easyBtn.classList.remove("selected");
        numSquares = 6;
        colours = generateRandomColours(numSquares);
        pickedColour = pickColour();
        colourDisplay.textContent = pickedColour;
        for(var i = 0; i < squares.length; i++){
                squares[i].style.background = colours[i];
                squares[i].style.display =  "block";     
                        
        }
        });

resetButton.addEventListener("click", function(){
        colours = generateRandomColours(numSquares);
        pickedColour = pickColour();
        colourDisplay.textContent = pickedColour;
        messageDisplay.textContent = "";
        this.textContent = "New Colours";
        for(var i = 0; i < squares.length; i++){
           squares[i].style.background =  colours[i];    
        }
        h1.style.background = "steelblue";
        });

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colours[i];

	squares[i].addEventListener("click", function() {
		//alert("clicked the square ");
		var clickedColour = this.style.background;
                console.log(clickedColour, pickedColour);
		if (clickedColour === pickedColour) {
			messageDisplay.textContent = "Correct";
                        resetButton.textContent = "Play Again?";
			changeColours(clickedColour);
                        h1.style.background = clickedColour; 
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try again";
		}
	});
}

function changeColours(colour) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = colour;
	}

}

function pickColour() {
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
        var arr = [];
        
        for(i = 0; i < num; i++){
          arr.push(randomColour());      
        }
        return arr;
}

function randomColour(){
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ', ' + g + ', ' + b + ")";
}

colourDisplay.textContent = pickedColour;