let color = 'azul';

const btn = document.querySelector(".btn");
btn.addEventListener("click", agregarCirculo);

function agregarColorACirculo(circulo) {
  switch (color) {
    case 'azul': 
      if (circulo.classList.contains('circulo5')) {
        circulo.classList.remove('circulo5');
      }
      break;
    case 'verde':
      circulo.classList.add('circulo2');
      break;
    case 'rojo':
      circulo.classList.remove('circulo2');
      circulo.classList.add('circulo3');
      break;
    case 'amarillo':
      circulo.classList.remove('circulo3');
      circulo.classList.add('circulo4');
      break;
    case 'rosa':
      circulo.classList.remove('circulo4');
      circulo.classList.add('circulo5');
      break;
  }
}

function agregarCirculo(){
  const contenedor = document.querySelector(".contenedor");
  const circulo = document.createElement("div");
  circulo.classList.add("circulo");
  agregarColorACirculo(circulo);
  contenedor.appendChild(circulo);
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', cambiarColor);

function cambiarColor(){
  const circulos = document.querySelectorAll(".circulo");
  switch (color) {
    case 'azul':
      color = 'verde';
      break;
    case 'verde':
      color = 'rojo';
      break;
    case 'rojo':
      color = 'amarillo';
      break;
    case 'amarillo':
      color = 'rosa';
      break;
    default:
      color = 'azul';
  }
  for (let i = 0; i < circulos.length; i++) {
    const circulo = circulos[i];
    agregarColorACirculo(circulo);
  }
}
