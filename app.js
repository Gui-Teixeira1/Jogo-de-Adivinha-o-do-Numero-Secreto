let listaDeNumerosSosrteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}

 function exibirMenssagemInicial() {

    exibirTextoNaTela('h1', 'Jogo do número secreto 2.0');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

 }

  exibirMenssagemInicial();

 function verificarChute() {

    let chute = document.querySelector('input').value;

    if ( chute == numeroSecreto) {
        exibirTextoNaTela('h1',' Acertou! ');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let MenssagemTentativas = `Você descobriu o numero secreto, com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', MenssagemTentativas );
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if ( chute > numeroSecreto) {
            exibirTextoNaTela('h1', 'Errou :<');
            exibirTextoNaTela('p',` O numero secreto e menor que ${chute} `);
        }else {
            exibirTextoNaTela('h1', 'Errou :<');
            exibirTextoNaTela('p',` O numero secreto e maior que ${chute} `);

        }
        tentativas++;
        limparCampo();
    }

    
    
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeEelemntosNaLista = listaDeNumerosSosrteados.length;
    
    if (quantidadeDeEelemntosNaLista == numeroMaximo) {
        listaDeNumerosSosrteados = [];
    }

    if (listaDeNumerosSosrteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSosrteados.push(numeroEscolhido);
        console.log(listaDeNumerosSosrteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
}

 function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
       
 }
    













