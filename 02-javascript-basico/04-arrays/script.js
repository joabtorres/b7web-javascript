title = "Exercicio Arrays";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let nome = ["Ricardo", "Pedro", "Joab"];

console.log(nome.length);
console.log(nome[0]);
console.log(nome[1]);

pessoas = [
   ["Ricardo", "20 anos"],
   ["Claudio", "15 anos"],
   ["Joab", "20 anos"],
];

console.log(pessoas.length);
console.log(`${pessoas[0][0]} ${pessoas[0][1]}`);
console.log(`${pessoas[1][0]} ${pessoas[1][1]}`);
