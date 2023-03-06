function verificacion() {
    const input=document.getElementById("input-text");
    const caracter= input.value;
    let esNumero= !isNaN(caracter);
    let mensaje= "";
    
    if (esNumero) {
        mensaje= "El caracter es un número";
    } 
    else {
        mensaje= "El caracter es un texto";
    }

    document.getElementById("resultado").innerHTML=mensaje;
}

function numeros() {
    let numero= Math.floor(Math.random() * 99) + 1;
    alert("el numero generado es: " + numero);
}

