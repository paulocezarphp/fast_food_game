
var dinheiro = 300;

var humburguer_pronto = 0;
var cachorro_quente_pronto = 0;

//ingredientes para hamburguer
var ovos = 0;
var tomate = 0;
var alface = 0;
var carne = 0;
var queijo = 0;
var presunto = 0;
var bacon = 0;
var pao_hamburguer = 0;
var caixa_hamburguer = 0;
var valor_hamburguer = 7.0;

//ingredientes para cachorro quente
var linguica = 0;
var pao_cachorroquente = 0;
var molho_de_tomate = 0;
var batata_palha = 0;
var caixa_cachorro_quente = 0;
var valor_cachorro_quente = 5.0;


//variaveis para controle de status
var clientes_querem_hamburguer = 0;
var clientes_querem_cachorro_quente = 0;

function Criar_Hamburguer(){

	var ingredientes_completos = 0;

	if(ovos > 0){
		ingredientes_completos++;
	}

	if(alface > 0){
		ingredientes_completos++;
	}

	if(tomate > 0){
		ingredientes_completos++;
	}

	if(carne > 0){
		ingredientes_completos++;
	}

	if(queijo > 0){
		ingredientes_completos++;
	}

	if(presunto > 0){
		ingredientes_completos++;
	}

	if(bacon > 0){
		ingredientes_completos++;
	}

	if(pao_hamburguer > 0){
		ingredientes_completos++;
	}

	if(caixa_hamburguer > 0){
		ingredientes_completos++;
	}

	if(ingredientes_completos == 9){
		ovos--;
		alface--;
		tomate--;
		carne--;
		queijo--;
		presunto--;
		bacon--;
		pao_hamburguer--;
		caixa_hamburguer--;
		humburguer_pronto++;
	}

}


function Criar_CachorroQuente(){

    var ingredientes_completos = 0;

    if(linguica > 0){
		ingredientes_completos++;
	}

	if(pao_cachorroquente > 0){
		ingredientes_completos++;
	}

	if(molho_de_tomate > 0){
		ingredientes_completos++;
	}

	if(batata_palha > 0){
		ingredientes_completos++;
	}

	if(caixa_cachorro_quente > 0){
		ingredientes_completos++;
	}

	if(ingredientes_completos == 5){		
		linguica--;
        pao_cachorroquente--;
        molho_de_tomate--;
        batata_palha--;
        caixa_cachorro_quente--;
        cachorro_quente_pronto++;
	}

}


function Temporizador(){
   
}

setInterval(Temporizador, 1000);