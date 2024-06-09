var c1 = 0;
var c2 = 0;
var n = 0;
var b = 0;

function cand1() {
    c1++;
}

function cand2() {
    c2++;
}

function nulo() {
    n++;
}

function branco() {
    b++;
}

function calcular() {
    var soma = c1 + c2 + n + b;
    document.write("<h2> Percentual de votos </h2>");
    document.write("<h4> Candidato 1: " + ((c1 / soma)* 100) +"% </h4>");
    document.write("<h4> Candidato 2: " + ((c2 / soma)* 100) +"% </h4>");
    document.write("<h4> Nulo: " + ((n / soma)* 100) +"% </h4>");
    document.write("<h4> Em branco: " + ((b / soma)* 100) +"% </h4>");
}