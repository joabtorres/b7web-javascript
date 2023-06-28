title = "Manipulando DOM! - Alterando html affter() |  before()";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

/**
 * método after()
 * O Element.after() método insere um conjunto de Node objetos string na lista de filhos do Element pai de , logo após o Element.
 */

function atualizarNoFinal() {
   let list = document.querySelector("ul.list");

   let newP = document.createElement("h4");
   newP.innerText = "Novo titulo depois da lista";
   list.after(newP);

   newP.after(newlist());
}

/**
 * método before()
 * O Element.before() método insere um conjunto Node ou string de objetos na lista de filhos Elementdo pai de this, logo antes de this Element.
 */

function atualizarNoInicio() {
   let list = document.querySelector("ul.list");

   let newP = document.createElement("h4");
   newP.innerText = "Novo titulo antes da lista";

   list.before(newP);
}

function newlist() {
   let list = document.createElement("ol");
   for (let i = 1; i <= 10; i++) {
      let newLi = document.createElement("li");
      newLi.append(`Nova lista ${i}`);
      list.append(newLi);
   }
   return list;
}

document.querySelector("button").addEventListener("click", function () {
   atualizarNoFinal();
   atualizarNoInicio();
});
