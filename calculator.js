function numbers() {
    var num1 = document.getElementById('val1').value;
    var num2 = document.getElementById('val2').value;
    multiply(num1, num2);
    division
}

function multiply(x, y) {
    let result = x * y;
    document.getElementById('demo1').innerHTML = result;
}