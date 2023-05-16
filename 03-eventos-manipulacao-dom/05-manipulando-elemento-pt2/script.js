title = "Manipulando DOM! - Alterando html append() |  appendChild";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

/**
 *
 * Elemento: método append()
 * O Element.append() método insere um conjunto de Nodeo bjetos ou objetos de string após o último filho do Element. Objetos string são inseridos como Text nós equivalentes.
 */

function atualizarTextoNoFinal() {
   let list = document.querySelector("ul.list");
   list.children[0].append(" (final) ");
}

/**
 * método prepend()
 * O Element.prepend() método insere um conjunto de Nodeobjetos ou objetos de string antes do primeiro filho do Element. Objetos string são inseridos como Textnós equivalentes.
 */
function atualizarTextoNoInicio() {
   let list = document.querySelector("ul.list");
   list.children[0].prepend(" (inicio) ");
}

/**
 * Elemento: método appendChild()
 * O appendChild() método da Node interface adiciona um nó ao final da lista de filhos de um nó pai especificado.
 * https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
 */
function atualizarListaNoFinal() {
   let list = document.querySelectorAll("ul.list");
   list = list[list.length - 1];

   let newLi = document.createElement("li");
   newLi.innerText = "Nova linha adicionada";

   list.appendChild(newLi);
}

document.querySelector("button").addEventListener("click", function () {
   atualizarTextoNoFinal();
   atualizarTextoNoInicio();
   atualizarListaNoFinal();
});
