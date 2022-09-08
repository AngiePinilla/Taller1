

let btnprof = document.getElementById("btnprof");



function Profes() {
    let nom = parseInt(document.getElementById("nom").value);
    let ape = parseInt(document.getElementById("ape").value);
    let mat = parseInt(document.getElementById("mate").value);

    if (nom == 1 && ape == 1 && mat == 1) {
       
        alert(`Bien Tatiana`)
    } else if (nom == 2 && ape == 2 && mat == 2) {
        alert(`Bien Yaneth`)
    } else if (nom == 3 && ape == 3 && mat == 3) {
        alert(`Bien Luis`)
    } else if (nom == 4 && ape == 4 && mat == 4) {
        alert(`Bien Cristian`)
    } else if (nom == 5 && ape == 5 && mat == 5) {
        alert(`Bien Fernando`)
    } else if (nom == 6 && ape == 6 && mat == 6) {
        alert(`Bien Carolina`)
    }
    else {
        alert(`Respuesta Incorrecta`)
    }
}

btnprof.addEventListener('click', Profes);