console.log('olá mundo')

var numeros = [1, 3, 5, 8, 9]

function checagemDe_Numeros(){
    for(var c = 0; c < numeros.length;){
        for(var x in numeros){
            var c = numeros[x]
            if(c % 2 == 1){
                console.log(c)
            } else{
                
            }
        } 
    }
}
checagemDe_Numeros()

