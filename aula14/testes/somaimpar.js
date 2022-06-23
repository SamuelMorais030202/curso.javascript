//O programa irá somar os números impares de 0 a 10
//Será usado a estrutura condicional for

console.log('Inicio...')
var y = 0
for(var c = 1; c <= 10; c++){
    if(c % 2 == 1){
        console.log(c)
        y = y + c
    }
}
console.log(`A soma dos impares dessa sequência é ${y}`)
console.log('Fim....')