// Obtenemos el <input class="escribir-mensaje"> en una variable
const cajaDeMensaje = document.querySelector('.escribir-mensaje');

// Obtenemos el area de los mensajes (<div id="mensajes">)
const areaDeMensajes = document.querySelector('.tablero-de-mensajes');

// Obtenemos nuestra base de datos de los mensajes
const db = firebase.database();

// Registro de mensaje de prueba
const mensajesDB = db.ref('mensajes-chat');

/**
 * Funcion de inicializacion de usuario
 * Esta funcion regresara una promesa con la info del usuario
 */
function inicializacionDeUsuario() {
  // Buscar en local storage imagen y nombre de usuario
  const infoUsuario = window.localStorage.getItem('usuario-chat');

  return new Promise((resolve) => {
    // SI NO existen, 
    if (!infoUsuario) {
      // entonces, obtener nueva imagen y preguntar nombre

      // creamos variable con objeto para guardar nombre e imagen
      const nuevaInfoUsuario = {};

      // Pedimos nombre y guardamos
      const nombreDado = prompt('¿Cuál es tu nombre?');
      nuevaInfoUsuario.nombre = nombreDado;
      // nuevaInfoUsuario ahora es { nombre: nombreDado }

      obtenerImagenDeUsuario()
        .then(nuevaImagen => {
          nuevaInfoUsuario.imagen = nuevaImagen;
          // nuevaInfoUsuario ahora es { nombre: nombreDado, imagen: nuevaImagen }

          // Guardamos info completa
          const infoAGuardar = JSON.stringify(nuevaInfoUsuario);
          window.localStorage.setItem('usuario-chat', infoAGuardar);
          resolve(nuevaInfoUsuario);
        });
    } else {
      const infoUsuarioLista = JSON.parse(infoUsuario);
      resolve(infoUsuarioLista);
    }
  });
}

inicializacionDeUsuario();

/**
 * Peticiones y tratado de imagenes
 */
function obtenerImagenDeUsuario() {
  return axios.get('https://api.unsplash.com/photos/random?count=1&client_id=sRXr4ngr_n1uQFq6jhdlpn1o74C10-XoMH_u1yYIVHg&query=animal')
  .then(res => {
    return new Promise(resolve => {
      resolve(res.data[0].urls.small);
    });
  });
}

/*
PROXIMOS PASOS:
1. Cargar mensajes existentes de una base de datos y mostrarlos ✅
2. Al postear un nuevo mensaje, guardarlo en la base de datos ✅
3. Darle a cada usuario que se conecta una imagen aleatoria y preguntar nombre o alias para identificarlo ✅
4. Cuando un usuario se conecta por segunda vez, ya no preguntar nada y usar la info que dio anteriormente
*/

// Esta funcion se encarga de agregar un nuevo mensaje
function postearMensaje(mensajeDeDB, fechaDelMensaje, infoUsuario) {
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
  parrafoHTML.innerText = mensajeDeDB;

  // Agregar parrafo de mensaje a contenedor de mensaje
  mensajeHTML.append(parrafoHTML);

  // Crear info de mensaje <p class="mensaje-texto">
  const infoMensajeHTML = document.createElement('div');
  infoMensajeHTML.classList.add('info-mensaje');
  
  // Crear imagen del usuario <div class="mensaje-imagen p8" >
  const imagenUsuarioHTML = document.createElement('div');
  imagenUsuarioHTML.classList.add('mensaje-imagen');
  imagenUsuarioHTML.style.backgroundImage = `url("${infoUsuario.imagen}")`;

  // Crear etiqueta de hora <time>
  const fechaMensajeHTML = document.createElement('time');
  // Le damos el valor de la fecha actual al texto de la etiqueta
  fechaMensajeHTML.innerText = moment(fechaDelMensaje).format('LT');

  // Agregarle imagen y fecha a info mensaje
  infoMensajeHTML.append(imagenUsuarioHTML);
  infoMensajeHTML.append(fechaMensajeHTML);

  // Agregar parrafo de mensaje a contenedor de mensaje
  mensajeHTML.append(infoMensajeHTML);

  // Agregamos nuevo mensaje a Area de mensajes
  // prepend agrega al principio del elemento
  // append agrega al final del elemento
  areaDeMensajes.append(mensajeHTML);

  // Despues de que se agrego mensaje al HTML, limpiamos caja de texto
  cajaDeMensaje.value = '';
}

cajaDeMensaje.addEventListener('keyup', function(evento) {
  // Ejecutar funcion solamente cuando se presiona Enter
  // keyCode 13 es tecla "Enter"
  if (evento.keyCode === 13) {
    mensajesDB.set({
      texto: cajaDeMensaje.value,
      fecha: new Date().toISOString(),
    });
  }
});

inicializacionDeUsuario()
  .then(infoUsuario => {
    mensajesDB.on('value', function(objetoValor) {
      if (objetoValor && objetoValor.val()) {
        const mensaje = objetoValor.val();
        postearMensaje(mensaje.texto, mensaje.fecha, infoUsuario);
      }
    });
  });

