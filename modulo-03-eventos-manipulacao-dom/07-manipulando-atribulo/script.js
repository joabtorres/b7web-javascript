title = "Manipulando DOM! - Manipulando Atributo";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

function evento() {
   let input = document.querySelector("input");

   if (input.hasAttribute("placeholder")) {
      console.log("placeholder: Sim");
   } else {
      console.log("placeholder: Não");
   }
   if (input.hasAttribute("disabled")) {
      console.log("disabled: Sim");
   } else {
      console.log("disabled: Não");
   }

   if (input.getAttribute("type") === "password") {
      input.setAttribute("type", "text");
   } else {
      input.setAttribute("type", "password");
   }
}
document.querySelector("button").addEventListener("click", function () {
   evento();
});
