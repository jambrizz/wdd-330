function numbers(){
    let firstNumber = document.getElementById('firstNumber').value;
    let secondNumber = document.getElementById('secondNumber').value;
    document.getElementById("add").addEventListener("click", addValues(firstNumber, secondNumber));
    document.getElementById("sub").addEventListener("click", subtract(firstNumber, secondNumber));
    document.getElementById("divide").addEventListener("click", divide(firstNumber, secondNumber));
    document.getElementById("multiply").addEventListener("click", multiply(firstNumber, secondNumber));
    }
    
    function myFunction(){
        let textInput = document.getElementById('textInput').value;
        document.getElementById('demo').innerHTML = textInput;
    };
    
    function adding(){
     let number = parseInt(document.getElementById('number').value);
     let finalNumber = 0;
     for (let i = 0; i <= number; i++) {
        finalNumber += i;
     }
     document.getElementById('addition').innerHTML = finalNumber;
    }
    
    function addValues(val1, val2) {
        let n = val1 + val2;
        document.getElementById('output').innerHTML = n;
    }
    
    function subtract(x, y){
        let result2 = x - y;
        document.getElementById('output').innerHTML = result2;
    }
    function divide(x, y){
        let result3 = x / y;
        document.getElementById('output').innerHTML = result3;
    }
    function multiply(x, y){
        let result4 = x * y;
        document.getElementById('output').innerHTML = result4;
    }