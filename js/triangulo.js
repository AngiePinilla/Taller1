


let btn = document.getElementById("btntr");

function CalTriangulo() {

    let l1 = document.getElementById("lado1").value;
    l1 = parseInt(l1);
    let l2 = document.getElementById("lado2").value;
    l2 = parseInt(l2);
    let l3 = document.getElementById("lado3").value;
    l3 = parseInt(l3);

    if (l1 == l2 && l1 == l3 && l2 == l3) {

        alert(`Es un equilatero`)

    } else if (l1 == l2 && l2 !== l3 || l1 == l3 && l1 !== l2 || l2 == l3 && l3 !== l1) {

        alert(`Es un isoceles`)

    } else if (l1 !== l2 && l1 !== l3 && l2 !== l3) {
        alert(`Es un escaleno`)
    }
    else {
        alert("no valido")
    }

}

btn.addEventListener('click', CalTriangulo)