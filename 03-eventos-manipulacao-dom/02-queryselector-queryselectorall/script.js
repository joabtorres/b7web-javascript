title = "Manipulando DOM! - querySelector e querySelectorAll";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

let divTriggers = document.querySelectorAll(".trigger");
for (let i = 0; i < divTriggers.length; i++) {
   divTriggers[
      i
   ].innerHTML = `Manipulando elemento pelo querySelectorAll, ${i}`;
}

let list = document.querySelector("ul li a");
list.innerHTML = `document.querySelector("ul li a")`;

let divID = document.querySelector("#container");
divID.innerHTML = `document.querySelector("#container")`;
