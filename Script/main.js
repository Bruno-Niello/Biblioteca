//ingreso de usuario 

// let pass = 1234567890;
// let dato = parseInt(prompt("cual es tu contraseña?"));
// let intentos = 3;

// while (pass != dato) {
//     if (intentos > 0) {
//         intentos--; 
//         alert(`contraseña es erronea. te quedan ${intentos} intentos`);
//         dato = parseInt(prompt("cual es tu contraseña?"));
//     } else {
//         alert("no quedan intentos");
//         break;
//     }
// }

class Usuario {
    constructor(nombre, direccion, telefono, mail){
        this.nombre = nombre;
        this.direccion = direccion; 
        this.telefono = telefono; 
        this.mail = mail; 
    }
}

