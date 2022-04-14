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
        // this.titulo = Libro.titulo; //no se como sacer info de otro array
        // this.nombre = Usuario.nombre; //no se como sacer info de otro array
        this.fechaPrestamo = new Date(); //revisar
        idPrestamo = idPrestamo++; //ver como hacer una autonumeracion 
    }
}

                //  VARIABLES //

                
let pregunta = prompt("hola! soy un buscardor inteligente a su servcio, describa el tamaño del libro que desea: corto o largo, en caso de querer ver todo la coleccion escriba 'catalogo'");



                //  FUNCIONES Y ARRAYS //

let estanterias = [];
let usuarios = [];
let prestamos = [];

estanterias.push(new Libro("el principe", "maquiavelo", "distal", 138));
estanterias.push(new Libro("la guerra de los mundos", "h. g. wells", "terramar", 235));
estanterias.push(new Libro("Jauretche: medios y politica", "pablo adrian vazquez", "copppal", 246));
estanterias.push(new Libro("la republica", "platon", "gredos", 600));
estanterias.push(new Libro("el extranjero", "albert camus", "atalaya", 184));
estanterias.push(new Libro("Las aventuras de Tom Sawyer", "mark twain", "anaya", 142));

usuarios.push(new Usuario("bruno niello", "brunoniello@gmail.com", 3498460438));

const filtroLargo = estanterias.filter((el) => el.paginas > 200)
const filtroCorto = estanterias.filter((el) => el.paginas < 200)
const nombresLibros = estanterias.map((el) => el.titulo); 


// SIMULADOR BUSCADORES 

switch(pregunta){
    case "largo":
        console.log(filtroLargo);
        alert(`abra la consola (f12) para ver nuestro catalogo`);
        break;
    case "corto":
        console.log(filtroCorto);
        alert(`abra la consola (f12) para ver nuestro catalogo`);
        break;
    case "catalogo":
        console.log(nombresLibros);
        alert(`abra la consola (f12) para ver nuestro catalogo`);
        break;
    default: 
        alert("dato invalido");
        break;
}



                //  EVENTOS // 




                // SIMULADOR // 


// agregarUser = () => {
//     let nombreUser = prompt("cual es su nombre");
//     let mailUser = prompt("cual es su mail?");
//     let numeroCelUser = parseInt(prompt("cual es su numero de celular?"));
//     let user = new Usuario(nombreUser, mailUser, numeroCelUser);
//     usuarios.push(user);
// }









































// let nombreUsuario = document.getElementById("nombre").value; 

// const guardarUsuario = () => {
//     this.usuario = document.getElementById("user");

//     let userNuevo = new Usuario(nombre);

//     Usuarios.push(userNuevo);
// }










                
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











