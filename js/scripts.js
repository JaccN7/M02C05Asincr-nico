function sumarArreglo() {
    var cantNumeros = parseInt(document.getElementById("cantNumeros").value);
    var arreglo = [];
    var sumarArreglo = 0;
    if (cantNumeros <= 1) {
        alert("Para poder realizar la operación es necesario que indiques que se sumaran mas de un número")
    } else {
        for (var i = 0; i < cantNumeros; i++) {
            arreglo[i] = parseInt(prompt("Ingresa un NÚMERO para sumar: "));
            console.log("Valor en posición " + (i + 1) + ": " + arreglo[i]);
        }
        console.log("Este es el array creado: arreglo[" + arreglo + "]");

        arreglo.forEach(arregloNum => {
            sumarArreglo += arregloNum;
        });

        console.log(sumarArreglo)
        document.getElementById("aquiRespuesta").innerHTML = ('<p style="color:#1a21ef">La suma de los numeros que contiene arreglo[' + arreglo + '] es: ' + sumarArreglo);
    }
}
