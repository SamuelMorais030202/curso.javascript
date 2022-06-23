contar = ()=>{
    var txtInicio = document.getElementById('txtinicio')
    var txtFim = document.getElementsByTagName('input')[1]
    var txtPaso = document.querySelector('input#txtpaso')
    if(txtInicio.value.length == 0 || txtFim.value.length == 0 || txtPaso.value.length == 0){
        alert('[ERRO] preencha todos os campos')
    } else {
        var res = document.getElementById('res')
        var inicio = Number(txtInicio.value)
        var fim = Number(txtFim.value)
        var paso = Number(txtPaso.value)
        res.innerHTML = ``
        if(inicio < fim){
            for(inicio; inicio <= fim; inicio+=paso){
                res.innerHTML += `${ inicio }, `
            }
        } else if(fim < inicio){
            for(inicio; inicio >= fim; inicio-=paso){
                res.innerHTML += `${ inicio },`
            }
        }
    }
}