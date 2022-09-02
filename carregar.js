function carregar() {

    var msg = window.document.getElementById('msg')
    var imagem = window.document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    // var hora = 27
    msg.innerHTML = `Agora são ${hora}h.`

    if (hora >= 0 && hora < 6) {
        imagem.setAttribute('src', './img/madrugada.jpg')
        document.body.style.backgroundColor = 'black'
    } else if (hora > 5 && hora <= 11) {
        imagem.setAttribute('src', './img/bomdia.jpg')
        document.body.style.backgroundColor = 'red'
    } else if (hora > 11 && hora <= 18) {
        imagem.setAttribute('src', './img/boatarde.jpg')
        document.body.style.backgroundColor = 'yellow'
    } else if (hora > 18 && hora <= 23) {
        imagem.setAttribute('src', './img/noite.jpg')
        document.body.style.backgroundColor = 'blue'
    } else {
        msg.innerHTML = `[ERRO] Hora Inválida`
    }

}