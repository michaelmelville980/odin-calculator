
// Creating variables for operation
let firstNumber;
let secondNumber;
let operand;




/**
 * Compute the sum of two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns a + b - The sum of adding a and b. 
 */
const add = function(a, b){
    return a + b;
}




/**
 * Compute the difference of two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns a - b - The difference of substracting a and b. 
 */
const subtract = function(a, b){
    return a - b;
}




/**
 * Compute the product of two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns a * b - The product of multiplying a and b. 
 */
const multiply = function(a, b){
    return a * b;
}




/**
 * Compute the quotient of two numbers.
 * 
 * @param a - The first number.
 * @param b - The second number.
 * @returns a / b - The quotient of dividing a and b. 
 */
const divide = function(a, b){
    return a / b;
}




/**
 * Based on operator, calls function (add, subtract, multiply, divide) on two numbers.
 * 
 * @param operator - The operator.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The result of `a operator b`.
 */
const operate = function(operator, a, b){
    switch(operator) {
        case '+': return add(a, b);
        case '-': return subtract(a, b);
        case '*': return multiply(a, b);
        case '/': return divide(a, b);
    }
}




/**
 * Populates display when digit buttons clicked.
 */
const updateDisplay = function(operator, a, b){
}

