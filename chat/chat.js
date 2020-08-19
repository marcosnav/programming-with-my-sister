// Obtenemos el <input class="escribir-mensaje"> en una variable
const cajaDeMensaje = document.querySelector('.escribir-mensaje');

// Obtenemos el area de los mensajes (<div id="mensajes">)
const areaDeMensajes = document.querySelector('#mensajes');

// Esta funcion se encarga de agregar un nuevo mensaje
function postearMensaje() {
  // Obtenemos el value (valor) del <input> en una variable
  const mensaje = cajaDeMensaje.value;

  // Estructura HTML creada con JavaScript
  /* <div class="mensaje">
    <p class="mensaje-texto">
      Hola, estoy practicando  TE AMO AGRORIS
    </p>
    <div class="info-mensaje">
      <div class="mensaje-imagen p1"></div>
      <time>5 min ago</time>
    </div>
  </div> */

  // Crear elemento <div class="mensaje">
  const mensajeHTML = document.createElement('div');
  mensajeHTML.classList.add('mensaje');
  
  // Crear parrafo de mensaje <p class="mensaje-texto">
  const parrafoHTML = document.createElement('p');
  parrafoHTML.classList.add('mensaje-texto');

  // Agregar parrafo de mensaje a contenedor de mensaje
  mensajeHTML.append(parrafoHTML);

  // Crear info de mensaje <p class="mensaje-texto">
  const infoMensajeHTML = document.createElement('div');
  infoMensajeHTML.classList.add('info-mensaje');
  
  // Crear imagen del usuario <div class="mensaje-imagen p8" >
  const imagenUsuarioHTML = document.createElement('div');
  imagenUsuarioHTML.classList.add('mensaje-imagen', 'p8');

  // Crear etiqueta de hora <time>
  const fechaMensajeHTML = document.createElement('time');
  const fechaActual = new Date();
  // Le damos el valor de la fecha actual al texto de la etiqueta
  fechaMensajeHTML.innerText = fechaActual;

  // Agregarle imagen y fecha a info mensaje
  infoMensajeHTML.append(imagenUsuarioHTML);
  infoMensajeHTML.append(fechaMensajeHTML);

  // Agregar parrafo de mensaje a contenedor de mensaje
  mensajeHTML.append(infoMensajeHTML);

  // Agregamos nuevo mensaje a Area de mensajes
  areaDeMensajes.prepend(mensajeHTML);
}

postearMensaje();