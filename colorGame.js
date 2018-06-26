var numOfSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.getElementById("msg");
var h1 = document.getElementById("gameTitle");
var resetBtn = document.querySelector("#reset");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeBtns();
  setUpSquares();
  resetSquares();
}

function setUpModeBtns(){
  for(var i=0; i<modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selectedBtn");
      modeBtns[1].classList.remove("selectedBtn");
      this.classList.add("selectedBtn");
      // Ternary operator: condition ? expr1 (displayed if true) : expr2 (displayed if false)
      this.textContent === "easy" ? numOfSquares = 3 : numOfSquares  = 6;
      resetSquares();
    });
  }
}

function setUpSquares(){
  for(var i=0; i<squares.length; i++){
    // Add click-listener
    squares[i].addEventListener("click", function(){
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      // Compare color to pickedColor
      if(clickedColor === pickedColor){
        msgDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetBtn.textContent = "Play again?";
      } else{
        msgDisplay.textContent = "Try again";
        this.style.backgroundColor = "#FFFFFF";
      }
    });
  }
}

function resetSquares(){
  h1.style.backgroundColor = "#f08c23";
  msgDisplay.textContent = "";
  resetBtn.textContent = "New Colors"
  // Generate new colors
  colors = generateRandomColors(numOfSquares);
  // pick one and display it
  pickedColor = colors[pickColor()];
  colorDisplay.textContent = pickedColor;
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

// Add function to button resetBtn
resetBtn.addEventListener("click", function(){
  resetSquares();
})

// Changes color of all squares if correct square is clicked
function changeColors(input){
  for(var i=0; i < colors.length; i++){
    squares[i].style.backgroundColor = input;
  }
}

// Generates random number between 0 and 6 to choose one square as the one to guess
function pickColor(){
  var random = Math.floor(Math.random()*colors.length);
  return random;
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