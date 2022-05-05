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
        const botonRegistrar = document.querySelector("#formularioUsuario"); //boton de registrar usuario
        //ubicacion (mapa)
        const emergenteMapa = document.querySelector("#emergenteMapa"); //ventana emergente ubicacion
        const cerrarMapa = document.querySelector("#cerrarMapa"); //boton de cerrar mapa
        const ubicacion = document.querySelector("#ubicacion"); //boton abrir ubicacion (mapa)
        //prestamo de libros
        const emergentePrestamo = document.querySelector("#emergentePrestamo");//ventana emergente de prestamos
        const cerrarPrestamo = document.querySelector("#cerrarPrestamo");//boton para cerrar prestamo
        const prestamo = document.querySelector("#prestamo");//boton para abrir prestamo
        //estanterias
        const emergenteEstanteriaUno = document.querySelector("#emergenteEstanteriaUno"); //ventana emergente de estanteria uno
        const cerrarEstanteriaUno = document.querySelector("#cerrarEstanteriaUno"); //boton para cerrar estanteria uno
        const estanteriaUno = document.querySelector("#estUno");//boton para abrir estanteria uno
        let estanteriaText = document.querySelector("#estanteriaText");//texto dentro de la emergente estanteria uno

        


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
const registro = (e) => {

    e.preventDefault();

    const nombreUser = document.querySelector("#nombreUser").value; //input nombre
    const mailUser = document.querySelector("#mailUser").value; //input mail
    const celuUser = document.querySelector("#celuUser").value; //input celular

    const nuevoUser = new Usuario(nombreUser, mailUser, celuUser);

    let arrayUsers = [];

    if(localStorage.getItem("usuarios") == null){
        usuarios.push(nuevoUser);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else{
        // arrayUsers.push(JSON.parse(localStorage.getItem("usuarios")));
        arrayUsers.push(nuevoUser);
        usuarios.push.apply(usuarios, arrayUsers);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }
}

//funcion para imprimir datos en la ventana de prestamo: toma los usuarios registrados y los agrega como un select en prestamo
const imprimir = () => {
    if(localStorage.getItem("usuarios") != null){
        let users = JSON.parse(localStorage.getItem("usuarios"))
        users.forEach(obj => {
            document.querySelector("#selectUsuario").innerHTML += 
            `
            <option value="usuario">${obj.nombre}</option>
            `
        })
    }
}

//funcion para imprimir los objetos del array en la ventanas "estanterias"
const imprimirEstanterias = () => {
    for (const libro of estanterias){
        let nodo = document.createElement("div");
        nodo.innerHTML = `
        <h4>${libro.titulo}</h4>
        <h5>${libro.autor}</h5>
        <h6>${libro.editorial}</h6>
        <h6>${libro.paginas}</h6>
        <h6>${libro.stock}</h6>
        <br>
        `

        document.querySelector("#ventanaEstanteriaUno").appendChild(nodo);
    }
}





                //  EVENTOS // 

//formulario
botonRegistrar.addEventListener("submit", registro);

//boton que registra usuario en "registrar usuario"
// botonRegistrar.onclick = (e)=>{
//     e.preventDefault();
//     registro();
//     imprimir();
// }

//boton que activa la busqueda en "filtrar libro"
botonBuscar.onclick = (e)=>{
    e.preventDefault();
    guardar();
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
//botones que abren y cierran la ventana de estanteria uno
estanteriaUno.onclick = () => {
    emergenteEstanteriaUno.classList.add("mostrar");
    //evento que imprime el array estanterias dentro de la ventana de estanteria 1
    imprimirEstanterias();
}
cerrarEstanteriaUno.onclick = () => { 
    emergenteEstanteriaUno.classList.remove("mostrar");
}

//evento que imprime los usuarios en la ventana de prestamos
imprimir();






// FUNCIONES EN CONSTRUCCION 

//vaciar formulario
const vaciar = () => {
}
//funcion para verificar datos en el storage 
const verificar = () => {
    let datos = [];
    localStorage.getItem("usuarios") != null && (datos = JSON.parse(localStorage.getItem("usuarios"))); //operador AND  
}
//guardar datos en local storage
const guardar = () => {
    registro();
    verificar() != undefined ? localStorage.setItem("usuarios", JSON.stringify(verificar())) : localStorage.setItem("usuarios", JSON.stringify(usuarios)); //operador ternario que examina el storage y almacena datos. 
}
//evento para abrir ventana emergente (sin uso todavia)
const emergente1 = (URL) => {
    window.open(URL, "ventana", "width=500, height=300,scrollbars=NO")
}









//      -PAPELERA DE RECICLAJE-

// if(verificar() != undefined) { //examina si hay algo en storage, para almacenarlo
//     localStorage.setItem("usuarios", JSON.stringify(verificar())); 
// } else { //de lo contario almacena directamente el nuevo user
//     localStorage.setItem("usuarios", JSON.stringify(usuarios));
// }


// if(localStorage.getItem("usuarios") != null) {
//     datos = JSON.parse(localStorage.getItem("usuarios"));
//     return datos;
// } 








































