const secondNumberDisplay = document.querySelector('.secondNumber');
const firstNumberDisplay = document.querySelector('.firstNumber');
const numberButton = document.querySelectorAll('[data-number]');
const operatorButton = document.querySelectorAll('[data-operation]');
const allClearButton = document.querySelector('[data-clear');
const equalButton = document.querySelector('[data-equals]')
const decimalButton = document.querySelector('[data-decimal]')

let firstValue = 0;
let secondValue = 0;
let chooseOperator = "";
let result = 0;
const decimal = Number(".");

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
    return add(+a, +b);
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
  else {
    console.log("ERROR");
    firstNumberDisplay.textContent = "ERROR";
  }
}


function clear() {
  firstNumberDisplay.textContent = "";
  secondNumberDisplay.textContent = "";
  firstValue = 0;
  secondValue = 0;
  result = 0;
  chooseOperator = "";
}

numberButton.forEach(button => {
  button.addEventListener('click', function() {
    firstNumberDisplay.append(button.innerText);
  })
})

operatorButton.forEach(button => {
  button.addEventListener('click', function() {
    secondNumberDisplay.textContent = firstNumberDisplay.textContent;
    firstNumberDisplay.textContent = "";
    chooseOperator = button.innerText;
  })
})

equalButton.addEventListener('click', () => {
  secondValue = secondNumberDisplay.textContent;
  firstValue = firstNumberDisplay.textContent;
  let results = operate(secondValue, firstValue, chooseOperator);
  secondNumberDisplay.textContent = '';
  firstNumberDisplay.textContent = results;
});

decimalButton.addEventListener('click', function() {
  if (firstNumberDisplay.textContent.includes('.')) {
    return;
  }
  else {
    stringToNumber = firstNumberDisplay.textContent + "."
    firstNumberDisplay.textContent = stringToNumber;
  }
})


allClearButton.addEventListener('click', clear);





