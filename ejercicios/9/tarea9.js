let colorEsAzul = true;
const btn = document.querySelector(".btn");
btn.addEventListener("click", agregarCirculo);

function agregarCirculo(){
  const contenedor = document.querySelector(".contenedor");
  const item = document.createElement("div");
  item.classList.add("circulo");
  if (!colorEsAzul) {
    item.classList.add("circulo2");
  }
  contenedor.appendChild(item);
}

const btn2 = document.querySelector("#btn2");
btn2.addEventListener('click', cambiarColor);

function cambiarColor(){
  const circulos = document.querySelectorAll(".circulo");
  for (let i = 0; i < circulos.length; i++) {
    const circulo = circulos[i];
    circulo.classList.toggle("circulo2");
  }
  // Intercambia entre verdadero y falso
  colorEsAzul = !colorEsAzul; 
}