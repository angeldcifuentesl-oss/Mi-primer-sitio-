function guardar() {
    const nombre = document.getElementById("nombre").value;
    sessionStorage.setItem("nombre",nombre);
    const cuidad = document.getElementById("cuidad").value;
    sessionStorage.setItem("ciudad",cuidad);
    if (nombre === null || nombre === "" && cuidad === null || cuidad=== "") {
        document.getElementById("pedir").textContent = "Faltan datos.";
    } 
    else {
        localStorage.setItem("nombre",nombre);
        localStorage.setItem("ciudad",cuidad);
        window.location.href = "Pag2.html";
    }
}

document.getElementById("btn-guardar").addEventListener("click",guardar);