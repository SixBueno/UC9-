function exibirDados(event){
    event.preventDefault()

    function mostra(frase) {

        document.write(frase)
    }

    let email = document.getElementById("campo-email").value;
    let senha = document.getElementById("campo-senha").value;

    console.log("email capturado:", email);
    console.log("senha capturada:", senha);
    
    if(senha==12345 && email ==("pedrobuenogonz@gmail.com")){
        mostra("Logado Seu email: " + email + " e sua Senha: " + senha);
        
        
    }else{
       
        mostra("Confira seu email: " + email + " e seua Senha: " + senha);

    }



// document.write(email)
}