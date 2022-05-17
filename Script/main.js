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
    constructor(nombre, titulo, fechaPrestamo, idPrestamo) {
        this.nombre = nombre;
        this.titulo = titulo;  
        this.fechaPrestamo = fechaPrestamo; 
        idPrestamo = idPrestamo; 
    }
}

                //  VARIABLES //

//  "base de datos"
const url = "../db.json"
//contraseña administrador
const password = 2022;

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
        const botonPrestar = document.querySelector("#botonPrestar");//boton para solicitar el prestamo
        //estanterias
        const emergenteEstanteriaUno = document.querySelector("#emergenteEstanteriaUno"); //ventana emergente de estanteria uno
        const cerrarEstanteriaUno = document.querySelector("#cerrarEstanteriaUno"); //boton para cerrar estanteria uno
        const estanteriaUno = document.querySelector("#estUno");//boton para abrir estanteria uno
        //pestaña administrador
        const emergenteAdministrador = document.querySelector("#emergenteAdministrador"); //ventana emergente de administrador
        const cerrarAdministrador = document.querySelector("#cerrarAdministrador"); //boton para cerrar la ventana de administrador
        const admin = document.querySelector("#admin"); //boton que abre la ventana de administrador
        const cargarLibro = document.querySelector("#cargarLibro");//boton para abrir la carga de libros
        const verPrestamo = document.querySelector("#verPrestamo");//boton para ver prestamos
        //pestaña de administrador para cargar libros
        const emergenteAdmin = document.querySelector("#emergenteAdmin"); //ventana emergente para cargar libros
        const cerrarAdmin = document.querySelector("#cerrarAdmin"); //boton para cerrar la carga de libros 
        const botonCargar = document.querySelector("#botonCargar"); //boton que submitea el formulario de carga de libros
        //pestaña de ver prestamos
        const emergenteVerPrestamo = document.querySelector("#emergenteVerPrestamo");//ventana para ver prestamos
        const cerrarVerPrestamo = document.querySelector("#cerrarVerPrestamo");//boton para cerrar la ventana de ver prestamos



                //  FUNCIONES Y ARRAYS //

//arrays principales
const estanterias = []; //pushear esto en json
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


//funcion de filtrar libro
const pregunta = async () => {
   
    const busqueda = document.querySelector("#buscadorFiltro").value;
    
    // if(busqueda == "largo"){
    //     resultado.innerText = JSON.stringify(filtroLargo);
    // }
    // else if(busqueda == "corto"){
    //     resultado.innerText = JSON.stringify(filtroCorto);
    // }
    // else if(busqueda == "catalogo"){
    //     resultado.innerText = nombresLibros;
    // }
    // else{
    //     resultado.innerText = "no escribio una palabra valida";
    // }


    try{
        let response = await fetch(url);
        let result = await response.json();
        let libroFiltrado = result.filter(result => result.titulo == busqueda);


        resultado.innerHTML = `
            ${JSON.stringify(libroFiltrado)}
        `
        
    }catch{
        console.log("error je");
    }

}

//funcion de registro de usuario y almacenamiento en el storage
const registro = () => {

    const nombreUser = document.querySelector("#nombreUser").value; //input nombre
    const mailUser = document.querySelector("#mailUser").value; //input mail
    const celuUser = document.querySelector("#celuUser").value; //input celular

    const nuevoUser = new Usuario(nombreUser, mailUser, celuUser);

    if(localStorage.getItem("usuarios") == null){
        usuarios.push(nuevoUser);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    } else{
        const usuarioLS = JSON.parse(localStorage.getItem("usuarios"));
        usuarioLS.push(nuevoUser);
        localStorage.setItem("usuarios", JSON.stringify(usuarioLS));
    }
}

//funcion para realizar un prestamo 
const prestar = () => {

    const selectUser = document.querySelector("#selectUsuario");
    const selectObras = document.querySelector("#selectObras");

    const nombreUser = selectUser.options[selectUser.selectedIndex].text;  //lee el value del option seleccionado del selector
    const tituloObra = selectObras.options[selectObras.selectedIndex].text; //lee el value del option seleccionado del selector
    const fecha = document.querySelector("#fecha").value; //input
    const id = 1; //falta hacer una autonumeracion para cada prestamo

    const nuevoPrestamo = new Prestamo(nombreUser, tituloObra, fecha, id);

    if(localStorage.getItem("prestamos") == null){
        prestamos.push(nuevoPrestamo);
        localStorage.setItem("prestamos", JSON.stringify(prestamos));
    } else{
        const prestamoLS = JSON.parse(localStorage.getItem("prestamos"));
        prestamoLS.push(nuevoPrestamo);
        localStorage.setItem("prestamos", JSON.stringify(prestamoLS));
    }

    Swal.fire(
        'Prestamo solicitado!',
        `Gracias ${nuevoPrestamo.nombre}, solicitaste la obra "${nuevoPrestamo.titulo}", para retirar ${nuevoPrestamo.fechaPrestamo}, nuestro bibliotecario guardara tu obra.`,
        'success'
      )

}

