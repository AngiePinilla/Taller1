let btnmodal9 = document.getElementById("terminos");
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


//------------------------------------------------------------------

let formulario= document.getElementById('formulario');
let inputs=document.querySelectorAll('#formulario')
let btn=document.getElementById('enviar');

console.log(formulario);
console.log(inputs);
console.log(btn);

const expresiones = {
    documento: /^\d{7,14}$/,
	nombre: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	apellido: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras y espacios, pueden llevar acentos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/, // 4 a 12 digitos.
	
}

const campos = {
	documento: false,
	nombre: false,
	apellido: false,
	correo: false,
	password: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "documento":
			validarCampo(expresiones.documento, e.target, 'documento');
            console.log(validarCampo)
		break;
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
            console.log(validarCampo)
		break;
        case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
            console.log(validarCampo)
		break;
        case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
            console.log(validarCampo)
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarPassword2();
            console.log(validarCampo)
		break;
		case "password2":
			validarPassword2();
		break;
		
		
	}

}
const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

const validarPassword2 = () => {
	const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__password2`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__password2`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario__grupo-correcto');
		});
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});