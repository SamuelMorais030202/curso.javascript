verificar = ()=>{
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoUsuario = document.getElementById('txtano')
    if(anoUsuario.value.length == 0 || anoUsuario.value > anoAtual){
        alert('[ERRO] Preencha todos os dados')
    } else {
        var res = document.getElementById('res')
        var sexo = document.getElementsByName('radsex')
        var idade = anoAtual - Number(anoUsuario.value)
        var genero = ''
        var img = document.getElementById('img')
        var img2 = document.createElement('img') //criando img dinâmicamente
        if(sexo[0].checked){
            //img2.setAttribute('src', '') criando img dinâmicamente
            genero = 'Homem'
            if(idade < 13){
                img.src = 'crianca-homem.jpg'
            } else if(idade >=13 && idade < 20){
                //jovem
                img2.setAttribute('src','jovem-homem.jpg')
            } else if(idade >= 20 && idade <60){
                //adulto
                img.src = 'adulto-homem.jpg'
            } else if(idade >= 60){
                //idoso
                img.src = 'idoso.homem.jpg'
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade < 13){
                //criança
                img.src ='crianca-mulher.jpg';
            } else if(idade >=13 && idade < 20){
                //jovem
                img.src ='jovem-mulher.jpg';
            } else if(idade >= 20 && idade <60){
                //adulto
                img.src ='adulto-mulher.jpg';
            } else if(idade >= 60){
                //idoso
                img.src ='idosa-mulher.jpg';
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} de ${idade} anos`
    }
    
}