//funcion para guardar libros en el array estanterias... pero luego es necesario mover manualmente el "nuevoLibro" al db.json
const guardarLibro = async () => {

    const titulo = document.querySelector("#libroTitulo").value; //input
    const autor = document.querySelector("#libroAutor").value; //input
    const editorial = document.querySelector("#libroEditorial").value; //input
    const paginas = document.querySelector("#libroPaginas").value; //input

    const nuevoLibro = new Libro(titulo, autor, editorial, paginas); 

    estanterias.push(nuevoLibro);
    console.log(JSON.stringify(nuevoLibro)); //tomar este console.log y pegarlo en el json


    //
}

//funcion para imprimir datos en la ventana de prestamo: toma los usuarios registrados y los agrega como un select
const imprimirUsers = () => {

    document.querySelector("#selectUsuario").innerHTML = "";
    if(localStorage.getItem("usuarios") != null){
        let users = JSON.parse(localStorage.getItem("usuarios"));
        users.forEach(obj => {
            document.querySelector("#selectUsuario").innerHTML += 
            `
            <option value="usuario">${obj.nombre}</option>
            `
        })
    }
}

//funcion para imprimir datos en la ventana de prestamo: toma los libros del json y los agrega como un select en prestamo
const imprimirObras = async () => {

    document.querySelector("#selectObras").innerHTML = "";

    try{
        let response = await fetch(url);
        let result = await response.json();
        result.forEach(libro => {
            document.querySelector("#selectObras").innerHTML += `
            <option value="obras">${libro.titulo}</option>`
        })
    }catch{
        console.log("error je");
    }
}
//funcion que imprime el array prestamos en la ventana ver prestamos de administrador
const imprimirVerPrestamo = () => {

    document.querySelector("#prestamosImpresos").innerHTML = "";

    if(localStorage.getItem("prestamos") != null){
        let prestamo = JSON.parse(localStorage.getItem("prestamos"));
        prestamo.forEach(obj => {
            document.querySelector("#prestamosImpresos").innerHTML += 
            `
            <div>
                <h3>${obj.nombre}</h3>
                <h4>${obj.titulo}</h4>
                <h5>${obj.fechaPrestamo}</h5>
            </div>
            <br>
            <hr>
            `
        })
    }
}


//funcion para imprimir los libros del JSON db (database) en la estanteria 1
const imprimirEstanterias = async () => {

    document.querySelector("#listaLibros").innerHTML = "";

    try{    
        let nodo = document.createElement("div");
        let response = await fetch(url);
        let result = await response.json()
        result.forEach(libro => {
            nodo.innerHTML += `
            <h3>${libro.titulo}</h3>
            <h4>autor: ${libro.autor}</h4>
            <br>
            <h5>editorial: ${libro.editorial}</h5>
            <h6>cantidad de páginas: ${libro.paginas}</h6>
            <h6>stock: ${libro.stock}</h6>
            <br>
            <hr>
            `

            document.querySelector("#listaLibros").appendChild(nodo);
        })
    }catch{
        console.log("error je");
    }
}


                //  EVENTOS // 

//boton para registrar usuario
botonRegistrar.addEventListener("submit", (e)=>{
    
    const formulario = document.querySelector("#formularioUsuario");

    registro(e);
    e.preventDefault();
    formulario.reset();
    Swal.fire("Usuario Registrado")});

//boton para solicitar prestamo
botonPrestar.onclick = (e) => {
    e.preventDefault();
    prestar();
}

//boton que activa la busqueda en "filtrar libro"
botonBuscar.onclick = (e) => {
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
    //evento que imprime los usuarios y los libros en la ventana de prestamos
    imprimirUsers();
    imprimirObras();
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
admin.onclick = async () => {
    
    const { value: password } = await Swal.fire({
        title: 'Para acceder ingrese la contraseña',
        confirmButtonColor: "#031F4F",
        confirmButtonText: "Entrar",
        input: 'password',
        inputPlaceholder: 'escriba aqui contraseña',
        inputAttributes: {
          maxlength: 10,
          autocapitalize: 'off',
          autocorrect: 'off'
        }
      })
      
      if (password == 2022) { 
        emergenteAdministrador.classList.add("mostrar");
      } else { Swal.fire("Contraseña incorrecta!")}
}
cerrarAdministrador.onclick = () => {
    emergenteAdministrador.classList.remove("mostrar");
}
//botones que abren y cierran la ventana de carga de libros de administrador
cargarLibro.onclick = () => {
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
    Swal.fire("Libro Registrado");
}
//botones que abren y cierra la ventana de ver prestamos de administrador
verPrestamo.onclick = () => {
    emergenteVerPrestamo.classList.add("mostrar");
    //evento que imprime los prestamos
    imprimirVerPrestamo();
}
cerrarVerPrestamo.onclick = () => {
    emergenteVerPrestamo.classList.remove("mostrar");
}









// FUNCIONES EN CONSTRUCCION 


//evento para abrir ventana emergente (sin uso todavia)
const emergente1 = (URL) => {
    window.open(URL, "ventana", "width=500, height=300,scrollbars=NO")
}
//funcion asincronica para guardar datos en el json
const guardarJson = async ()=> {
    try {
        let response = await fetch("../db.json",{
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







































