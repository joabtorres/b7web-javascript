title = "Loop whle";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;
let i = 0;
while (i <= 10) {
   console.log(`Pessoa ${i}`);
   i++;
}
