const calculatorDisplay = document.querySelector('.calculator-Display');
const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');


function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(a, b, operator) {
  if (operator == "+") {
    return add(a, b);
  } 
  else if (operator == "-") {
    return subtract(a, b);
  }
  else if (operator == "x") {
    return multiply(a, b);
  }
  else if (operator == "÷") {
    return divide(a, b);
  }
}


function clear () {
  calculatorDisplay = '';
}

numberButton.forEach(button => {
  button.addEventListener('click', function() {
    calculatorDisplay.append(button.innerText)
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', function() {
    calculatorDisplay.append(button.innerText);
  })
})





