
var dinheiro = 300;

//ingredientes para hamburguer
var ovos = 0;
var tomate = 0;
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

	if(ingredientes_completos == 8){
		ovos--;
		tomate--;
		carne--;
		queijo--;
		presunto--;
		bacon--;
		pao_hamburguer--;
		caixa_hamburguer--;
	}

}

function Criar_CachorroQuente(){

}