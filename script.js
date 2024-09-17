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