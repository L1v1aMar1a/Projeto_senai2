let num = parseInt(prompt('Digite um número'));
let total;

function MensagemNum(Multnum){
    total = Multnum*Multnum
    return console.log (`A multipliação da ${Multnum} é de ${total}`);

}
MensagemNum(num);