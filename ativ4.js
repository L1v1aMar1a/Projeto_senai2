let larg = parseFloat(prompt('Digite a largura.'));
let altura = parseFloat(prompt('Digite a altura'));
let area;
let perim;

function ContaArea(pLarg,pAltura) {
    return (pAltura*pLarg);
}
area = ContaArea(larg,altura);

function ContaPerim(ppLarg,ppAlt) {
    return ((ppLarg*2)+(ppAlt*2));
}
perim = ContaPerim (larg,altura);

alert (`A área total é ${area} e o perimetro ${perim}`);
