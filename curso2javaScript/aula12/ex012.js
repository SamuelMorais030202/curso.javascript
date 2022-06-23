var agora = new Date()
var hora = agora.getHours()
var minutos = agora.getMinutes()
console.log(`${hora} horas ${minutos} minutos`)
if(hora < 12){
    console.log('Bom dia')
} else if(hora > 12 && hora < 18){
    console.log('Boa tarde')
} else if(hora >= 18 && hora <= 00){
    console.log('Boa noite')
} else if (hora > 00){
    console.log('Boa madrugada')
}