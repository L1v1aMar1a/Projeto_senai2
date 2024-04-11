let NDaTabu = prompt('Digite um número para ver a tabuada.');
let contador = 0;
let total;

function tabuada (PdaTabuada) {

    while(contador <= 10){
        total = PdaTabuada*contador
        alert (`${PdaTabuada} X ${contador} = ${total}`);
        contador++;
    }
}
 tabuada(NDaTabu);
