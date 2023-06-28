title = "Manipulando DOM! - Alterando html";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

let list = document.querySelector("ul.list");

/**
 *
 * propriedade somente leitura children : retorna um live HTMLCollection que contém todos os filhos elementsdo elemento no qual foi chamado.
 * https://developer.mozilla.org/en-US/docs/Web/API/Element/children
 */

console.log(list.children);
console.log(list.children[0]);
console.log("-----------------------------------------");
/**
 * propriedade innerHTML obtém ou define a marcação HTML ou XML contida no elemento.
 */

list.innerHTML += `<li> Lista ${
   list.children.length + 1
} adicionada via javascript</li>`;

lists = document.querySelectorAll(".list");
lists = lists[lists.length - 1];
lista = "";
for (let li of lists.children) {
   lista += `<li>${li.innerText}</li>`;
}
lists.outerHTML = `<ol>${lista}</ol>`;
