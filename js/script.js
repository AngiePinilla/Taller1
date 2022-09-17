//Palabras-------------------
let pa = document.getElementById("palabra");
let lon = document.getElementById("lon");
let May = document.getElementById("May");
let Min = document.getElementById("Min");
let Car = document.getElementById("Car"); 

console.log(pa)
console.log(lon) 

function letras() {
    let a = pa.value;
    let l = pa.value.length;
    //alert(`La longitud de la palabra ${a} es ${l}`);
    console.info(`La longitud de la palabra ${a} es ${l}`);
    Swal.fire( `La longitud de la palabra ${a} es ${l}` ) 
}
lon.addEventListener('click', letras);

function Mayusculas() {
    let e = pa.value;
    let u = e.toUpperCase();
    alert(`La palabra ${e} en mayusculas es ${u}`);
}
May.addEventListener('click', Mayusculas);


function Minusculas() {
    let i = pa.value;
    let o = i.toLowerCase();
    alert(`La palabra ${i} en minusculas es ${o}`);
}
Min.addEventListener('click', Minusculas);

function Caracter() {
    let c = pa.value;
    let v = c.charAt(0);
    alert(`El primer caracter de la palabra ${c} es ${v}`);
}
Car.addEventListener('click', Caracter);


