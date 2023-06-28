title = "Objetos";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let people = {
   name: "Joab Torres Alencar",
   age: "30 anos",
   address: "Rua Comandante Francisco de Assis, nº 575",
   phone: "(93) 992047173",
};

console.log(typeof people);
console.log(people);
console.log(`Nome: ${people.name}`);
console.log(`Idade: ${people.age}`);
console.log(`Endereço: ${people.address}`);
console.log(`Telefone: ${people.phone}`);
