title = "Criando Funçoes e Métodos";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

/**
 * METODO -  Não retorna valor
 */
function isAge1(idade) {
   console.log(idade >= 18 ? "Sim" : "Não");
}

/**
 * FUNÇÃO -  Retorna valor
 */
function isAge2(idade) {
   return idade >= 18 ? "Sim" : "Não";
}

isAge1(18);

console.log(isAge2(18));
