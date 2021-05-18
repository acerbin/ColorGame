let numberOfColors = 6;
let colors = generateRandomColors(numberOfColors)
let messageDisplay = document.getElementById("messageDisplay")
let heading = document.querySelector("h1")
const squares = document.querySelectorAll('.square')
const resetButton = document.getElementById("reset")
const easyBtn = document.getElementById("easy")
const hardBtn = document.getElementById("hard")

let pickedColor = pickColor()

resetButton.addEventListener('click',()=> {
  colors = generateRandomColors(numberOfColors)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i ++ ){
    squares[i].style.backgroundColor = colors[i]
  }
  heading.style.backgroundColor = "steelblue"
  messageDisplay.textContent = "";
  resetButton.textContent = "New Colours"
})

easyBtn.addEventListener('click',()=>{
  easyBtn.classList.add("selected")
  hardBtn.classList.remove("selected")
  numberOfColors = 3
  colors = generateRandomColors(numberOfColors)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  for(let i = 0; i < squares.length; i ++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i]
    } else {
      squares[i].style.display = 'none'
    }
  }
})

hardBtn.addEventListener('click',()=>{
  hardBtn.classList.add("selected")
  easyBtn.classList.remove("selected")
  numberOfColors = 6
  colors = generateRandomColors(numberOfColors)
  pickedColor = pickColor()
  colorDisplay.textContent = pickedColor
  for(let i = 0; i < squares.length; i ++){
      squares[i].style.backgroundColor = colors[i]
      squares[i].style.display = 'block'
  }
})

for(let i = 0; i < squares.length; i ++ ){
  squares[i].style.backgroundColor = colors[i]
  squares[i].addEventListener('click', (e)=>{
    let clickedColor = squares[i].style.backgroundColor
    if(clickedColor !== pickedColor) {
      squares[i].style.backgroundColor = "#232323"
      messageDisplay.textContent = "Try Again!"
    } else {
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor)
      heading.style.backgroundColor = clickedColor
      resetButton.textContent = "Play Again?"
    }
  })
}

let colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor;

function changeColors(color) {
  squares.forEach((square) => {
    square.style.backgroundColor = color;
  })
}

function pickColor() {
  let index = Math.floor(Math.random() * colors.length)
  return colors[index]
}

function generateRandomColors(numberColors){
  let colors = []
  for(let i = 0; i < numberColors; i ++){
    let randomRed = Math.floor(Math.random() * 256)
    let randomGreen= Math.floor(Math.random() * 256)
    let randomBlue= Math.floor(Math.random() * 256)
    let colorString = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`
    colors.push(colorString)
  }
  return colors
}
