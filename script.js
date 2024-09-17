let numberOne = 0
let numberTwo = 0
let mutator = ''

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