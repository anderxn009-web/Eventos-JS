let formulario = document.getElementById("formTaller2");

formulario.addEventListener("submit",taller2);

function taller2(){
    event.preventDefault();
    let nota = parseFloat(document.getElementById("nota").value);

    //validar que la nota no sea nula con IsNan
    //Validar que la nota este entre 0.0 y 5.0
    //validar el desempeño

    /*
    4.5 a 5.0 exelente aprobado
    4.0 a 4.4 bueno
    3.0 a 3.9 aceptable
    menor a  3.0 insuficiente
    */
   if(isNaN(nota)){
    document.getElementById("resultado").innerText = "Ingrese una nota porfavor";
    return;
    }
    else if(nota <0 || nota >5){
        document.getElementById("resultado").innerText = "Nota invalida";
        return;
    }
    let resultado = "Aprobado";
    let desempeño ;
    if(nota >4.5){
        desempeño = "Excelente";
    }
    else if(nota >4){
        desempeño = "bueno";
    }
    else if(nota >3){
        desempeño = "Aceptable"
    }
    else{
        desempeño = "Insuficiente"
        resultado = "Reprobado"
    }

    document.getElementById("resultado").innerText = `${nota} - ${desempeño} - ${resultado}`;

}