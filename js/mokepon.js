let ataqueJugador;
let ataqueEnemigo;
function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascota");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputRatigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_hipodoge_attack-4e83b55e-c381-4098-9a9d-40d86921d2a7.jpg" alt="" alt=""/>`;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_ratigueya_attack-b0c80a77-499a-49b6-a722-eab23f055cec.jpg" alt="">`;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.jpg" alt="">`;
  } else {
    alert("Selecciona una mascota");
  }

  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");

  if (mascotaAleatoria == 1) {
    spanMascotaEnemigo.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_hipodoge_attack-4e83b55e-c381-4098-9a9d-40d86921d2a7.jpg" alt="" alt=""/>`;
  } else if (mascotaAleatoria == 2) {
    spanMascotaEnemigo.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_ratigueya_attack-b0c80a77-499a-49b6-a722-eab23f055cec.jpg" alt="">`;
  } else {
    spanMascotaEnemigo.innerHTML = `<img src="https://static.platzi.com/media/user_upload/mokepons_mokepon_capipepo_attack-1dc6228d-c376-44d0-bc7d-66fa8cd91197.jpg" alt="">`;
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
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje("empate🤨");
  } else if (ataqueJugador == "🔥" && ataqueEnemigo == "🌱") {
    crearMensaje("GANASTE🎉");
  } else if (ataqueJugador == "💧" && ataqueEnemigo == "🔥") {
    crearMensaje("GANASTE🎉");
  } else if (ataqueJugador == "🌱" && ataqueEnemigo == "💧") {
    crearMensaje("GANASTE🎉");
  } else {
    crearMensaje("PERDISTE😣");
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

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
