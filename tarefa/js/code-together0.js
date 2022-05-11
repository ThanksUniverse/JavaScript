//Change Form submit type

document.addEventListener('submit', function(evento){
    evento.preventDefault();
    evento.stopPropagation();
});

function MediaCalc() { //Calcular média

    let a = parseInt(document.getElementById("nota01").value);
    let b = parseInt(document.getElementById("nota02").value);
    let c = parseInt(document.getElementById("nota03").value);
    let d = parseInt(document.getElementById("nota04").value);

    let media = (a + b + c + d) / 4;

    document.getElementById("resultado").value = media;

//Fim do Cálculo de Média

//Alterar Style do Resultado e do State com base na nota

    if(media >= 7){
        document.getElementById('resultado').style.color = "greenyellow"
    } else if (media >= 5) {
        document.getElementById('resultado').style.color = "yellow"
    } else {
        document.getElementById('resultado').style.color = "red"
    }

    if(media >= 7){
        document.getElementById('state').style.backgroundColor = "green"
        document.getElementById('state').style.color = "white"
        document.getElementById('state').value = "Aprovado"
    } else if (media >= 5) {
        document.getElementById('state').style.backgroundColor = "yellow"
        document.getElementById('state').style.color = "black"
        document.getElementById('state').value = "Recuperação"
    } else {
        document.getElementById('state').style.backgroundColor = "red"
        document.getElementById('state').style.color = "white"
        document.getElementById('state').value = "Reprovado"
    }

//Console.log

    console.log(media);
    console.log(a + b + c + d)
}