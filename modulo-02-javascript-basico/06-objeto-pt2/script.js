title = "Objetos com array e métodos";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

let dog = {
   name: "Mel",
   age: "3 anos",
   race: "showshow",
   races: ["vira-lata", "showshow", "pitbul", "puldog"],
   show: function () {
      console.log(
         `O nome do cão é ${this.name} e tem ${this.age} anos e raça ${this.race}`
      );
   },
   isRace: function () {
      for (let i = 0; i < this.races.length; i++) {
         if (this.races[i] == this.race) {
            return true;
         }
      }
   },
};
dog.show();
console.log(dog.isRace())
