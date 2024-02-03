const sliderContainer = document.querySelector('.slider-container');
const slider = document.querySelector('.slider');
let slideIndex = 0;
let intervalId;

function slide() {
  slideIndex++;
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;

  const posicision = slideIndex + 0;
  if (posicision === slider.children.length - 1) {
    slideIndex = -1;
  }
}

function startSlide() {
  intervalId = setInterval(slide, 2000);
}

startSlide();


const vector = document.querySelector('.contenedor_vector');
function vector_actions(){
  vector.style.transform = `translateX(0px)`;
}
vector_actions();


const titulo_portada = document.querySelector('.contenedor_titulo_portada');
function titulo_portada_acctions(){
  titulo_portada.style.opacity = '100%';
}
titulo_portada_acctions();

const titulo_portada_h2 = document.querySelector('.titulo_portada');
const tamano_letra = window.getComputedStyle(titulo_portada_h2).getPropertyValue('font-size');
const tamanoFuenteNumerico = parseFloat(tamano_letra);
const tamanoFuenteEnPorcentaje1 = (tamanoFuenteNumerico / parseFloat(window.getComputedStyle(document.body).fontSize)) * 100;
const tamanoFuenteNumerico2 = Number(tamanoFuenteEnPorcentaje1) + 30;

// console.log(tamanoFuenteEnPorcentaje1)
// console.log(tamanoFuenteNumerico2)

let cambio_control = 0
let intervalId2;
function titulo_portada_acctions2(){
  if (cambio_control == 0) {
    titulo_portada_h2.style.fontSize = `${tamanoFuenteEnPorcentaje1}%`;
    cambio_control = 1;
  }else{
    titulo_portada_h2.style.fontSize = tamanoFuenteNumerico2 + "%";
    cambio_control = 0;
  }
}
function start_titulo_portada() {
  intervalId2 = setInterval(titulo_portada_acctions2, 2000);
}
start_titulo_portada()


const texto_portada = document.querySelector('.contenedor_texto_portada');
function texto_portada_acctions(){
  texto_portada.style.opacity = '100%';
}

setTimeout(texto_portada_acctions, 1500);


function toggleMenu() {
  var navMenu = document.getElementById('navMenu');
  navMenu.style.display = (navMenu.style.display === 'block') ? 'none' : 'block';
}