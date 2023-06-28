title = "Manipulando DOM! - Manipulando CSS";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;
/**
 * O Element.classList é uma propriedade somente leitura que retorna uma DOMTokenList coleção ativa dos class atributos do elemento. Isso pode então ser usado para manipular a lista de classes.
 */
function evento() {
   list = document.querySelector(".li");

   if (list.classList[1] == "success") {
      list.classList.remove("success");
      list.classList.add("danger");
   } else {
      //replace("DE_QUAL", "PARA_QUAL");
      list.classList.replace("danger", "success");
   }
   list.classList.toggle("list");
}

document.querySelector("button").addEventListener("click", function () {
   evento();
});
