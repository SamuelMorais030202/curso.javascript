function calcular(){
    let txtNumero = document.getElementById('txtnumero')
    let txtTabuada = document.getElementById('seltab')
    if(txtNumero.value.length == 0){
        alert('[ERRO] preencha o dado solicitado')
    } else {
        let numero = Number(txtNumero.value)
        txtTabuada.innerHTML = ''
        for(let item = 1; item <= 10; item++){
            let opt = document.createElement('option')
            opt.value = `tab${item}`
            opt.text = `${numero} x ${item} = ${numero * item}`
            txtTabuada.appendChild(opt)
        }
    }
}