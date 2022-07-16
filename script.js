/* /* Preloader */
var loader = document.getElementById("preloader")
window.addEventListener("load", function() {
    loader.style.display = "none"
    document.body.style.overflow = "unset";
})
/* Fim 


/* Exibir e ocultar menu 
function menu() {
    var menuLua = document.querySelector('.darkmodeTheme');

    if (menuLua.style.display === 'none') {
        menuLua.style.display = 'block'
    } else {
        menuLua.style.display = 'none'
    }
}
/* Fim 


/* Escrever texto 
var recebeTexto = document.getElementById("escrever")
var texto = ['Olá, meu nome é Nathálya'];

function escreverTexto(str, done) {
    var letras = str.split('').reverse();
    var tipo = setInterval(function() {
        if (!letras.length) {
            clearInterval(tipo);
            return setTimeout(done, 500)
        }
        var proximo = letras.pop();
        recebeTexto.innerHTML += proximo;
    }, 100);
}

function limpar(done) {
    var letras = recebeTexto.innerHTML;
    var numero = letras.length;
    var tipo = setInterval(function() {
        if (numero-- == 0) {
            clearInterval(tipo);
            return done();
        }
        recebeTexto.innerHTML = letras.slice(0, numero);
    }, 100);
}

function rodape(conteudos, el) {
    var atual = -1;
	function prox(cb){
        if (atual < conteudos.length - 1) atual++;
		else atual = 0;
		var str = conteudos[atual];
		escreverTexto(str, function(){
            limpar(prox);
		});
	}
	prox(prox);
}
rodape(texto);
/* Fim  */


/* Botão para exibir mais projetos */
var ticTacToe = document.getElementById('tic-tac-toe');
function exibirMais() {
    if (ticTacToe.style.display === 'none') {
        ticTacToe.style.display = 'block'
    } else {
        ticTacToe.style.display = 'none'
    }
}