title = "Iteração em Array";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let frutas = ["Banana", "Abacate", "Maça", "Manga", "Laranja"];
/**
 * O método filter() cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
let filterFruts = frutas.filter((item) => item.length > 5); //fitrando para aceitar somente indeces com mais de 5 caracteres

console.log(frutas);
console.log(filterFruts);
/**
 * O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
 * https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/every
 */

let verify = frutas.every((value) => value.length > 4);

console.log(verify);

/**
 * O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
 */

verify = frutas.some((value) => value.length > 4);

console.log(verify);

/**
 * O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
 */
verify = frutas.includes("Manga");
console.log(verify);
