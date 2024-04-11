let num1 = parseInt(prompt("Digite um número:"));
let num2 = parseInt(prompt("Digite outro número:"));
let num3 = parseInt(prompt("Digite mais um número"));
let total;

function conta(Parnum1,Parnum2,Parnum3){
    return (Parnum1+Parnum2+Parnum3)/3;

}
total = conta(num1,num2,num3);
alert (`A media desses valores é ${total.toFixed(2)}`);