function cpf(cpf){
    cpf = cpf.replace(/\D/g, '');
    if(cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9,10].forEach(function(j){
        var soma = 0, r;
        cpf.split(/(?=)/).splice(0,j).forEach(function(e, i){
            soma += parseInt(e) * ((j+2)-(i+1));
        });
        r = soma % 11;
        r = (r <2)?0:11-r;
        if(r != cpf.substring(j, j+1)) result = false;
    });
    return result;
}

function validarSenha() {
    senha = document.getElementsByName('senha')[0].value;
    senhaC = document.getElementsByName('senhaC')[0].value;
  
    return senha === senhaC;
  }

function validar_cadastro(campo1){
    let cad = campo1.value
    let cpf_valido = cpf(cad)
    let senha_valida = validarSenha();

    if(cpf_valido == true && senha_valida == true){
        alert("Cadastrado!")
        window.location.href="../TrabalhoWebHTML/Login.html"
    }else{
        alert("Cadastro inválido!")
    }
}