// 
var escenas = document.querySelectorAll(".escena");
for (var i = 0; i < escenas.length; i++) {
    escenas[i].style.display = "none";
    var efecto = new Audio ("next-page.mp3")
    
}
escenas[0].addEventListener("click", cambiarEscena1_2);
escenas[0].style.display = "block";
function cambiarEscena1_2() {
    
    escenas[0].style.display = "none";
    escenas[1].style.display = "block";
    efecto.play();
    
}

escenas[1].addEventListener("click", cambiarEscena2_3);
function cambiarEscena2_3() {
    escenas[1].style.display = "none";
    escenas[2].style.display = "block";
    efecto.play();
}

escenas[2].addEventListener("click", cambiarEscena3_4);
function cambiarEscena3_4() {
    escenas[2].style.display = "none";
    escenas[3].style.display = "block";
    efecto.play();
}
escenas[3].addEventListener("click", cambiarEscena4_5);
function cambiarEscena4_5() {
    escenas[3].style.display = "none";
    escenas[4].style.display = "block"; efecto.play();
}
escenas[4].addEventListener("click", cambiarEscena5_6);
function cambiarEscena5_6() {
    escenas[4].style.display = "none";
    escenas[5].style.display = "block";
    efecto.play();
}
escenas[5].addEventListener("click", cambiarEscena6_7);
function cambiarEscena6_7() {
    escenas[5].style.display = "none";
    escenas[6].style.display = "block";
    efecto.play();
}
var enlace = document.getElementById("enlace");
enlace.addEventListener("click", volver)
function volver() {
    escenas[6].style.display = "none";
    escenas[0].style.display = "block";
    efecto.play();
}

var audio = document.querySelector("audio");
var icono = document.querySelector("#audio i");
icono.addEventListener("click", reproducirMusica)
function reproducirMusica(){
    if(audio.paused){
         audio.play();
    icono.className = "bi bi-pause-circle";
    }    
   else{
      audio.pause();
       icono.className ="bi bi-play-circle"
   }
}

// audio.lastElementChild.addEventListener("click");
// console.



















// var presentacion = document.getElementById("presentacion");
// var alarcon = document.getElementById("alarcon");
// var belmonte = document.getElementById("belmonte");
// var sisante = document.getElementById("sisante");
// var sanClemente = document.getElementById("sanCelemnte");
// var huete = document.getElementById("huete");
// var despedida = document.getElementById("despedida");
// presentacion.style.display = "block";
// alarcon.style.display = "none";

