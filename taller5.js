let formulario = document.getElementById("formTaller5");

formulario.addEventListener("submit", formTaller5);

function formTaller5() {
    event.preventDefault();

    let valorPrimero = document.getElementById("primero").value.trim();
    let valorSegundo = document.getElementById("segundo").value.trim();
    let operacion = document.getElementById("operacion").value;
    let resultadoP = document.getElementById("resultado");

    resultadoP.className = "mensaje";

   
    if (valorPrimero === "" || valorSegundo === "") {
        resultadoP.innerText = "Escribe los dos números.";
        return;
    }

    let num1 = Number(valorPrimero);
    let num2 = Number(valorSegundo);

   
    if (isNaN(num1) || isNaN(num2)) {
        resultadoP.innerText = "Por favor, ingresa números válidos.";
        return;
    }

    
    if (operacion === "") {
        resultadoP.innerText = "Selecciona una operación.";
        return;
    }

    
    switch (operacion) {
        case "suma":
            resultadoP.innerText = `${num1} + ${num2} = ${num1 + num2}`;
            resultadoP.classList.add("exito");
            return;

        case "resta":
            resultadoP.innerText = `${num1} - ${num2} = ${num1 - num2}`;
            resultadoP.classList.add("exito");
            return;

        case "multiplicacion":
            resultadoP.innerText = `${num1} × ${num2} = ${num1 * num2}`;
            resultadoP.classList.add("exito");
            return;

        case "division":
            
            if (num2 === 0) {
                resultadoP.innerText = "No es posible dividir entre cero.";
                return;
            }
            resultadoP.innerText = `${num1} ÷ ${num2} = ${num1 / num2}`;
            resultadoP.classList.add("exito");
            return;

        default:
            resultadoP.innerText = "Operación no válida.";
            return;
    }
}


