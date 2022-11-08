function pegarNome(){
    var obj_p = document.getElementById('pInicial1')
    var lista_inputs = document.getElementsByName("nome_valor")
    obj_p.textContent += lista_inputs[0].value
  }