function calcular() {
    var texto = "";
    for (var i = 1; i <= 500; i++) {
        if(i % 5 == 0)
        {
            texto += i + ", ";
        }
    }

    document.getElementById("demo").innerHTML = "<h4>" + texto + "</h4>";

}