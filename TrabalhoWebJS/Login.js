function validar_login(){
    let login = document.getElementById('username').value;
    let senha = document.getElementById('senha').value;

    if(login != "" && senha != ""){
        window.location.href="../TrabalhoWebHTML/TrabalhoWebHome.html"
    }else{
        alert('Login invalido');
    }
}


