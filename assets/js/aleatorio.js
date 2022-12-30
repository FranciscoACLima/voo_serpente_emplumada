function texto_aleatorio(){
var textos = new Array()
	textos[0] = "Temos os melhores produtos do mercado, com controles de    qualidade intensivos."
	textos[1] = "Distribuímos em todo o mundo com os melhores tempos de    entrega e confiança nos envios."
	textos[2] = "Não temos concorrentes que nos superem. Contrate    conosco e comprove. É muito fácil."
	textos[3] = "Disponha do melhor serviço de atenção ao cliente e uma    resposta rápida aos seus problemas."
	textos[4] = "Os melhores serviços, produtos e, claro, os menores    preços. Tudo são vantagens."

	aleat = Math.random() * (textos.length)
	aleat = Math.floor(aleat)

return textos[aleat]
}
