let dolar = parseFloat(prompt("Digite a quantos doláres você deseja:"));
let result;

function ConvDolar (Pdolar){
    return Pdolar/5.80;

}
result = ConvDolar(dolar);
alert (`O valor em reais é: ${result.toFixed(2)}`);
