var numOfSquares = 6;
var colors = [];
var squares = document.getElementsByClassName("square");
var addBtn = document.querySelector("#addDrink");
var remBtn = document.querySelector("#removeDrink");
var infoBtn = document.querySelector("#testSquare");

init();

function init(){
  setUpSquares();
}

function setUpSquares(){
  // Generate new colors
  colors = generateRandomColors(numOfSquares);
  // Generate squares
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else{
      squares[i].style.display = "none";
    }
  }
}

// Create new Square based on input field
function createSquare(){
	// Create square of class square
	var newSquare = document.createElement("div");
	newSquare.classList.add("square");
	newSquare.style.display = "block";
	newSquare.style.backgroundColor = generateRandomRGB();

	// Create square header element
	var newDrinkInput = document.getElementById("drinkDescription").value;
	var newDrinkHeader = document.createElement("p");
	newDrinkHeader.classList.add("square-header");

	// Add text to square header element
	var newDrinkHeaderContent = document.createTextNode(""+newDrinkInput);
	newDrinkHeader.appendChild(newDrinkHeaderContent);

	// Add square header to square
	newSquare.appendChild(newDrinkHeader);

	// Call addSquare method
	addSquare(newSquare);

	// Reset input field
	$("#drinkDescription").val("");
}

// Adding the square to the DOM
function addSquare(square){
	// Add square to DOM
	$("#squareContainer").append(square);
	console.log(this);
	/*.addEventListener("click", function(){
		var thisDiv = $(".square").index(this);
		console.log(thisDiv);
	});*/
}

// Remove specific square
function removeSquare(){
	if(squares.length > 0){
		squares[squares.length-1].remove();
	} else{
		console.log("Can't remove from empty array")
	}
}

// Remove same square
function removeThisSquare(){

}

// Generates an array of random rgb colors
function generateRandomColors(input){
  var randomColors = [];

  for(var i=0; i<input; i++){
      randomColors.push(generateRandomRGB());
    };

  return randomColors;
}

// Generate one rgb color
function generateRandomRGB(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);

  return "rgb("+r+", "+g+", "+b+")";
}

// Function to add a drink
function addDrink(){
	numOfSquares = numOfSquares+1;
	createSquare();
}

// Function to remove a drink
function removeDrink(){
	numOfSquares = numOfSquares-1;
	removeSquare();
}

// Add function to Button New Drink
addBtn.addEventListener("click", function(){
	if (document.getElementById("drinkDescription").value != "") {
		addDrink();
	}
	else {
		alert("Please enter type of drink");
	}
});

// Add function to Button Remove Drink
remBtn.addEventListener("click", function(){
	removeDrink();
});

// Add function to button info
infoBtn.addEventListener("click", function(){
	var thisDiv = $(".square").index(this);
	console.log(thisDiv);
});