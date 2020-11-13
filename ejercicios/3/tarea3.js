let botonesMercancia = document.querySelectorAll('.mercancia button');
let etiquetaDelTotal = document.querySelector('#Total span');
let carrito = [];
let totalCarrito = 0;

function calcularTotalDeCarrito() {
  totalCarrito = carrito.reduce((a, b) => { return Number(a) + Number(b); }, 0);
  etiquetaDelTotal.innerText = '$' + totalCarrito;
}

function agregarACarrito(evento) {
  const botonDelClick = evento.target;
  const precioMercanciaSel = botonDelClick.getAttribute('data-precio');
  carrito.push(precioMercanciaSel);
  calcularTotalDeCarrito();
}

for (let i = 0; i < botonesMercancia.length; i++) {
  const boton = botonesMercancia[i];
  boton.addEventListener('click', agregarACarrito);
}

/*
const addAlCarritoButtons = document.querySelectorAll('.container')
addAlCarritoButtons.forEach ((addAlCarritoButton) => {
  addAlCarritoButton.addEventListener('click', addAlCarritoClicked);
  });
*/
