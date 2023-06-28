title = "Criando Funções";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

/**
 * METODO 1
 */
function isAge1(idade) {
   return idade >= 18 ? true : false;
}

/**
 * METODO 2
 */
let isAge2 = function (idade) {
   return idade >= 18 ? true : false;
};

/**
 * METODO 3
 */
let isAge3 = (idade) => {
   return idade >= 18 ? true : false;
};

console.log(isAge1(18));
console.log(isAge2(18));
console.log(isAge3(18));
