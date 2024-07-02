// CALCULATOR PROGRAM

const display = document.getElementById('display')

function appendToDisplay(input) {
  display.value += input
}

//WHEN YOU CLICK ALL DISAPEARS
function clearDisplay(input) {
  display.value = ''
}

//WE NEED TO CATCH ERRORS
function calculate(input) {
  try {
    display.value = eval(display.value)
  } catch (console) {
    display.value = 'Error'
  }
}
