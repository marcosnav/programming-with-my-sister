let reloj = document.getElementById('reloj');
let fechaDato = document.getElementById('fec_Datos');
let dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo'];
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];
let fechaHora = new Date();
let hora;
let minutos;
let segundos;
let hr;
let am;
let dia = fechaHora.getDate();
let mes = fechaHora.getMonth();
let año = fechaHora.getFullYear();
let m = meses[mes];

function actualizarHora() {
  fechaHora = new Date();
  hora = fechaHora.getHours();
  minutos = fechaHora.getMinutes();
  segundos = fechaHora.getSeconds();
  hr = (hora>12) ? hora - 12 : hora;
  am = (hora>12) ? 'PM' : 'AM';
}

function formato(factor) {
  return String(factor).padStart(2, "0");
}

function muestraHora() {
  actualizarHora();
  // reloj.textContent= `${String(hr).padStart(2, "0")}:${String(minutos).padStart(2, "0")}:${String(segundos).padStart(2, "0")} ${am}`
  reloj.textContent= `${formato(hr)}:${formato(minutos)}:${formato(segundos)} ${am}`
  fechaDato.textContent= `${dia} ${m} del ${año}`
}

setInterval(muestraHora, 1000)
