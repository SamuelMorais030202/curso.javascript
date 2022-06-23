function calcular(){
    var num = document.getElementById('txtn')
    var res = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('[ERRO] insira os informações')
    } else {
        var n = Number(num.value)
        var m = 0

        res.innerHTML = ``
        for(var c = 1; c <= 10; c++){
            m = n * c
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${m}`
            res.appendChild(item)
        }
    }
}