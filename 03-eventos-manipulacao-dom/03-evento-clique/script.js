title = "Manipulando DOM! - Evento click";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

function isclick() {
   console.log("Você clicou no elemento");
}

let button = document.getElementById("button");

button.addEventListener("click", function () {
   isclick();
});
