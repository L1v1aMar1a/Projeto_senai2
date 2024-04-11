let numero = parseInt(prompt("Digite um número para fatorar."))
let fatorial = 1;

function calcularFatorial (parNumero){
    if (parNumero == 1 || parNumero == 0){
        return 1
    }
    else{
        while(parNumero > 1){
            fatorial*= parNumero;
            parNumero--;
        }
    }
    return fatorial;

}

let resultado = calcularFatorial(numero);
alert (`O fatorial do ${numero}! é ${resultado}`)


/*function calcularFatorial (numero) {
    let num = 1;
    for (let i = numero; i > 1; i--) {
        num *= i;
    }
     return num;
}
 
console.log(calcularFatorial(numero))
