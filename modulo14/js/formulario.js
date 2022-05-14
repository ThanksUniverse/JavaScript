/* Exercicio EBAC
1. Verificação de número - verifyLetters
2. Verificação de email - verifyEmail
3. Verificação de uf  - verifyDigits
4. Verificação de cep - verifyCep
5. Verificação de nome - verifyLetters
5. Verificação de cidade - verifyCity
*/

//TODO 1 : Create the basic syntex to Disallow Numbers-Symbols
//TODO 2 : Declare the variables
//TODO 3 : Make the form dont submit before checking all errors
//TODO 4 : Fix the HTML/CSS part
//TODO-5 : Change the PLACEHOLDER and add a Class to the element

//*Info: verifyLetters-verifyDigits-verifyCep all almost have the same requirements

//Cancel submit when didnt meet the requirements

const form0 = document.getElementById("form0");
form0.addEventListener("submit", function (event) {
   event.preventDefault();

   if (form0.classList.contains("error")) {
      document.getElementsByName("nome")[0].placeholder = "*Nome";
      document.querySelector('[name = "nome"]').classList.add("need");
      document.getElementsByName("email")[0].placeholder = "*Email";
      document.querySelector('[name = "email"]').classList.add("need");
      document.getElementsByName("uf")[0].placeholder = "*UF";
      document.querySelector('[name = "uf"').classList.add("need");
      document.getElementsByName("cep")[0].placeholder = "*CEP";
      document.querySelector('[name = "cep"]').classList.add("need");
      document.getElementsByName("cidade")[0].placeholder = "*Cidade";
      document.querySelector('[name= "cidade"]').classList.add("need");
      return false;
   } else {
      document.getElementById("form0").submit();
   }
});

console.log("Pedro");

//Limit Characters

function LimitCharacters(doc) {
   let = max = 2;

   if (doc.value.length > max) {
      doc.value = doc.value.substr(1, max); //Se colocar 1 apaga o primeiro número
   }
}

//VerifyName

function verifyLetters(doc) {
   /*  1 Allow only letters
   2 Disallow Numbers-Symbols */
   const ValidLetters = /^[a-z]/i;
   doc.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value.match(ValidLetters)) {
         document.querySelector(".message").innerHTML = "";
         this.classList.remove("error");
         this.parentNode.classList.remove("error");
         document.querySelector('[name = "nome"]').classList.remove("need");
      } else {
         document.querySelector(".message").innerHTML = "O campo nome é obrigatório";
         document.getElementsByName("nome")[0].placeholder = "*Nome";
         document.querySelector('[name = "nome"]').classList.add("need");
         this.classList.add("error");
         this.parentNode.classList.add("error");
         return false;
      }
   });
}

//VerifyEmail

function verifyEmail(doc) {
   /* 1 Basically get the RegEx from the other script and incorporate the code */
   const ValidEmail = /[@.com]/;
   doc.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value.match(ValidEmail) && doc.value.length > 5) {
         document.querySelector(".message").innerHTML = "";
         this.classList.remove("error");
         this.parentNode.classList.remove("error");
         document.querySelector('[name = "email"]').classList.remove("need");
      } else {
         document.querySelector(".message").innerHTML = "O campo email é obrigatório";
         document.getElementsByName("email")[0].placeholder = "*Email";
         document.querySelector('[name = "email"]').classList.add("need");
         this.classList.add("error");
         this.parentNode.classList.add("error");
      }
   });
}

//VerifyUF

function verifyDigits(doc) {
   /* 1 Allow only two digits inside the whole string
   2 Disallow Numbers-Symbols */
   const ValidDigits = /^[A-Z]/;
   doc.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value.match(ValidDigits) && doc.value.length == 2) {
         document.querySelector(".message").innerHTML = "";
         this.classList.remove("error");
         this.parentNode.classList.remove("error");
         document.querySelector('[name = "uf"]').classList.remove("need");
      } else {
         document.querySelector(".message").innerHTML = "O campo UF é obrigatório";
         document.getElementsByName("uf")[0].placeholder = "*UF";
         document.querySelector('[name = "uf"]').classList.add("need");
         this.classList.add("error");
         this.parentNode.classList.add("error");
      }
   });
}

//VerifyCep

function verifyCep(doc) {
   /* 1 Get the base RegEx from the other script
   2 Block any letter-symbols */
   const ValidCep = /^\d{5}(?:[-\s]\d{4})?$/;
   doc.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value.match(ValidCep)) {
         document.querySelector(".message").innerHTML = "";
         this.classList.remove("error");
         this.parentNode.classList.remove("error");
         document.querySelector('[name = "cep"]').classList.remove("need");
      } else {
         document.querySelector(".message").innerHTML = "O campo cep é obrigatório";
         document.getElementsByName("cep")[0].placeholder = "*CEP";
         document.querySelector('[name = "cep"]').classList.add("need");
         this.classList.add("error");
         this.parentNode.classList.add("error");
      }
   });
}

//VerifyCity

function verifyCity(doc) {
   /* 1 Verify Letters
      2 Verify Min Length of 3*/
   const ValidCity = /[a-z]/i;
   doc.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value.match(ValidCity)) {
         document.querySelector(".message").innerHTML = "";
         this.classList.remove("error");
         this.parentNode.classList.remove("error");
         document.querySelector('[name = "cidade"]').classList.remove("need");
      } else {
         document.querySelector(".message").innerHTML = "O campo cidade é obrigatório";
         document.getElementsByName("cidade")[0].placeholder = "*Cidade";
         document.querySelector('[name = "cidade"]').classList.add("need");
         this.classList.add("error");
         this.parentNode.classList.add("error");
      }
   });
}

//Declarations

let ValidLetters = document.querySelectorAll("input.verifyLetters");
let ValidEmail = document.querySelectorAll("input.verifyEmail");
let ValidDigits = document.querySelectorAll("input.verifyDigits");
let ValidCep = document.querySelectorAll("input.verifyCep");
let ValidCity = document.querySelectorAll("input.verifyCity");

//Loops

for (let Focused of ValidLetters) {
   verifyLetters(Focused);
}
for (let Focused of ValidEmail) {
   verifyEmail(Focused);
}
for (let Focused of ValidDigits) {
   verifyDigits(Focused);
}
for (let Focused of ValidCep) {
   verifyCep(Focused);
}
for (let Focused of ValidCity) {
   verifyCity(Focused);
}

//Dark Mode

function ThemeChange() {
   document.body.classList.toggle("dark");
   let image = document.getElementById("dark");
   if (image.src.match("../images/dark.webp")) {
      image.src = "../images/light.png";
   } else {
      image.src = "../images/dark.webp";
   }
}
