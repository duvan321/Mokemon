let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
function iniciarJuego() {
  //desaparece el boton reiniciar
  let sectionReiniciarJuego = document.getElementById("reiniciar");
  sectionReiniciarJuego.style.display = "none";
  //desaparce el selecionar ataque
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "none";
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
  let bontonReiniciar = document.getElementById("boton-reiniciar");
  bontonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  //desaparece el boton selecionar mascota
  let sectionSeleccionarMascota = document.getElementById(
    "seleccionar-mascota"
  );
  sectionSeleccionarMascota.style.display = "none";
  //aparece el selecionar ataque
  let sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
  sectionSeleccionarAtaque.style.display = "flex";
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML ="Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML ="Ratigueya";
  }
}
function ataqueFuego() {
  ataqueJugador = "🔥";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "💧";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "🌱";
  ataqueAleatorioEnemigo();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);

  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "🔥";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "💧";
  } else {
    ataqueEnemigo = "🌱";
  }

  combate();
}

function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("empate🤨");
  } else if (ataqueJugador == "🔥" && ataqueEnemigo == "🌱") {
    crearMensaje("GANASTE🎉");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "💧" && ataqueEnemigo == "🔥") {
    crearMensaje("GANASTE🎉");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "🌱" && ataqueEnemigo == "💧") {
    crearMensaje("GANASTE🎉");
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje("PERDISTE😣");
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
  function revisarVidas() {
    if (vidasEnemigo == 0) {
      crearMensajeFinal("FELICTACIONES GANSTE");
    } else if (vidasJugador == 0) {
      crearMensajeFinal("LO SENTIMOS PERDISTE");
    }
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota atacó con " +
    ataqueJugador +
    " las mascota del enemigo atacó con " +
    ataqueEnemigo +
    "- " +
    resultado;
  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal;

  sectionMensajes.appendChild(parrafo);
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
  //disable para desabilitar los botones
  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;
  //aparesca el botoon reiniciar
  let sectionReiniciarJuego = document.getElementById("reiniciar");
  sectionReiniciarJuego.style.display = "block";
}
function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
