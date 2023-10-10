var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;
function handleClick() {
    var value = this.getAttribute('data-value');

    if (value == '+') {
        operator = '+';
        operand1 = parseFloat(display.textContent);
        display.innerText = ""; // Clear the display after an operator button is clicked
    } else if (value == '-') {
        operator = '-';
        operand1 = parseFloat(display.textContent);
        display.innerText = ""; // Clear the display after an operator button is clicked
    } else if (value == '*') {
        operator = '*';
        operand1 = parseFloat(display.textContent);
        display.innerText = ""; // Clear the display after an operator button is clicked
    }
else if (value == '/') {
        operator = '/';
        operand1 = parseFloat(display.textContent);
        display.innerText = ""; // Clear the display after an operator button is clicked
    } else if (value == '%') {
        operator = '%';
        operand1 = parseFloat(display.textContent);
        display.innerText = ""; // Clear the display after an operator button is clicked
    } else if (value == '=') {
        operand2 = parseFloat(display.textContent);
        var result = eval(operand1 + " " + operator + " " + operand2);
        display.innerText = result;
    } else if (value == 'AC') {
        operand1 = 0;
        operand2 = null;
        display.innerText = "";
    } else {
        display.innerText += value;
    }
}
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
}