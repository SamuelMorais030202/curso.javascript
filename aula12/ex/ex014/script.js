var agora = new Date()               //ligando o programa com o sistema(o objetivo aqui é pegar  hora atual)
var hora = agora.getHours()          //Estamos colocando a hora atual dentro de uma variável
var h = document.getElementById('hrs') //pegando um id para modificalo dentro do JS
var foto = document.getElementById('foto') //Pegando a tag img por id, a fim de modificar a foto baseando-se na hora
var com = document.getElementById('c') //É aqui onde iremos dar bom dia, boa tarde e boa noite 
var corpo = document.body      //pegando o corpo do site a fim de mudar a cor de fundo baseando-se na hora 
if (hora < 12 && hora >6){             //condição 
    h.innerText = 'Agora são ' + hora + ' horas';//inserindo a hora atual no site
    com.innerText = 'Tenha um Bom dia!'  //dando Bom dia
    foto.src = 'morning.jpg'             //inserindo imagem em js
    corpo.style.background = 'yellow'    //mudando a cor de fundo
} else if (hora > 12 && hora <18){       //condição
    h.innerText = 'Agora são ' + hora + ' horas'; //inserindo a hora
    com.innerText = 'Tenha uma Boa tarde!'   //dando boa tarde
    foto.src = 'tarde.jpg'              //mudando a foto
    corpo.style.background = 'orange'  //mudando a cor de fundo
} else if (hora > 18){        //condição
    h.innerText = 'Agora são ' + hora + ' horas' //inserindo a hora
    com.innerText = 'Tenha uma Boa noite!'   //dando boa noite
    foto.src = 'noite.jpg'    //mudando a foto
    corpo.style.background = 'black'
}