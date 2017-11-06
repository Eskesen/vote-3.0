var text ='{"perguntas":{"perguntasEco" : ['+
			'{ "pergunta": "Empresas privadas funcionam melhor do que empresas públicas","eixo":"economia", "multiplicador":"1"},'+
			'{ "pergunta": "Aumentar os impostos dos ricos é uma boa forma de financiar programas sociais", "eixo":"economia", "multiplicador":"-1"},'+
			'{ "pergunta": "Cotas para as universidades são uma boa forma de corrigir desigualdades", "eixo":"economia", "multiplicador":"-1"},'+
			'{ "pergunta": "Empresários e trabalhadores devem ser livres para negociar salários e benefícios", "eixo":"economia", "multiplicador":"1"},'+
			'{ "pergunta": "Ter sucesso na vida depende mais do próprio esforço do que da origem social","eixo":"economia","multiplicador":"1"}],'+
			'"perguntasVal" : ['+
			'{"pergunta": "Se cada um buscar o melhor para si, no fim todos ganham", "eixo":"valores", "multiplicador":"-1"},'+
			'{"pergunta": "Portar armas deve ser um direito de todos","eixo":"valores","multiplicador":"1"},'+
			'{"pergunta": "Homossexuais também podem casar e formar uma família","eixo":"valores","multiplicador":"-1"},'+
			'{"pergunta": "Acreditar em Deus nos torna pessoas melhores","eixo":"valores","multiplicador":"1"},'+
			'{"pergunta": "É fundamental modificar os costumes e as tradições", "eixo":"valores", "multiplicador":"-1"}]}}';
		var obj = JSON.parse(text);
		var vetorEconomicas = [];
		var vetorValores = [];
		var alternar; //0=Economicas 1=Valores
		var ordem;
		var y;
		var x;
		var vetorHistoricoX = [];
		var vetorHistoricoY = [];
		var canvas;
		var ctx;
		function inicializarQuiz(){
			vetorEconomicas = [];
			vetorValores = [];
			alternar = 0;
			ordem = 0
			x = 0;
			y = 0;
			vetorHistoricoX = [0];
			vetorHistoricoY = [0];
			while(vetorEconomicas.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasEco.length-1);
				if(vetorEconomicas.indexOf(random) > -1) continue;
				vetorEconomicas[vetorEconomicas.length] = random;
			}
			while(vetorValores.length<5){
				var random = Math.ceil(Math.random()*obj.perguntas.perguntasVal.length-1);
				if(vetorValores.indexOf(random) > -1) continue;
				vetorValores[vetorValores.length] = random;
			}
		}

		window.onload = function iniciarAuto(){
			inicializarQuiz();
		}
		$(function(){
    		$("#iniciar").click(function(){
    			mostrarPerguntaEco();
			});
    	});

		$(document).on('click', '.botao_resposta', function() {
		   //Remove active class from all buttons
		   $('.botao_resposta').removeClass('active');
		   //Add active class to the clicked button
		   $(this).addClass('active');
		});

		$(function(){
    		$("#avancar").click(function(){
				var ponto = 0;
				if($('.botao_resposta.active').attr('id')=="concordo_m") ponto = 4;
				else if($('.botao_resposta.active').attr('id')=="concordo") ponto = 2;
				else if($('.botao_resposta.active').attr('id')=="discordo") ponto = -2;
				else if($('.botao_resposta.active').attr('id')=="discordo_m") ponto = -4;
				else alert("Preencha uma das opções");
				if(ponto!=0){
					if(alternar==1 && ordem==4){
						y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
						finalizar();
					} else if(alternar==0){
						x += ponto*obj.perguntas.perguntasEco[vetorEconomicas[ordem]].multiplicador;
						vetorHistoricoX[vetorHistoricoX.length] = x;
						mostrarPerguntaVal();
						alternar++;
					} else if(alternar==1){
						y += ponto*obj.perguntas.perguntasVal[vetorValores[ordem]].multiplicador;
						vetorHistoricoY[vetorHistoricoY.length] = y;
						alternar--;
						ordem++;
	    				mostrarPerguntaEco();
	    			}
				}
		   	$('.botao_resposta').removeClass('active');
	   		});
		});

		$(function(){
    		$("#voltar").click(function(){
    				if(alternar==0 && ordem==0){
						$('#linkInicio').trigger('click');
						inicializarQuiz();
    				} else {
    					if(alternar==0){
    						ordem--;
    						alternar++;
    						mostrarPerguntaVal();
    						vetorHistoricoY.splice(vetorHistoricoY.length-1,1);
    						y= vetorHistoricoY[vetorHistoricoY.length-1];
							} else if(alternar==1){
    						alternar--;
    						mostrarPerguntaEco();
    						vetorHistoricoX.splice(vetorHistoricoX.length-1,1);
    						x = vetorHistoricoX[vetorHistoricoX.length-1];
    					}
    				}
	   			});
			});

		function finalizar(){
			console.log(x,y);
			var nomeIdeologia;
			var textoIdeologia;
			var linkVideo;
			if(x<-16){
				if(y<-16){
					
				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}
			} else if(x<-12 && x>=-16){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}
			} else if(x<-8 && x>=-4){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}
			} else if(x<-4 && x<=4){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}
			} else if(x<=8 && x>4){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}

			} else if(x<=16 && x>8){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}

			} else if(x>16){
				if(y<-16){

				} else if(y<-12 && y>=-16){

				} else if(y<-8 && y>=-4){

				} else if(y<-4 && y<=4){

				} else if(y<=8 && y>4){

				} else if(y<=16 && y>8){

				} else if(y>16){
					
				}				
			}
			resultadoFinal(nomeIdeologia,textoIdeologia,imgPersonagem,nomePersonagem,linkVideo,
				x.map(-20,20,41,225),y.map(-20,20,235,50));
		}
		
		$("#refazer").click(function(){
			$('#linkInicio').trigger('click');
			inicializarQuiz();
		});


		Number.prototype.map = function (in_min, in_max, out_min, out_max) {
  			return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
		}