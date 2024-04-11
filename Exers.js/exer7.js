let numero = parseInt(prompt('Digite um número'));
let numero1 = parseInt(prompt('Digite outro número'));
let maior;

function MensagemDeNumero(Parnumero,Parnumero1){
    if (Parnumero > Parnumero1){
        return Parnumero
    }
    else (Parnumero1 > Parnumero) 
        return Parnumero1;
    
}
maior = MensagemDeNumero(numero,numero1);
alert (`O número maior é ${maior}`);

