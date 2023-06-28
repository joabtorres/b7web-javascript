title = "Manipulando DOM! - Evento Teclado 1";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

function keypress() {
   console.log("SEGUROU!");
}

function keyup() {
   console.log("SOLTOU!");
}

function keydown() {
   console.log("APERTOU!");
}
