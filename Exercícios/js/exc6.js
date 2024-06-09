function calcular() {
    var texto = "";
    for (var i = 1; i <= 20; i++) {
        texto += (i * i) + ", ";
    }

    document.getElementById("demo").innerHTML = "<h4>" + texto + "</h4>";

}