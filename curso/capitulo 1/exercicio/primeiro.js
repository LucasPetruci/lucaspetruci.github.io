function primeiraFuncao(){
    var palavra = prompt("Digite uma palavra para saber se é palindromo")
    var palindromo = palavra
    palindromo = palavra.split("").reverse().join("")
    
    if (palavra == palindromo) {
        return alert("Sim")
    } else{
        alert("Não")
    }
}
 