function calcular(){
    var ano = new Date()
    var ano_at = ano.getFullYear()
    var ano_nac = document.getElementById('txtano')
    var idade = ano_at - Number(ano_nac.value)
    var sexo = document.getElementsByName('txtsexo')
    if(ano_nac.value.lenght == 0 && idade < 0){
        window.alert('[ERRO] verifique se os dados foram inseridos corretamente!')
    } else {
        var res = document.getElementById('res')
        var genero = ''
        var img = document.createElement('img')
        if (sexo[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src','menino.jpeg')
            } else if (idade > 10 && idade <= 18){
                //adolescente
                img.setAttribute('src', 'adolescenteh.jpg')
            } else if (idade > 18 && idade <= 25){
                //jovem
                img.setAttribute('src','jovemh.jpg')
            } else if (idade > 25 && idade <=60){
                //adulto
                img.setAttribute('src', 'adulto.jpg')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src','idoso.jpg')
            }
        } else if (sexo[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <=10){
                //criança
                img.setAttribute('src', 'menina.jpg')
            } else if (idade > 10 && idade <= 18){
                //adolescente
                img.setAttribute('src', 'adolescentem.jpg')
            } else if (idade > 18 && idade <= 25){
                //jovem
                img.setAttribute('src','jovemm.jpg')
            } else if (idade > 25 && idade <=60){
                //adulto
                img.setAttribute('src', 'adulta.jpg')
            } else if (idade > 60){
                //idoso
                img.setAttribute('src','idosa.jpg')
            }
        }
    }
    res.innerHTML = `Foi detectado ${genero} com ${idade} anos de idade.`
    img.style.borderRadius = '50%'
    res.appendChild(img)
}