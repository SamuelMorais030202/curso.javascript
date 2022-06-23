calcular =()=>{
    var agora = new Date()
    var anoAtual = agora.getFullYear()
    var anoNascimento = document.getElementById('anoNascimento')
    var sexo = document.getElementsByName('radsexo')
    if(anoNascimento.value.length == 0 || anoNascimento.value > anoAtual){
        alert('[ERRO] preencha o campos coretamente')
    } else {
        var res = document.getElementById('resultado')
        var idade = anoAtual - Number(anoNascimento.value)
        var genero = ''
        var img = document.getElementById('img')
        var img2 = document.createElement('img')
        if(sexo[0].checked){
            genero = 'Homem'
            if(idade < 13){
                //criança
                img.src = 'crianca-homem.jpg'
            } else if(idade >=13 && idade <=20){
                //Jovem
                img2.setAttribute('src','jovem-homem.jpg')
            } else if(idade > 20 && idade <=60){
                //Adulto
                img.src = 'adulto-homem.jpg'
            } else if(idade >60){
                //idoso
                img.src = 'idoso-homem.jpg'
            }
        } else if(sexo[1].checked){
            genero = 'Mulher'
            if(idade < 13){
                //criança
                img.src = 'crianca-mulher.jpg'
            } else if(idade >=13 && idade <=20){
                //Jovem
                img.src = 'jovem-mulher.jpg'
            } else if(idade > 20 && idade <=60){
                //Adulto
                img.src = 'adulto-mulher.jpg'
            } else if(idade >60){
                //idoso
                img.src = 'idosa-mulher.jpg'
            }
        }
        res.innerHTML = `Foi detectado ${genero} de ${idade} anos de idade`
    }
}