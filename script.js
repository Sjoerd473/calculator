let numberOne = '';
let numberTwo = '';
let displayNumber = '';
let mutator = '';

let display = document.querySelector('.display');

//could also be in a loop?
let buttonOne = document.getElementById('one');
    buttonOne.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 1
        } else {
            displayNumber += '1'
        }
        
        display.textContent = displayNumber;
    })

    let buttonTwo = document.getElementById('two');
    buttonTwo.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 2
        } else {
            displayNumber += '2'
        } 
        display.textContent = displayNumber;
    })

    let buttonThree = document.getElementById('three');
    buttonThree.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 3
        } else {
            displayNumber += '3'
        }
        display.textContent = displayNumber;
    })

    let buttonFour = document.getElementById('four');
    buttonFour.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 4
        } else {
            displayNumber += '4'
        } 
        display.textContent = displayNumber;
    })

    let buttonFive = document.getElementById('five');
    buttonFive.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 5
        } else {
            displayNumber += '5'
        }
        display.textContent = displayNumber;
    })

    let buttonSix = document.getElementById('six');
    buttonSix.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 6
        } else {
            displayNumber += '6'
        }
        display.textContent = displayNumber;
    })

    let buttonSeven = document.getElementById('seven');
    buttonSeven.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 7
        } else {
            displayNumber += '7'
        }
        display.textContent = displayNumber;
    })

    let buttonEight = document.getElementById('eight');
    buttonEight.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 8
        } else {
            displayNumber += '8'
        }
        display.textContent = displayNumber;
    })

    let buttonNine = document.getElementById('nine');
    buttonNine.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = 9
        } else {
            displayNumber += '9'
        }display.textContent = displayNumber;
    })

    let buttonZero = document.getElementById('zero');
    buttonZero.addEventListener('click',() => {
        if(displayNumber === '0'){ 
            displayNumber = '0'
        } else {
            displayNumber += '0'
        } display.textContent = displayNumber;
    })

    /*let buttonComma = document.getElementById('comma');
    buttonComma.addEventListener('click',() => {
        displayNumber += ','
        display.textContent = displayNumber;
    }) */ //needs to check for the presence of another comma

    let buttonClear = document.getElementById('clear');
    buttonClear.addEventListener('click', () =>{
        displayNumber = '0'
        display.textContent = displayNumber;
    })

    let buttonClearAll = document.getElementById('clearAll');
    buttonClearAll.addEventListener('click', () => {
        displayNumber = '0';
        numberOne = '';
        numberTwo= '';
        mutator = '';
        display.textContent = displayNumber;
    })


    

/*.addEventListener('click',() => {
    calculate(numberOne,numberTwo,mutator)
}); */
function calculate(firstNumber, secondNumber, operator){
    if (!secondNumber) return firstNumber;

    const effect = operator;
        switch (effect){
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