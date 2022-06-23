function carregar(){
    var msg = document.getElementById('hora')
    var img = document.getElementById('imagem')
    var agora = new Date()
    var horas = agora.getHours()
    msg.innerHTML = `Agora são ${horas}`
    var res = document.getElementById('res')
    let corpo = document.body
    if(horas >= 0 && horas < 12){
        res.innerText = 'Bom dia'
        img.src = 'bomdia.webp'
        corpo.style.background = 'orange'
    } else if(horas >= 12 && horas <18){
        res.innerText = 'Boa tarde'
        img.src = 'tarde.jpg'
        corpo.style.background = 'yellow'
    } else if(horas >= 18 && horas < 0){
        res.innerText = 'Boa noite'
        img.src = 'noite.png'
        corpo.style.background = 'grey'
    }
}