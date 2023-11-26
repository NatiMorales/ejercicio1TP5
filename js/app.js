const botonComenzarJuego = document.getElementById("btnComenzarJuego");
const formularioNuevoJuego = document.querySelector("form");
var numeroAleatorio, numeroIngresado;
var contador = 0;
var nroMensajes = 0;

const comenzarJuego = () => {
  numeroAleatorio = crearNumeroAleatorio();
  console.log(numeroAleatorio);

  const inputAdivinarNumero = document.createElement("input");
  inputAdivinarNumero.className = "form-control my-2";
  inputAdivinarNumero.type = "number";
  inputAdivinarNumero.placeholder = "Ingresa un número";
  inputAdivinarNumero.max = "10";
  inputAdivinarNumero.min = "1";
  inputAdivinarNumero.id = "inputAdivinar";
  inputAdivinarNumero.required = true;
  formularioNuevoJuego.appendChild(inputAdivinarNumero);

  const botonEnviarNumero = document.createElement("button");
  botonEnviarNumero.innerHTML = "Comparar";
  botonEnviarNumero.className = "btn btn-dark my-2 w-100";
  botonEnviarNumero.type = "submit";
  formularioNuevoJuego.appendChild(botonEnviarNumero);

  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[0]);
};

const crearNumeroAleatorio = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const compararNumeroAleatorio = () => {
  if (contador < 3) {
    if (numeroIngresado === numeroAleatorio) {
      mensajeAdivinaste();
    } else if (numeroIngresado < numeroAleatorio && nroMensajes === 0) {
      mensajeErraste();
    } else if (numeroIngresado > numeroAleatorio && nroMensajes === 0) {
      mensajeErraste();
    }
    contador++;
  } else {
    mensajeAcabasteTusChances();
  }
};

const buscarNumeroIngresado = (e) => {
  e.preventDefault();
  const inputBusqueda = document.getElementById("inputAdivinar");
  numeroIngresado = parseInt(inputBusqueda.value);
  compararNumeroAleatorio();
  formularioNuevoJuego.reset();
};

const mensajeAdivinaste = () => {
  const parrafoAdivinaste = document.createElement("h2");
  parrafoAdivinaste.innerHTML = "¡Adivinaste!";
  parrafoAdivinaste.className = "my-3";
  formularioNuevoJuego.appendChild(parrafoAdivinaste);

  const botonVolver = document.createElement("a");
  botonVolver.innerHTML = "Página Principal";
  botonVolver.className = "btn btn-dark my-3";
  botonVolver.href = "./index.html";
  formularioNuevoJuego.appendChild(botonVolver);
  if (nroMensajes === 1) {
    formularioNuevoJuego.removeChild(formularioNuevoJuego.children[2]);
  }
  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[1]);
  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[0]);
};

const mensajeErraste = () => {
  const parrafoError = document.createElement("p");
  parrafoError.innerHTML = "Número incorrecto. Ingresa otro número";
  parrafoError.className = "text-danger";
  formularioNuevoJuego.appendChild(parrafoError);
  nroMensajes++;
};

const mensajeAcabasteTusChances = () => {
  const parrafoError = document.createElement("p");
  parrafoError.innerHTML = "Ya no puedes seguir ingresando números";
  parrafoError.className = "text-danger my-3";
  formularioNuevoJuego.appendChild(parrafoError);

  const botonVolver = document.createElement("a");
  botonVolver.innerHTML = "Página Principal";
  botonVolver.className = "btn btn-dark my-3";
  botonVolver.href = "./index.html";
  formularioNuevoJuego.appendChild(botonVolver);

  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[2]);
  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[1]);
  formularioNuevoJuego.removeChild(formularioNuevoJuego.children[0]);
};

botonComenzarJuego.addEventListener("click", comenzarJuego);
formularioNuevoJuego.addEventListener("submit", buscarNumeroIngresado);
