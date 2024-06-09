var id = [];
var ot = 0, bm = 0, reg = 0, rm = 0, i = 0, soma;

function idade(){
    id[i] = parseInt(document.getElementById("idade").value);
    if(id[i] < 0){
        document.getElementById("demo").innerHTML = "<h4>Idade inválida!</h4>";
    }
    i++;
}

function otimo() {
    ot++;
}

function bom() {
    bm++;
}

function regular() {
    reg++;
}

function ruim() {
    rm++;
}

function calcular() {
    var media = 0;
    soma = ot + bm + reg + rm;

    for (let j = 0; j < id.length; j++) {
        media += id[j]; 
    }

    document.write("<br><h4> Média de idade das pessoas que responderam a pesquisa: " + (media / i) +"</h4>");
    document.write("<br><h4> Quantidade de pessoas que responderam a pesquisa: " + i +"</h4>");
    document.write("<br><h2> Percentual de votos </h2>");
    document.write("<h4> Ótimo: " + ((ot / soma)* 100) +"% </h4>");
    document.write("<h4> Bom: " + ((bm / soma)* 100) +"% </h4>");
    document.write("<h4> Regular: " + ((reg / soma)* 100) +"% </h4>");
    document.write("<h4> Ruim: " + ((rm / soma)* 100) +"% </h4>");
    
}