

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

let jugadorId = null
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
let mascotaJugadorObjecto;
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
let mapaBackground = new Image();
mapaBackground.src = "/images/mapa1.png";
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 400;

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20;
}
alturaQueBuscamos = (anchoDelMapa * 600) / 800;
mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;
class Mokepon {
  constructor(nombre, foto, vida, fotoMapa) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 40;
    this.alto = 40;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}
let tucapalma = new Mokepon(
  "Tucapalma",
  "/images/mokepons_mokepon_tucapalma_attack.png",
  5,
  "/images/mokepons_mokepon_tucapalma_attack.png"
);
let langostelvis = new Mokepon(
  "Langostelvis",
  "/images/mokepons_mokepon_langostelvis_attack.png",
  5,
  "/images/mokepons_mokepon_langostelvis_attack.png"
);
let pydos = new Mokepon(
  "Pydos",
  "/images/mokepons_mokepon_pydos_attack.png",
  5,
  "/images/mokepons_mokepon_pydos_attack.png"
);
let hipodoge = new Mokepon(
  "Hipodoge",
  "/images/hipodoge.png",
  5,
  "/images/hipodoge.png"
);
let capipepo = new Mokepon(
  "Capipepo",
  "/images/capipepo.png",
  5,
  "/images/capipepo.png"
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "/images/ratigueya.png",
  5,
  "/images/ratigueya.png"
);
//enemigos//
let tucapalmaEnemigo = new Mokepon(
  "Tucapalma",
  "/images/mokepons_mokepon_tucapalma_attack.png",
  5,
  "/images/tucapalma(2).png"
);
let langostelvisEnemigo = new Mokepon(
  "Langostelvis",
  "/images/mokepons_mokepon_langostelvis_attack.png",
  5,
  "/images/langostilvis(3).png"
);
let pydosEnemigo = new Mokepon(
  "Pydos",
  "/images/mokepons_mokepon_pydos_attack.png",
  5,
  "/images/pydos(2).png"
);
let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  "/images/hipodoge.png",
  5,
  "/images/hipodoge (2).png"
);
let capipepoEnemigo = new Mokepon(
  "Capipepo",
  "/images/capipepo.png",
  5,
  "/images/capipepo2.png"
);
let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  "/images/ratigueya.png",
  5,
  "/images/ratigueya (2).png"
);

hipodoge.ataques.push(
  { nombre: "💧", id: "boton-agua" },
  { nombre: "⚡", id: "boton-trueno" },
  { nombre: "💨", id: "boton-viento" },
  { nombre: "🔥", id: "boton-fuego" },
  { nombre: "🌱", id: "boton-tierra" }
);
hipodogeEnemigo.ataques.push(
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
capipepoEnemigo.ataques.push(
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
ratigueyaEnemigo.ataques.push(
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
tucapalmaEnemigo.ataques.push(
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
langostelvisEnemigo.ataques.push(
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
pydosEnemigo.ataques.push(
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

  unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://localhost:8080/unirse")
        .then(function (res) {
            if (res.ok) {
                res.text()
                    .then(function (respuesta) {
                        console.log(respuesta)
                        jugadorId = respuesta
                    })
            }
        })
}

function seleccionarMascotaJugador() {
  sectionSeleccionarMascota.style.display = "none";

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
    alert("recarga nueva mente la pagina");
  }
  seleccionarMokepon(mascotaJugador);

  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display = "flex";

  iniciarMapa();
}
function seleccionarMokepon(mascotaJugador) {
  fetch(`http://localhost:8080/mokepon/${jugadorId}`, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      mokepon: mascotaJugador,
    }),
  });
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

function seleccionarMascotaEnemigo(enemigo) {
  spanMascotaEnemigo.innerHTML = enemigo.nombre;
  ataquesMokeponEnemigo = enemigo.ataques;
  secuenciaDeAtaque();
}

function ataqueAleatorioEnemigo() {
  console.log("ataques enemigo", ataquesMokeponEnemigo);
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
function pintarCanvas() {
  mascotaJugadorObjecto.x =
    mascotaJugadorObjecto.x + mascotaJugadorObjecto.velocidadX;
  mascotaJugadorObjecto.y =
    mascotaJugadorObjecto.y + mascotaJugadorObjecto.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjecto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  tucapalmaEnemigo.pintarMokepon();
  pydosEnemigo.pintarMokepon();
  langostelvisEnemigo.pintarMokepon();
  if (
    mascotaJugadorObjecto.velocidadX !== 0 ||
    mascotaJugadorObjecto.velocidadY !== 0
  ) {
    revisarColision(hipodogeEnemigo);
    revisarColision(capipepoEnemigo);
    revisarColision(ratigueyaEnemigo);
    revisarColision(tucapalmaEnemigo);
    revisarColision(pydosEnemigo);
    revisarColision(langostelvisEnemigo);
  }
}

function moverDerecha() {
  mascotaJugadorObjecto.velocidadX = 5;
}

function moverIzquierda() {
  mascotaJugadorObjecto.velocidadX = -5;
}

function moverAbajo() {
  mascotaJugadorObjecto.velocidadY = 5;
}

function moverArriba() {
  mascotaJugadorObjecto.velocidadY = -5;
}

function detenerMovimiento() {
  mascotaJugadorObjecto.velocidadX = 0;
  mascotaJugadorObjecto.velocidadY = 0;
}
function sePrecionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    default:
      break;
  }
}
function iniciarMapa() {
  mascotaJugadorObjecto = obtenerObjectoMascota(mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);
  window.addEventListener("keydown", sePrecionoUnaTecla);
  window.addEventListener("keyup", detenerMovimiento);
}
function obtenerObjectoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}
function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjecto.y;
  const abajoMascota = mascotaJugadorObjecto.y + mascotaJugadorObjecto.alto;
  const derechaMascota = mascotaJugadorObjecto.x + mascotaJugadorObjecto.ancho;
  const izquierdaMascota = mascotaJugadorObjecto.x;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }

  detenerMovimiento();
  clearInterval(intervalo);

  sectionSeleccionarAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);

}

window.addEventListener("load", iniciarJuego);
