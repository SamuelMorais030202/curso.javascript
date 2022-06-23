function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] dados incompletos!')
    } else{
        
        res.innerHTML = 'Contando : '
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(f >= i){
            for(var n = i; n <= f; n += p){
                res.innerHTML += ` ${n} \u{1F449}`
            }
        } else if (f < i){
            for(var n = i; n >= f; n -= p){
                res.innerHTML += ` ${n} \u{1F449}`
            }
        }
    }
}
