var alunos = [
	[6, 7, 8, 6],
	[3, 8, 8, 2],
	[2, 10, 2, 10],
	[10, 9, 9, 10],
	[6, 6, 7, 8],
	[5, 3, 8, 7],
  	[7, 7, 7, 6],
 	[8, 8, 8, 4],
  	[10, 10, 10, 0]
]

// i = interação

var nota = 0;
for (var i = 0; i < alunos.length; i++) {
	
	nota = 0
	notasAluno = alunos[i]
	console.log("Aluno: " + parseInt(i+1) + " - " + "Notas: " + notasAluno);

	for( c = 0; c < notasAluno.length; c++){
		nota += notasAluno[c];
	}

	media = nota / 4;

	if(media >= 7) {
		resultado ="Aprovado";
	} else {
		resultado ="Reprovado";
	}

	console.log("Media: " + media + " - " + resultado);
}