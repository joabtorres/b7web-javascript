
title = "Exercicio com loop";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

/**
 * 1ª Faça um loop que mostre todas as frutas
 */
let frutas = ["Banana", "Abacate", "Maça", "Manga", "Laranja"];

for (let fruta of frutas) {
   console.log(`Fruta: ${fruta}`);
}
/**
 * 2º Faça um loop em while que conte de 1 a 100
 */
let num = 1;

while (num <= 100) {
   console.log(`${num}`);
   num++;
}
