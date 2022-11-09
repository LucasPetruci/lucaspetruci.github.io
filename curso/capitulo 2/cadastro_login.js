function validar(){
    var nome = document.getElementById("nome_completo").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var confirmar_senha = document.getElementById("confirmar_senha").value;
    
    if(nome == ""){
      alert('Preencha o campo nome');
      return false
    }
      if(email == ""){
      alert('Preencha o campo email');
      return false
    }
    
    if(senha != confirmar_senha){
      alert('A senha deve ser igual')
      return false
    }
  }