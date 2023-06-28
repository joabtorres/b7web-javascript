title = "Loop For";
document.querySelector("title").innerHTML = title;
document.getElementsByTagName("div")[0].innerHTML = title;

for (let i = 0; i <= 10; i++) {
   console.log(`Pessoa ${i}`);
}

console.log("--------------------");
peoples = ["joab", "ricardo", "Douglas", "Carlos", "raimundo"];

for (let i = 0; i < peoples.length; i++) {
   console.log(`Pessoa ${peoples[i]}`);
}

console.log("--------------------");
for (let people of peoples) {
   console.log(people);
}
