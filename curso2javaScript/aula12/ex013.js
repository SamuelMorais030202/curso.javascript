var agora = new Date()
var diaSemana = agora.getDay()

switch(diaSemana){
    case 0:
        console.log('Hoje é Domingo, dia de descansar')
        break
    case 1:
        console.log('Hoje é segunda, vamos começar mais uma semana com tudo')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6:
        console.log('Hoje é sábado')
        break
    default:
        console.log('[ERRO] nenhum dia foi definido')
        break
}