function validar_cadastro(campo1){
    let cad = campo1.value
    let tamanho = cad.length
    if(tamanho==11){
        alert("Cadastrado!")
        window.location.href="../TrabalhoWebHTML/Login.html"
    }
}