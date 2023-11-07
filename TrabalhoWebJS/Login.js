function validar_login(username, password, validator, age){
    let user = username.value
    let senha = password.value
    let validacao = validator.value
    let atual = new Date()
    let hora_atual = atual.getHours() + ":" + atual.getMinutes()
    let idade = parseint(age.value)

    if(user==="admin" && senha==="admin" && validacao === hora_atual && idade>=18){
        window.location.href="../TrabalhoWebHTML/TrabalhoWebHome.html"
    }
    else{
        alert("Falhou")
    }
}


