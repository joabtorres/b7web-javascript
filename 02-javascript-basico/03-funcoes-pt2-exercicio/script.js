title = "Exercicio de Função";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

/*
 1º Crie uma função para retornar a porcertagem, entre dois números;
*/

function porcertagem(num1, num2) {
   let porcentagem = (num2/num1) * 100;
   console.log(
      `A porcentagem de ${num1} refernte a ${num2} e de: ${porcentagem}%`
   );
}

porcertagem(15, 5);
