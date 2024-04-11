let número = parseInt(prompt('Digite um número'));

function NumeroDaConta(parNúmero){
    return  parNúmero*2;
}
let dobro = NumeroDaConta(número);
alert  (`O dobro do número é: ${dobro}`);