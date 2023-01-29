// DOM elements
    // 1. Display
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
    // 2. Buttons
const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operator');
const allClearButton =document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');
// constructor
class Calculator {
    constructor(previousOperandTextElement,currentOperandTextElement) {
    this.previousOperand = previousOperandTextElement.textContent;
    this.currentOperand = currentOperandTextElement.textContent; 

    }
    allClear() {

    }
    deletDigit() {

    }
    appendDigit(digit) {
        this.currentOperand = this.currentOperand + digit;
        console.log(this.currentOperand);
    }
    selectOperator(){

    }
    calculate() {

    }
    updateDisplay() {

    }
    getOperandFromDisplay() {

    }

} /* Class Calculator*/
const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);
// event listen
allClearButton.addEventListener('click', button => {
    calculator.allClear();
    calculator.updateDisplay();
})

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendDigit(button.innerText);
        calculator.updateDisplay;
    })
})