let display = document.getElementById('display');
let operator = '';
let firstOperand = '';
let secondOperand = '';

function clearDisplay() {
    display.value = '0';
    firstOperand = '';
    secondOperand = '';
    operator = '';
}

function appendNumber(number) {
    if (display.value === '0' || operator && !secondOperand) {
        display.value = number;
    } else {
        display.value += number;
    }

    if (!operator) {
        firstOperand += number;
    } else {
        secondOperand += number;
    }
}

function appendOperator(op) {
    if (!operator && firstOperand) {
        operator = op;
    }
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    let result;
    let num1 = parseFloat(firstOperand);
    let num2 = parseFloat(secondOperand);

    if (isNaN(num1) || isNaN(num2)) return;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }

    display.value = result;
    firstOperand = result;
    secondOperand = '';
    operator = '';
}