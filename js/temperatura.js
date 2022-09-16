
//Temperatura---------------------------------+


let btntem = document.getElementById("btntem");
console.log(btntem) 


function TempCalcular() {

    let tem = document.getElementById("temperatura").value;

    let Co1 = parseInt(document.getElementById("Convertir1").value);
    let Co2 = parseInt(document.getElementById("Convertir2").value);


    console.log(tem) 
    console.log(Co1)
    console.log(Co2)

    if (Co1 == 1 && Co2 == 2) {
        let f = tem;
        let res = (f - 32) * 5 / 9;
        alert(`fahrenheit a celsius ${res}`)

    } else if (Co1 == 1 && Co2 == 3) {
        let f = tem;
        let res = (f - 32) * 5 / 9 + 273.15;

        alert(`fahrenheit a kelvin  ${res}`)

    } else if (Co1 == 2 && Co2 == 1) {
        let f = tem;
        let res = (f * 9 / 5) + 32;

        alert(`celsius a fahrenheit ${res}`)

    } else if (Co1 == 2 && Co2 == 3) {
        let f = tem;
        f = parseInt(f)
        let res = (f + 273.15);

        alert(`celsius a kelvin  ${res}`)

    } else if (Co1 == 3 && Co2 == 1) {
        let f = tem;
        let res = (f - 273.15) * 9 / 5 + 32;

        alert(`kelvin  a fahrenheit ${res}`)

    } else if (Co1 == 3 && Co2 == 2) {
        let f = tem;
        let res = (f - 273.15);

        alert(`kelvin  a celsius ${res}`)
    }
    else {
        Swal.fire('Any fool can use a computer')
    }



}
//TempCalcular()
btntem.addEventListener('click', TempCalcular);
