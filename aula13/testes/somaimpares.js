var c = 0
var y = 0
while(c <= 10){
    if(c % 2 == 1){
        var x = c
        console.log(x)
        y = y + x
    }
    c = c + 1
}
console.log(`A soma dos números impares de 0 a 10 é ${y}`)