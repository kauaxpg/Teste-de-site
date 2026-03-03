alert ("Bem vindo ao jogo que eu acabei de criar aqui pra fazer uma atividade aqui da alura, voce agora é minha cobaia MUAHAHAHAHAH")
alert ("O jogo funciona da seguinte maneira, vou te fazer perguntas, quanto mais perguntas voce acertar, mais pontos você acumula.")
alert ("No final do jogo, se voce acumular 100 pontos, voce vence. Cada pergunta vale 25 pontos. Entendeu?")
alert ("Ok, que bom, vamos começar o game.")
alert ("Ah, e responda formalmente por gentileza, sem girias nem abreviações, eu ainda to aprendendo a como tratar as respostas.")

let pontos = 0 
let resposta1 = prompt ("Quanto é 2 + 2? ")
if (resposta1 == 4){
    alert ("Boa, acertou.")
    pontos = pontos + 25
} else {
    alert ("Errou, burro.")
}
let resposta2 = prompt ("Quem é a mulher mais linda do planeta?")
if (resposta2 == "Alyce Rayanne Amorim Novais" || resposta2 == "Alyce" || resposta2 == "alyce" || resposta2 == "a namorada do kaua" || resposta2 == "A namorada do kaua"){
    alert ("Boa mlk, acertou. O mano que namora essa mina ai deve ser um sortudo do crl pprt")
    pontos = pontos + 25
} else {
    alert ("Errou, a mulher mais linda do mundo se chama Alyce Rayanne Amorim Novais, namorada do Kauã.")
}
let resposta3 = prompt ("Concorda com a demissão do Felipe Luis do Flamengo dps dele ter ganhado TUDO em 2025? SÓ EXISTE UMA RESPOSTA CERTA.")
if (resposta3 == "Nao" || resposta3 == "Não"){
    alert ("Ok, acertou. E que bom que acertou.")
    pontos = pontos + 25 
} else {
    alert ("Errou, burrao")
}
let resposta4 = prompt ("Ultima questão. Complete: Aqui choveu e relampagou... ")
if (resposta4 == "Aqui ta chovendo e repamgalejando" || "Aqui ta chovendo e repangalejando" || "aqui ta chovendo e repangalejando" || "aqui ta chovendo e repamgalejando"){
    alert ("Boa, acertou. Inclusive aqui tá um toró da boba.")
    pontos = pontos + 25
} else {
    alert ("Errou. Aqui acabou né, aqui é papo de engenharia de pesca já")
}
alert ("BELEZA. ITS TIME, VAMOS VER SE VOCE CONSEGUE ACUMULOU PONTOS O SUFICIENTE PARA PASSAR.")
alert ("Analisando seus pontos... ")
if (pontos >= 100){
    alert ("MEUS PARABÉNS, VOCE PASSOU NO MEU TESTE MALIGNO. *palmas malignas*")
} else {
    alert ("MUAHAHAHAHAHAHAHAHA *Estou sentado na minha cadeira e viro pra voce vagarosa e dramaticamente enquanto aliso meu gato chamado pendrive* Como esperado. Você falhou.")
    alert ("Você está condenado a passar 1 semana comendo TUDO com aqueles palitinhos de comida japonesa que eu esqueci o nome. Agora suma da minha frente.")
}