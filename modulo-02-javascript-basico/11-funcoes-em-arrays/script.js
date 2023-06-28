title = "Manipulando Array";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let frutas = ["Banana", "Abacate", "Maça", "Manga", "Laranja"];
/**
 * METODO: push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array
 *
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push
 */
frutas.push("Jaca"); // adiciona novo indice no ultimo array

console.log(frutas);

/**
 * METODO: pop() remove o último elemento de um array e retorna aquele elemento.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
 */
frutas.pop(); //removendo ultimo indice
console.log(frutas);

/**
 * METODO: shift() remove o primeiro elemento de um array e retorna esse elemento
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
 */

frutas.shift(); //remover o primeiro indice do array
console.log(frutas);

/**
 *  O método join() junta todos os elementos de um array (ou um array-like object) em uma string e retorna esta string.
 *  https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
 */

let frutasString = frutas.join(" ");
console.log(frutasString);

/**
 * O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 */

frutas.splice(1, 0, "Uva");

console.log(frutas);

frutas.splice(0, 3, "Pera");

console.log(frutas);
