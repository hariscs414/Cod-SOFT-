let displayValue = '';

function appendToDisplay(value) {
    if (value === '(' && displayValue.length > 0) {
        const lastChar = displayValue[displayValue.length - 1];
        if (!isNaN(lastChar) || lastChar === ')' || lastChar === '.') {
            value = '*' + value;
        }
    }
    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function calculate() {
    try {
        let result;
        if (displayValue.includes("Math.")) {
            result = eval(displayValue);
        } else {
            result = eval(displayValue);
        }
        displayValue = result.toString();
        updateDisplay();
    } catch (error) {
        displayValue = '';
        updateDisplay();
        alert('Invalid expression!');
    }
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.value = displayValue;
}
