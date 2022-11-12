function pegar_dados(){
    let valor = 0
    var cidade_retirada = document.getElementsByName("cidade_retirada").value
    var cidade_entrega = document.getElementsByName("cidade_entrega").value
    var data_retirada = document.getElementById("data_retirada").value.split()
    var data_entrega = document.getElementById("data_entrega").value.split()
    
   
    if(document.getElementById("tipo_carro").value == "basico"){
       valor += 119
    }

    if(document.getElementById("tipo_carro").value == "ar"){
        valor += 199
        
     }

     if(document.getElementById("tipo_carro").value == "executivo"){
        valor += 299
     }

     if(cidade_retirada.value != cidade_entrega.value){
        valor = valor + 300
    }

    if(data_retirada < data_entrega){
        var resultado = data_entrega[0] - data_retirada[0]
        valor = resultado * valor_carro
    }
    alert(valor)
    
}