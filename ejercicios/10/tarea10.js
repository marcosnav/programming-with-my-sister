let color = 0;

const ordenDeColores = [
  'azul',
  'verde',
  'rojo',
  'amarillo',
  'rosa',
  'white',
];

const mapaDeClases = {
  azul: '',
  verde: 'circulo2',
  rojo: 'circulo3',
  amarillo: 'circulo4',
  rosa: 'circulo5',
  white: 'circulo6',
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", agregarCirculo);

function agregarCirculo(){
  const contenedor = document.querySelector(".contenedor");
  const item = document.createElement("div");
  item.classList.add("circulo");
  
  if (color > 0) {
    const colorActual = ordenDeColores[color];
    const claseActual = mapaDeClases[colorActual];
    item.classList.add(claseActual);
  }

  contenedor.appendChild(item);
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', cambiarColor);

function cambiarColor(){
    const ultimoColor = ordenDeColores[ordenDeColores.length - 1]
    const ultimaClase = mapaDeClases[ultimoColor];
    const circulos = document.querySelectorAll(".circulo");
    for (let i = 0; i < circulos.length; i++){
      const circulo = circulos[i];
      const colorActual = ordenDeColores[color];
      const sigColor = ordenDeColores[color + 1];
      const claseActual = mapaDeClases[colorActual];
      const sigClase = mapaDeClases[sigColor];
      if (color > 0) {
        circulo.classList.remove(claseActual);
      } else if (circulo.classList.contains(ultimaClase)) {
        circulo.classList.remove(ultimaClase);
      }
      circulo.classList.add(sigClase);
    }

    color++;

    if (color === ordenDeColores.length) {
      color = 0;
    }
}

/*
colorEsVerde = !colorEsVerde;
colorEsRojo = !colorEsRojo;
colorEsAmarillo = !colorEsAmarillo;
colorEsRosa = !colorEsRosa;

let colorEsVerde = true;
let colorEsRojo = true;
let colorEsAmarillo = true;
let colorEsRosa = true; */