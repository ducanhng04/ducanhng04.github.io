function calculate(operation) {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const resultElement = document.getElementById('result');
    
    if (num1 === '' || num2 === '') {
        resultElement.innerHTML = 'Both inputs must be filled';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let result;

    if (operation === '+') {
        result = number1 + number2;
    } else if (operation === '-') {
        result = number1 - number2;
    } else if (operation === '*') {
        result = number1 * number2;
    } else if (operation === '/') {
        if (number2 === 0) {
            resultElement.innerHTML = 'Cannot divide by zero';
            return;
        }
        result = number1 / number2;
    } else {
        resultElement.innerHTML = 'Invalid operation';
        return;
    }

    resultElement.innerHTML = 'Result: ' + result;
}
