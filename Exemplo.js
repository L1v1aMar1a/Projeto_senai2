let numeroSecreto = gerarNumeroSecreto();
let tentativa = 0;

function exibirTextoNaTela (tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirTextoInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto!')
    exibirTextoNaTela('p', 'Digite um número de 1 a 10:');

}
exibirTextoInicial();
 
function validarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Parabéns!')
        let palavraTentativa = tentativa >1 ? `tentativas`: `tentativa`;
        let mensagemTentativa = (`Você acertou o número secreto com ${tentativa} ${palavraTentativa}`);
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
           
        alterarImagem('imagem', './img/The dora.jpg');

    }
    else if (chute < numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é maior');
    }
    else{
        exibirTextoNaTela('p', 'O número número secreto é menor');
    }
    tentativa++;
    limparCampo();
}

function gerarNumeroSecreto(){
    return parseInt(Math.random() * 10+1);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroSecreto();
    tentativa = 0;
    exibirTextoNaTela('h1', 'Jogo do número secreto!')
    exibirTextoNaTela('p', 'Digite um número de 1 a 10:'); 
    document.getElementById('reiniciar').setAttribute('disabled', true);
    alterarImagem('imagem', './img/teste1.png');

}

function alterarImagem(objeto, caminhoImagem){
    document.getElementById(objeto).src = caminhoImagem;
}

