                //  CLASES //               
                
class Libro {
    constructor(titulo, autor, editorial, paginas) {
        this.titulo = titulo.toLowerCase();
        this.autor = autor.toLowerCase();
        this.editorial = editorial.toLowerCase();
        this.paginas = parseInt(paginas); 
        this.stock = true;
    }
}

class Usuario {
    constructor(nombre, mail, numeroCel) {
        this.nombre = nombre.toUpperCase();
        this.mail = mail.toLowerCase();
        this.numeroCel = parseInt(numeroCel);
    }
}


class Prestamo {
    constructor(titulo, nombre, fechaPrestamo, idPrestamo) {
        this.titulo = Libro.titulo; //no se como sacer info de otro array
        this.nombre = Usuario.nombre; //no se como sacer info de otro array
        this.fechaPrestamo = new Date(); //revisar
        idPrestamo = idPrestamo++; //ver como hacer una autonumeracion 
    }
}

                //  VARIABLES //


                //  FUNCIONES Y ARRAYS //

let estanterias = [];
let usuarios = [];
let prestamos = [];

estanterias.push(new Libro("el principe", "maquiavelo", "distal", 138));
estanterias.push(new Libro("la guerra de los mundos", "h. g. wells", "terramar", 235));
estanterias.push(new Libro("Jauretche: medios y politica", "pablo adrian vazquez", "copppal", 246));

usuarios.push(new Usuario("bruno niello", "brunoniello@gmail.com", 3498460438));

console.log(estanterias);



const filtrarLibro = estanterias.find((el) => el.paginas < 240); //buscador

const nombresLibros = estanterias.map((el) => el.titulo); //map de nobmres de libros




                //  EVENTOS // 

















                
//ingreso de usuario 
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
// let pass = 1234567890;
// let dato = parseInt(prompt("cual es tu contraseña?"));
// let intentos = 3;









//orden:

//clases
//variables
//funciones - independientes 
//eventos 

const nombre = ( ) => { 
    //sentencias
}

