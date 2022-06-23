//O programa ira somar os números pares de 0 a 10
//Será usado a estrutura de repetição para
//Será usado a estrutura condicional if

console.log('Inicio da execução do programa......')
var y = 0
for(var c = 1; c <= 10; c++){
    if(c % 2 == 0){
        var x = c
        console.log(x)
        y = y + x
    }
}
console.log(`À soma dos números pares dessa seguência é ${y}`)
console.log('Fim da execução do programa.......')