let btnmodal9 = document.getElementById("abrirModal9");
let venmodal9 = document.getElementById("ventanaModal9");
let cermodal9 = document.querySelector(".cerrarModal9");

btnmodal9.addEventListener('click', () => {
    venmodal9.style.display = "block";
})
cermodal9.addEventListener("click", () => {
    venmodal9.style.display = "none";
})
window.addEventListener("click", (e) => {
    if (e.target == venmodal9) {
        venmodal9.style.display = "none";
    }
})