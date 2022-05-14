/*
Formulário envio de dados para cálculo da Média
*/

document.getElementById("form-01").addEventListener("submit", function (evento) {
   evento.preventDefault(); //Formulário para de ter o comportamento padrão do html
   evento.stopPropagation(); //Faz com que todo submit de form caia nessa função

   if (this.getAttribute("class").match(/erro/)) {
      return false;
   }

   let dados = new FormData(this);

   let notas = [];

   for (let key of dados.keys()) {
      let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // ParseFloat - Número com ponto depois do decimal
      // .match(/\d/) verifica se contem um digito se sim transforma em um número se não transforma em 0
      console.log(typeof numero);

      if (!isNaN(numero)) {
         notas.push(numero);
      }
   }

   console.log(notas);

   function calcularMedia(notas) {
      var soma = 0;
      for (c = 0; c < notas.length; c++) {
         soma += notas[c];
      }

      media = soma / notas.length; //Utilizar notas.length para que ele calcule dinamicamente a quantidade que ela recebeu

      return media;
   }

   function aprovacao(notas) {
      let media = calcularMedia(notas);

      if (media >= 7) {
         condicao = "Aprovado";
         document.getElementById("resultado").style.backgroundColor = "Green";
      } else if (media >= 4) {
         condicao = "Recuperação";
         document.getElementById("resultado").style.backgroundColor = "Yellow";
      } else {
         condicao = "Reprovado";
         document.getElementById("resultado").style.backgroundColor = "Red";
      }
      return "Média: " + media + " - Resultado: " + condicao;
   }

   document.getElementById("resultado").innerHTML = aprovacao(notas);
   aprovacao(notas);
});

function Validation(elemento) {
   elemento.addEventListener("focusout", function (event) {
      event.preventDefault();

      if (this.value == "") {
         document.querySelector(".mensagem").innerHTML = "Verifique o preenchimento dos campos em vermelho";
         this.classList.add("erro");
         this.parentNode.classList.add("erro"); //Adiciona Classe no ParerntNode(Pai) no caso no formulário, impedindo que envie o formulário
         return false;
      } else {
         document.querySelector(".mensagem").innerHTML = "";
         this.classList.remove("erro");
         this.parentNode.classList.remove("erro");
      }
   });
}

function NumericValidation(elemento) {
   elemento.addEventListener("focusout", function (event) {
      event.preventDefault();
      if (this.value != "" && this.value.match(/[0-9]*/) && this.value >= 0 && this.value <= 10) {
         document.querySelector(".mensagem").innerHTML = "";
         this.classList.remove("erro");
         this.parentNode.classList.remove("erro");
      } else {
         document.querySelector(".mensagem").innerHTML = "O campo é apenas numérico";
         this.classList.add("erro");
         this.parentNode.classList.add("erro"); //Adiciona Classe no ParerntNode(Pai) no caso no formulário, impedindo que envie o formulário
         return false;
      }
   });
}

let Necessary = document.querySelectorAll("input.obrigatorio");
let Numeric = document.querySelectorAll("input.numero");

for (let Focused of Necessary) {
   Validation(Focused);
}

for (let Focused of Numeric) {
   NumericValidation(Focused);
}
