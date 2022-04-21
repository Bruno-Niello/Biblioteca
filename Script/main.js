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

//DOM
    //ventanas emergentes
        //filtro de busqueda
        const filtro = document.querySelector("#filtro"); //boton para abrir la ventana filtro
        const emergenteFiltro = document.querySelector("#ventanaFiltro"); //venta emergente filtro 
        const cerrar = document.querySelector(".cerrar"); //boton de cerrar
        const ventanas = document.querySelector(".ventanas"); //contenedor ventana
        const resultado = document.querySelector("#resultado"); //area de resultados
        const botonBuscar = document.querySelector("#botonBuscar"); //boton formulario



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


const filtroLargo = estanterias.filter((el) => el.paginas > 200)
const filtroCorto = estanterias.filter((el) => el.paginas < 200)
const nombresLibros = estanterias.map((el) => el.titulo); 



const pregunta = () => {
   
    const busqueda = document.querySelector("#buscadorFiltro").value;
    if(busqueda == "largo"){
        resultado.innerText = JSON.stringify(filtroLargo);
    }
    if(busqueda == "corto"){
        resultado.innerText = JSON.stringify(filtroCorto);
    }
    if(busqueda == "catalogo"){
        resultado.innerText = nombresLibros;
    }
    // else{
    //     resultado.innerText = "no escribio una palabra valida";
    // }
}
//por algun motivo el ELSE me rompe el filtro largo y corto!!!


                //  EVENTOS // 


const emergente1 = (URL) => {
    window.open(URL, "ventana", "width=500, height=300,scrollbars=NO")
}

botonBuscar.onclick = (e)=>{
    e.preventDefault();
    pregunta();}

filtro.onclick = () => {
    ventanas.classList.add("mostrar");
}
cerrar.onclick = () => {
    ventanas.classList.remove("mostrar");
}





























































