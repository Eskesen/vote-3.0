var graficoImg = document.createElement("img");
graficoImg.src = 'img/grafico.png';

function mostrarPerguntaEco(){
	document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasEco[vetorEconomicas[ordem]].pergunta;
}

function mostrarPerguntaVal(){
	document.getElementById("tituloPergunta").innerHTML = obj.perguntas.perguntasVal[vetorValores[ordem]].pergunta;	
    }

function resultadoFinal(){
		$('#linkResultado').trigger('click');
}
