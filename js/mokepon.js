const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
const botonMascotaJugador = document.getElementById("boton-mascota");
const botonReiniciar = document.getElementById("boton-reiniciar");
sectionReiniciar.style.display = "none";

const sectionSeleccionarMascota = document.getElementById(
  "seleccionar-mascota"
);
const spanMascotaJugador = document.getElementById("mascota-jugador");

const spanMascotaEnemigo = document.getElementById("mascota-enemigo");

const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");

const sectionMensajes = document.getElementById("resultado");
const ataquesDelJugador = document.getElementById("ataques-del-jugador");
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");

let mokepones = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let opcionDeMokepones;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputTucapalma;
let inputLangostelvis;
let inputPydos;
let mascotaJugador;
let ataquesMokepon;
let ataquesMokeponEnemigo;
let botonFuego;
let botonAgua;
let botonTierra;
let botonViento;
let botonTrueno;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let botones = [];
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapa.getContext("2d");
let intervalo;
class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = 20;
    this.y = 30;
    this.ancho = 80;
    this.alto = 80;
    this.mapaFoto = new Image();
    this.mapaFoto.src = foto;
    this.velocidadX = 0
    this.velocidadY = 0
  }
}
let tucapalma = new Mokepon(
  "Tucapalma",
  "/images/assets/mokepons_mokepon_tucapalma_attack.png",
  5
);
let langostelvis = new Mokepon(
  "Langostelvis",
  "/images/assets/mokepons_mokepon_langostelvis_attack.png",
  5
);
let pydos = new Mokepon(
  "Pydos",
  "/images/assets/mokepons_mokepon_pydos_attack.png",
  5
);
let hipodoge = new Mokepon("Hipodoge", "/images/hipodoge.png", 5);
let capipepo = new Mokepon("Capipepo", "/images/capipepo.png", 5);
let ratigueya = new Mokepon("Ratigueya", "/images/ratigueya.png", 5);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💨", id: "boton-viento" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);

capipepo.ataques.push(
  { nombre: "🌱", id: "boton-tierra" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💨", id: "boton-viento" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💨", id: "boton-viento" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
tucapalma.ataques.push(
  { nombre: "💨", id: "boton-viento" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
langostelvis.ataques.push(
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💨", id: "boton-viento" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);
pydos.ataques.push(
  { nombre: "💨", id: "boton-viento" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "💧", id: "boton-agua" },
  { nombre: "🌱", id: "boton-tierra" }
);

mokepones.push(hipodoge, capipepo, ratigueya, tucapalma, langostelvis, pydos);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";
  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
      <input type="radio" name="mascota" id=${mokepon.nombre} />
      <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img src=${mokepon.foto} alt=${mokepon.nombre}>
      </label>
      `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    inputTucapalma = document.getElementById("Tucapalma");
    inputLangostelvis = document.getElementById("Langostelvis");
    inputPydos = document.getElementById("Pydos");
  });

  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  botonReiniciar.addEventListener("click", reiniciarJuego);
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

  // sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "flex";
  intervalo = setInterval(pintarPersonaje, 50)

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    mascotaJugador = inputRatigueya.id;
  } else if (inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = inputTucapalma.id;
    mascotaJugador = inputTucapalma.id;
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = inputLangostelvis.id;
    mascotaJugador = inputLangostelvis.id;
  } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = inputPydos.id;
    mascotaJugador = inputPydos.id;
  } else {
    alert("Selecciona una mascota");
  }

  extraerAtaques(mascotaJugador);
  seleccionarMascotaEnemigo();
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesMokepon = `
      <button id=${ataque.id} class="boton-de-ataque BAtaque">${ataque.nombre}</button>
      `;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById("boton-fuego");
  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botonViento = document.getElementById("boton-viento");
  botonTrueno = document.querySelectorAll(".boton-trueno");
  botones = document.querySelectorAll(".BAtaque");
}
function secuenciaDeAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "🔥") {
        ataqueJugador.push("FUEGO");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "💧") {
        ataqueJugador.push("AGUA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "🌱") {
        ataqueJugador.push("TIERRA");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else if (e.target.textContent === "💨") {
        ataqueJugador.push("Viento");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      } else {
        ataqueJugador.push("Trueno");
        console.log(ataqueJugador);
        boton.style.background = "#112f58";
        boton.disabled = true;
      }
      ataqueAleatorioEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaAleatoria = aleatorio(0, mokepones.length - 1);

  spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre;
  ataquesMokeponEnemigo = mokepones[mascotaAleatoria].ataques;
  secuenciaDeAtaque();
}

function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length - 1);

  if (ataqueAleatorio == 0 || ataqueAleatorio == 0) {
    ataqueEnemigo.push("FUEGO");
  } else if (ataqueAleatorio == 1 || ataqueAleatorio == 1) {
    ataqueEnemigo.push("AGUA");
  } else if (ataqueAleatorio == 2 || ataqueAleatorio == 2) {
    ataqueEnemigo.push("Viento");
  } else if (ataqueAleatorio == 3 || ataqueAleatorio == 3) {
    ataqueEnemigo.push("Trueno");
  } else {
    ataqueEnemigo.push("TIERRA");
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}
function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}
function indexAmbosOponente(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}
function combate() {
  for (let index = 0; index < ataqueJugador.length; index++) {
    if (ataqueJugador[index] === ataqueEnemigo[index]) {
      indexAmbosOponente(index, index);
      crearMensaje("EMPATE");
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "Viento" &&
      ataqueEnemigo[index] === "Trueno"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "TIERRA" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "Viento" &&
      ataqueEnemigo[index] === "FUEGO"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "FUEGO" &&
      ataqueEnemigo[index] === "Trueno"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "Viento" &&
      ataqueEnemigo[index] === "AGUA"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "AGUA" &&
      ataqueEnemigo[index] === "Trueno"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "Viento" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataqueJugador[index] === "Trueno" &&
      ataqueEnemigo[index] === "TIERRA"
    ) {
      indexAmbosOponente(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponente(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVidas();
}
function revisarVidas() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("ESTO FUE UN EMPATE!!!)");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal("FELICITACIONES GANASTES :(");
  } else {
    crearMensajeFinal("LO SIENTO PERDISTE :(");
  }
}

function crearMensaje(resultado) {
  let nuevoAtaqueDelJugador = document.createElement("p");
  let nuevoAtaqueDelEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;
  nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador;
  nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo;

  ataquesDelJugador.appendChild(nuevoAtaqueDelJugador);
  ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;

  sectionReiniciar.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function pintarPersonaje() {
  capipepo.x = capipepo.x + capipepo.velocidadX
  capipepo.y = capipepo.y + capipepo.velocidadY
  lienzo.clearRect(0, 0, mapa.width, mapa.height)
  lienzo.drawImage(
      capipepo.mapaFoto,
      capipepo.x,
      capipepo.y,
      capipepo.ancho,
      capipepo.alto
  )
}

function moverDerecha() {
  capipepo.velocidadX = 5
}

function moverIzquierda() {
  capipepo.velocidadX = -5
}

function moverAbajo() {
  capipepo.velocidadY = 5
}

function moverArriba() {
  capipepo.velocidadY = -5
}

function detenerMovimiento() {
  capipepo.velocidadX = 0
  capipepo.velocidadY = 0
}
window.addEventListener("load", iniciarJuego);
