//*Cal = calculo;

let peso = parseFloat (prompt("Informe seu peso"));
let altura = parseFloat(prompt("Informe sua altura"));
let IMC;

function CalDoIMC (Calpeso, Calaltura){
    return (Calpeso/(Calaltura * Calaltura));
}
IMC = CalDoIMC (peso,altura);
alert (`O IMC é ${IMC.toFixed(2)}`);