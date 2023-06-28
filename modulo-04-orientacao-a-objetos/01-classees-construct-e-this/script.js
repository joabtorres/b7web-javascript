title = "Classes: Construct, This e Action";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

// -------------------------------
class Person {
   age = 0;
   constructor(firstName) {
      this.firstName = firstName;
   }
   showMessage() {
      console.log(
         `Olá ${this.firstName}, tudo bem? você tem ${this.age} anos?`
      );
   }
}

let person1 = new Person("Carlos");
person1.age = 18;
person1.showMessage();
