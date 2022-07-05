var formcontato = document.querySelector("#formcontato__form");
var nombre = formcontato.nombre;
var email = formcontato.email;
var asunto = formcontato.asunto;
var mensaje = formcontato.mensaje;
var error = document.querySelector("#formulario__error")
var btnEnviar = document.querySelector("#enviar");
var reg = new RegExp("^[a-zA-ZÀ-ÿ\s]{1,40}$","g");
var correoReg = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$","g");

btnEnviar = addEventListener("submit", validarForm)

function validarNombre(event){
    if(!reg.test(nombre.value)){
        error.style.display = 'block';
        error.innerHTML += '</i> El campo nombre no debe contener numeros o simbolos.</li>';
        event.preventDefault();
    }else{
        error.style.display = 'none';
    }
}
function validarCorreo(event){
    if(!correoReg.test(email.value)){
        error.style.display = 'block';
        error.innerHTML += '</i> Verifique que la direccion del correo electronico debe tener una terminacion similar a .com .co .edu etc, no acepta caracteres diferentes a .-_ o numeros.</li>';
        event.preventDefault();
    }else{error.style.display = 'none';
    }
}
function validarAsunto(event){
    if(asunto.value == "" || asunto.value.length < 3){
        error.style.display = 'block';
        error.innerHTML += '</i> Por favor introduzca un asunto, Debe contener mas de tres caracteres.</li>';
        event.preventDefault();
    }else{error.style.display = 'none';
    }
}
function validarForm(e){
    // Reiniciamos el error para que inicie sin mensaje.
    error.innerHTML = '';
    validarNombre(e);
    validarCorreo(e);
    validarAsunto(e);
}