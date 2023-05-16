let name_complet = "Joab Torres Alencar";
let age = 30;
let student = ["HTML", "CSS", "JavaScript", "PHP 8", "MySQL"];
var tecnology = "";

for (let i = 0; i < student.length; i++) {
   tecnology += student[i] + "; ";
}

let string_template = `Meu nome é ${name_complet} tenho ${age} anos, sou estudante de: ${tecnology}`;

console.log(string_template);
