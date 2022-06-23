var c = 0
var y = 0
while(c <= 10){
    if(c % 2 == 0){
        var x = c
        console.log(x)
        y = y + x
    }
    c += 1
}
console.log(`A soma dos números pares de 0 a 10 é ${y}`)