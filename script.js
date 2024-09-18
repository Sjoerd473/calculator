let numberOne = '';
let numberTwo = '';
let displayNumber = '';
let mutator = '';
let toggle

let display = document.querySelector('.display');

//could also be in a loop?
let buttonOne = document.getElementById('one');
buttonOne.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { //overwrites a zero in the display that resulted from an equasion
        numberOne = ''
        displayNumber = '1'

    } else if (toggle && mutator === '') //lets you add numbers after clicking percentage or comma
    {
        numberOne += '1'

    } else if (mutator === '' && numberOne.length > 0) { //overwrites the result from a previous equasion
        numberOne = '';
        displayNumber = '1'
    }
    else if (displayNumber === '0') { //overwrites a zero in the display
        displayNumber = '1'

    } else { //adds the number to the display
        displayNumber += '1'

    }

    display.textContent = numberOne + mutator + displayNumber
})

let buttonTwo = document.getElementById('two');
buttonTwo.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '2'

    } else if (toggle && mutator === '') 
    {
        numberOne += '2'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '2'
    }
    else if (displayNumber === '0') { 
        displayNumber = '2'

    } else { 
        displayNumber += '2'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonThree = document.getElementById('three');
buttonThree.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '3'

    } else if (toggle && mutator === '') 
    {
        numberOne += '3'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '3'
    }
    else if (displayNumber === '0') { 
        displayNumber = '3'

    } else { 
        displayNumber += '3'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonFour = document.getElementById('four');
buttonFour.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '4'

    } else if (toggle && mutator === '') 
    {
        numberOne += '4'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '4'
    }
    else if (displayNumber === '0') { 
        displayNumber = '4'

    } else { 
        displayNumber += '4'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonFive = document.getElementById('five');
buttonFive.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '5'

    } else if (toggle && mutator === '') 
    {
        numberOne += '5'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '5'
    }
    else if (displayNumber === '0') { 
        displayNumber = '5'

    } else { 
        displayNumber += '5'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonSix = document.getElementById('six');
buttonSix.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '6'

    } else if (toggle && mutator === '') 
    {
        numberOne += '6'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '6'
    }
    else if (displayNumber === '0') { 
        displayNumber = '6'

    } else { 
        displayNumber += '6'

    }
    display.textContent = numberOne + mutator + displayNumber
})
    

let buttonSeven = document.getElementById('seven');
buttonSeven.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '7'

    } else if (toggle && mutator === '') 
    {
        numberOne += '7'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '7'
    }
    else if (displayNumber === '0') { 
        displayNumber = '7'

    } else { 
        displayNumber += '7'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonEight = document.getElementById('eight');
buttonEight.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '8'

    } else if (toggle && mutator === '') 
    {
        numberOne += '8'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '8'
    }
    else if (displayNumber === '0') { 
        displayNumber = '8'

    } else { 
        displayNumber += '8'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonNine = document.getElementById('nine');
buttonNine.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '9'

    } else if (toggle && mutator === '') 
    {
        numberOne += '9'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '9'
    }
    else if (displayNumber === '0') { 
        displayNumber = '9'

    } else { 
        displayNumber += '9'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonZero = document.getElementById('zero');
buttonZero.addEventListener('click', () => {
    if (mutator === '' && displayNumber === '0') { 
        numberOne = ''
        displayNumber = '0'

    } else if (toggle && mutator === '') 
    {
        numberOne += '0'

    } else if (mutator === '' && numberOne.length > 0) { 
        numberOne = '';
        displayNumber = '0'
    }
    else if (displayNumber === '0') { 
        displayNumber = '0'

    } else { 
        displayNumber += '0'

    }
    display.textContent = numberOne + mutator + displayNumber
})

let buttonComma = document.getElementById('comma');
buttonComma.addEventListener('click', addComma)


let buttonClear = document.getElementById('clear'); 
buttonClear.addEventListener('click', () => {
    if (displayNumber === ''){
        if (numberOne.length > 1){
            numberOne = numberOne.slice(0, numberOne.length - 1)
            display.textContent = numberOne + mutator + displayNumber
        }
    } else {
        if (displayNumber.length > 1){
            displayNumber = displayNumber.slice(0, displayNumber.length - 1);
            display.textContent = numberOne + mutator + displayNumber
        }
    }
   
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
buttonNegative.addEventListener('click', makeNegative);

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


function makeNegative() {
    if (displayNumber === 0) return;
    else if (displayNumber === '') {
        numberOne *= -1
        display.textContent = numberOne + mutator + displayNumber
    } else {
        displayNumber *= -1
        display.textContent = numberOne + mutator + displayNumber
    }
};
function percentage() {
    if (displayNumber === 0) return;
    else if (displayNumber === '') {
        toggle = true
        numberOne /= 100
        display.textContent = numberOne + mutator + displayNumber

    } else {
        displayNumber /= 100
        display.textContent = numberOne + mutator + displayNumber
    }
};

function addComma() {
    if (displayNumber.toString().includes('.')) {
        return;

    }
    else if (numberOne.toString().includes('.')) {
        return;

    } else if (numberOne.length > 0) {
        toggle = true
        numberOne += '.'
        display.textContent = numberOne + mutator + displayNumber
    } else {
        displayNumber += '.'
        display.textContent = numberOne + mutator + displayNumber
    }
}


/*.addEventListener('click',() => {
    calculate(numberOne,numberTwo,mutator)
}); */
function calculate(firstNumber, secondNumber, operator) {
    if (!secondNumber) return firstNumber;
    toggle = false
    const effect = operator;
    switch (effect) {
        case '+':
            return (Number(firstNumber) + Number(secondNumber)).toString();

        case '-':
            return (Number(firstNumber) - Number(secondNumber)).toString();

        case '*':
            return (Number(firstNumber) * Number(secondNumber)).toString();

        case '/':
            return (Number(firstNumber) / Number(secondNumber)).toString();
    }
}