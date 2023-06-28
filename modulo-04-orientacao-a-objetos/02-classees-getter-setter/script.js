title = "Classes: Getter & Setter";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("p")[0].innerHTML = title;

// -------------------------------
class Person {
   age = 0;
   constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
   }
   get getAge() {
      return this.age;
   }
   set setAge(x) {
      if (typeof x === "number") {
         this.age = x;
      } else {
         console.log(`Informe um valor do tipo number em age!`);
      }
   }
   get getFullName() {
      return `${this.firstName} ${this.lastName}`;
   }

   showMessage() {
      console.log(
         `Olá ${this.getFullName}, tudo bem? você tem ${this.getAge} anos?`
      );
   }
}

let person1 = new Person("Carlos", "Rodrigues");
person1.setAge = 40;
person1.showMessage();
