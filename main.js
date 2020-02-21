window.addEventListener('load', function (event) {

    //Seleccionamos el formulario en una variable
    var formulario = document.querySelector('#formulario');
    var mensajeDatos = document.querySelector('#alerta');

    // Mensaje de posibles errores
    var error_rut = document.querySelector('#error_rut');
    var error_nombre = document.querySelector('#error_nombre');
    var error_apellidos = document.querySelector('#error_apellidos');
    var error_edad = document.querySelector('#error_edad');
    var error_email = document.querySelector('#error_email');

    //Ocultamos el mensajeDatos
    mensajeDatos.style.display = 'none';
    error_rut.style.display = 'none';
    error_nombre.style.display = 'none';
    error_apellidos.style.display = 'none';
    error_edad.style.display = 'none';
    error_email.style.display = 'none';


    //Creamos el escuchador de evento del 
    formulario.addEventListener('submit', function (event) {
        var rut = document.querySelector('#rut').value;
        var nombre = document.querySelector('#nombre').value;
        var apellidos = document.querySelector('#apellidos').value;
        var edad = document.querySelector('#edad').value;
        var email = document.querySelector('#email').value;


        /* El método trim(), elimina los espacios en blanco, tabulaciones en una cadena */
        /* NaN() Si el tipo de número no es un número, este devuelve false */
        /* Si el dato es un número, devuelve true. */

        //Validación básica del rut
        if (rut == null || rut <= 0 || isNaN(rut)) {
            alert('El rut no es válido');
            error_rut.innerHTML = 'El rut no es válida';
            error_rut.style.display = 'block';
            return false;
        } else {
            error_edad.style.display = 'none';
        }

        //Validación básica del nombre
        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('El nombre no es válido');
            error_nombre.innerHTML = 'El nombre no es válido';
            error_nombre.style.display = 'block';
            return false;
        } else {
            error_nombre.style.display = 'none';
        }

        //Validación básica del apellidos
        if (apellidos.trim() == null || apellidos.trim().length == 0) {
            alert('El apellido no es válido');
            error_apellidos.innerHTML = 'El apellido no es válido';
            error_apellidos.style.display = 'block';
            return false;
        } else {
            error_apellidos.style.display = 'none';
        }

        //Validación básica de la edad
        if (edad == null || edad <= 0 || isNaN(edad)) {
            alert('La edad no es válida');
            error_edad.innerHTML = 'la edad no es válida';
            error_edad.style.display = 'block';
            return false;
        } else {
            error_edad.style.display = 'none';
        }


        mensajeDatos.style.display = 'block';

        //Creamos las variables de los campos del mensaje
        var p_rut = document.querySelector('#p_rut span');
        var p_nombre = document.querySelector('#p_nombre span');
        var p_apellidos = document.querySelector('#p_apellidos span');
        var p_edad = document.querySelector('#p_edad span');
        var p_email = document.querySelector('#p_email span');

        // Sacamos los datos de los input y se los pasamos al span 
        p_rut.innerHTML = rut;
        p_nombre.innerHTML = nombre;
        p_apellidos.innerHTML = apellidos;
        p_edad.innerHTML = edad;
        p_email.innerHTML = email;

    });
});