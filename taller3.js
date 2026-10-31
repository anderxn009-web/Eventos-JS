let formulario = document.getElementById("formTaller3");

formulario.addEventListener("submit", taller3);

function taller3(){
    event.preventDefault();
    let numero1 = parseFloat(document.getElementById("numero1").value);
    let numero2 = parseFloat(document.getElementById("numero2").value);
    let numero3 = parseFloat(document.getElementById("numero3").value);

    if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
        document.getElementById("resultado").innerText = "Completa los tres números";
        return;
    }

    // Validación si los tres números son iguales
    if(numero1 === numero2 && numero2 === numero3){
        document.getElementById("resultado").innerText = "Los tres números son iguales";
    }
    else if(numero1 > numero2 && numero1 > numero3){
        document.getElementById("resultado").innerText = `El número mayor es ${numero1}`;
    }
    else if(numero2 > numero1 && numero2 > numero3){
        document.getElementById("resultado").innerText = `El número mayor es ${numero2}`;
    }
    else{
        document.getElementById("resultado").innerText = `El número mayor es ${numero3}`;
    }
}


