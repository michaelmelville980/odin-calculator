
// Initializing variables
let firstNumber;
let operator;
let secondNumber;
let lastButtonPress = "clear"; //(clear, result, firstNumber, operand, secondNumber)
const displayRef = document.querySelector("#display");
const calculatorRef = document.querySelector("#calculator");




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
    if (b == 0){
        alert("You can't divide by 0 (:")
        clearDisplay();
    }else{
        return a / b;
    }
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
 * Updates calculator display in response to "click" events.
 * 
 * @param event - The event
 */
const updateDisplay = function(event){
    if (event.target.id === "clear"){
        clearDisplay();
    }else if (event.target.className === "operand" || event.target.className === "operator"){
        addToDisplay(event);
    }else if (event.target.id === "="){
        returnResult();
    }
}




/**
 * Clears calculator display.
 */
const clearDisplay = function(){
    displayRef.textContent = "";
    lastButtonPress = "clear";
}




/**
 * Updates calculator display and stores operand/operators as variables.
 * 
 * @param event - The event.
 */
const addToDisplay = function(event){

    if (event.target.className === "operand"){

        if (lastButtonPress === "clear" || lastButtonPress === "result"){
            firstNumber = Number(event.target.textContent);
            displayRef.textContent = firstNumber;
            lastButtonPress = "firstNumber";
        } 

        else if (lastButtonPress === "operator"){
            secondNumber = Number(event.target.textContent);
            displayRef.textContent = secondNumber;
            lastButtonPress = "secondNumber";
        }

        else if (lastButtonPress === "firstNumber"){
            currentDigit = Number(event.target.textContent);
            firstNumber = ((firstNumber * 10) + currentDigit);
            displayRef.textContent = firstNumber;
            lastButtonPress = "firstNumber";
        }

        else if (lastButtonPress === "secondNumber"){
            currentDigit = Number(event.target.textContent);
            secondNumber = ((secondNumber * 10) + currentDigit);
            displayRef.textContent = secondNumber;
            lastButtonPress = "secondNumber";
        }

    }

    else if (event.target.className === "operator"){
        if (lastButtonPress === "secondNumber"){
            returnResult();
        }else if (lastButtonPress === "operator"){
            secondNumber = firstNumber;
            returnResult();
        }
        lastButtonPress = "operator";
        operator = event.target.id;
    }
}




/**
 * Displays Result.
 */
const returnResult = function(){
    if (lastButtonPress !== "clear" && lastButtonPress !== "result"){
        firstNumber = Number(operate(operator, firstNumber, secondNumber).toFixed(8));
        displayRef.textContent = firstNumber;
        lastButtonPress = "result";
    }
}




// ─────────────────────────────────────────────
//  Actual Listener
// ─────────────────────────────────────────────
calculatorRef.addEventListener("click", e => {
    updateDisplay(e);
});






























