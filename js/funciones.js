//validacion de campos & impresion
const enviar = () => {
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;
    if (nombre != "") {
        var nombre = document.getElementById("nombre").value;
        if (correo != "") {
            var correo = document.getElementById("correo").value;
            if (asunto != "") {
                var asunto = document.getElementById("asunto").value;
                if (mensaje != "") {
                    var mensaje = document.getElementById("mensaje").value;
                } else {
                    alert("Los campos marcados con * son obligatorios");
                }
            } else {
                alert("Los campos marcados con * son obligatorios");
            }
        } else {
            alert("Los campos marcados con * son obligatorios");
        }
    } else {
        alert("Los campos marcados con * son obligatorios");
    }
    if (nombre != "" && correo != "" && asunto != "" && mensaje != "") {
        console.log(nombre);
        console.log(correo);
        console.log(asunto);
        console.log(mensaje);
    }
}