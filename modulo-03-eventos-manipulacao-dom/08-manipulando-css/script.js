title = "Manipulando DOM! - Manipulando CSS";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

function evento() {
   list = document.querySelector("ul");
   list.children[0].style.color = "red";
   list.children[1].style.paddingTop = "10px";
   list.children[1].style.paddingBottom = "10px";
   list.children[1].style.backgroundColor = "#999";
   list.children[3].style.display = "none";
}

document.querySelector("button").addEventListener("click", function () {
   evento();
});
