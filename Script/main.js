   //  CLASES //               
                
class Libro {
    constructor(titulo, autor, editorial, paginas) {
        this.titulo = titulo
        this.autor = autor
        this.editorial = editorial
        this.paginas = paginas; 
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

//  "base de datos"
const url = "DataBase.json"

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
        //pestaña de administrador para cargar libros
        const emergenteAdmin = document.querySelector("#emergenteAdmin");
        const cerrarAdmin = document.querySelector("#cerrarAdmin");
        const admin = document.querySelector("#admin");
        const botonCargar = document.querySelector("#botonCargar");


                //  FUNCIONES Y ARRAYS //

//arrays principales
const estanterias = [];
const usuarios = [];
const prestamos = [];

//filtros para la busqueda (necesito acomplejizarlos)
const filtroLargo = estanterias.filter((el) => el.paginas > 200)
const filtroCorto = estanterias.filter((el) => el.paginas < 200)
const nombresLibros = estanterias.map((el) => el.titulo); 


//SWEET ALERT mensaje de bienvenida
Swal.fire({
    title: "¡Bienvenido!",
    imageUrl: "Media/logo.jpg",
    imageWidth: 200,
    imagenHeight: 200,
    confirmButtonColor: "#031F4F",
    confirmButtonText: "Entrar"
});


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

//funcion para guardar libros en el array estanterias 
const guardarLibro = () => {

    const titulo = document.querySelector("#libroTitulo").value; //input
    const autor = document.querySelector("#libroAutor").value; //input
    const editorial = document.querySelector("#libroEditorial").value; //input
    const paginas = document.querySelector("#libroPaginas").value; //input

    const nuevoLibro = new Libro(titulo, autor, editorial, paginas); 

    estanterias.push(nuevoLibro);
}
//funcion para guardar datos del JSON en el array
const librosJson = async () => {
    try {
        let response = await fetch("./database.json");
        let result = await response.json();
        console.log(result[0]);
        // estanterias.push(result)
    } catch(error) {
        console.log(error);
    }
}


const mefe = () => {
    fetch("database.json")
        .then(resp => console.log(resp.json())) 
}


//funcion para imprimir datos en la ventana de prestamo: toma los usuarios registrados y los agrega como un select en prestamo
const imprimir = () => {
    if(localStorage.getItem("usuarios") != null || users != users){
        let users = JSON.parse(localStorage.getItem("usuarios"));
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
botonRegistrar.addEventListener("submit", (e)=>{
    
    const formulario = document.querySelector("#formularioUsuario");

    registro(e);
    e.preventDefault();
    formulario.reset();
    Swal.fire("Usuario Registrado")});

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
    //evento que imprime los usuarios en la ventana de prestamos
    imprimir();
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
//botones que abren y cierran la ventana de administrador
admin.onclick = () => {
    emergenteAdmin.classList.add("mostrar");
}
cerrarAdmin.onclick = () => {
    emergenteAdmin.classList.remove("mostrar");
}
botonCargar.onclick = (e) => {

    const formulario = document.querySelector("#formularioLibro");

    e.preventDefault();
    guardarLibro();
    formulario.reset();

}









// FUNCIONES EN CONSTRUCCION 

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
//funcion asincronica para guardar datos en el json
const guardarJson = async ()=> {
    try {
        let response = await fetch("./DataBase.json",{
            method: 'POST',
            body: JSON.stringify(estanterias),
            headers: {
                'content-type':'application/json'
            }
        })
        let resultado = await response.json();
        resultado.forEach();
    } catch(error) {
        console.log(error);
    }
}







































