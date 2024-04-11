let raio = prompt('Digite o valor do raio.');
let area;
let perimet;

function areaCir(Praio) {
    return (3.14*(Praio*Praio));
}
area = areaCir(raio);

function PerimCir(pRaio) {
    return (2*3.14*pRaio);
}
perimet = PerimCir (raio);
alert (`A área total do circulo é: ${area.toFixed(2)} e o perimetro ${perimet.toFixed(2)}`);
