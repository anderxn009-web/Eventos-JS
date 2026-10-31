let formulario = document.getElementById("formTaller4");

formulario.addEventListener("submit", formTaller4);

function formTaller4() {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value.trim();
    let edadValor = document.getElementById("edad").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let resultadoP = document.getElementById("resultado");

    resultadoP.className = "mensaje";

    
    if (nombre === "") {
        resultadoP.innerText = "Escribe tu nombre.";
        return;
    }

    
    if (edadValor === "") {
        resultadoP.innerText = "Escribe tu edad.";
        return;
    }

    let edad = Number(edadValor);

    
    if (isNaN(edad) || !Number.isInteger(edad) || edad < 18 || edad > 100) {
        resultadoP.innerText = "La edad debe ser un número entero entre 18 y 100.";
        return;
    }

    
    if (!correo.includes("@") || !correo.includes(".")) {
        resultadoP.innerText = "Escribe un correo válido.";
        return;
    }

    
    if (password !== confirmPassword || password === "") {
        resultadoP.innerText = "Las contraseñas no coinciden.";
        return;
    }

   
    resultadoP.innerText = `Registro exitoso. Bienvenido(a), ${nombre}.`;
    resultadoP.classList.add("exito");
}


