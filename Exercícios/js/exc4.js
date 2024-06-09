function calcular() {
    var sal = parseFloat(document.getElementById("sal").value);
    var hrs = parseFloat(document.getElementById("hrs").value);
    var imposto, bruto, trabalhada, receber;

    trabalhada = sal / 2; 
    bruto = hrs * trabalhada;
    imposto = bruto * 0.03;
    receber = bruto - imposto;
   
    document.getElementById("demo").innerHTML = "<h4>O salário a receber é R$" + receber + "</h4>";

}