function calcular(){
   var ano_atual = new Date()
   var ano = ano_atual.getFullYear()
   var ano_nac = document.getElementById('anonac')
   var res = document.getElementById('saida')
   var img = document.createElement('img')
   var idade = ano - Number(ano_nac.value)
   if (ano_nac.value.length == 0 || idade < 0){
       window.alert('[ERRO] verifique os dados novamente')
   } else {
       var tsex = document.getElementsByName('radsex')
       var genero = ''
       if(tsex[0].checked){
           genero = 'Homem'
           if(idade >= 0 && idade <=10){
               //criança
               img.setAttribute('src', 'menino.jpg')
           } else if (idade > 10 && idade <= 21){
               //jovem
               img.setAttribute('src', 'jovemh.jpg')
           } else if (idade > 21 && idade <= 60){
               //adulto
               img.setAttribute('src', 'adulto.jpg')
           } else if (idade > 60){
               //idoso
               img.setAttribute('src', 'idoso.jpg')
           }
       } else if (tsex[1].checked){
           genero = 'Mulher'
           if(idade >= 0 && idade <=10){
              //criança
              img.setAttribute('src', 'menina.jpg')
           } else if (idade > 10 && idade <= 21){
               //jovem
               img.setAttribute('src', 'jovemm.jpg')
           } else if (idade > 21 && idade <= 60){
               //adulto]
               img.setAttribute('src', 'adulta.jpg')
           } else if (idade > 60){
               //idoso
               img.setAttribute('src', 'idosa.jpg')
           }
       }
       res.innerHTML = `Foi detectado ${genero} de ${idade} anos`
       res.appendChild(img)
   } 
}
    