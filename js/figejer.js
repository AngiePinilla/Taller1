
let btnCua = document.getElementById("btnCua");
console.log(btnCua)
function ParCua() {
    let cua = document.getElementById("ladoCua");  
    console.log(cua)
    let c = cua.value;
    let res = c * 4;
    alert(`Perimetro del Cuadrado ${res}`);
}

btnCua.addEventListener('click', ParCua);

//*--

let btnCua2 = document.getElementById("btnCua2");

console.log(btnCua2)

function AreaCua() {
    let cua = document.getElementById("ladoCua2");
    console.log(cua)
    let c = cua.value;
    let res = c * c;
    alert(`area del Cuadrado ${res}`);
}

btnCua2.addEventListener('click', AreaCua);

//----circulo----

let btnCua3 = document.getElementById("btnCua3");

function ParCir() {
    let cir = document.getElementById("radio");
    let c = cir.value;
    const $pi = 3.14;
    let res = 2 * $pi * c;
    alert(`Perimetro del Circulo ${res}`);
}

btnCua3.addEventListener('click', ParCir);
//*-
let btnCua4 = document.getElementById("btnCua4");

function AreaCir() {
    let cir = document.getElementById("radio2");
    let c = cir.value;
   
    const $pi = 3.14;
    let res =  $pi*(c*c) ;
    alert(`Area del Circulo ${res}`);
}

btnCua4.addEventListener('click', AreaCir);

//----RECTANGULO----

let btnCua5 = document.getElementById("btnCua5");

function PerRect() {
    let la = document.getElementById("ladoRec");
    let c = la.value;
    let base = document.getElementById("BaseRec");
    let b = base.value;

    let res = 2*c+2*b;
    alert(`Perimetro del Rectangulo ${res}`);
}

btnCua5.addEventListener('click', PerRect);

//*-

let btnCua6 = document.getElementById("btnCua6");

function AreaRect() {
    let la = document.getElementById("ladoRec2");
    let c = la.value;
    let base = document.getElementById("BaseRec2");
    let b = base.value;

    let res = c*b;
    alert(`Area del Rectangulo ${res}`);
}

btnCua6.addEventListener('click', AreaRect);

//----TRIANGULO----

let btnCua7 = document.getElementById("btnCua7");

function PerTrian() {
    let lt1 = document.getElementById("lt1");
    let c = parseInt(lt1.value);
    let lt2 = document.getElementById("lt2");
    let b = parseInt(lt2.value);
    let lt3 = document.getElementById("lt3");
    let t = parseInt(lt3.value);

    let res = c+b+t;
    alert(`Perimetro del Triangulo ${res}`);
}

btnCua7.addEventListener('click', PerTrian);

//*-

let btnCua8 = document.getElementById("btnCua8");

function AreaTrian() {
    let altr = document.getElementById("altr");
    let c = parseInt(altr.value);
    let bstr = document.getElementById("bstr");
    let b = parseInt(bstr.value);
  

    let res = c * b 
    alert(`Area del Triangulo ${res}`);
}

btnCua8.addEventListener('click', AreaTrian);