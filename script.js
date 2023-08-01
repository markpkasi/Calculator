let currentDisplay = "0";
let previousOperator = null;
let previousValue = null;

function updateDisplay() {
    const display = document.getElementById("display");
    display.innerText = currentDisplay;
}

function appendNumber(number) {
    if (currentDisplay === "0") {
        currentDisplay = number;
    } else {
        currentDisplay += number;
    }
    updateDisplay();
}

function handleOperator(operator) {
    if (previousOperator !== null) {
        evaluate();
    }
    previousOperator = operator;
    previousValue = currentDisplay;
    currentDisplay = "0";
}

function evaluate() {
    const currentValue = parseFloat(currentDisplay);
    const previousNumber = parseFloat(previousValue);

    switch (previousOperator) {
        case "+":
            currentDisplay = (previousNumber + currentValue).toString();
            break;
        case "-":
            currentDisplay = (previousNumber - currentValue).toString();
            break;
        case "*":
            currentDisplay = (previousNumber * currentValue).toString();
            break;
        case "/":
            currentDisplay = (previousNumber / currentValue).toString();
            break;
        default:
            return;
    }

    previousOperator = null;
    previousValue = null;
    updateDisplay();
}

function clearDisplay() {
    currentDisplay = "0";
    previousOperator = null;
    previousValue = null;
    updateDisplay();
}

updateDisplay();

const numberButtons = document.querySelectorAll(".button:not(.operator)");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.innerText);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener("click", () => {
        handleOperator(button.innerText);
    });
});

equalButton.addEventListener("click", evaluate);