function calcularMedia( notas ) {

    var soma = 0
    for( c = 0; c < notas.length; c++ ) {
        soma += notas[c]
    }

    media = soma / notas.length //Utilizar notas.length para que ele calcule dinamicamente a quantidade que ela recebeu

    return media;
}

let media; // escopo global

function aprovacao( notas ) {
  let media = calcularMedia(notas); // escopo da função
  let condicao = media >= 7 ? "aprovado" : "reprovado";
return 'Média: ' + media + ' - Resultado: ' + condicao;
}

//console.log()

//console.log( calcularMedia([7,7,6,8,6,4,3,2,1,2,4,6,3,5,4,7,9,6,5,9,5,3,2,7,9,8,7,6,5,7,3,5,8,2]))
//console.log( aprovacao(calcularMedia([7,7,6,8,6,4,3,2,1,2,4,6,3,5,4,7,9,6,5,9,5,3,2,7]) ) )

//console.log (calcularMedia([7,6.9]) )
//console.log (aprovacao(calcularMedia([7,6.9]) ) )


console.log(aprovacao([8, 8, 7, 6, 7, 8]));

console.log(aprovacao([10, 6, 10, 6, 10, 6]));
