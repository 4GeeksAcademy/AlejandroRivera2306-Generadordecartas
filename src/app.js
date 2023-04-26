// /* eslint-disable */
import "bootstrap";
import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function loadFunction() {
  let numeroCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let simbolos = ["♦", "♥", "♠", "♣"];
  let simbolIgual = simbolos[Math.floor(Math.random() * simbolos.length)];
  document.getElementById("numero").innerHTML =
    numeroCarta[Math.floor(Math.random() * numeroCarta.length)];
  document.getElementById("simbolo1").innerHTML = simbolIgual;
  document.getElementById("simbolo2").innerHTML = simbolIgual;
  document.getElementById("tamañoCarta").style.height = "600px";
  document.getElementById("tamañoCarta").style.width = "400px";
  document.getElementById("simbolo2").style.fontSize = "50px";
  document.getElementById("simbolo1").style.fontSize = "50px";
  document.getElementById("numero").style.fontSize = "70px";
  if (simbolIgual === "♦") {
    document.getElementById("simbolo2").classList.add("rojo");
    document.getElementById("simbolo1").classList.add("rojo");
    document.getElementById("numero").classList.add("rojo");
  } else if (simbolIgual === "♥") {
    document.getElementById("simbolo2").classList.add("rojo");
    document.getElementById("simbolo1").classList.add("rojo");
    document.getElementById("numero").classList.add("rojo");
  } else {
    document.getElementById("simbolo2").classList.remove("rojo");
    document.getElementById("simbolo1").classList.remove("rojo");
    document.getElementById("numero").classList.remove("rojo");
  }
};
window.randomCard = function randomCard() {
  let numeroCarta = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let simbolos = ["♦", "♥", "♠", "♣"];
  let simbolIgual = simbolos[Math.floor(Math.random() * simbolos.length)];
  document.getElementById("numero").innerHTML =
    numeroCarta[Math.floor(Math.random() * numeroCarta.length)];
  document.getElementById("simbolo1").innerHTML = simbolIgual;
  document.getElementById("simbolo2").innerHTML = simbolIgual;

  if (simbolIgual === "♦") {
    document.getElementById("simbolo2").classList.add("rojo");
    document.getElementById("simbolo1").classList.add("rojo");
    document.getElementById("numero").classList.add("rojo");
  } else if (simbolIgual === "♥") {
    document.getElementById("simbolo2").classList.add("rojo");
    document.getElementById("simbolo1").classList.add("rojo");
    document.getElementById("numero").classList.add("rojo");
  } else {
    document.getElementById("simbolo2").classList.remove("rojo");
    document.getElementById("simbolo1").classList.remove("rojo");
    document.getElementById("numero").classList.remove("rojo");
  }
};
const intervalID = setInterval(window.randomCard, 3000);

window.obtenerElementos = function obtenerElementos() {
  let alto = parseInt(document.getElementById("alto").value);
  let ancho = parseInt(document.getElementById("ancho").value);

  if (alto <= 400 || ancho <= 400) {
    document.getElementById("tamañoCarta").style.height = "600px";
    document.getElementById("tamañoCarta").style.width = "400px";
    alert("LOS VALORES DE LA CARTA NO SON ADECUADOS 400 EN ADELANTE");
  } else if (alto === 500) {
    document.getElementById("tamañoCarta").style.height = `${alto}px`;
    document.getElementById("simbolo2").classList.remove("tamañoR");
    document.getElementById("tamañoCarta").style.width = `${ancho}px`;
  } else if (alto > 500) {
    document.getElementById("tamañoCarta").style.height = `${alto}px`;
    document.getElementById("simbolo2").classList.add("tamañoR");
    document.getElementById("tamañoCarta").style.width = `${ancho}px`;
  }
};
