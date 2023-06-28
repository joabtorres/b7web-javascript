//Comentário inline
let nome = "Joab Torres Alencar";
/**
 * comentário em multiplas linhas
 * 
 * aqui e continuação do comentário
 */
let idade = 30;
let altura = 1.78
let estudo = ["html", "css", "JavaScript", "PHP", "Mysql"];
let pet = {nome: "Mel", idade: "3 anos", sexo: "Femenino"};


console.log(typeof nome);
console.log(typeof idade);
console.log(typeof altura);
console.log(typeof estudo);
console.log(typeof pet)

let paragrafo = `Olá, meu nome é `+nome+` tenho `+idade+` anos e `+altura+` de altura, atualmente estudo `+estudo.length+` tecnologias para o desenvolvimento web e tenho um pet de estimação do sexo `+pet.sexo+` idade de `+pet.idade+` e se chama `+pet.nome+`.`;

                
console.log(typeof paragrafo);
document.getElementsByTagName('div')[0].innerHTML = paragrafo;