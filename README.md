# Biblioteca

  //Sobre el proyecto:

Hola Mundo! este proyecto es una biblioteca digital para el centro de estudiantes "Movimiento Evita" de la ciudad de Santa Fe. 
El mismo fue realizado durante el transcuro del curso de JavaScript de "Coderhouse". 

  //Información tecnica del proyecto a tener en cuenta:
  
La app web fue realizada con HTML, Sass (scss) y JavaScript vainilla. El unico programador del proyecto soy yo, Bruno Niello.
Es una página realizada en un solo html que se maneja con ventanas modulares.

La app cuenta con las siguientes funcionalidades: 

  1- Visualización de la colección de libros de la biblioteca dividido en 5 estanterías. Estos libros se imprimen desde un .json local que simula una base de datos. 
  De momento solamente esta en uso la “Estantería 1” debido a que la colección de la biblioteca todavía no fue cargada en la base de datos.
  
  2- Filtro de libros, esta ventana toma un input y realiza un filtro en el .json local y devuelve el resultado de existir el mismo, ese resultado lo imprime. 
  Distingue mayúsculas y espacios. 
  
  3- Registro de usuario, en el mismo se encuentra un formulario que guarda en el localStorage el usuario creado. 
  
  4- Solicitar prestamo, aquí con el usuario guardado podras realizar el pedido de prestamo de los libros existentes en el .json local. 
  
  5- VENTANA ADMINISTRADOR -- PASSWORD: 2022
  
    5.1- Cargar libros, con este formulario podemos cargar libros que se guardaran en un array y nos arrojara un json a la consola.
    Este json debemos moverlo manualmente al .json local. 
    
    5.2- Ver prestamos, desde esta ventana modular el bibliotecario podra ver impresos los prestamos realizados en la pagina. 
    

  //Cambios pendientes para la próxima version:
  
-Cambiar el .json local por una base de datos. Esto es fundamental para corregir la funcionalidad de cargar libros, registrar usuarios y realizar prestamos.
Sin una base de datos de los libros, usuarios y prestamos la página no va a tener un uso real.

-Arreglar el filtro. El filtro quedo mediocre con respecto al resto de la página pero hubo dificultades a la hora de poder arreglarlo, queda pendiente. 
