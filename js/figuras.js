/*Acceder al botón para abrir el modal */

let btnmodal = document.getElementById("abrirModal");

//Acceder ventana modal
let venmodal = document.getElementById("ventanaModal");

//Acceder al botón Cerrar de la ventana modal
let cermodal = document.querySelector(".cerrarModal");

btnmodal.addEventListener('click', () => {
    venmodal.style.display = "block";
})

cermodal.addEventListener("click", () => {
    venmodal.style.display = "none";
})

window.addEventListener("click", (e) => {
    if (e.target == venmodal) {
        venmodal.style.display = "none";
    }
})


//-----------------------------------------------------------------

let btnCua = document.getElementById("btnCua");

function ParCua() {
    let cua = parseInt(document.getElementById("LadoCua").value);

    let res = cua * 4;
    alert(`Perimetro ${res}`)
}

btnCua.addEventListener('click', ParCua);