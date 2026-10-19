// Función: lee el nombre y lo muestra
function mostrarNombre() {
    const nombre = localStorage.getItem("nombre"); 
    const cuidad = localStorage.getItem("ciudad");
    if (nombre === null || nombre === "" && cuidad === null || cuidad=== "") {
        document.getElementById("saludo").textContent = "No hay datos guardados.";
    }else{

        document.getElementById("saludo").textContent = "Hola, " + nombre + " de " + cuidad;
    }   
}

function borrar() {
    localStorage.removeItem("cuidad");
    localStorage.removeItem("nombre"); 
    mostrarNombre();                    
}

// Eventos
document.addEventListener("DOMContentLoaded", mostrarNombre);
document.getElementById("btn-borrar").addEventListener("click", borrar); 