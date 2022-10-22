function primeiraFuncao(){
    var palavra = prompt("Digite uma palavra para saber se é palindromo")
    var palindromo = palavra
    palindromo = palavra.split("")

    for(var x = palindromo.length - 1; x <= 0; x--){
         teste = teste + palindromo[x]
            palindromo = teste
    }
    
    if (palavra == palindromo) {
        return alert("Sim")
    } else{
        alert("Não")
    }
}
 