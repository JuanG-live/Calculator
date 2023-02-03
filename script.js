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
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement; 

    this.previousOperand = "";
    this.currentOperand = "";
    this.operation = undefined;
    }
    allClear() {

    }
    deletDigit() {
        this.currentOperand = this.currentOperand.slice(0,-1)
    }
    appendDigit(digit) {
        const tempOperand = this.currentOperand + digit;
        
        // poner un solo '.'
        if (digit === '.' && this.currentOperand.includes('.'))return;

        // poner un cero a la izq cuando selecciono '.'
        if (digit === '.' && this.currentOperand === '') this.currentOperand = '0';

        // Poner un solo cero a la izq
        if (digit === '0' && this.currentOperand === '0') return;

        // agregar digitos
        this.currentOperand += digit;
    }
    selectOperator(){

    }
    calculate() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
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
deleteButton.addEventListener('click', () =>{
    calculator.deletDigit();
    calculator.updateDisplay();
})

numberButtons.forEach(button =>{
    button.addEventListener('click', () => {
        calculator.appendDigit(button.innerText);
        calculator.updateDisplay();
    })
})