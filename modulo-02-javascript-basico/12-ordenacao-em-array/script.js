title = "Ordenação em Array";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let frutas = ["Banana", "Abacate", "Maça", "Manga", "Laranja"];

/**
 * método sort() ordena os elementos do próprio array e retorna o array
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 *
 */
let frutasOrderASC = frutas.sort();
console.log(frutasOrderASC);
/**
 * O método reverse() inverte os itens de um array.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
 */

let frutasOrderDesc = frutas.sort().reverse();

console.log(frutasOrderDesc);

/**
 * Ordenação de array com objetos como indices
 */
let cars = [
   { brand: "Fiat", year: 2022 },
   { brand: "Gol", year: 2018 },
   { brand: "Toioto", year: 2020 },
];

cars.sort((a, b) => a.year - b.year); //crecente
//cars.sort((a, b) => b.year - a.year); //descrecente

console.log(cars);
