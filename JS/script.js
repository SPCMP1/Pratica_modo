const display = document.getElementById('display');

function botaoNum(numero){
    display.value += numero;
}
function calcular(){
    display.value = eval(display.value);
}
function limpar(){
    display.value = '';
}
function backspace(){
    display.value = display.value.slice(0, -1);
}