function carregar() {
var msg = window.document.getElementById ("msg")
var img = window.document.getElementById ("imagen")
var data = new Date()
var hora = data.getHours()
var msg2 = window.document.getElementById ("msg2")
msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora <= 12){
        msg2.innerHTML = "Bom Dia!"
        document.body.style.background = "#f1d588"
    }else if (hora >= 12 && hora <= 18){
        msg2.innerHTML = "Boa Tarde!"
        document.body.style.background = "#e29e0c"
    }else{
        msg2.innerHTML = "Boa Noite!"
        document.body.style.background = "#141831"
    }
}
