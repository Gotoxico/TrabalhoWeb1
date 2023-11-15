function validar_login(validator){
    let validacao = validator.value
    let atual = new Date()
    let hora_atual = atual.getHours() + ":" + atual.getMinutes()

    if(validacao === hora_atual){
        window.location.href="../TrabalhoWebHTML/TrabalhoWebHome.html"
    }
    else{
        alert("Login inválido!")
    }

}


