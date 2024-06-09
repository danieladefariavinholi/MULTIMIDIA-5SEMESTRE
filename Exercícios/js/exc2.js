function calcular() {
    var idade = parseInt(document.getElementById("idade").value);
    if(idade < 5) {
        document.write("<h2>Não possui categoias para essa idade</h2>");
    }
    else if(idade >= 5 && idade < 8){
        document.write("<h2>Infantil A</h2>");
    }
    else if(idade >= 8 && idade < 11){
        document.write("<h2>Infantil B</h2>");
    }
    else if(idade >= 11 && idade < 14){
        document.write("<h2>Juvenil A</h2>");
    }
    else if(idade >= 14 && idade < 18 ){
        document.write("<h2>Juvenil B</h2>");
    }
    else if(idade > 17){
        document.write("<h2>Senior</h2>");
    }
    }