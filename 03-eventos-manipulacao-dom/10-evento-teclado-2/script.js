title =
   "Manipulando DOM! - Evento Teclado KEY, CODE, SHIFTKEY, ALTKEY, CTRLKEY";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

function evento(event) {
   console.log(`Key: ${event.key}`); //mais simples
   console.log(`Code: ${event.code}`); // mais detalista
   console.log(`ShiftKey: ${event.shiftKey}`); //evento para saber se a tecla foi apertada junta com outra tecla
   console.log(`AltKey: ${event.altKey}`); //evento para saber se a tecla foi apertada junta com outra tecla
   console.log(`CtrlKey: ${event.ctrlKey}`); //evento para saber se a tecla foi apertada junta com outra tecla
   console.log(`-----------------------------`);
}

const input = document.querySelector("input");

input.addEventListener("keyup", evento);
