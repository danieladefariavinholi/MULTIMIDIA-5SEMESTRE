/* Elabore um script que solicite o peso e a altura de uma determinada pessoa. Após a
digitação, exibir se esta pessoa está ou não com seu peso ideal, conforme tabela
abaixo:*/

function calcular() {
var altura = parseFloat(document.getElementById("altura").value);
var peso = parseFloat(document.getElementById("peso").value);
var imc = peso / (altura * altura);
if(imc < 20){
    document.write("<h2>Abaixo do peso</h2>");
}
else if(imc >= 20 && imc < 25){
    document.write("<h2>Peso ideal</h2>");
}
else if(imc >= 25){
    document.write("<h2>Acima do peso</h2>");
}
}




