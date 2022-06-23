var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if(hora >= 6 && hora <= 7){
    console.log('É hora de acordar, tomar um banho e tomar café!')
} else if (hora > 7 && hora < 12){
    console.log('É hora de estudar e correr atras de seus sonhos!!')
    console.log('Não esqueça de fazer pequenas pausas para descansar.')
} else if (hora >= 12 && hora <= 14){
    console.log('Hora de almoçar e descansar')
    console.log('Aproveite esse tempo vago!')
} else if (hora > 14 && hora < 16){
    console.log('Já é hora de voltar a estudar!!!')
} else if (hora >= 16 && hora <=17){
    console.log('É hora de lanchar e descansar um pouco.')
} else if (hora > 17 && hora < 19){
    console.log('Hora de resolver seus assuntos pessoais')
} else if (hora > 19 && hora < 22){
    console.log('Começe a se arrumar e vá para a academia.')
} else if (hora >= 22){
    console.log('Se ajeite para  dormir!')
}