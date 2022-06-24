function calcular(n1, n2){
    return n1 + n2
}

console.log(calcular(8, 9))

function numeroAleatorio({min=0, max=100}){
    const numero = Math.random() * (max-min) + min
    return Math.floor(numero)
}

console.log(numeroAleatorio({max:200, min:150}))

const parImpa = (n)=>{
    if(n%2==0){
        return 'par'
    } else if(n%2==1){
        return 'impar'
    }
}
console.log(parImpa(15))

const fatoriaNumero = (nn)=>{
    var somaFatorial = 1
    for(var x = nn; x >= 1; x--){
       somaFatorial *= x
    }
    console.log(`A soma dos fatorias de ${nn} é ${somaFatorial}`)
}
fatoriaNumero(5)