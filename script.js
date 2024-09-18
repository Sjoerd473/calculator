let numberOne = '';
let numberTwo = '';
let displayNumber = '';
let mutator = '';

let display = document.querySelector('.display');

//could also be in a loop?
let buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 1
    }
    
     else if (displayNumber === '0') {
        displayNumber = 1
    } else {
        displayNumber += '1'
    }

    display.textContent = numberOne + mutator + displayNumber
})

let buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 2
    }
    
     else if (displayNumber === '0') {
        displayNumber = 2
    } else {
        displayNumber += '2'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 3
    }
    
     else if (displayNumber === '0') {
        displayNumber = 3
    } else {
        displayNumber += '3'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 4
    }
    
     else if (displayNumber === '0') {
        displayNumber = 4
    } else {
        displayNumber += '4'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 5
    }
    
     else if (displayNumber === '0') {
        displayNumber = 5
    } else {
        displayNumber += '5'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 6
    }
    
     else if (displayNumber === '0') {
        displayNumber = 6
    } else {
        displayNumber += '6'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 7
    }
    
     else if (displayNumber === '0') {
        displayNumber = 7
    } else {
        displayNumber += '7'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 8
    }
    
     else if (displayNumber === '0') {
        displayNumber = 8
    } else {
        displayNumber += '8'
    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0'){
        numberOne = ''
        displayNumber = 9   
    }
    
     else if (displayNumber === '0') {
        displayNumber = 9
    } else {
        displayNumber += '9'
    } display.textContent = numberOne + mutator + displayNumber
})

let buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', () => {
    if (mutator === ''){
        numberOne = ''
        displayNumber += '0'
    }
    
     else if (displayNumber === '0') {
        displayNumber = '0'
    } else {
        displayNumber += '0'
    } display.textContent = numberOne + mutator + displayNumber
})

/*let buttonComma = document.getElementById('comma');
buttonComma.addEventListener('click',() => {
    displayNumber += ','
    display.textContent = numberOne + mutator + displayNumber
}) */ //needs to check for the presence of another comma

let buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', () => {
    displayNumber = '0'
    display.textContent = numberOne + mutator + displayNumber
})

let buttonClearAll = document.getElementById('clearAll');
buttonClearAll.addEventListener('click', () => {
    displayNumber = '0';
    numberOne = '';
    numberTwo = '';
    mutator = '';
    display.textContent = numberOne + mutator + displayNumber
})


let buttonPlus = document.getElementById('plus');
buttonPlus.addEventListener('click', adding);

let buttonMinus = document.getElementById('minus');
buttonMinus.addEventListener('click', subtraction);

let buttonDivide = document.getElementById('divide');
buttonDivide.addEventListener('click', division);

let buttonMultiply = document.getElementById('multiply');
buttonMultiply.addEventListener('click', multiplication);

let buttonEqual = document.getElementById('equals')
buttonEqual.addEventListener('click', equals);

let buttonNegative = document.getElementById('negative');
buttonNegative.addEventListener('click',makeNegative);

let buttonPercent = document.getElementById('percent');
buttonPercent.addEventListener('click', percentage);
//can also be changed to only show displayNumber
//might work better if wanting to add features like +/-, comma, and percentage
function adding() {
    if (mutator.length === 0 && displayNumber.length === 0) {
        mutator = '+'
        display.textContent = numberOne + mutator + displayNumber
    } else if (mutator.length === 0) {
        numberOne = Number(displayNumber);
        mutator = '+'
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber
    } else {
        numberTwo = Number(displayNumber);
        numberOne = calculate(numberOne, numberTwo, mutator);
        mutator = '+'
        numberTwo = ''
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber



    }
}
function subtraction() {
    if (mutator.length === 0 && displayNumber.length === 0) {
        mutator = '-'
        display.textContent = numberOne + mutator + displayNumber
    } else if (mutator.length === 0) {
        numberOne = Number(displayNumber);
        mutator = '-'
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber
    } else {
        numberTwo = Number(displayNumber);
        numberOne = calculate(numberOne, numberTwo, mutator);
        mutator = '-'
        numberTwo = ''
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber



    }
}

function division() {
    if (mutator.length === 0 && displayNumber.length === 0) {
        mutator = '/'
        display.textContent = numberOne + mutator + displayNumber
    } else if (mutator.length === 0) {
        numberOne = Number(displayNumber);
        mutator = '/'
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber
    } else {
        numberTwo = Number(displayNumber);
       
        if (numberTwo === 0 || numberOne === 0) {
            display.textContent = 'Stop it'
            displayNumber = '';
            numberOne = '';
            numberTwo = '';
            mutator = '';
        } else {
        numberOne = calculate(numberOne, numberTwo, mutator);
        mutator = '/'
        numberTwo = ''
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber



    }
}
}

function multiplication() {
    if (mutator.length === 0 && displayNumber.length === 0) {
        mutator = '*'
        display.textContent = numberOne + mutator + displayNumber
    } else if (mutator.length === 0) {
        numberOne = Number(displayNumber);
        mutator = '*'
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber
    } else {
        numberTwo = Number(displayNumber);
        numberOne = calculate(numberOne, numberTwo, mutator);
        mutator = '*'
        numberTwo = ''
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber



    }
}

function equals() {
    if (mutator.length === 0) {
        return
    } else {
        numberTwo = Number(displayNumber);
        numberOne = calculate(numberOne, numberTwo, mutator);
        mutator = ''
        numberTwo = ''
        displayNumber = ''
        display.textContent = numberOne + mutator + displayNumber



    }
}

/*function makeNegative(){
    if (displayNumber.includes('-')){
        displayNumber.slice(0,1);
        display.textContent = numberOne + mutator + displayNumber
    } else {
        '-' + displayNumber;
        display.textContent = displayNumber
    }
} */

    function makeNegative(){
        if(displayNumber === ''){
            numberOne *= -1
            display.textContent = numberOne + mutator + displayNumber
        } else{
        displayNumber *= -1
        display.textContent = numberOne + mutator + displayNumber
    }
    };
function percentage(){
    console.log('what')
}

/*.addEventListener('click',() => {
    calculate(numberOne,numberTwo,mutator)
}); */
function calculate(firstNumber, secondNumber, operator) {
    if (!secondNumber) return firstNumber;

    const effect = operator;
    switch (effect) {
        case '+':
            return firstNumber + secondNumber;

        case '-':
            return firstNumber - secondNumber;

        case '*':
            return firstNumber * secondNumber;

        case '/':
            return firstNumber / secondNumber;
    }
}