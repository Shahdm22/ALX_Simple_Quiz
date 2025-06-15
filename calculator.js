// Arithmetic operation functions
function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero";
    }
    return num1 / num2;
}

// Utility to get numbers from input fields
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result on the page
function updateResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners for operation buttons
document.getElementById('add').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    updateResult(add(num1, num2));
});

document.getElementById('subtract').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    updateResult(subtract(num1, num2));
});

document.getElementById('multiply').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    updateResult(multiply(num1, num2));
});

document.getElementById('divide').addEventListener('click', function () {
    const [num1, num2] = getInputValues();
    updateResult(divide(num1, num2));
});
