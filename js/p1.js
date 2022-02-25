
// number input

const num1 = parseFloat (prompt ('Enter first number:'));
const num2 = parseFloat (prompt ('Enter second number:'));

// operator input
const operator = prompt('Enter operator (+, -, *, /):');

let result;

if (operator == '+') {
    result = num1 + num2;
}

else if (operator == '-') {
    result = num1 - num2;
}

else if (operator == '*') {
    result = num1 * num2;
}

else  {
    result = num1 / num2;
}

console.log (`${num1} ${operator} ${num2} = ${result}`);