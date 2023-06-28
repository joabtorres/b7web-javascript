title = "Exercício - LISTA DE TAREFA SIMPLES";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

const list = document.querySelector("ul");
const input = document.querySelector("input");

input.addEventListener("keyup", evento);

function evento(event) {
   if (event.code === "Enter") {
      let li = document.createElement("li");
      li.append(input.value);
      list.appendChild(li);
      input.value = "";
   }
}
