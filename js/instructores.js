

let btnprof = document.getElementById("btnprof");



function Profes() {
    let nom = parseInt(document.getElementById("nom").value);
    let ape = parseInt(document.getElementById("ape").value);
    let mat = parseInt(document.getElementById("mate").value);

    if (nom == 1 && ape == 1 && mat == 1) {
       
        //alert(`Bien la instructora es Tatiana`)
        Swal.fire(
            'Good job!',
            'Bien la instructora es Tatiana'
        )

    } else if (nom == 2 && ape == 2 && mat == 2) {
        //alert(`Bien la instructora es Yaneth`)
        Swal.fire(
            'Good job!',
            'Bien la instructora es Yaneth'
        )

    } else if (nom == 3 && ape == 3 && mat == 3) {
        //alert(`Bien el instructor es Luis`)
        Swal.fire(
            'Good job!',
            'Bien el instructor es Luis'
        )

    } else if (nom == 4 && ape == 4 && mat == 4) {
        //alert(`Bien el instructor es Cristian`)

        Swal.fire(
            'Good job!',
            'Bien el instructor es Cristian'
        )

    } else if (nom == 5 && ape == 5 && mat == 5) {
        //alert(`Bien el instructor es Fernando`)

        Swal.fire(
            'Good job!',
            'Bien el instructor es Fernando'
        )
    } else if (nom == 6 && ape == 6 && mat == 6) {
        //alert(`Bien la instructora es Carolina`)
        Swal.fire(
            'Good job!',
            'Bien la instructora es Carolina'
        )

    }
    else { 
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Vuelve a intentar',

        })
    }
}

btnprof.addEventListener('click', Profes);