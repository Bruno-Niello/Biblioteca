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
        const emergenteFiltro = document.querySelector("#emergenteFiltro"); //ventana emergente del filtro
        const cerrarFiltro = document.querySelector("#cerrarFiltro"); //boton de cerrar filtro
        const filtro = document.querySelector("#filtro"); //boton para abrir la ventana filtro
        const resultado = document.querySelector("#resultado"); //area de resultados
        const botonBuscar = document.querySelector("#botonBuscar"); //boton que activa la busqueda
        //registro de usuario
        const emergenteUsuario = document.querySelector("#emergenteUsuario"); //ventana emergente de usuario
        const cerrarUsuario = document.querySelector("#cerrarUsuario"); //boton de cerrar usuario
        const usuario = document.querySelector("#usuario"); //boton de abrir usuario
        //ubicacion (mapa)
        const emergenteMapa = document.querySelector("#emergenteMapa"); //ventana emergente ubicacion
        const cerrarMapa = document.querySelector("#cerrarMapa"); //boton de cerrar mapa
        const ubicacion = document.querySelector("#ubicacion"); //boton abrir ubicacion (mapa)
        //prestamo de libros
        const emergentePrestamo = document.querySelector("#emergentePrestamo");//ventana emergente de prestamos
        const cerrarPrestamo = document.querySelector("#cerrarPrestamo");//boton para cerrar prestamo
        const prestamo = document.querySelector("#prestamo");//boton para abrir prestamo
      
        const botonRegistrar = document.querySelector("#botonRegistrar"); //boton de registrar usuario


                //  FUNCIONES Y ARRAYS //

//arrays principales
const estanterias = [];
const usuarios = [];
const prestamos = [];

//los libros por ahora se pushean desde aca ya que necesito una interfaz de administrador en la pagina
estanterias.push(new Libro("el principe", "maquiavelo", "distal", 138));
estanterias.push(new Libro("la guerra de los mundos", "h. g. wells", "terramar", 235));
estanterias.push(new Libro("Jauretche: medios y politica", "pablo adrian vazquez", "copppal", 246));
estanterias.push(new Libro("la republica", "platon", "gredos", 600));
estanterias.push(new Libro("el extranjero", "albert camus", "atalaya", 184));
estanterias.push(new Libro("Las aventuras de Tom Sawyer", "mark twain", "anaya", 142));


//filtros para la busqueda (necesito acomplejizarlos)
const filtroLargo = estanterias.filter((el) => el.paginas > 200)
const filtroCorto = estanterias.filter((el) => el.paginas < 200)
const nombresLibros = estanterias.map((el) => el.titulo); 


//funcion de busqueda
const pregunta = () => {
   
    const busqueda = document.querySelector("#buscadorFiltro").value;
    if(busqueda == "largo"){
        resultado.innerText = JSON.stringify(filtroLargo);
    }
    else if(busqueda == "corto"){
        resultado.innerText = JSON.stringify(filtroCorto);
    }
    else if(busqueda == "catalogo"){
        resultado.innerText = nombresLibros;
    }
    else{
        resultado.innerText = "no escribio una palabra valida";
    }
}
//funcion de registro de usuario y almacenamiento en el storage
const registro = () => {

    const nombreUser = document.querySelector("#nombreUser").value; //input nombre
    const mailUser = document.querySelector("#mailUser").value; //input mail
    const celuUser = document.querySelector("#celuUser").value; //input celular

    const nuevoUser = new Usuario(nombreUser, mailUser, celuUser);
    const arrayUser = [];

    if(localStorage.getItem("usuario") == null){
        usuarios.push(nuevoUser);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else{
        arrayUser = JSON.parse(localStorage.getItem("usuarios"));
        arrayUser.push(usuarios);
        localStorage.setItem("usuarios", JSON.stringify(arrayUser));
    }
}


                //  EVENTOS // 

//evento para abrir ventana emergente (sin uso todavia)
const emergente1 = (URL) => {
    window.open(URL, "ventana", "width=500, height=300,scrollbars=NO")
}

//boton que registra usuario en "registrar usuario"
botonRegistrar.onclick = (e)=>{
    e.preventDefault();
    registro();
}

//boton que activa la busqueda en "filtrar libro"
botonBuscar.onclick = (e)=>{
    e.preventDefault();
    pregunta();
}

//botones que abren y cierran el filtro    
filtro.onclick = () => {
    emergenteFiltro.classList.add("mostrar");
}
cerrarFiltro.onclick = () => {
    emergenteFiltro.classList.remove("mostrar");
}
//botones que abren y que cierran el registro de usuario
usuario.onclick = () => {
    emergenteUsuario.classList.add("mostrar");
}
cerrarUsuario.onclick = () => {
    emergenteUsuario.classList.remove("mostrar");
}
//botones que abren y cierran la ubicacion (mapa)
ubicacion.onclick = () => {
    emergenteMapa.classList.add("mostrar");
}
cerrarMapa.onclick = () => {
    emergenteMapa.classList.remove("mostrar");
}
//botones que abren y cierran la ventana de prestamos
prestamo.onclick = () => {
    emergentePrestamo.classList.add("mostrar");
}
cerrarPrestamo.onclick = () => {
    emergentePrestamo.classList.remove("mostrar");
}




























































