title = "Loop do ... while";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;
let i = 0;
do {
   console.log(`Pessoa ${i}`);
   i++;
} while (i <= 10);
