title = "Manipulando DOM!";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

let divTriggers = document.getElementsByClassName("trigger");

for (let i = 0; i < divTriggers.length; i++) {
   divTriggers[
      i
   ].innerHTML = `Manipulando elemento pelo getElementsByClassName, ${i}`;
}

document.getElementById("container").innerHTML = "Acessando o elemento por ID";

list = document.getElementsByTagName("li");

for (let i = 0; i < list.length; i++) {
   list[i].innerHTML = `Manipulando elemento pelo getElementsByTagName: ${i}`;
}
