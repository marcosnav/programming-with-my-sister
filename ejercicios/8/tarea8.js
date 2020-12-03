const btn = document.querySelector(".btn");
btn.addEventListener("click", agregarCirculo);

function agregarCirculo(){
  const contenedor = document.querySelector(".contenedor");
  const item = document.createElement("div");
  item.classList.add("circulo");
  contenedor.appendChild(item);
}
