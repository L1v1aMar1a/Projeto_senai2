let título = document.querySelector('h1');
título.innerHTML = 'Hora do desafio!';

// function validarTeste(){
//     console.log ('O botão foi clicado');
// }

// function validarPrompt() {
//     let cidade = prompt("Digite o nome de uma cidade do Brasil");
//     alert (`Estive em ${cidade} e lembrei de você`);
// }
let n1;
let n2;
let resultado;

function validarSoma() {
    n1 = parseInt(prompt("Digite um números"));
    n2 = parseInt(prompt("Digite outro número"));
    resultado = n1+n2
    alert (`O total é ${resultado}.`);
}
