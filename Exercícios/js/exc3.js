function calcular() {
    var sal = parseFloat(document.getElementById("sal").value);
    var novoSal;

    if(sal < 1000) {
        novoSal = sal + (sal * 0.15);
        document.getElementById("demo").innerHTML = "<h4>O novo salário é R$" + novoSal + "</h4>";
    }
    else if(sal >= 1000 && sal <= 1500) {
        novoSal = sal + (sal * 0.10);
        document.getElementById("demo").innerHTML = "<h4>O novo salário é R$" + novoSal + "</h4>";
    }
    else if(sal > 1500) {
        novoSal = sal + (sal * 0.05);
        document.getElementById("demo").innerHTML = "<h4>O novo salário é R$" + novoSal + "</h4>";
    }

    
    }