document.addEventListener('submit', function( evento ) {

    evento.preventDefault(); //Formulário para de ter o comportamento padrão do html
    evento.stopPropagation(); //Faz com que todo submit de form caia nessa função

    let form = document.getElementById('form-01');

    let dados = new FormData(form)

    let objeto = {}; //Assim como array, string, número também é um tipo de variável

    let notas = [];

    for(let key of dados.keys()) {
        objeto[key] = dados.get(key);

        //Adicionar itens o array
        notas.push (parseInt(dados.get(key) ) );
    }

    console.log(notas);
    console.log(objeto);

    function calcularMedia( notas ) {

        var soma = 0
        for( c = 0; c < notas.length; c++ ) {
            soma += notas[c]
        }
    
        media = soma / notas.length //Utilizar notas.length para que ele calcule dinamicamente a quantidade que ela recebeu
    
        return media;
    }

    function aprovacao( notas ) {
        let media = calcularMedia(notas); // escopo da função
        let condicao = media >= 7 ? "aprovado" : "reprovado";
      return 'Média: ' + media + ' - Resultado: ' + condicao;
      }

    document.getElementById('resultado').innerHTML = aprovacao(notas);
    aprovacao(notas);

});